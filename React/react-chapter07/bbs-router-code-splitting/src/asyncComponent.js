import React, { Component } from "react";

// asyncComponent 接收一个函数参数importComponent, importComponent 内通过import()语法
// 动态导入模块。在AsyncComponent被挂载后，importComponent就会被调用，进而触发动态导入
// 模块的动作。

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null //动态加载的组件
      };
    }

    componentDidMount() {
      importComponent().then(mod => {
        this.setState({
          //同时兼容ES6 和CommonJS 的模块
          component: mod.default ? module.default : mod
        });
      });
    }

    render() {
      //渲染动态加载的组件
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
