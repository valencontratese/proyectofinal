// controllers/user.js - user controller
// import packages
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import model
const User = require('../models/User');
// exports
// GET /api/users
exports.all = (req, res, next) => {
  User
    .find()
    .exec((err, users) => {
      res.status(200).json(users);
    });
};
// GET /api/users/:id
exports.one = (req, res, next) => {
  User
    .findById(req.params.id)
    .exec((err, user) => {
      res.status(200).json(user);
    });
};
// GET /api/users/me
exports.me = (req, res, next) => {
  res.status(200).json(req.user);
};
// POST /api/users
exports.create = (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;
  const user = new User({
    username, password, firstName, lastName
  });
  // hash password with bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      user.save((err, user) => {
        res.status(201).json(user);
      });
    });
  });
};
// POST /api/users/login
exports.login = (req, res, next) => {
  const { _id, username, role } = req.user; // destructure
  const user = { _id, username, role }; // token payload
  // sign token
  const token = jwt.sign({ user }, process.env.JWT_SECRET || 'I am Groot');
  res.status(200).json({ token });
};
// DELETE /api/users/:id
exports.delete = (req, res, next) => {
  User
    .findByIdAndRemove(req.params.id)
    .exec((err, user) => {
      res.status(200).json({ msg: 'User deleted' });
    });
};
// PUT /api/users/:id
exports.update = (req, res, next) => {
  const { firstName, lastName, role } = req.body;
  const user = { firstName, lastName, role };
  const options = {
    new: true,
    omitUndefined: true
  };
  User
    .findByIdAndUpdate(req.params.id, user, options)
    .exec((err, user) => {
      res.status(200).json(user);
    });
};
