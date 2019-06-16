import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
export default class Root extends React.Component {
  //定义一些action

  //增加
  inc() {
    return { type: "ADD" };
  }

  //减少
  dec() {
    return { type: "SUB" };
  }
  componentDidMount() {
    //store用来管理所有的state，store的创建依赖于reducer
    //reducer用来管理所有的action
    //初始化，传递的参数是reducer
    var store = createStore(reducer);
    console.log(store);
    //getState():获取store中存储的所有state
    console.log(store.getState());
    //dispatch:触发,此处触发两次加法
    store.dispatch(this.inc());
    console.log(store.getState());
    store.dispatch(this.inc());
    console.log(store.getState());

    //再触发一次减法
    store.dispatch(this.dec());
    console.log(store.getState());
  }

  render() {
    return <div>REDUX</div>;
  }
}

ReactDOM.render(<Root />, document.getElementById("mainContainer"));
