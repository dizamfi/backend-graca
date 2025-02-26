const ModbusRTU = require("modbus-serial");
const opcua = require("node-opcua");

let sessionOPCUA;
const client01 = new ModbusRTU();
const client2 = new ModbusRTU();
const client3 = new ModbusRTU();
const client4 = new ModbusRTU();
const client5 = new ModbusRTU();
const client6 = new ModbusRTU();
const client7 = new ModbusRTU();
const client8 = new ModbusRTU();
const client9 = new ModbusRTU();
const client10 = new ModbusRTU();

// 192.168.130.125

//192.168.148.101
const plcIp = "192.168.130.125"; // Cambia esto por la dirección IP de tu PLC
//const plcPort = 502;

const startConnectionPLC = async () => {
  try {
    await client01.connectTCP(plcIp, { port: 502 });
    // client.setID(1);
    console.log("Conexión establecida al PLC");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};

const startConnectionPLC2 = async () => {
  try {
    await client2.connectTCP(plcIp, { port: 503 });
    // client2.setID(2);
    console.log("Conexión establecida al PLC puerto 503");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};

const startConnectionPLC3 = async () => {
  try {
    await client3.connectTCP(plcIp, { port: 504 });
    // client3.setID(3);
    console.log("Conexión establecida al PLC puerto 504");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC4 = async () => {
  try {
    await client4.connectTCP(plcIp, { port: 505 });
    console.log("Conexión establecida al PLC puerto 505");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC5 = async () => {
  try {
    await client5.connectTCP(plcIp, { port: 506 });
    console.log("Conexión establecida al PLC puerto 506");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC6 = async () => {
  try {
    await client6.connectTCP(plcIp, { port: 507 });
    console.log("Conexión establecida al PLC puerto 507");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC7 = async () => {
  try {
    await client7.connectTCP(plcIp, { port: 508 });
    console.log("Conexión establecida al PLC puerto 508");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC8 = async () => {
  try {
    await client8.connectTCP(plcIp, { port: 509 });
    console.log("Conexión establecida al PLC puerto 509");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC9 = async () => {
  try {
    await client9.connectTCP(plcIp, { port: 510 });
    console.log("Conexión establecida al PLC puerto 510");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};
const startConnectionPLC10 = async () => {
  try {
    await client10.connectTCP(plcIp, { port: 511 });
    console.log("Conexión establecida al PLC puerto 511");
    // console.log(client);
  } catch (error) {
    console.error("Error al conectar con el PLC:", error);
  }
};

async function startConnectionOPCUA() {
  // Configuración del cliente y conexión
  const clientOPCUA = opcua.OPCUAClient.create({
    endpointMustExist: false, 
    securityMode: opcua.MessageSecurityMode.None,
    securityPolicy: opcua.SecurityPolicy.None,

    connectionStrategy: {
      maxRetry: 10, 
      initialDelay: 2000, 
      maxDelay: 10000, 
    },
    keepSessionAlive: true, 
  });

  // opc.tcp://192.168.130.129:53880

  // opc.tcp://localhost:53880
  await clientOPCUA.connect("opc.tcp://192.168.130.129:53880");
  sessionOPCUA = await clientOPCUA.createSession();
  console.log("Cliente OPCUA Conectado");
}


function getSessionOPCUA() {
  if (!sessionOPCUA) {
    throw new Error("La sesión OPCUA aún no está inicializada");
  }
  return sessionOPCUA;
}

module.exports = {
  startConnectionPLC,
  client01,
  startConnectionPLC2,
  client2,
  startConnectionPLC3,
  client3,
  startConnectionPLC4,
  client4,
  startConnectionPLC5,
  client5,
  startConnectionPLC6,
  client6,
  startConnectionPLC7,
  client7,
  startConnectionPLC8,
  client8,
  startConnectionPLC9,
  client9,
  startConnectionPLC10,
  client10,
  startConnectionOPCUA,
  // sessionOPCUA,
  getSessionOPCUA
};
