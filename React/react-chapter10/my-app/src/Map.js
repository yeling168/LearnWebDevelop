//ES6 Map

//返回一个新的可观测的Map对象。Map对象的每一个对象都是可观测的，而且向Map对象添加或删除新元素的行为也是可观测的
//这也是Map类型的可观测state最大的特点

import { observable, autorun } from "mobx";

//Map可以接收一个数组作为参数，数组的每一个元素代表Map对象中的一个键值对

var map = new Map(["name", "Jack"], ["age", 20]);

var person = observable(map);

// autorun(()=>
//   console.log(`name:${person.get("name")},age:${person.get("age"),address:${person.get("address")}`)
// );

person.set("address", "Shanghai");

//输出name:Jack, address: {"province" :"Beijing","district":"Xicheng"}

//person是一个可观测的Map对象，当通过Map的API向person中添加新元素address时，autorun会重新执行
