// imports
import { useState } from 'react';
// components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  // hooks
  // state
  const [user, setUser] = useState(false);
  // render
  return (
    <div className="App">
      <Header setUser={setUser} user={user} />
      <Main user={user} setUser={setUser} />
      <Footer />
    </div>
  );
};

export default App;
