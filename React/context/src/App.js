import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Topic = props => {
  return (
    <div>
      <Comment />
    </div>
  );
};

const Comment = (props, context) => {
  return <div>{context.color}</div>;
};

Comment.contextTypes = {
  color: PropTypes.string
};

class App extends Component {
  //定义要传递的数据
  getChildContext() {
    return {
      color: "red"
    };
  }
  render() {
    return (
      <div className="App">
        <Topic />
      </div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string
};

export default App;
