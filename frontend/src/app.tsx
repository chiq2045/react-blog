import { NavBar } from 'components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

export const App = () => (
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          Blog
        </Route>
      </Switch>
    </Router>
  </div>
);
