import { Link } from 'react-router-dom';

const Landing = props => (
  <div className="Landing">
    <h1>ScoreBoard </h1>
    <p>Tabla de puntos.</p>
    <center>
    <Link className="primary" to="/register">Registrarse</Link>
    <br></br>
    <br></br>
    <br></br>
    <Link to="/login">Ingresar</Link>
    </center>
  </div>
);

export default Landing;
