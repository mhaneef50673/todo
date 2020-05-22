import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
  LandingPage,
} from './components/pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
