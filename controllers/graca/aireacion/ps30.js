const {
  arregloTagsPS030,
  arregloTagsPS030_TA030,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client01, client2, client3, client4, getSessionOPCUA, client5, client6 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS30 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client5, arregloTagsPS030()["PS030"], 1809, 29), 
      procesarTags(client6, arregloTagsPS030_TA030()["TA030"], 611, 78),
      // procesarTags(client3, arregloTagsPS030_TA030()["TA030"], 546, 64), 
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS30()),

    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS30: [],
          PS30TA: [],
          PS30TCP: [],
          PS30Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS30[0] === undefined) {
                  dataCache.PS30[0] = {};
                }
                if (dataCache.PS30TA[0] === undefined) {
                  dataCache.PS30TA[0] = {};
                }
                if (dataCache.PS30TCP[0] === undefined) {
                  dataCache.PS30TCP[0] = {};
                }
                if (dataCache.PS30Antenas[0] === undefined) {
                  dataCache.PS30Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS30Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS30TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS30TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS30[0][key] = tag.toString();
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

const handleSubscriptionPS30 = (ws, message) => {
  if (message.toString() === "subscribePS30") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS30") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS30 };
