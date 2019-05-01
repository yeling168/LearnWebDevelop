function getVisibleTodos(todos, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}

//ownProps是组件的props对象

function mapStateToProps(state, ownProps) {
  //...
}

//toggleTodo(id)返回一个action

function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: function(id) {
      dispatch(toggleTodo(id));
    }
  };
}

