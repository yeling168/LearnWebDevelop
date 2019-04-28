//处理todos的reducer
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{ text: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
