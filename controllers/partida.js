// controllers/partida.js - partida controller
// import model
const Partida = require('../models/Partida');
// exports
// GET /api/partidas
exports.all = (req, res, next) => {
  Partida
    .find()
    .exec((err, partidas) => {
      res.status(200).json(partidas);
    });
};
// GET /api/partidas/:id
exports.one = (req, res, next) => {
  Partida
    .findById(req.params.id)
    .exec((err, partida) => {
      res.status(200).json(partida);
    });
};
// POST /api/partidas
exports.create = (req, res, next) => {
  const { title, subject, topic, difficulty, questions } = req.body;
  const partida = new Partida({
    title, subject, topic, difficulty, questions
  });
  partida.save((err, partida) => {
    res.status(201).json(partida);
  });
};
// DELETE /api/partidas/:id
exports.delete = (req, res, next) => {
  Partida
    .findByIdAndRemove(req.params.id)
    .exec((err, partida) => {
      res.status(200).json({ msg: 'Partida deleted' });
    });
};
// PUT /api/partidas/:id
exports.update = (req, res, next) => {
  const { title, subject, topic, difficulty, questions } = req.body;
  const partida = { title, subject, topic, difficulty, questions };
  const options = {
    new: true,
    omitUndefined: true
  };
  Partida
    .findByIdAndUpdate(req.params.id, partida, options)
    .exec((err, partida) => {
      res.status(200).json(partida);
    });
};
