const {
  arregloTagsPC036,
  arregloTagsPC036_TA036,
  arregloTagsGLOB,
} = require("../../../helpers/graca/arregloTagsAireacion");
const { client01, client2, client3, sessionOPCUA, getSessionOPCUA } = require("../../../helpers/graca/connections");
const { procesarTags, readMultipleNodesForOPCUA, procesarTags2 } = require("../../../helpers/graca/funtions");
const { arregloAntenasPC36 } = require("../../../helpers/graca/nodesOpcUa");

const clientSubscriptions = new Map();
let isProcessing = false; 




const startProcessingTags = (interval = 1000) => {
  client01.setID(1);
  client2.setID(2);
  client3.setID(3);
  isProcessing = true;

  const intervalId = setInterval(() => {
    const tagPromises = [
      procesarTags2(client01, arregloTagsPC036()["PC036"], 2070, 29), 
      procesarTags(client2, arregloTagsPC036_TA036()["TA036"].slice(0,29), 1287, 51),
      procesarTags(client3, arregloTagsPC036_TA036()["TA036"].slice(29), 1339, 52),
      readMultipleNodesForOPCUA(getSessionOPCUA(), arregloAntenasPC36() )
      
      
    ];

   //console.log(arregloTagsPC036()["PC036"]);

    Promise.all(tagPromises)
      .then((results) => {
        dataCache = {
          PC36: [],
          PC36TCP: [],
          PC36Antenas: [],
        };

         console.log(results)

        results.forEach((tags) => {
          if (typeof tags === "object" && tags !== null) {
            Object.entries(tags).forEach(([key, tag]) => {
              if (key && typeof key === "string" && tag !== undefined) {
                if (dataCache.PC36[0] === undefined) {
                  dataCache.PC36[0] = {};
                }
                if (dataCache.PC36Antenas[0] === undefined) {
                  dataCache.PC36Antenas[0] = {};
                }
                if (dataCache.PC36TCP[0] === undefined) {
                  dataCache.PC36TCP[0] = {};
                }

                if (key.includes("Potencia") || key.includes("Status")) {
                  dataCache.PC36Antenas[0][key] = tag.toString(); 
                } else if (key.includes("TCP")) {
                  dataCache.PC36TCP[0][key] = tag.toString();
                }
                else {
                  dataCache.PC36[0][key] = tag.toString();
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

const handleSubscriptionPC36 = (ws, message) => {
  if (message.toString() === "subscribePC36") {
    console.log("Cliente suscrito");
    clientSubscriptions.set(ws, true);

    if (!isProcessing) {
      startProcessingTags();
    }
  } else if (message.toString() === "unsubscribePC36") {
    clientSubscriptions.set(ws, false);
    console.log("Cliente desuscrito");

    if (!Array.from(clientSubscriptions.values()).includes(true)) {
      //clearInterval(interval);
      //interval = null;
      console.log("No hay más clientes suscritos.");
    }
  }
};

module.exports = { handleSubscriptionPC36 };


