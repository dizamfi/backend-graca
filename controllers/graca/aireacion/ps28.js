const {
  arregloTagsPS028,
  arregloTagsPS028_TA028,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client3, client8, client9, client10, getSessionOPCUA, client01 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS24, arregloAntenasPS28 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 


const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client9, arregloTagsPS028()["PS028"], 1867, 29), 
      procesarTags(client01, arregloTagsPS028_TA028()["TA028"].slice(0,34), 715, 58),
      procesarTags(client2, arregloTagsPS028_TA028()["TA028"].slice(34), 774, 58), 
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS28()),

    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS28: [],
          PS28TA: [],
          PS28TCP: [],
          PS28Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS28[0] === undefined) {
                  dataCache.PS28[0] = {};
                }
                if (dataCache.PS28TA[0] === undefined) {
                  dataCache.PS28TA[0] = {};
                }
                if (dataCache.PS28TCP[0] === undefined) {
                  dataCache.PS28TCP[0] = {};
                }
                if (dataCache.PS28Antenas[0] === undefined) {
                  dataCache.PS28Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS28Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS28TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS28TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS28[0][key] = tag.toString();
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

const handleSubscriptionPS28 = (ws, message) => {
  if (message.toString() === "subscribePS28") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS28") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS28 };
