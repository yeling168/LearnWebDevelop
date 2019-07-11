import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
//import store from './store/index';
//也可以写成
import store from "./store";

//全局的数据
// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires."
// ];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    //组件去订阅store，store的数据只要发生改变，subscribe里面的函数就可以自动被执行
    //只要store发生了改变，handleStoreChange事件就会被自动执行一次
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
    console.log(e.target.value);
  }

  handleStoreChange() {
    console.log("store changed");
    this.setState(store.getState());
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginRight: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
        />
        <Button type="primary">提交</Button>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
