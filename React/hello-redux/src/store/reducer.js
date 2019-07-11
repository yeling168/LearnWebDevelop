//reducer是一个纯函数，接收state和action
const defaultState = {
  inputValue: "123",
  list: [1,2]
};
export default (state = defaultState, action) => {
  return state;
};
