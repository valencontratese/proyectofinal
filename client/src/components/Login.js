import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
    axios.post('/api/users/login', credentials)
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
      <h1>Ingresar</h1>
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
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
