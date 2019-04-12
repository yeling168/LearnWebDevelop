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
    handleValueChange(event) {
      this.setState({
        value: event.target.value
      });
    }
    render() {
      //return <div>{this.props.data}</div>;
      //newProps保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      };
      //通过{...this.props}把传递给当前组件的属性传递给被包装的组件
      return <WrappedComponent {...this.props} {...newProps} />;
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