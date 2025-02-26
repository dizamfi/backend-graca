const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  user: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  nombre: {
    type: String,
    required: true
  },

  apellido: {
    type: String,
    required: true
  },
  
  celular: {
    type: String,
    required: true
  },

  cargo: {
    type: String,
    required: true
  },

  foto: {
    type: String,
    required: false
  },

  unique_id: {
    type: String,
    required: true
  },

  estado: {
    type: String,
    required: true
  },

  ultconexion: {
    type: String,
    required: true
  }

});

module.exports = model('Usuario', UserSchema);