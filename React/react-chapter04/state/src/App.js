import React, { Component } from 'react';
import Hello from './component/Hello';
import Timer from './component/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Timer/>
      </div>
    );
  }
}

export default App;
