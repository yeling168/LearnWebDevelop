import { observable } from "rxjs";

//reaction

//reacton是自动响应state变化的有副作用的函数。和computed value相同的地方是，它们
//都会因为state的变化而自动触发，所以computed value和reaction在MobX中都被称为derivation(衍生)
//derivation是指可以从state中衍生出来的任何东西，例如值或者动作。与computed value不同的是
//reaction产生的不是一个值，而是执行一些有副作用的动作，例如打印信息到控制台，发送昂罗请求
//根据React组件树更新DOM等。

//使用observer/@observer封装React组件是常用的创建reaction的方式。observer/@observer是mobx-react
//这个包提供的API，常用的使用方式有如下三种

observer((props, context) => ReactElement);

observer(
  class MyComponent extends React.Component {
    //...
  }
);

@observer
class MyComponent extends React.Component {
  //...
}

//observer的参数可以是一个React函数组件，也可以是一个React类组件，但对于类组件一般习惯使用
//@observer创建reaction。observer/@observer本质上是将组件的render方法转换成reaction
//当render依赖的state发送变化时，render方法会被重新调用

//除了observer/@observer外，常用的创建reaction的API还有autorun,reaction,when，这几个API直接作用于函数而不是组件

const todos = observable([
  {
    title: "Learn React",
    done: true
  },
  {
    title: "Learn MobX",
    done: false
  }
]);

//错误用法:只响应todos数组长度的变化，不会响应title属性的变化

const reaction1=reaction(
  ()=>todos.length,
  length=>console.log("reaction 1",todos.map(todo=>todo.title).join(","))
)


//正确用法:同时响应todos数组长度和title属性的变化

const reaction2=reaction(
  ()=>todos.map(todo=>todo.title),
  titles=>console.log("reaction 2:",titles.join(","))
);

todos.push({title:"Learn Redux",done:false});

//输出:
//reaction 2: Learn React, Learn MobX, Learn Redux
//reaction 1: Learn React, Learn MobX, Learn Redux

todos[0].title="Learn Something";
//输出:
//reaction 2:Learn Something,Learn MobX,Learn Redux