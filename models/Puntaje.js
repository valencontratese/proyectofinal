const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuntajeSchema = new Schema({
  partida: {
    type: Schema.Types.ObjectId,
    ref: 'Partida'
  },
  jugador: String,
  puntaje: Number
});

const Puntaje = mongoose.model('Puntaje', PuntajeSchema);

module.exports = Puntaje;
