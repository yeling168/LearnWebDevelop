import React, { Component } from "react";
import "antd/dist/antd.css";
//import store from './store/index';
//也可以写成
import store from "./store";
import {
  getTodoList,
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";

import TodoListUI from "./TodoListUI";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    //组件去订阅store，store的数据只要发生改变，subscribe里面的函数就可以自动被执行
    //只要store发生了改变，handleStoreChange事件就会被自动执行一次
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
    //button的点击事件
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    console.log(e.target.value);
  }

  handleStoreChange() {
    console.log("store changed");
    this.setState(store.getState());
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // };
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    //alert(index);
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // };
    const action = getDeleteItemAction(index);
    //把当前store的内容和action一起发送给reducer，reducer就可以接收到之前的数据和action
    store.dispatch(action);
  }

  componentDidMount() {
    //创建一个action，使它等于生成的action
    const action = getTodoList();
    store.dispatch(action);
    // axios.get('http://localhost:3004/posts').then((res)=>{
    //   const data=res.data;
    //   const action=initListAction(data);
    //   store.dispatch(action);
    //   //console.log(res);
    // })
  }
  render() {
    //TodoListUI是TodoList的子组件，可以通过属性的方式拿数据
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

export default TodoList;
