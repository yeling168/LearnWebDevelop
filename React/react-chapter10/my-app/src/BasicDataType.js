//基本数据类型

//MobX是将包含值的属性(引用)转换成可观测的，而不是直接把值转换成可观测的。当
//observable接收的参数是JavaScript的基本数据类型时，MobX不会把它们转换成可观测的，而是同处理
//非普通对象一样，返回一个boxed values类型的对象，例如

import { observable,autorun } from 'mobx';

//Jack这个值是不可观测的，可观测的是指向这个对象的引用

const name=observable("Jack");

autorun(()=>console.log(`name:${name.get()}`));

name.set("Tom");

//输出:name:Tom

//除了直接使用observable创建可观测对象外，还可以使用语义更加精确的API创建不同
//类型的可观测对象，例如

observable.object(value);//创建一个可观测的Object
observable.array(value);//创建一个可观测的Array
observable.map(value);//创建一个可观测的Map
observable.box(value);//创建一个可观测的Boxed value

//observable(value)相当于以上API的简写形式，会自动根据参数类型的不同使用不同的转换逻辑