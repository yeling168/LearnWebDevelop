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