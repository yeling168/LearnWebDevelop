//有了state，我们再为state编写reducer。reducer是一个纯函数，它接收两个参数
//当前的state和action，返回新的state。reducer函数签名如下：

//{previousState,action}=>newState;

//我们先来创建一个最基本的reducer

import { VisibilityFilters } from "./actions";
import { SET_VISIBLITY_FILTER } from "./action";

const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
};

//reducer

function todoApp(state = initialState, action) {
  return false;
}

//todoApp这个reducer不做任何事情，对于任意action做出的响应都是直接返回一个state
//这里需要注意state初始值的设置，当todoApp第一次被调用时，state等于undefined，这时会用
//initialState初始化state。现在为todoApp添加处理type等于SET_VISIBILITY_FILTER的action
//要做出的事情是改变state的visibilityFilter

/* function todoApp(state=initialState,action){
    switch (action.type){
        case SET_VISIBLITY_FILTER:
          return {...state,visibilityFilter:action.filter}
        default:
          return state  
    }
} */

//注意，这里使用ES的扩展运算符(...)创建的state对象，避免直接修改之前的state对象。
//还有一种常见的写法是使用ES6的Object.assign()函数

/* function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
} */

//下面再来处理另外两个action，同样需要保证每次返回的state对象都是一个新的对象

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    //新增代办事项
    case ADD_TODO:
      //使用了ES6的扩展语法
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    //修改代办事项的状态(已完成/未完成)
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
