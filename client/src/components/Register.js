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
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
