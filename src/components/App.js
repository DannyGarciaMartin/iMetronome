import React, { Component } from 'react';
import NavigationBar from './nav';
import Biography from './bio';

import {
  Switch,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/biography">
            <Biography />
          </Route>
          <Route path="/cryptography">
            <div>Cryptography</div>
          </Route>
          <Route path="/library">
            <div>Libraries</div>
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </div>
    );
  }
};
