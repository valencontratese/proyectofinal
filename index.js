// index.js - server entry point
// import packages
const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const passport = require('passport');
// config vars
const PORT       = process.env.PORT       || 4000;
const DB         = process.env.DB         || 'mongodb://localhost:27017/proyectofinal';
// app instance
const app = express();
const cors = require('cors');



const corsOptions = {
    origin: 'http://localhost:3000', //servidor que deseas que consuma o (*) en caso que sea acceso libre
    credentials: true
  }
  
// db connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(x => {
  console.log(
    `Connected to Mongo! Database name: "${x.connections[0].name}"`
  );
})
.catch(err => {
  console.error("Error connecting to mongo", err);
});
 
// middleware
app.use(morgan('dev'));
app.use(express.json());
// auth
require('./config/passport')();
app.use(passport.initialize());
// serve frontend
app.use(express.static('public'));

app.use(cors(corsOptions));
// routers
app.use('/', require('./routes/juego'));
app.use('/', require('./routes/partida'));
app.use('/', require('./routes/puntaje'));
app.use('/', require('./routes/user'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


