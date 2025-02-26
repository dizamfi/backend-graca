const {
  arregloTagsPS026,
  arregloTagsPS026_TA026,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client3, client5, client4, getSessionOPCUA, client6 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS26 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client4, arregloTagsPS026()["PS026"], 1925, 29), 
      procesarTags(client5, arregloTagsPS026_TA026()["TA026"].slice(0,45), 858, 79),
      procesarTags(client6, arregloTagsPS026_TA026()["TA026"].slice(45), 936, 78), 
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS26())
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS26: [],
          PS26TA: [],
          PS26TCP: [],
          PS26Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS26[0] === undefined) {
                  dataCache.PS26[0] = {};
                }
                if (dataCache.PS26TA[0] === undefined) {
                  dataCache.PS26TA[0] = {};
                }
                if (dataCache.PS26TCP[0] === undefined) {
                  dataCache.PS26TCP[0] = {};
                }
                if (dataCache.PS26Antenas[0] === undefined) {
                  dataCache.PS26Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS26Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS26TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS26TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS26[0][key] = tag.toString();
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

const handleSubscriptionPS26 = (ws, message) => {
  if (message.toString() === "subscribePS26") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS26") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS26 };
