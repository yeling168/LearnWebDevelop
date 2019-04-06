import React, { Component } from 'react';
import Hello from './component/Hello';
import Timer from './component/Timer';
import Container from './component/AutoFocusTextInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Timer/>
        <Container/>
      </div>
    );
  }
}

export default App;
