const {
  arregloTagsPS031,
  arregloTagsPS031_TA031,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client3, client5, client6, client7, getSessionOPCUA, client8, client9 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS31 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client7, arregloTagsPS031()["PS031"], 1780, 29),  
      procesarTags(client8, arregloTagsPS031_TA031()["TA031"].slice(0,39), 481, 65),
      procesarTags(client9, arregloTagsPS031_TA031()["TA031"].slice(38), 546, 65), 
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS31()),

    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS31: [],
          PS31TA: [],
          PS31TCP: [],
          PS31Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS31[0] === undefined) {
                  dataCache.PS31[0] = {};
                }
                if (dataCache.PS31TA[0] === undefined) {
                  dataCache.PS31TA[0] = {};
                }
                if (dataCache.PS31TCP[0] === undefined) {
                  dataCache.PS31TCP[0] = {};
                }
                if (dataCache.PS31Antenas[0] === undefined) {
                  dataCache.PS31Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS31Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS31TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS31TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS31[0][key] = tag.toString();
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

const handleSubscriptionPS31 = (ws, message) => {
  if (message.toString() === "subscribePS31") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS31") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS31 };
