import { Link } from 'react-router-dom';

const Landing = props => (
  <div className="Landing">
    <h1>la35trivia</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies, diam quis cursus fermentum, diam risus luctus ligula, quis mollis diam turpis ut purus.</p>
    <Link className="primary" to="/register">Registrarse</Link>
    <Link to="/login">Ya tengo usuario</Link>
  </div>
);

export default Landing;
