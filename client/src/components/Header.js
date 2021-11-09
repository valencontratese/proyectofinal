import Navbar from './Navbar';
import logo from './ScoreBoard..png';

const Header = props => {
  // props
  const { user, setUser } = props;
  const { firstName } = user;
  // const logo = require('./ScoreBoard.jpeg'); 
  // render
  return (
    <div className="Header">
      <img src={logo} className="logo"/>
      {user && <p>Hola de nuevo, {firstName}</p>}
      <Navbar user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
