2-2

express -e .

-e代表ejs模板  .代表当前目录

.babelrc  设置babel编译的配置文件

gulpfile.babel.js 构建脚本使用了ES6的语法，如果文件名称不包含babel，那么执行babel脚本会报错

2-3

引入npm包处理命令行参数

    import yargs from 'yargs';

.argv 表示输入的内容以字符串作为解析

--harmony 在当前目录运行脚本

手把手教你用React实现一个简单的个人博客：[https://segmentfault.com/a/1190000011399153](https://segmentfault.com/a/1190000011399153)

3-1 let,const命令

使用var

	function test() {
	  for (var i = 1; i < 3; i++) {
	    console.log(i);//1,2
	  }
	  console.log(i);//3
	}
	
	test();

使用let

	function test() {
	  for (let i = 1; i < 3; i++) {
	    console.log(i);//1,2
	  }
	  console.log(i);//Uncaught ReferenceError: i is not defined
	}
	
	test();

如何区分块级作用域？

代码是用`{}`包起来的，那么`{}`里面就是块作用域

ES6强制开启严格模式，变量未声明不能引用，所以会报Uncaught ReferenceError

Cannot find module "./class/lesson1"：文件编译失败，导致找不到这个文件

let变量不能重复定义

const 常量不能修改，const声明的时候必须赋值，对象是引用类型，指针不变，对象可变

	function last() {
	  const PI = 3.1415926;
	  const k = {
	    a: 1
	  };
	  k.b = 3;
	  console.log(PI, k);
	}
	
	last();


3-2 解构赋值

数组解构赋值，对象解构赋值，字符串解构赋值，布尔值解构赋值，函数参数解构赋值，数值解构赋值

应用于:变量交换

	{
	  let a = 1;
	  let b = 2;
	  [a, b] = [b, a];
	  console.log(a, b);
	}


3-3 正则扩展

如果字符串中有的字符是大于两个字节，一定要加u修饰符，才能正常识别

`.`并不是能匹配所有字符，只能匹配小于两个字节长度的字符

`.`不能识别换行符，回车符，行分隔符，段分隔符，需要加s修饰符，ES6并没有实现

3-4 字符串扩展

字符串新增特性

Unicode表示法 遍历接口  模板字符串 新增方法(10种)

 3-6 数值扩展

数值处理新特性

1.新增方法

2.方法调整

3-7 数组扩展

数组新增特性

Array.from   Array.of  copyWithin  find/findIndex  fill

entries/keys/values  includes


3-8 函数扩展

函数新增特性，参数默认值，rest参数，扩展运算符，箭头函数，this绑定，尾调用

扩展运算符可以看成是rest参数的逆运算

ES5中的this指向函数调用时的对象所在

ES6中的this指向函数定义时的对象所在

默认值，默认值后面不能再有没有默认值的变量

3-9 对象扩展

简洁表示法，属性表达式，扩展运算符(ES7提案)，Object新增方法


3-10 Symbol

Symbol的概念：这种数据类型提供一个独一无二的值

Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的

对象中有Symbol做key值，通过`for...in`和`let...of`都拿不到属性

Symbol的作用

3-11 数据结构

Set的用法  WeakSet的用法

Map的用法  WeakMap的用法

Set集合中的元素是不能重复的

Object中的key必须是字符串，Map中的key是任意类型，数组和对象都可以作为key，这是Map对Object的补充

3-12 Map-Set与数组和对象比较

Map与Array的对比

Set与Array的对比

Map与Object对比

Set和Object对比

能使用map不使用array，优先使用map

对数据要求比较高，保证每个数据的唯一性，使用Set，放弃object和array

3-13  Proxy和Reflect

Proxy和Reflect的概念

Proxy和Reflect的适用场景

3-14

类的概念

基本语法，类的继承，静态方法，静态属性，getter,setter

3-15 Promise

什么是异步

Promise的作用

Promise的基本用法

3-16 Iterator

什么是Iterator接口

Iterator的基本用法

for...of

3-17 Generator

基本概念:用来解决异步编程

next函数的用法

yield*的语法

3-18 Decorator 修饰

需要安装babel-plugin-transform-decorators-legacy

基本概念:修饰器是一个函数，用来修改类的行为

基本用法

一个有用的常规修饰器的js库:core-decorators

3-19 模块化

基本概念

ES6的模块化语法

模块导入import

模块导出export

简历模板：[http://sc.chinaz.com/jianli/free.html](http://sc.chinaz.com/jianli/free.html)

常见的兼容性:

兼容案例集合:
[http://www.w3help.org/zh-cn/causes/](http://www.w3help.org/zh-cn/causes/)

各浏览器中 Date 对象的 toLocaleString 方法的返回值不一致:

[http://www.w3help.org/zh-cn/causes/SJ2004](http://www.w3help.org/zh-cn/causes/SJ2004)

在 IE6 IE7 IE8(Q) 中不能在 JSON 字符串或对象直接量的最后一个键值对后加 ',':[http://www.w3help.org/zh-cn/causes/SJ9006](http://www.w3help.org/zh-cn/causes/SJ9006)

IE6 IE7 IE8 不会忽略数组直接量的末尾空元素:[http://www.w3help.org/zh-cn/causes/SJ2007](http://www.w3help.org/zh-cn/causes/SJ2007)

元素的内联事件处理函数的特殊作用域链在各浏览器中存在差异:[http://www.w3help.org/zh-cn/causes/SJ9009](http://www.w3help.org/zh-cn/causes/SJ9009)

http://www.w3help.org/zh-cn/causes/SJ9010

Chrome Opera 中 for-in 语句遍历出对象属性的顺序与定义的不同:[http://www.w3help.org/zh-cn/causes/SJ9011](http://www.w3help.org/zh-cn/causes/SJ9011)

IE6 IE7 IE8(Q) 不支持 JSON 对象:[http://www.w3help.org/zh-cn/causes/SJ9012](http://www.w3help.org/zh-cn/causes/SJ9012)

http://www.w3help.org/zh-cn/causes/SJ9030

http://www.w3help.org/zh-cn/causes/SJ2013

http://www.w3help.org/zh-cn/causes/SJ9022

http://www.w3help.org/zh-cn/causes/SJ9019

http://www.w3help.org/zh-cn/causes/SJ9015

各浏览器中 Date 对象的 getYear 方法的返回值不一致:[http://www.w3help.org/zh-cn/causes/SJ9010](http://www.w3help.org/zh-cn/causes/SJ9010)

E6 IE7 IE8 的函数声明和函数表达式的实现与其他浏览器有差异:[http://www.w3help.org/zh-cn/causes/SJ9001](http://www.w3help.org/zh-cn/causes/SJ9001)

http://www.w3help.org/zh-cn/causes/SJ3006

浏览器中 Date 对象的 toLocaleString 方法的返回值不一致:[http://www.w3help.org/zh-cn/causes/SJ2004](http://www.w3help.org/zh-cn/causes/SJ2004)

http://www.w3help.org/zh-cn/causes/SJ3006

http://www.w3help.org/zh-cn/causes/SJ9007

Array.prototype.sort当使用了 comparefn 后返回值不为 -1、0、1时，各引擎实现排序结果不一致:[http://www.w3help.org/zh-cn/causes/SJ9013](http://www.w3help.org/zh-cn/causes/SJ9013)

http://www.w3help.org/zh-cn/causes/SJ9014

http://www.w3help.org/zh-cn/causes/SJ9015

http://www.w3help.org/zh-cn/causes/SJ9026

http://www.w3help.org/zh-cn/causes/SJ9034

http://www.w3help.org/zh-cn/causes/SJ9038

http://www.w3help.org/zh-cn/causes/SJ9044

http://www.w3help.org/zh-cn/causes/SJ2047

注意事项:

使用严格模式，注意作用域

使用类与对象，结合模块化构建中大型项目

使用Promise替换传统的回调函数

使用箭头函数要注意this的指向

学会使用Generator完成异步操作应用