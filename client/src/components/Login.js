import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import cartas from './poker.png';

const Login = props => {
  // hooks
  const history = useHistory();
  // form state
  const [credentials, setCredentials] = useState({
    username: '', password: ''
  });
  const { username, password } = credentials;
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    // call API and get JWT
    axios.post('http://localhost:4000/api/users/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // blank form
        setCredentials({
          username: '', password: ''
        });
        // go to home
        history.push('/dashboard');
      });
  };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };
  // render
  return (
    <div className="Login">
      
      <center>
      <form onSubmit={handleSubmit} className="Ingreso">
        <center>
        <img src={cartas} className="cartas"/>

        
        <h1>Inicio de Sesion</h1>
        

        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          className="input-box"
          placeholder=" Usuario"
          />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="input-box"
          placeholder=" Contraseña"
        />
        
        <button type="submit" className="boton">Ingresar</button>
        </center>
      </form>
      </center>
    </div>
  );
};

export default Login;
