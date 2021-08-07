// routes/partida.js - partida router
// import packages
const express = require('express');
const passport = require('passport');
// import controller
const controller = require('../controllers/partida');
// auth middleware
const auth = require('../middlewares/auth');
// router instance
const router = express.Router();
// API endpoints
router
  .route('/api/partidas')
  .get(passport.authenticate('jwt', { session: false }), controller.all)
  .post(
    passport.authenticate('jwt', { session: false }),
    auth.checkIsTeacherOrAdmin,
    controller.create);

router
  .route('/api/partidas/:id')
  .get(passport.authenticate('jwt', { session: false }), controller.one)
  .delete(passport.authenticate('jwt', { session: false }), controller.delete)
  .put(passport.authenticate('jwt', { session: false }), controller.update);
// export
module.exports = router;
