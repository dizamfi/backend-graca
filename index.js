const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { connectionDB } = require("./db/config");


const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();
const {
  startConnectionPLC,
  startConnectionPLC2,
  startConnectionPLC3,
  startConnectionPLC4,
  startConnectionPLC5,
  startConnectionPLC6,
  startConnectionPLC7,
  startConnectionPLC8,
  startConnectionPLC9,
  startConnectionPLC10,
  startConnectionOPCUA,
} = require("./helpers/graca/connections");

const pc36controler = require("./controllers/graca/aireacion/prec36");
const ps22acontroler = require("./controllers/graca/aireacion/ps22a");
const ps22bcontroler = require("./controllers/graca/aireacion/ps22b");
const ps24controler = require("./controllers/graca/aireacion/ps24");
const ps25controler = require("./controllers/graca/aireacion/ps25");
const ps26controler = require("./controllers/graca/aireacion/ps26");
const ps27controler = require("./controllers/graca/aireacion/ps27");
const ps28controler = require("./controllers/graca/aireacion/ps28");
const ps29controler = require("./controllers/graca/aireacion/ps29");
const ps30controler = require("./controllers/graca/aireacion/ps30");
const ps31controler = require("./controllers/graca/aireacion/ps31");
const ps32controler = require("./controllers/graca/aireacion/ps32");
const ps33acontroler = require("./controllers/graca/aireacion/ps33a");
const ps33bcontroler = require("./controllers/graca/aireacion/ps33b");
const ps34bcontroler = require("./controllers/graca/aireacion/ps34b");
const ps35controler = require("./controllers/graca/aireacion/ps35");
const ps39controler = require("./controllers/graca/aireacion/ps39");
const infoGeneralPScontroler = require("./controllers/graca/aireacion/infoGeneralPS");
const antenascontroler = require("./controllers/graca/aireacion/antenas");

connectionDB();

startConnectionOPCUA();

startConnectionPLC();
startConnectionPLC2();
startConnectionPLC3();
startConnectionPLC4();
startConnectionPLC5();
startConnectionPLC6();
startConnectionPLC7();
startConnectionPLC8();
startConnectionPLC9();
//startConnectionPLC10();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth/auth'));
app.use('/api/graca', require('./routes/graca/ps'));

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);

    if (message.toString().includes("PS39")) {
      ps39controler.handleSubscriptionPS39(ws, message);
    } else if (message.toString().includes("PC36")) {
      pc36controler.handleSubscriptionPC36(ws, message);
    } else if (message.toString().includes("PS22A")) {
      ps22acontroler.handleSubscriptionPS22A(ws, message);
    } else if (message.toString().includes("PS22B")) {
      ps22bcontroler.handleSubscriptionPS22B(ws, message);
    } else if (message.toString().includes("PS24")) {
      ps24controler.handleSubscriptionPS24(ws, message);
    } else if (message.toString().includes("PS25")) {
      ps25controler.handleSubscriptionPS25(ws, message);
    } else if (message.toString().includes("PS26")) {
      ps26controler.handleSubscriptionPS26(ws, message);
    } else if (message.toString().includes("PS27")) {
      ps27controler.handleSubscriptionPS27(ws, message);
    } else if (message.toString().includes("PS28")) {
      ps28controler.handleSubscriptionPS28(ws, message);
    } else if (message.toString().includes("PS29")) {
      ps29controler.handleSubscriptionPS29(ws, message);
    } else if (message.toString().includes("PS30")) {
      ps30controler.handleSubscriptionPS30(ws, message);
    } else if (message.toString().includes("PS31")) {
      ps31controler.handleSubscriptionPS31(ws, message);
    } else if (message.toString().includes("PS32")) {
      ps32controler.handleSubscriptionPS32(ws, message);
    } else if (message.toString().includes("PS33A")) {
      ps33acontroler.handleSubscriptionPS33A(ws, message);
    } else if (message.toString().includes("PS33B")) {
      ps33bcontroler.handleSubscriptionPS33B(ws, message);
    } else if (message.toString().includes("PS34B")) {
      ps34bcontroler.handleSubscriptionPS34B(ws, message);
    } else if (message.toString().includes("PS35")) {
      ps35controler.handleSubscriptionPS35(ws, message);
    } else if (message.toString().includes("InfoGeneralPS")) {
      infoGeneralPScontroler.handleSubscriptionInfoGeneralPS(ws, message);
    } else if (message.toString().includes("Antenas")) {
      antenascontroler.handleSubscriptionAntenas(ws, message);
    }
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`);
});

module.exports = {
  wss,
};
