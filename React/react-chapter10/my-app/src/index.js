/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); */

import React, { Component } from "react";

import ReactDOM from "react-dom";

import { observer } from "mobx-react";

import { observable, computed, action } from "mobx";

//MobX可以使用object、array、class等任意数据结构定义可观测的state。例如，使用class定义一个可观测的state Todo代表一项任务

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

//这里使用的@observable就属于装饰器语法，你也可以不使用它，直接使用Mobx提供的函数定义一个可观测的状态。例如，下面是用ES5语法实现的等价代码:

import { extendObservable } from "mobx";

function Todo() {
  this.id = Math.random();
  extendObservable(this, {
    titile: "",
    finished: false
  });
}

//显然，使用装饰器的代码更为清晰简洁， MobX 使用了大量装饰器语法，这也是官方推荐的方
//式，本书也是使用装饰器语法完成MobX的项目代码。经过@observable的修饰之后，Todo的title
//和finished 两个属性变成可观测状态(注意属性和状态的概念，状态对象的属性也是状态)，它们
//的改变会自动被观察者获知。id没有被@observable 修饰，所以只是一个普通属性。

//基于可观测的state可以创建computed value。例如，todos中需要获取未完成的任务总数，使
//用@computed定义一个unfinishedTodoCount的computed value ，计算未完成的任务总数：

import { observable, computed } from "mobx";

class TodoList {
  @observable todos = [];
  //根据todos和todo.finished两个state，创建computed value
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

//这里又定义了一个新的state:TodoList。TodoList的属性todos是一个可观测的数组，它的元素
//是前面定义的Todo的实例对象。当todos中的元素数量发生变化或某一个todo元素的finised
//属性变化时，unfinishedTodoCount都会自动更新(更严谨的说法是，在需要时才自动更新，后面还会介绍)


//除了computed value会响应state的变化外，reaction也会响应state的变化，不同的是，reaction
//并不创建一个值，而是用来执行有副作用的逻辑，例如输出日志到控制台，发送网络请求，根据
//React组件树更新DOM等。mobx-react包提供了@observe装饰器和observer函数，可以将React组件封装成reaction，自动根据
//state的变化更新组件UI。例如，创建TodoListView和TodoView两个组件(也是两个reaction)代表应用的UI

import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { action } from 'mobx';

//使用@observer装饰器创建reaction

@observer
class TodoListView extends Component{
  render(){
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo=>(
            <TodoView todo={todo} key={todo.id}/>
          ))}
        </ul>
        Tasks left:{this.props.todoList.unfinishedTodoCount}
      </div>
    )
  }
}

//使用observer函数创建reaction

const TodoView=observer(({todo})=>{
  return (
    <li>
      <input type="checkbox" checked={todo.finished}/>
    </li>
  )
});

const store=new TodoList();

ReactDOM.render(<TodoListView todoList={store}/>,document.getElementById('root'));

//TodoListView使用到的可观测state是todos和todo.finished(通过unfinishedTodoCount间接使用)，
//因此它们的改变将会更新TodoListView代表的DOM，同样地，todo.finished和todo.title的
//改变会更新使用这个todo对象的TodoView代表的DOM

//MobX通过action改变state。我们在TodoView中定义一个action，用来改变todo.finishe

const TodoView=observer(({todo})=>{
  //改变action，改变todo.finish
  const handleClick=action(()=>todo.finished=!todo.finished);
  return (
    <li>
      <input type="checkbox" checked={todo.finished} onClick={handleClick} />
      {todo.title}
    </li>
  );
})

//handleClick就是用来改变状态todo.finish的action，一般习惯使用MobX提供action函数包裹
//应用中定义的action。至此，这个精简版的todos应用已经包含了MobX涉及的主要概念。