const Puntaje = require('../models/Puntaje');

exports.all = (req, res, next) => {
  Puntaje
    .find()
    .populate('quiz', 'title')
    .populate('user', 'username')
    .exec((err, puntajes) => {
    res.status(200).json(puntajes);
  });
};

exports.userPuntaje = (req, res, next) => {
  Puntaje
    .find({ user: req.params.user })
    .populate('quiz', 'title')
    .populate('user', 'username')
    .sort({ quiz: 1, score: -1 })
    .exec((err, puntajes) => {
      res.status(200).json(puntajes);
    });
};

exports.create = (req, res, next) => {
  const score = new Puntaje({
    user: req.user._id,
    quiz: req.body.quiz,
    score: req.body.score
  });
  score.save((err, score) => {
    res.status(201).json(score);
  });
};
