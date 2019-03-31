import React, { Component } from "react";

import ErrorBoundary from "./component/ErrorBoundary";

const Profile = ({ user }) => <div>name:{user.name}</div>;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "react"
      }
    };
  }

  //将user设置为null，模拟异常
  onClick = () => {
    this.setState({
      user: {}
      //user: null
    });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    );
  }
}

export default App;
