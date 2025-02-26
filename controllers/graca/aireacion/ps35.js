const {
  arregloTagsPS035,
  arregloTagsPS035_TA035,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client8, client9, getSessionOPCUA, client2, client3 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS35 } = require("../../../helpers/graca/nodesOpcUa");

// Mapa para gestionar las suscripciones de los clientes
const clientSubscriptions = new Map();
let isProcessing = false; // Bandera para verificar si ya se está procesando

// Función para procesar múltiples datos y enviar a suscriptores activos
const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    // Array de promesas de diferentes llamadas a procesarTags con distintos parámetros
    const tagPromises = [
      procesarTags2(client2, arregloTagsPS035()["PS035"], 2128, 29),
      procesarTags(client3, arregloTagsPS035_TA035()["TA035"], 1391, 65),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS35()),

    ];

    // Esperar a que todas las promesas se resuelvan y combinar los resultados
    Promise.all(tagPromises)
      .then((results) => {
        // Reinicia dataCache en cada intervalo
        // console.log(results)
        dataCache = {
          PS35: [],
          PS35TA: [],
          PS35TCP: [],
          PS35Antenas: [],
        };

        // Itera sobre los resultados para organizar los datos en dataCache
        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              // Verificar que `tag` tenga una propiedad `name` y un valor `value` válido
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS35[0] === undefined) {
                  dataCache.PS35[0] = {};
                }
                if (dataCache.PS35TA[0] === undefined) {
                  dataCache.PS35TA[0] = {};
                }
                if (dataCache.PS35TCP[0] === undefined) {
                  dataCache.PS35TCP[0] = {};
                }
                if (dataCache.PS35Antenas[0] === undefined) {
                  dataCache.PS35Antenas[0] = {};
                }
                // Determinar en qué objeto de dataCache agregar el tag
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS35Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS35TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS35TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS35[0][key] = tag.toString();
                }
              }
            });
          } else {
            console.error(
              "El resultado de procesarTags no es un objeto válido:",
              tags
            );
          }
        });

        // Envía el dataCache combinado a todos los clientes suscritos
        clientSubscriptions.forEach((subscribed, ws) => {
          if (subscribed) {
            ws.send(JSON.stringify(dataCache));
          }
        });
      })
      .catch((error) =>
        console.error("Error en el procesamiento de tags:", error)
      );

    // Si no hay suscriptores, detener el procesamiento
    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      clearInterval(intervalId);
      isProcessing = false;
      console.log("No hay más suscriptores, se detiene el procesamiento.");
    }
  }, interval);
};

// Manejar la suscripción del cliente WebSocket
const handleSubscriptionPS35 = (ws, message) => {
  if (message.toString() === "subscribePS35") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    // Si es el primer suscriptor, iniciar el procesamiento
    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS35") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

// Exportar la función de manejo de suscripciones
module.exports = { handleSubscriptionPS35 };
