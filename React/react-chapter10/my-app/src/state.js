import { observable, autorun } from "mobx";

var person = observable({
  name: "Jack",
  age: 20
});

//mobx.autorun会创建一个reaction自动响应state的变化

autorun(() => console.log(`name:${person.name},age:${person.age}`));

person.name = "Tom";

//输出:name:Tom,age:20

person.age = 25;

//输出:name:Tom,age:25

//person的name和age属性都是可观测的，任意属性的变化都会触发autorun的重新执行。使用@observable可以将代码改写如下

import { observable, autorun } from "mobx";

class Person {
  @observable name = "Jack";
  @observable age = 20;
}

var person = new Person();

autorun(() => console.log(`name:${person.name},age:${person.age}`));

person.name = "Tom";

//输出:name:Tom,age:20

person.age = 25;

//输出:name:Tom,age:25

//使用普通对象转换成可观测对象时，还需要注意下面几个问题

//只有当前普通对象已经存在的属性才会转换成可观测的，后面添加的新属性都不会自动变成可观测的，例如:

import { observable, autorun } from "mobx";

var person = observable({
  name: "Jack",
  age: 20
});

autorun(() =>
  console.log(`name:${person.name},age:${person.age},address:${person.address}`)
);

person.address = "Shanghai";

//address是后来添加的属性，它的改变并不会引起autorun的重新执行。

//属性的getter会自动转换成computed value，效果和使用@computed相同

import { observable, autorun } from "mobx";

var person = observable({
  name: "Jack",
  age: 20,

  //自动转换成computed value
  get labelText() {
    return `name:$(this.name),age:$(this.age)`;
  }
});

autorun(() => console.log(person.labelText));

person.age = "Tom";

//输出:name:Tom,age:20

person.age = 25;

//输出:name:Tom,age:25

//labelText是一个getter方法，会自动转换成computed value,autorun中使用到了labelText
//labelText的计算值又依赖于name和age,所以name和age的改变会导致autorun重新执行

//observable会递归地遍历整个对象，每当遇到对象的属性值还是一个对象时(不包含非普通对象),这个属性值将会继续被observable转换

import { observable, autorun } from "mobx";

var person = observable({
  name: "Jack",
  address: {
    provice: "Shanghai",
    district: "pudong"
  }
});

autorun(() =>
  console.log(`name:${person.name},address:${JSON.stringify(person.address)}`)
);

person.address.district = "Xuhui";

//输出:name:Jack,address:{"provice":"Shanghai","district":"Xuhui"}

//person的name和address属性是可观测的，address的值是一个对象，因此会继续被observable处理，address
//的provice和district属性也被转换成可观测的。所以，当person.address.district="Xuhui"
//执行后，district的改变也会导致autorun的重新执行

//此外，如果以后再给可观测属性赋新值并且新值是一个对象(不包含非普通对象)时，新值也会被转换成可观测的

import { observable, autorun } from "mobx";

var person = observable({
  name: "Jack",
  address: {
    provice: "Shanghai",
    district: "Pudong"
  }
});

autorun(() =>
  console.log(`name:${person.name},address:$(JSON.stringify(person.address))`)
);

//给可观测属性address赋新值

person.address = {
  province: "Beijing",
  district: "Xicheng"
};

//输出name:Jack, address: {"province" :"Beijing","district":"Xicheng"}

person.address.district = "Dongcheng";

//输出name:Jack, address: {"province" :"Beijing","district":"Dongcheng"}

//person的address被赋予一个新对象时，新对象被自动转换成可观测对象，因此，新对象district属性发生改变后,autorun依然会被触发
