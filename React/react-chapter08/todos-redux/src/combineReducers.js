//redux还提供了一个combineReducer函数
import { combineReducers } from "redux";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

//它等价于
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}

//还可以为combineReducers接收的参数对象指定和reducer的函数名不同的key值
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
});

//它等价于
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  };
}

//可见,combineReducers 传递给每个reducer的state中的属性取决于它的参数对象的key值。