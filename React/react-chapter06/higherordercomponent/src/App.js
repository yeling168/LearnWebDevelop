import React, { Component } from "react";
import MyComponent from "./Component/MyComponent";
import MyComponentWithPersistentData from './Component/WithPersistentData';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent /> */}
        <MyComponentWithPersistentData/>
      </div>
    );
  }
}

export default App;
