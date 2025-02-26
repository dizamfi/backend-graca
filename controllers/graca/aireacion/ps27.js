const {
  arregloTagsPS027,
  arregloTagsPS027_TA027,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client5, client6, client7, getSessionOPCUA, client8 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS27 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

let dataCache = {
  PS27: [{}],
  PS27TA: [{}],
  PS27TCP: [{}],
};

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client7, arregloTagsPS027()["PS027"], 1896, 29), 
      procesarTags(client8, arregloTagsPS027_TA027()["TA027"], 832, 26),
      // procesarTags(client3, arregloTagsPS027_TA027()["TA027"], 774, 58), 
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS27())

    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS27: [],
          PS27TA: [],
          // PS27TCP: [],
          PS27Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS27[0] === undefined) {
                  dataCache.PS27[0] = {};
                }
                if (dataCache.PS27TA[0] === undefined) {
                  dataCache.PS27TA[0] = {};
                }
                // if (dataCache.PS27TCP[0] === undefined) {
                //   dataCache.PS27TCP[0] = {};
                // }
                if (dataCache.PS27Antenas[0] === undefined) {
                  dataCache.PS27Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS27Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS27TA[0][key] = tag.toString();
                  }
                } else {
                  dataCache.PS27[0][key] = tag.toString();
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

const handleSubscriptionPS27 = (ws, message) => {
  if (message.toString() === "subscribePS27") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS27") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS27 };
