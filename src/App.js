import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business';
import Navigation from './components/Navigation';
import './components/main.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        
        <Business />
        
     </div>
    )
  }
}

