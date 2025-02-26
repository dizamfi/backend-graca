const {
  arregloTagsPS22B,
  arregloTagsPS22B_TA22B,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client, client2, client4, client5, client7, client6, getSessionOPCUA } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS22B } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 


const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client6, arregloTagsPS22B()["PS22B"], 2041, 29), 
      procesarTags(client7, arregloTagsPS22B_TA22B()["TA22B"], 1222, 65),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS22B())
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS22B: [],
          PS22BTA: [],
          PS22BTCP: [],
          PS22BAntenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS22B[0] === undefined) {
                  dataCache.PS22B[0] = {};
                }
                if (dataCache.PS22BTA[0] === undefined) {
                  dataCache.PS22BTA[0] = {};
                }
                if (dataCache.PS22BTCP[0] === undefined) {
                  dataCache.PS22BTCP[0] = {};
                }
                if (dataCache.PS22BAntenas[0] === undefined) {
                  dataCache.PS22BAntenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS22BAntenas[0][key] = tag.toString(); 
                  } else {
                    dataCache.PS22BTA[0][key] = tag.toString(); 
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS22BTCP[0][key] = tag.toString();
                } else {
                  dataCache.PS22B[0][key] = tag.toString();
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

const handleSubscriptionPS22B = (ws, message) => {
  if (message.toString() === "subscribePS22B") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS22B") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS22B };
