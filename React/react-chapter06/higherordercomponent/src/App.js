import React, { Component } from "react";
//import MyComponentWithPersistentData from './Component/WithPersistentDataProps';
import ComponentWithControlledState from './Component/WithPersistentDataStatus'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent /> */}
        {/* <MyComponentWithPersistentData/> */}
        <ComponentWithControlledState/>
      </div>
    );
  }
}

export default App;
