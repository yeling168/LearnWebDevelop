import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

//之前actionCreators返回的内容都是函数，这个函数(return)返回一个对象
//getTodoList是一个函数，函数的使用必须调用
//当调用getTodoList生成的内容是一个函数时，这个函数能接收到dispatch参数
//使用redux-thunk之后，action可以是一个函数，这个函数(return)可以返回一个函数，处理逻辑,

export const getTodoList = () => {
  return dispatch => {
    axios.get("http://localhost:3004/posts").then(res => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
      console.log(data);
    });
  };
};
