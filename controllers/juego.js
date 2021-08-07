// controllers/juego.js - juego controller
// import packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import model
const Juego = require('../models/Juego');
// exports
// GET /api/juegos
exports.all = (req, res, next) => {
  Juego
    .find()
    .exec((err, juegos) => {
      res.status(200).json(juegos);
    });
};
// GET /api/juegos/:id
exports.one = (req, res, next) => {
  Juego
    .findById(req.params.id)
    .exec((err, juego) => {
      res.status(200).json(juego);
    });
};
// GET /api/juegos/me
exports.me = (req, res, next) => {
  res.status(200).json(req.juego);
};
// POST /api/juegos
exports.create = (req, res, next) => {
  const { juegoname, password, firstName, lastName } = req.body;
  const juego = new Juego({
    juegoname, password, firstName, lastName
  });
  // hash password with bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(juego.password, salt, (err, hash) => {
      if (err) throw err;
      juego.password = hash;
      juego.save((err, juego) => {
        res.status(201).json(juego);
      });
    });
  });
};
// POST /api/juegos/login
exports.login = (req, res, next) => {
  const { _id, juegoname, role } = req.juego; // destructure
  const juego = { _id, juegoname, role }; // token payload
  // sign token
  const token = jwt.sign({ juego }, process.env.JWT_SECRET || 'I am Groot');
  res.status(200).json({ token });
};
// DELETE /api/juegos/:id
exports.delete = (req, res, next) => {
  Juego
    .findByIdAndRemove(req.params.id)
    .exec((err, juego) => {
      res.status(200).json({ msg: 'Juego deleted' });
    });
};
// PUT /api/juegos/:id
exports.update = (req, res, next) => {
  const { firstName, lastName, role } = req.body;
  const juego = { firstName, lastName, role };
  const options = {
    new: true,
    omitUndefined: true
  };
  Juego
    .findByIdAndUpdate(req.params.id, juego, options)
    .exec((err, juego) => {
      res.status(200).json(juego);
    });
};
