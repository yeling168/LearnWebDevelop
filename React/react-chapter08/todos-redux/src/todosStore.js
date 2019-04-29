import { createStore } from "redux";

import todoApp from "./todos";

let store = createStore(todoApp);

//创建store时还可以设置应用的初始状态

//initialState 代表初始状态

let store = createStore(todoApp, initialState);

//除了可以在创建store时设置应用的初始状态外，还可以在创建reducer时设置应用的初始状态，例如:

//初始状态是一个空数组

function todos(state = [], action) {
  //...
}

//初始状态等于SHOW_ALL

function visibilityFilter(state = "SHOW_ALL", action) {
  //...
}

//todos设置的初始状态是state=[]，visibilityFilter设置的初始状态是state='SHOW_ALL'，这样，当把这两个reducer合并成一个reducer时
//两个reducer的初始状态就构成了整个应用的初始状态

// {
//     todo:[],
//     visibilityFilter:'SHOW_ALL'
// }

//store创建完成后，就可以通过getState()获取当前应用的状态state

const state = store.getState();

//当需要修改state时，通过store的dispatch方法发送action。例如,发送一个新增待办事项的action

//定义action

function addTodo(text) {
  return { type: "ADD_TODO", text };
}

//发送action
store.dispath(addTodo("Learn about actions"));

//当todoApp这个reducer处理完成了addTodo这个action时，应用的状态会被更新，此时通过
//store.getState()可以得到最新的应用状态。为了能准确知道应用状态更新的时间，需要向store注册一个监听函数

let unsubscribe = store.subscribe(() => console.log(store.getState()));


//这样，每当应用状态更新时，最新的应用状态就会被打印出来。当需要取消监听时，直到调用store.subscribe返回的函数即可

unsubscribe()