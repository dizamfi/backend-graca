const {
  arregloTagsPS22A,
  arregloTagsPS22A_TA22A,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client, client2, client4, client5, getSessionOPCUA } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS22A } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 


const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client4, arregloTagsPS22A()["PS22A"], 2012, 29), 
      procesarTags(client5, arregloTagsPS22A_TA22A()["TA22A"], 1157, 64),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS22A() )
    ];

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS22A: [],
          PS22ATA: [],
          PS22ATCP: [],
          PS22AAntenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS22A[0] === undefined) {
                  dataCache.PS22A[0] = {};
                }
                if (dataCache.PS22ATA[0] === undefined) {
                  dataCache.PS22ATA[0] = {};
                }
                if (dataCache.PS22ATCP[0] === undefined) {
                  dataCache.PS22ATCP[0] = {};
                }
                if (dataCache.PS22AAntenas[0] === undefined) {
                  dataCache.PS22AAntenas[0] = {};
                }

                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS22AAntenas[0][key] = tag.toString(); 
                  } else {
                    dataCache.PS22ATA[0][key] = tag.toString(); 
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS22ATCP[0][key] = tag.toString(); 
                } else {
                  dataCache.PS22A[0][key] = tag.toString(); 
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

const handleSubscriptionPS22A = (ws, message) => {
  if (message.toString() === "subscribePS22A") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS22A") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS22A };
