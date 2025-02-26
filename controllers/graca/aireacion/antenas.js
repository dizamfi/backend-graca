const { client, getSessionOPCUA } = require("../../../helpers/graca/connections");
const { readMultipleNodesForOPCUA } = require("../../../helpers/graca/funtions");
const { arregloAntenasAll } = require("../../../helpers/graca/nodesOpcUa");

// Mapa para gestionar las suscripciones de los clientes
const clientSubscriptions = new Map();
let isProcessing = false; // Bandera para verificar si ya se está procesando

// Función para procesar múltiples datos y enviar a suscriptores activos
const startProcessingTags = (client, interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    // Array de promesas de diferentes llamadas a procesarTags con distintos parámetros
    const tagPromises = [
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasAll()),
    ];

    // Esperar a que todas las promesas se resuelvan y combinar los resultados
    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          Antenas: [],
        };

        // Itera sobre los resultados para organizar los datos en dataCache
        results.forEach((tags) => {
          // Verificar que `tags` es un objeto antes de iterar
          // console.log(tags)
          if (typeof tags === "object" && tags !== null) {

            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.Antenas[0] === undefined) {
                  dataCache.Antenas[0] = {};
                }

                dataCache.Antenas[0][key] = tag.toString(); 
               
                

                
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
const handleSubscriptionAntenas = (ws, message) => {
  if (message.toString() === "subscribeAntenas") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    // Si es el primer suscriptor, iniciar el procesamiento
    if (!isProcessing) {
      startProcessingTags(client);
    }
  } else if (message.toString() === "unsubscribeAntenas") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

// Exportar la función de manejo de suscripciones
module.exports = { handleSubscriptionAntenas };
