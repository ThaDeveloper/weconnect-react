import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Business from './components/Business/Business';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import './assets/css/main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/business/:id" exact component={Business} />
        </Switch>
      </div>
    )
  }
}

