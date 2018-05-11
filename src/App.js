import React, { Component } from 'react';
import './App.css';
import Businesses from './components/Business/Businesses';
import Navigation from './components/Navigation';
import Title from './components/Business/Title';
import './assets/css/main.css';
import './assets/css/reg_login.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-content">
          <Title />
          <Businesses />
        </div>
        
     </div>
    )
  }
}

