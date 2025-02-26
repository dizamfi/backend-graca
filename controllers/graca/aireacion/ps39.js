const {
  arregloTagsPS039,
  arregloTagsPS039_TA039,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client01, client10, getSessionOPCUA, client4, client5 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS39 } = require("../../../helpers/graca/nodesOpcUa");

// Mapa para gestionar las suscripciones de los clientes
const clientSubscriptions = new Map();
let isProcessing = false; // Bandera para verificar si ya se está procesando

// Función para procesar múltiples datos y enviar a suscriptores activos
const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    // Array de promesas de diferentes llamadas a procesarTags con distintos parámetros
    const tagPromises = [
      procesarTags2(client4, arregloTagsPS039()["PS039"], 1664, 29),
      procesarTags(client5, arregloTagsPS039_TA039()["TA039"], 0, 116),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS39()),
    ];

    // Esperar a que todas las promesas se resuelvan y combinar los resultados
    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS39: [],
          PS39TA: [],
          PS39TCP: [],
          PS39Antenas: [],
        };

        // Itera sobre los resultados para organizar los datos en dataCache
        results.forEach((tags) => {
          // Verificar que `tags` es un objeto antes de iterar
          // console.log(tags)
          if (typeof tags === "object" && tags !== null) {

            Object.entries(tags).forEach(([key, tag]) => {
              // Verificar que `tag` tenga una propiedad `name` y un valor `value` válido
              if (key && typeof key === "string" && tag !== undefined) {
                // const tagName = tag.name;

                // Asegurarse de que el objeto esté definido
                if (dataCache.PS39[0] === undefined) {
                  dataCache.PS39[0] = {};
                }
                if (dataCache.PS39TA[0] === undefined) {
                  dataCache.PS39TA[0] = {};
                }
                if (dataCache.PS39TCP[0] === undefined) {
                  dataCache.PS39TCP[0] = {};
                }
                if (dataCache.PS39Antenas[0] === undefined) {
                  dataCache.PS39Antenas[0] = {};
                }

                // Determinar en qué objeto de dataCache agregar el tag
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS39Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS39TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS39TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS39[0][key] = tag.toString();
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
const handleSubscriptionPS39 = (ws, message) => {
  if (message.toString() === "subscribePS39") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    // Si es el primer suscriptor, iniciar el procesamiento
    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS39") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

// Exportar la función de manejo de suscripciones
module.exports = { handleSubscriptionPS39 };
