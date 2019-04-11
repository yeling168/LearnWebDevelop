import React, { Component } from "react";

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
      this.handleValueChange = this.handleValueChange.bind(this);
    }
  };
}

class MyComponent extends Component {
  render() {
    return <div>{this.props.data}</div>;
  }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent);

export default MyComponentWithPersistentData;
