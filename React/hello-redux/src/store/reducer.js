//reducer是一个纯函数，接收state和action
const defaultState = {
  inputValue: "",
  list: []
};

//state指的是store上一次存储的数据
//reducer可以接受state，但是绝不能修改state，所以才需要拷贝新的
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    //改变以前store里面的inputValue
    //拷贝以前的state，深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    //state的数据不可改变
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log("clickButton", newState);
    //返回新的state给store
    return newState;
  }

  if (action.type === "delete_todo_item") {
    //state的数据不可改变
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    //返回新的state给store
    return newState;
  }
  //console.log(state, action);
  return state;
};
