import { connect } from "react-redux";

import TodoList from "./TodoList";

const VisibleTodoList = connect()(TodoList);

//这里创建了一个容器组件VisibleTodoList，可以把组件TodoList和Redux连接起来。但是，这个VisibleTodoList只是一个空壳
//并没有负责任何真正的业务逻辑。根据Redux的数据流过程，VisibleTodo需要承担两个工作
//1)从Redux的store中获取展示组件所需的应用状态
//2)把展示组件的状态变化同步到Redux的store中

//通过为connect传递两个参数可以让VisibleTodoList具备这两个功能

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

//mapStateToProps 和mapDispatchToProps 的类型都是函数，前者负责从全局应用状态state中取
//出所需数据，映射到展示组件的props，后者负责把需要用到的action 映射到展示组件的props上。