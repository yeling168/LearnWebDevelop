import React, { Component } from "react";
import MyComponentWithPersistentData from './Component/WithPersistentDataProps';
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
