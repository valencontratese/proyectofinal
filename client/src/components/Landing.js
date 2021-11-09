import { Link } from 'react-router-dom';

const Landing = props => (
  <div className="Landing">
    
    <div className="box">
    <center>
    <h1 className="titulo">Tabla de puntos</h1>
    <div className="sub-box">  
    <Link to="/login">Ingresar</Link>
    <br></br>
    <br></br>
    <br></br>
    <Link className="primary" to="/register">Registrarse</Link>
    </div>
    </center>
    </div>
  
    </div>
 
);

export default Landing;
