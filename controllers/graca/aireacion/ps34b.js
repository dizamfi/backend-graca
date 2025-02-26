const {
  arregloTagsPS34B,
  arregloTagsPS34B_TA34B,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client3, client5, client6, client7, getSessionOPCUA, client8, client9, client01 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS34B } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client8, arregloTagsPS34B()["PS34B"], 2099, 29),
      procesarTags(client9, arregloTagsPS34B_TA34B()["TA34B"].slice(0,63), 1456, 103),
      procesarTags(client01, arregloTagsPS34B_TA34B()["TA34B"].slice(63), 1560, 104),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS34B()),
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS34B: [],
          PS34BTA: [],
          PS34BTCP: [],
          PS34BAntenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS34B[0] === undefined) {
                  dataCache.PS34B[0] = {};
                }
                if (dataCache.PS34BTA[0] === undefined) {
                  dataCache.PS34BTA[0] = {};
                }
                if (dataCache.PS34BTCP[0] === undefined) {
                  dataCache.PS34BTCP[0] = {};
                }
                if (dataCache.PS34BAntenas[0] === undefined) {
                  dataCache.PS34BAntenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS34BAntenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS34BTA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS34BTCP[0][key] = tag.toString();
                } else {
                  dataCache.PS34B[0][key] = tag.toString();
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

const handleSubscriptionPS34B = (ws, message) => {
  if (message.toString() === "subscribePS34B") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS34B") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS34B };
