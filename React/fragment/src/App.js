import React ,{Component,Fragment}from "react";
import "./App.css";

const Temp = props => {
  return (
    <Fragment>
      <li>list 1</li>
      <li>list 2</li>
    </Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <ul className="App">
        <Temp />
      </ul>
    );
  }
}
export default App;
