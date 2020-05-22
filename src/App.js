import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
} from './components/pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
