const {
  arregloTagsPS33B,
  arregloTagsPS33B_TA33B,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client3, client4, getSessionOPCUA, client6, client7 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS33B } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client6, arregloTagsPS33B()["PS33B"], 1693, 29),
      procesarTags(client7, arregloTagsPS33B_TA33B()["TA33B"], 117, 116),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS33B()),
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS33B: [],
          PS33BTA: [],
          PS33BTCP: [],
          PS33BAntenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS33B[0] === undefined) {
                  dataCache.PS33B[0] = {};
                }
                if (dataCache.PS33BTA[0] === undefined) {
                  dataCache.PS33BTA[0] = {};
                }
                if (dataCache.PS33BTCP[0] === undefined) {
                  dataCache.PS33BTCP[0] = {};
                }
                if (dataCache.PS33BAntenas[0] === undefined) {
                  dataCache.PS33BAntenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS33BAntenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS33BTA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS33BTCP[0][key] = tag.toString();
                } else {
                  dataCache.PS33B[0][key] = tag.toString();
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

const handleSubscriptionPS33B = (ws, message) => {
  if (message.toString() === "subscribePS33B") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS33B") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS33B };
