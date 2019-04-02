import React, { Component } from "react";

class Timer extends Component {
  //constructor 通常用于初始化组件的s t创e 以及绑定事件处理方法等工作。
  constructor(props) {
    super(props);
    console.log(this);
    //普通属性
    this.timer = null;
    this.state = {
      date: new Date()
    };
    this.updateDate = this.updateDate.bind(this);
  }

  //在组件被挂载到DOM 后调用， 且只会被调用一次。这时候已经可以获取到DOM 结构，因此
  //依赖DOM 节点的操作可以放到这个方法中。这个方法通常还会用于向服务器端请求数据。在这个
  //方法中调用this.s etState 会引起组件的重新渲染。
  compnentDidMount() {
    this.timer = setInterval(this.updateDate, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h1>{this.state.date.toString()}</h1>
      </div>
    );
  }
}

export default Timer;
