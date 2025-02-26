const {
  arregloTagsPS029,
  arregloTagsPS029_TA029,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client3, client2, getSessionOPCUA, client01, client10, client4 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS29 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client3, arregloTagsPS029()["PS029"], 1838, 29), 
      procesarTags(client4, arregloTagsPS029_TA029()["TA029"], 689, 26),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS29()),
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS29: [],
          PS29TA: [],
          // PS29TCP: [],
          PS29Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS29[0] === undefined) {
                  dataCache.PS29[0] = {};
                }
                if (dataCache.PS29TA[0] === undefined) {
                  dataCache.PS29TA[0] = {};
                 
                }
                // if (dataCache.PS29TCP[0] === undefined) {
                //   dataCache.PS29TCP[0] = {};
                // }
                if (dataCache.PS29Antenas[0] === undefined) {
                  dataCache.PS29Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS29Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS29TA[0][key] = tag.toString();
                  }
                } else {
                  dataCache.PS29[0][key] = tag.toString();
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

        clientSubscriptions.forEach((subscribed, ws) => {
          if (subscribed) {
            ws.send(JSON.stringify(dataCache));
          }
        });
      })
      .catch((error) =>
        console.error("Error en el procesamiento de tags:", error)
      );

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      clearInterval(intervalId);
      isProcessing = false;
      console.log("No hay más suscriptores, se detiene el procesamiento.");
    }
  }, interval);
};

const handleSubscriptionPS29 = (ws, message) => {
  if (message.toString() === "subscribePS29") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS29") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS29 };
