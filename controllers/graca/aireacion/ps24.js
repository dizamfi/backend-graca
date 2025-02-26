const {
  arregloTagsPS024,
  arregloTagsPS024_TA024,
} = require("../../../helpers/graca/arregloTagsAireacion");
const {
  client,
  client2,
  client3,
  client5,
  client8,
  client9,
  client10,
  getSessionOPCUA,
  client01,
} = require("../../../helpers/graca/connections");
const {
  procesarTags,
  readMultipleNodesForOPCUA,
  procesarTags2,
} = require("../../../helpers/graca/funtions");
const { arregloAntenasPS24 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false;

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client8, arregloTagsPS024()["PS024"], 1983, 29),
      procesarTags(client9, arregloTagsPS024_TA024()["TA024"].slice(0, 33), 1014, 58),
      procesarTags(client01, arregloTagsPS024_TA024()["TA024"].slice(33), 1073, 58),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS24()),
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS24: [],
          PS24TA: [],
          PS24TCP: [],
          PS24Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS24[0] === undefined) {
                  dataCache.PS24[0] = {};
                }
                if (dataCache.PS24TA[0] === undefined) {
                  dataCache.PS24TA[0] = {};
                }
                if (dataCache.PS24TCP[0] === undefined) {
                  dataCache.PS24TCP[0] = {};
                }
                if (dataCache.PS24Antenas[0] === undefined) {
                  dataCache.PS24Antenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS24Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS24TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS24TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS24[0][key] = tag.toString();
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

const handleSubscriptionPS24 = (ws, message) => {
  if (message.toString() === "subscribePS24") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS24") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS24 };
