const { Buffer } = require("buffer");
const opcua = require("node-opcua");
const { arregloTagsGLOB } = require("./arregloTagsAireacion");

// Función para convertir registros Modbus a tipo Real (32 bits)
function convertToReal(registers) {
  const rawValue = (registers[0] << 16) | registers[1];
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32BE(rawValue);
  const floatValue = buffer.readFloatBE();
  return parseFloat(floatValue.toFixed(2));
}

// Función para convertir registros a "Time of Day"
function convertToTimeOfDay(registers) {
  const milliseconds = (registers[0] << 16) | registers[1];

  const hours = Math.floor(milliseconds / (3600 * 1000));
  const remainingMilliseconds1 = milliseconds % (3600 * 1000);

  const minutes = Math.floor(remainingMilliseconds1 / (60 * 1000));
  const remainingMilliseconds2 = remainingMilliseconds1 % (60 * 1000);

  const seconds = Math.floor(remainingMilliseconds2 / 1000);
  // const remainingMilliseconds3 = remainingMilliseconds2 % 1000;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString().padStart(2, "0")
    

    }`;
}

// Función para convertir registros a DINT
function convertToDint(registers) {
  return (registers[0] << 16) | registers[1];
}

async function procesarTags(client, arreglo, inicio, cantidad) {
  try {
    const result = await client.readHoldingRegisters(inicio, cantidad);
    //const result2 = await client.readHoldingRegisters(2157, 16);

    const registros = result.data;
    //const registros2 = result2.data;
    //console.log(registros)
    //console.log(registros2)
    const data = {};
    //arreglo = arreglo.concat(arregloTagsGLOB()["GLOB"])
    //const arreglo2 = arregloTagsGLOB()["GLOB"]

    //console.log(arreglo)

    arreglo.forEach((tag) => {
      const offset = tag.offset - inicio;
      const count = tag.count;
      const tagType = tag.type;
      const name = tag.name;

      //console.log(name)

      const tagData = registros.slice(offset, offset + count);
      let valor;

      switch (tagType) {
        case "Int":
          valor = tagData[0];
          break;
        case "Real":
          valor = convertToReal(tagData);
          break;
        case "DWord":
          valor = (tagData[0] << 16) | tagData[1];
          if (tagData[0] == 65535 && tagData[1] == 65535) {
              valor = 4294967295;
          }
          break;
        case "Time_Of_Day":
          valor = convertToTimeOfDay(tagData);
          break;
        case "DInt":
          valor = convertToDint(tagData);
          break;
        case "Word":
          valor = tagData[0];
          break;
        case "Bool":
          const registro = tagData[0];
          const bits = Array.from(
            { length: 16 },
            (_, i) => (registro >> (15 - i)) & 1
          );
          //console.log(name);
          //console.log(bits)

          // console.log(name.slice(9));

          if(name.includes("Stat_Comm_MB") || name === "Algun_Air_On"){
            valor = bits[7] === 1;
          } else{
            valor = bits[6] === 1;
          }

          if(name.includes("TA") && name.includes("Stat_Comm")) valor = bits[7] === 1;
          if(name.includes("TA") && name.includes("Desactiva")) valor = bits[6] === 1;

          // valor = name === "Stat_Comm_MB" ? bits[7] === 1 : bits[6] === 1;
          break;
        case "Byte":
          valor = Array.from(
            { length: 16 },
            (_, i) => (tagData[0] >> (15 - i)) & 1
          );

          if (name === "Run_Rem") {
            valor = valor.at(-1) === 1;
          } else if (name === "Bloq_Auto_Hora") {
            valor = valor.at(-2) === 1;
          } else {
            let bits = valor.slice(0, 8);
            valor = parseInt(bits.join(''), 2).toString();
          }

          break;
        default:
          console.error(`Tipo de dato no soportado: ${tagType}`);
          return;
      }

      data[name] = valor;
    });


   

    //console.log(data)

    return data;
  } catch (error) {
    console.error("Error al leer los registros", error);
    return null;
  }
}


async function procesarTags2(client, arreglo, inicio, cantidad) {
  try {
    const result = await client.readHoldingRegisters(inicio, cantidad);
    const result2 = await client.readHoldingRegisters(2157, 16);

    const registros = result.data;
    const registros2 = result2.data;
    //console.log(registros)
    //console.log(registros2)
    const data = {};
    //arreglo = arreglo.concat(arregloTagsGLOB()["GLOB"])
    const arreglo2 = arregloTagsGLOB()["GLOB"]

    //console.log(arreglo)

    arreglo.forEach((tag) => {
      const offset = tag.offset - inicio;
      const count = tag.count;
      const tagType = tag.type;
      const name = tag.name;

      //console.log(name)

      const tagData = registros.slice(offset, offset + count);
      let valor;

      switch (tagType) {
        case "Int":
          valor = tagData[0];
          break;
        case "Real":
          valor = convertToReal(tagData);
          break;
        case "DWord":
          valor = (tagData[0] << 16) | tagData[1];
          if (tagData[0] == 65535 && tagData[1] == 65535) {
              valor = 4294967295;
          }
          break;
        case "Time_Of_Day":
          valor = convertToTimeOfDay(tagData);
          break;
        case "DInt":
          valor = convertToDint(tagData);
          break;
        case "Word":
          valor = tagData[0];
          break;
        case "Bool":
          const registro = tagData[0];
          const bits = Array.from(
            { length: 16 },
            (_, i) => (registro >> (15 - i)) & 1
          );
          //console.log(name);
          //console.log(bits)

          // console.log(name.slice(9));

          if(name.includes("Stat_Comm_MB") || name === "Algun_Air_On"){
            valor = bits[7] === 1;
          } else{
            valor = bits[6] === 1;
          }

          if(name.includes("TA") && name.includes("Stat_Comm")) valor = bits[7] === 1;
          if(name.includes("TA") && name.includes("Desactiva")) valor = bits[6] === 1;

          // valor = name === "Stat_Comm_MB" ? bits[7] === 1 : bits[6] === 1;
          break;
        case "Byte":
          valor = Array.from(
            { length: 16 },
            (_, i) => (tagData[0] >> (15 - i)) & 1
          );

          if (name === "Run_Rem") {
            valor = valor.at(-1) === 1;
          } else if (name === "Bloq_Auto_Hora") {
            valor = valor.at(-2) === 1;
          } else {
            let bits = valor.slice(0, 8);
            valor = parseInt(bits.join(''), 2).toString();
          }

          break;
        default:
          console.error(`Tipo de dato no soportado: ${tagType}`);
          return;
      }

      data[name] = valor;
    });


    arreglo2.forEach((tag) => {
      const offset = tag.offset - 2157;
      const count = tag.count;
      const tagType = tag.type;
      const name = tag.name;

      //console.log(name)

      const tagData = registros2.slice(offset, offset + count);
      let valor;

      switch (tagType) {
        case "Int":
          valor = tagData[0];
          break;
        case "Real":
          valor = convertToReal(tagData);
          break;
        case "DWord":
          valor = (tagData[0] << 16) | tagData[1];
          if (tagData[0] == 65535 && tagData[1] == 65535) {
              valor = 4294967295;
          }
          break;
        case "Time_Of_Day":
          valor = convertToTimeOfDay(tagData);
          break;
        case "DInt":
          valor = convertToDint(tagData);
          break;
        case "Word":
          valor = tagData[0];
          break;
        case "Bool":
          const registro = tagData[0];
          const bits = Array.from(
            { length: 16 },
            (_, i) => (registro >> (15 - i)) & 1
          );
          //console.log(name);
          //console.log(bits)

          // console.log(name.slice(9));

          if(name.includes("Stat_Comm_MB") || name === "Algun_Air_On"){
            valor = bits[7] === 1;
          } else{
            valor = bits[6] === 1;
          }

          if(name.includes("TA") && name.includes("Stat_Comm")) valor = bits[7] === 1;
          if(name.includes("TA") && name.includes("Desactiva")) valor = bits[6] === 1;

          // valor = name === "Stat_Comm_MB" ? bits[7] === 1 : bits[6] === 1;
          break;
        case "Byte":
          valor = Array.from(
            { length: 16 },
            (_, i) => (tagData[0] >> (15 - i)) & 1
          );

          if (name === "Run_Rem") {
            valor = valor.at(-1) === 1;
          } else if (name === "Bloq_Auto_Hora") {
            valor = valor.at(-2) === 1;
          } else {
            let bits = valor.slice(0, 8);
            valor = parseInt(bits.join(''), 2).toString();
          }

          break;
        default:
          console.error(`Tipo de dato no soportado: ${tagType}`);
          return;
      }

      data[name] = valor;
    });

    //console.log(data)

    return data;
  } catch (error) {
    console.error("Error al leer los registros", error);
    return null;
  }
}




async function procesarTagsInfoGeneral(client, arreglo, inicio, cantidad) {
  try {
    const result = await client.readHoldingRegisters(inicio, cantidad);
    const result2 = await client.readHoldingRegisters(2157, 16);

    const registros = result.data;
    const registros2 = result2.data;
    //console.log(registros)
    //console.log(registros2)
    const data = {};
    //arreglo = arreglo.concat(arregloTagsGLOB()["GLOB"])
    const arreglo2 = arregloTagsGLOB()["GLOB"]

    let offsetSave = 0;

    arreglo.forEach((tag, index) => {
      const offset = tag.offset - inicio;
      const count = tag.count;
      const tagType = tag.type;
      const name = tag.name;

      const tagData = registros.slice(offset, offset + count);
      let valor;

      switch (tagType) {
        case "Int":
          valor = tagData[0];
          break;
        case "Real":
          valor = convertToReal(tagData);
          break;
        case "DWord":
          valor = (tagData[0] << 16) | tagData[1];
          break;
        case "Time_Of_Day":
          valor = convertToTimeOfDay(tagData);
          break;
        case "DInt":
          valor = convertToDint(tagData);
          break;
        case "Word":
          valor = tagData[0];
          break;
          case "Bool":
            const registro = tagData[0];
            const bits = Array.from(
              { length: 16 },
              (_, i) => (registro >> (15 - i)) & 1
            );
            //console.log(name);
            //console.log(offset)

            const primaryByte = bits.slice(0,8);
            const secondsByte = bits.slice(8);
  
            //console.log(bits.slice(8));
            //console.log(bits.slice(0,8));

            if ( index < 8 ) {
              let bit = (primaryByte.length - 1) - index;
              //console.log(bit)
              valor = bits[bit] === 1;
            } else if ( index >= 8 && index < 16 ) {
              let bit = (secondsByte.length - 1) - (index - (secondsByte.length));
              //console.log(bit)
              valor = secondsByte[bit] === 1;
            } else {
              // let bit = (bits.length - 1) - index;
              
              valor = primaryByte[7] === 1;
            }

            
  
            // if(name === "Algun_Air_On"){
            //   valor = bits[7] === 1;
            // }
           
            break;
        case "Byte":
          valor = Array.from(
            { length: 16 },
            (_, i) => (tagData[0] >> (15 - i)) & 1
          );

          //console.log(name);
            //console.log(offset)

            //console.log(valor.slice(8));
            //console.log(valor.slice(0,8));

            const byteOne = valor.slice(0,8);
            const byteSecond = valor.slice(8);

            if ( offsetSave !=  offset) {
              valor = parseInt(byteOne.join(''), 2).toString();
              offsetSave = offset
            } else {
              valor = parseInt(byteSecond.join(''), 2).toString();
              // offsetSave = offset
            }
          break;
        default:
          console.error(`Tipo de dato no soportado: ${tagType}`);
          return;
      }

      data[name] = valor;
    });


    arreglo2.forEach((tag) => {
      const offset = tag.offset - 2157;
      const count = tag.count;
      const tagType = tag.type;
      const name = tag.name;

      console.log(name)

      const tagData = registros2.slice(offset, offset + count);
      let valor;

      switch (tagType) {
        case "Int":
          valor = tagData[0];
          break;
        case "Real":
          valor = convertToReal(tagData);
          break;
        case "DWord":
          valor = (tagData[0] << 16) | tagData[1];
          if (tagData[0] == 65535 && tagData[1] == 65535) {
              valor = 4294967295;
          }
          break;
        case "Time_Of_Day":
          valor = convertToTimeOfDay(tagData);
          break;
        case "DInt":
          valor = convertToDint(tagData);
          break;
        case "Word":
          valor = tagData[0];
          break;
        case "Bool":
          const registro = tagData[0];
          const bits = Array.from(
            { length: 16 },
            (_, i) => (registro >> (15 - i)) & 1
          );
          //console.log(name);
          //console.log(bits)

          // console.log(name.slice(9));

          if(name.includes("Stat_Comm_MB") || name === "Algun_Air_On"){
            valor = bits[7] === 1;
          } else{
            valor = bits[6] === 1;
          }

          if(name.includes("TA") && name.includes("Stat_Comm")) valor = bits[7] === 1;
          if(name.includes("TA") && name.includes("Desactiva")) valor = bits[6] === 1;

          // valor = name === "Stat_Comm_MB" ? bits[7] === 1 : bits[6] === 1;
          break;
        case "Byte":
          valor = Array.from(
            { length: 16 },
            (_, i) => (tagData[0] >> (15 - i)) & 1
          );

          if (name === "Run_Rem") {
            valor = valor.at(-1) === 1;
          } else if (name === "Bloq_Auto_Hora") {
            valor = valor.at(-2) === 1;
          } else {
            let bits = valor.slice(0, 8);
            valor = parseInt(bits.join(''), 2).toString();
          }

          break;
        default:
          console.error(`Tipo de dato no soportado: ${tagType}`);
          return;
      }

      data[name] = valor;
    });

    return data;
  } catch (error) {
    console.error("Error al leer los registros", error);
    return null;
  }
}

async function readMultipleNodesForOPCUA(session, nodeIds) {

  let obj = {};

  // Define una matriz de objetos con los NodeIds que quieres leer
  const nodesToRead = nodeIds.map((nodeId) => ({
    nodeId: nodeId,
    attributeId: opcua.AttributeIds.Value,
  }));

  //console.log(nodesToRead)

  // Define una matriz de objetos para leer el DisplayName de cada nodo
  const nodesToReadName = nodeIds.map((nodeId) => ({
    nodeId: nodeId,
    attributeId: opcua.AttributeIds.DisplayName,
  }));

  // Realiza la lectura de todos los nodos en una sola llamada
  const dataValues = await session.read(nodesToRead);

  const nodeNames = await session.read(nodesToReadName);

  // Combina el nombre y el valor de cada nodo
  dataValues.forEach((dataValue, index) => {
    const nodeName = nodeNames[index].value.value.text; // Obtiene el nombre del nodo
    const nodeValue = dataValue.value.value; // Obtiene el valor del nodo

    obj[nodeName] = nodeValue
  });

  return obj;
}

module.exports = {
  convertToReal,
  convertToTimeOfDay,
  convertToDint,
  procesarTags,
  procesarTagsInfoGeneral,
  readMultipleNodesForOPCUA,
  procesarTags2
};
