//处理visibilityFilter的reducer
import { SET_VISIBLITY_FILTER } from "./action";
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

//totoAPP简化为:
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}

//注意，每个拆分的reducer只接收它负责的state中的部分属性，而不再是完整的state对象。todos
//接收state.todos,visibilityFilter接收state.visibilityFilter.这样，当应用比较复杂时，就可以拆分出多个
//reducer保存到独立的文件中。
