import React, { Component, Fragment } from "react";
import "./App.css";

const PropsLogger = WrapperComponent => {
  return class extends Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
};

const Hello = PropsLogger(props => {
  return <p>Hello {props.name}</p>;
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="rails365" />
      </div>
    );
  }
}
export default App;
