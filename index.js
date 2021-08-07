// index.js - server entry point
// import packages
const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const passport = require('passport');
// config vars
const PORT       = process.env.PORT       || 4000;
const DB         = process.env.DB         || 'mongodb://localhost/proyectofinal';
// app instance
const app = express();
// db connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.log(err));
// middleware
app.use(morgan('dev'));
app.use(express.json());
// auth
require('./config/passport')();
app.use(passport.initialize());
// serve frontend
app.use(express.static('public'));
// routers
app.use('/', require('./routes/juego'));
app.use('/', require('./routes/partida'));
app.use('/', require('./routes/puntaje'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
