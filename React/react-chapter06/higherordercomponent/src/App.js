import React, { Component } from "react";
//import MyComponentWithPersistentData from './Component/WithPersistentDataProps';
//import ComponentWithControlledState from './Component/WithPersistentDataStatus';
//import MyComponent1WithPersistentData from './Component/WithPersistentDataParaKey';
//import MyComponent2WithPersistentData from './Component/WithPersistentDataParaKey';
import MyComponent1WithPersistentData from './Component/WithPersistentDataParaHOC';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyComponent /> */}
        {/* <MyComponentWithPersistentData/> */}
        {/* <ComponentWithControlledState/> */}
        {/* <MyComponent2WithPersistentData/> */}
        <MyComponent1WithPersistentData/>
      </div>
    );
  }
}

export default App;