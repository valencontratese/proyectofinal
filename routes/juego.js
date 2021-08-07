// routes/juego.js - juego router
// import packages
const express = require('express');
const passport = require('passport');
// import controller
const controller = require('../controllers/juego');
// auth middleware
const auth = require('../middlewares/auth');
// router instance
const router = express.Router();
// API endpoints
router
  .route('/api/juegos')
  .get(
    passport.authenticate('jwt', { session: false }),
    auth.checkIsAdmin,
    controller.all)
  .post(controller.create);

router
  .route('/api/juegos/me')
  .get(passport.authenticate('jwt', { session: false }), controller.me);


router
  .route('/api/juegos/login')
  .post(passport.authenticate('local', { session: false }), controller.login);

router
  .route('/api/juegos/:id')
  .get(
    passport.authenticate('jwt', { session: false }),
    auth.checkIsAdmin,
    controller.one)
  .delete(
    passport.authenticate('jwt', { session: false }),
    auth.checkIsAdmin,
    controller.delete)
  .put(
    passport.authenticate('jwt', { session: false }),
    auth.checkIsAdmin,
    controller.update);
// export
module.exports = router;
