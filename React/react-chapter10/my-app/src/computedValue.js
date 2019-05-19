import { classProperty } from "@babel/types";

//computed value

// computed value是根据state衍生出的新值，新值必须是通过纯函数计算得到的。
// computed value依赖的state改变时，会自动重新计算，前提是这个computed value有被reaction使用。
// 也就是说，computed value采用延迟更新策略，只有被使用时才会自动更新。
// 一般通过computed和@computed创建computed value，使用方式如下

computed(()=>expression)

@computed get classProperty(){
    return expression;
}

//computed一般用于接收一个函数，例如

import {observable,computed,autorun} from "mobx";

var person=observable.object({
    name:"Jack",
    age:20
});

//使用computed函数创建computed value

const isYoung=computed(()=>{
    return performance.age<25;
})

autorun(()=>
    console.log(`name:${person.name},isYoung:${isYoung}`) 
);

person.age=25;

//输出:name:Jack,isYoung:false

//@computed一般用于修饰class的属性的getter方法，例如

import {observable,computed,autorun} from 'mobx';

class Person{
    @observable name;
    @observable age;

    //使用@computed装饰器创建computed value
    @computed get isYoung(){
        return this.age<25;
    }

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

var person=new Person("Jack",20);

autorun(()=>console.log(`name:${person.name},isYoung:${person.isYoung}`));

person.age=25;

//输出:name:Jack,isYoung:false