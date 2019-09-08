1.如何使用LESS

LESS文件之后在被编译后才能够被浏览器识别使用

2.LESS编译工具

1)Koala,国人开发的全平台的LESS编译工具

http://koala-app.com

2)Winless,windows下的LESS编译软件 

http://winless.org

3)CodeKit MAC平台下的LESS编译软件 

https://codekitapp.com/

3.客户端调用方式

首先引用.less文件  注意引用时link引入，然后将rel属性设置为rel="stylesheet/less"

然后引用less.js 注意：引入普通js引入方式一致，但是一定要放置在less文件之后

##混合

定义：混合就是一种将一系列属性从一个规则集引入("混合")到另一个规则集的方式

##嵌套规则

改变选择器的顺序:将&放到当前选择器之后，就会将当前选择器插入到所有的父选择器之前

##运算

less会为你自动推断数值的单位，所以你不必每一个值都加上单位

注意:运算符和值之间必须以空格分开，涉及优先级时以()进行优先级运算

