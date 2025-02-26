const { Schema, model } = require('mongoose');

const HistoryEstadOPSSchema = Schema({
    date: {
        type: Date,
        //required: true
    },

    piscina: {
        type: String,
        required: true
    },

    estado: {
        type: Number,
        required: true
    },

    horasTrab: {
        type: Number,
        required: true
    }

});

module.exports = model('HistoryEstadoPS', HistoryEstadOPSSchema);



// const mongoose = require("mongoose");

// const historyEstadoPSSchema = new mongoose.Schema({
//   piscina: {
//     type: String,
//     required: true,
//     index: true, // Para búsquedas rápidas por piscina
//   },
//   fecha: {
//     type: String, // Guardamos como "YYYY-MM-DD"
//     required: true,
//     index: true, // Para búsquedas rápidas por fecha
//   },
//   trabajoPiscinaOn: {
//     type: Number, // Porcentaje de trabajo en el día
//     required: true,
//   },
//   trabajoPiscinaOff: {
//     type: Number, // Porcentaje de descanso en el día
//     required: true,
//   },
//   usoPromedio: {
//     type: Number, // Promedio de uso en el día
//     required: true,
//   },
//   usoPorHora: {
//     type: [Number], // Array con 24 valores (uno por cada hora del día)
//     required: true,
//     validate: [(arr) => arr.length === 24, "Debe contener 24 valores"],
//   },
// }); // Agrega createdAt y updatedAt automáticamente

// const historyEstadoPS = mongoose.model("historyEstadoPS", historyEstadoPSSchema);

// module.exports = historyEstadoPS;