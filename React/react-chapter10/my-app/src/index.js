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

import { observable,computed } from 'mobx';

class TodoList{
  @observable todos=[];
  //根据todos和todo.finished两个state，创建computed value
  @computed get unfinishedTodoCount(){
    return this.todos.filter(todo=>!todo.finished).length;
  }
}