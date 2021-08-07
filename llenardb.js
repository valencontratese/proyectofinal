// populatedb.js

// necesitamos importar mongoose
const mongoose = require('mongoose');

// importar el modelo de usuario
const Juego = require('./models/Juego');

// la URI de la db
const db = 'mongodb://localhost/proyectofinal';

// array de usuarios para ingresar a la db
const juegos = [
  {
    id: 1,
    nombre: 'Chinchón',
    cantidadJugadores: '0',
    separador: '0',
    puntaje: '100',
    gano: '0',
    notacion: '0'
  },
  {
    id: 2,
    nombre: 'Escoba de 15',
    cantidadJugadores: '0',
    separador: '0',
    puntaje: '21',
    gano: '1',
    notacion: '5'
  },
  {
    id: 3,
    nombre: 'Truco',
    cantidadJugadores: '2',
    separador: '1',
    puntaje: '30',
    gano: '1',
    notacion: '5'
  }
];

// conectarse a la db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    Juego.insertMany(juegos, (err, juegos) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${juegos.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
