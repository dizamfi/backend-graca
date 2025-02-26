const {
  arregloTagsPS032,
  arregloTagsPS032_TA032,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client1, client2, client8, client9, client10, getSessionOPCUA, client01, client3 } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPS32 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 


const startProcessingTags = (interval = 1000) => {
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client01, arregloTagsPS032()["PS032"], 1751, 29),
      procesarTags(client2, arregloTagsPS032_TA032()["TA032"].slice(0, 67), 351, 116),
      procesarTags(client3, arregloTagsPS032_TA032()["TA032"].slice(67), 467, 14),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPS32()),
      // procesarTags(client, arregloTagsPS33A()["PS33A"], 1722, 29),
      // procesarTags(client, arregloTagsPS039()["PS039"], 1664, 29),
    ];

    // console.log(arregloTagsPS032_TA032()["TA032"].slice(-10))

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PS32: [],
          PS32TA: [],
          PS32TCP: [],
          PS32Antenas: [],
        };

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PS32[0] === undefined) {
                  dataCache.PS32[0] = {};
                }
                if (dataCache.PS32TA[0] === undefined) {
                  dataCache.PS32TA[0] = {};
                }
                if (dataCache.PS32TCP[0] === undefined) {
                  dataCache.PS32TCP[0] = {};
                }
                if (dataCache.PS32Antenas[0] === undefined) {
                  dataCache.PS32Antenas[0] = {};
                }

                console.log(tag.toString())
                if (key.includes("TA")) {
                  if (key.includes("Potencia") || key.includes("Status")) {
                    dataCache.PS32Antenas[0][key] = tag.toString();
                  } else {
                    dataCache.PS32TA[0][key] = tag.toString();
                  }
                } else if (key.includes("TCP")) {
                  dataCache.PS32TCP[0][key] = tag.toString();
                } else {
                  dataCache.PS32[0][key] = tag.toString();
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

const handleSubscriptionPS32 = (ws, message) => {
  if (message.toString() === "subscribePS32") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePS32") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPS32 };
