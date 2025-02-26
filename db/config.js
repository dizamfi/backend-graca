const mongoose = require('mongoose');

const connectionDB = async() => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/dbGraca');
    console.log('DB Conectado');
  } catch (error) {
    console.log(error);
    throw new Error('Error al momento de inicializar la DB');
  }
};

module.exports = {
  connectionDB
}