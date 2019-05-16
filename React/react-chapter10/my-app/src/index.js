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