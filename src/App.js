import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
              <i className="fa fa-connectdevelop"></i>
              <span>weConnect</span>
          </div>
        </div>
        <div className="side-nav">
        </div>
        <div className="main-content">
          <Business />
        </div>
      </div>
    )
  }
}

