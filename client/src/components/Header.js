import Navbar from './Navbar';

const Header = props => {
  // props
  const { user, setUser } = props;
  const { firstName } = user;
  // render
  return (
    <div className="Header">
      <h3>ScoreBoard</h3>
      {user && <p>Hola de nuevo, {firstName}</p>}
      <Navbar user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
