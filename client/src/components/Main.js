import { Route, Switch } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Landing from './Landing';

const Main = props => {
  const { user, setUser } = props;
  return (
    <div className="Main">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard user={user} setUser={setUser} />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
