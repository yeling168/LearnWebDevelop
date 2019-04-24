// {
//     todos:[{
//         text:'Learn React',
//         completed:true
//     },{
//         text:'Learn Redux',
//         completed:false
//     }],
//     visibilityFilter:'SHOW_COMPLETED'
// }

function addTodo(text) {
  return {
    type: "ADD_TODO",
    text
  };
}

//action types

export const ADD_TODO = "ADD_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";

export const SET_VISIBLITY_FILTER = "SET_VISIBILITY_FILTER";

//筛选代办事项列表的条件

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

//新增代办事项

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

//修改某个代办事项的状态，index是代办事项在todos数组中的位置索引

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

//筛选当前显示的代办事项列表

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBLITY_FILTER,
    filter
  };
}
