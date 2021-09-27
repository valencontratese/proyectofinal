// populatedb.js

// necesitamos importar mongoose
const mongoose = require('mongoose');

// importar el modelo de usuario
const Juego = require('./models/User');

// la URI de la db
const db = 'mongodb://localhost/proyectofinal';
//const db = 'mongodb+srv://proyectoFinal:proyectoFinal@cluster0.eru4d.mongodb.net/proyectofinal?retryWrites=true&w=majority';

// array de usuarios para ingresar a la db
const juegos = [
  {
    username: 'usuario',
  password: '',
  firstName: 'Nombre',
  lastName: 'Apellido',
  role: 'admin'
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
