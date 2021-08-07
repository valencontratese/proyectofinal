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
  id: number,
  juego: {
    type: Schema.Types.ObjectId,
    ref: 'Juego'
  },
  cantJugadores: number
});
// model
const Partida = mongoose.model('Partida', PartidaSchema);
// export
module.exports = Partida;
