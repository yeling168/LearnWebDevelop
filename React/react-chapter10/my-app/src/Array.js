//数组

//返回一个新的可观测数组。数组元素的增加或减少都会自动被观测，例如:

import{observable,autorun} from 'mobx';

var todos=observable(["Learn React","Learn Redux"]);

autorun(()=>
   console.log(`代办事项数量:${todos.length}`)
);

todos.push("Learn MobX");

//输出:待办事项数量:3

todos.shift();

//输出:待办事项数量:2

//observanle作用于数据类型时，也会递归地作用于数组中的每个元素对象，处理规则和处理普通对象时的规则相同，例如

import {observable,autorun} from 'mobx';

var todos=observable([{
    text:"Learn React",
    finished:false
},{
    text:"Learn Redux",
    finished:false
}]);

autorun(()=>
   console.log(`todo1:${todos[0].text},finished:{todos[0].finished}`)
);

todos[0].finished=true;

//输出:todo 1:Learn React,finished:true

//todos数组中的元素也转换成可观测对象，因此，元素属性的变化会导致autorun的重新执行