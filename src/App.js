import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
} from './components/pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Login" component={Login} exact />
    </Switch>
  );
}

export default App;
