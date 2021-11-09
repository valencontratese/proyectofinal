import { useState } from 'react';
import axios from 'axios';

const Register = props => {
  // state
  const [user, setUser] = useState({
    username: '', password: '', firstName: '', lastName: ''
  });
  const { username, password, firstName, lastName } = user;
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    // API call
    axios.post('/api/users', user)
      .then(res => {
        // blank form
        setUser({
          username: '', password: '', firstName: '', lastName: ''
        });
      });
  };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // render
  return (
    <div className="Register">
     <center>
 
      <form onSubmit={handleSubmit} className="Registro">
      <h1 className="Titulos-Box">Registrarse</h1>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder=" Nombre"
          className="input-box"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder=" Apellido"
          className="input-box"
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder=" Usuario"
          className="input-box"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder=" Contraseña"
          className="input-box"
        />  
        <button type="submit" className="boton">Ingresar</button>
      
      </form>
      </center>
    </div>
  );
};

export default Register;
