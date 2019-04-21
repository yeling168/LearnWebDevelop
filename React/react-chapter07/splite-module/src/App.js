import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    //使用import动态导入moduleA.js
    import("./moduleA")
      .then(({ moduleA }) => {
        //使用moduleA
      })
      .catch(err => {
        //处理错误
      });
  };
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>加载moduleA</button>
        </div>
      )
  }
}

export default App;
