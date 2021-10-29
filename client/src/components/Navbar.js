import { Link, useHistory } from 'react-router-dom';

const Navbar = props => {
  // props
  const { user, setUser } = props;
  const history = useHistory();
  // handlers
  const handleClick = e => {
    localStorage.removeItem('token');
    setUser(false);
    history.push('/');
  };
  // render
  return (
    <div className="Navbar">
      <ul>
      {user
            ? ''
            : <Link to="/register">Registrarse</Link>}
        <li>
          
        </li>
        <li>
          {user
            ? <button onClick={handleClick}>Logout</button>
            : <Link to="/login">Ingresar</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
