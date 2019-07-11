//reducer是一个纯函数，接收state和action
const defaultState = {
  inputValue: "123",
  list: [1, 2]
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
  console.log(state, action);
  return state;
};
