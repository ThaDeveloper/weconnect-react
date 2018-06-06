import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Business from './components/Business/Business';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import './assets/css/main.css';
import './assets/css/auth.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/business/:id" exact component={Business} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </div>
    )
  }
}

