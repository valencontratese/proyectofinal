// models/Juego.js - Juego model
// import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// JuegoSchema
const JuegoSchema = new Schema({
  id: Number,
  nombre: String,
  cantidadJugadores: String,
  separador: Boolean,
  puntaje: String,
  gano: Boolean
});
// model
const Juego = mongoose.model('Juego', JuegoSchema);
// export
module.exports = Juego;
