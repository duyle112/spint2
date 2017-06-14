import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeZone from "./components/TimeZone.js"
let url = require('./screen-play.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeZone url={url}/>
      </div>
    );
  }
}

export default App;
