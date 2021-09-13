// routes/puntaje.js - puntaje router
// import packages
const express = require('express');
const passport = require('passport');
// router instance
const router = express.Router();
// import controller
const controller = require('../controllers/puntaje');
// API endpoints
router
  .route('/api/puntajes')
  .get(passport.authenticate('jwt', { session: false }), controller.all)
  .post(passport.authenticate('jwt', { session: false }), controller.create);

 
// export
module.exports = router;
