const {
  arregloTagsPS025,
  arregloTagsPS025_TA025,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client01, client3, client4, client2, getSessionOPCUA } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS25 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = ( interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client2, arregloTagsPS025()["PS025"], 1954, 29), 
      procesarTags(client3, arregloTagsPS025_TA025()["TA025"], 1131, 26),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS25())
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS25: [],
          PS25TA: [],
          PS25TCP: [],
          PS25Antenas: []
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS25[0] === undefined) {
                  dataCache.PS25[0] = {};
                }
                if (dataCache.PS25TA[0] === undefined) {
                  dataCache.PS25TA[0] = {};
                }
                if (dataCache.PS25TCP[0] === undefined) {
                  dataCache.PS25TCP[0] = {};
                }
                if (dataCache.PS25Antenas[0] === undefined) {
                  dataCache.PS25Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS25Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS25TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS25TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS25[0][key] = tag.toString();
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

const handleSubscriptionPS25 = (ws, message) => {
  if (message.toString() === "subscribePS25") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS25") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS25 };
