const {
  arregloTagsPS33A,
  arregloTagsPS33A_TA33A,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client01, client2, getSessionOPCUA, client4, client5 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS33A } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 

const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client4, arregloTagsPS33A()["PS33A"], 1722, 29),
      procesarTags(client5, arregloTagsPS33A_TA33A()["TA33A"], 234, 116),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS33A()),
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS33A: [],
          PS33ATA: [],
          PS33ATCP: [],
          PS33AAntenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS33A[0] === undefined) {
                  dataCache.PS33A[0] = {};
                }
                if (dataCache.PS33ATA[0] === undefined) {
                  dataCache.PS33ATA[0] = {};
                }
                if (dataCache.PS33ATCP[0] === undefined) {
                  dataCache.PS33ATCP[0] = {};
                }
                if (dataCache.PS33AAntenas[0] === undefined) {
                  dataCache.PS33AAntenas[0] = {};
                }
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS33AAntenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS33ATA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS33ATCP[0][key] = tag.toString();
                } else {
                  dataCache.PS33A[0][key] = tag.toString();
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

const handleSubscriptionPS33A = (ws, message) => {
  if (message.toString() === "subscribePS33A") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS33A") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS33A };
