// models/Partida.js - Partida model
// import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// QuestionSchema
const QuestionSchema = new Schema({
  description: String,
  options: [String],
  correctAnswer: Number
});
// PartidaSchema
const PartidaSchema = new Schema({
  id: Number,
  juego: {
    type: Schema.Types.ObjectId,
    ref: 'Juego'
  },
  cantJugadores: Number
});
// model
const Partida = mongoose.model('Partida', PartidaSchema);
// export
module.exports = Partida;
