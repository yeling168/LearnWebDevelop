import React, { Component } from "react";

function withPersistentData(WrappedComponent) {
  //componentWillMount
  //这个方法在组件被挂载到DOM 前调用，且只会被调用一次。这个方法在实际项目中很少会用到，因为可以在该方法中执行的工作都可以提前到constructor 中。在这个方法中调用this.setState不会引起组件的重新渲染。
  return class extends Component {
    componentWillMount() {
      localStorage.setItem("data", "Tom");
      let data = localStorage.getItem("data");
      this.setState({ data });
    }

    render() {
      //通过{...this.props}把传递给当前组件的属性传递给被包装的组件
      return <WrappedComponent data={this.state.data} {...this.props} />;
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
