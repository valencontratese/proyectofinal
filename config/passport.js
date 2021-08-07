// config/passport.js - config strategies for passport
// import packages
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
// export strategies
module.exports = () => {
  // passport local strategy
  const LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) throw err;
        if (!res) return done(null, false);
        else return done(null, user);
      });
    });
  }));
  // passport jwt strategy
  const passportJwt = require('passport-jwt');
  const JwtStrategy = passportJwt.Strategy;
  passport.use(new JwtStrategy({
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'I am Groot'
  }, (jwt_payload, done) => {
    User.findById(jwt_payload.user._id).exec((err, user) => {
      if (user) return done(null, user);
      else return done(null, false);
    });
  }));
};
