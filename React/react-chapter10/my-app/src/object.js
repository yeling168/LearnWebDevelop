//非普通对象

//这里，非普通对象的概念是针对普通对象而言的，特指以自定义函数作为构造函数创建的对象。
//Observable会返回一个特殊的boxed values类型的可观测对象。
//注意，返回的boxed values对象并不会把非普通对象的属性转换成可观测的，
//而是保存一个指向原对象的引用，这个引用是可观测是。
//对原对象的访问和修改需要通过新对象的get()和set()方法操作，例如

import { observable, autorun } from "mobx";

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = observable(new Person("Jack", 20));

//person是boxed values类型，必须通过get()才能获取到原对象

autorun(() => console.log(`name:${person.get().name},age:${person.get().age}`));

person.get().age = 25;

//没有输出，因为person对象的属性不可观测

//person封装的对象设置为一个新对象，引用发生变化，可观测

person.set(new Person("Jack", 20));

//输出:name:Jack,age:20

//将非普通对象的属性转换成可观测的是自定义构造函数的责任。正确的实现方式是

import { extendObservable, autorun } from "mobx";

function Person(name, age) {
  //使用extendObservable在构造函数内创建可观测属性
  extendObservable(this, {
    name: name,
    age: age
  });
}

var person = new Person("Jack", 20);

autorun(() => console.log(`name:${person.name},age:${person.age}`));

person.age = 25;

//输出:name:Jack,age:25

//改成使用装饰器@observable的方式

import { observable, autorun } from "mobx";

class Person {
  @observable name;
  @observable age;

  constructor(name, get) {
    this.name = name;
    this.age = age;
  }
}

var person = new Person("Jack,20");

autorun(() => console.log(`name:${person.age},age:${person.age}`));

person.age = 25;

//输出：name:Jack,age:25
