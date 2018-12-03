//Window对象是所有客户端JavaScript特性和API的主要接入点。它表示web浏览器的一个窗口或主体
//并且可以从标识符window来引用它。
//设置location属性，从而跳转到新的web页面
window.location = "http://www.oreilly.com";

//setTimeout()，可以注册一个函数，在给定的一段时间之后触发一个回调:
//等待两秒，然后说hello
setTimeout(function () {
    alert("hello world");
}, 2000)

//window是Window的实例，Window是window的构建函数
typeof Window; //function
typeof window; //object

window.constructor === Window; //true
window instanceof Window; //true

//Window对象中其中一个最重要的属性是document,它引用Document对象，后者显示在窗口中的文档。
//getElementById(),可以基于元素id属性值返回单一的文档元素(表示HTML标签的一对开始/结束标记，以及它们之间的所有内容)

//查找id="timestamp"的元素
var timestamp = document.getElementById("timestamp");

//getElementById()返回的Element对象有其他重要的属性和方法，比如允许脚本获取它的内容，设置属性值等

//如果元素为空，往里面插入当前日期和时间
if (timestamp.firstChild == null) {
    timestamp.appendChild(document.createTextNode(new Date().toString()));
}

//每个Element对象都有style和className属性,允许脚本指定文档元素的css样式,或修改应用到元素上的css类名

//显示修改目标元素的呈现
timestamp.style.backgroundColor = "yellow";

//或者只改变类,让样式表指定具体的内容
timestamp.className = "highlight";

//Window、Document和Element对象上另一个重要的属性集合是事件处理程序相关的属性。
//可以在脚本中为之绑定一个函数，这个函数会在某个事件发生时以异步的方式调用。事件处理程序
//可以让JavaScript代码修改窗口、文档和组成文档的元素行为。事件处理程序的属性名是以
//单词"on"开始的，用法如下
timestamp.onclick = function () {
        this.innerHTML = new Date().toString();
    }

    //Window对象的onload处理程序是最重要的事件处理程序之一。当显示在窗口中的文档内容稳定并可以操作时会触发它。
    //JavaScript代码通常封装在onload事件处理程序里。

    //显示内容的简单客户端JavaScript
    //simpleJavaScript.html

    //<script>元素
    //在XHTML中，<script>标签中的内容被当做其他内容一样对待。如果JavsScript代码包含了
    //"<"或"&"字符，那么这些字符就被解释成为XML标记。因此，如果要使用XHTML，最好把所有JavaScript
    //代码放入到一个CDATA部分里

    <
    script > < ![CDATA[

    ]] <
    /script>

    //当HTML解析器遇到<script>元素时，它默认必须先执行脚本，然后再恢复文档的解析和渲染
    //这对于内联脚本没什么问题，但如果脚本源代码是一个由src属性执行的外部文件，这一卫着脚本
    //后面的文档部分在下载和执行脚本之前，都不会出现在浏览器中

    //脚本的执行只在默认情况下是同步和阻塞的。<script>标签可以有defer和async属性
    //这(在支持它们的浏览器里)可以改变脚本的执行方式，这些都是布尔属性，没有值;
    //只需要出现在<script>标签里即可。HTML5说这些属性只在和src属性联合使用时才有效，
    //但有些浏览器还支持延迟的内联脚本

    <
    script defer src = "deferred.js" > < /script> <
script async src = "async.js" > < /script>

//defer属性使得浏览器可以尽快地执行脚本，而不用在下载脚本时阻塞文档解析。
//如果<script>标签同时有两个属性，同时支持两者的浏览器会遵从async属性并忽略defer属性。

//异步载入并执行一个指定URL中的脚本
function loadasync(url) {
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);
}

//如果需要为一个事件注册多个事件处理程序函数，或者如果想要写一个可以安全注册事件处理程序的代码模块。
//就算另一个模块已经为相同的目标上的相同的事件注册了一个处理程序，也需要用到另一种事件处理程序注册技术。
//大部分可以成为事件目标的对象都有一个addEventListaner()的方法，允许注册多个监听器
window.addEventListener("load", function () {}, false);
request.addEventListener("readystatechange", function () {}, false);
//注意这个函数的第一个参数是事件的名称
//在IE8以及以前的浏览器中，必须使用一个相似的方法，叫做attachEvent()
window.attachEvent("onload", function () {

})

//onLoad()，当文档载入完成时调用一个函数
//注册函数f,当文档载入完成时执行这个函数f
//如果文档已经载入完成，尽快以异步方式执行它
function onLoad(f) {
    if (onLoad.loaded) {
        window.setTimeout(f, 0);
    } else if (window.addEventListener) {
        window.addEventListener("load", f, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", f);
    }
}

//给onload设置一个标志，用来指示文档是否载入完成
onload.loaded = false;
//注册一个函数，当文档载入完成时设置这个标志
onload(function () {
    onload.loaded = true;
})

//单线程执行是为了让编程更加简单。编写代码时可以确保两个事件处理程序不会同一时刻运行
//操作文档内容时也不必担心会有其他线程试图同时修改文档，并且永远不需要在写JavaScript代码的时候
//担心锁，死锁和竞态条件。

//浏览器分级：https://developer.yahoo.com/yui/articles/gbs/?guccounter=1

if (element.addEventListener) { //在使用这个W3C方法之前首先检测它是否可用
    element.addEventListener("keydown", handler, false);
    element.addEventListener("keypress", handler, false);
} else if (element.attachEvent) { //在使用该IE方法之前首先检测它
    element.attachEvent("onkeydown", handler);
    element.attachEvent("onkeypress", handler);
} else { //否则，选择普遍支持的技术
    element.onkeydown = element.onkeypress = handler;
}


//通过document.compatMode检查渲染模式
//如果其值是CSS1Compat,则说明浏览器工作在标准模式;如果值为"BackCompat"(或undefined,说明其值根本不存在)

//IE中的条件注释
<!--[if IE6]>
This content is actually inside an HTML comment.
It will only be displayed in IE 6.
<![endif]-->

<!--[if ite IE'7]>
This content will only be displayed by IE5,6 and 7 and earlier.
Ite stands for "less than or equal".you can also use "It","gt" and "gte".
<![endif]-->

<!--[if !IE]><-->
This is normal HTML content,but IE will not display it
because of the comment above and the comment below.
<!--><![endif]-->

This is normal content,displayed by all browsers.

//上文介绍过使用excanvs.js类库在IE里实现<canvas>元素。由于这个类库只有IE需要(并且也只为IE工作)
//因此有理由在页面里使用条件注释引入它，这样其他浏览器就不会载入它
<!--[]if IE>
<script src="excanvas.js"></script>
<![endif]-->

//下面的条件注释包含了只在IE中执行的代码
/*@cc_on
 @if(@_jscript)
 //该代码位于一条JS注释内但在IE中执行它
 alert("In IE");
 @end
 @*/

 //关键字@if、@else和@end 划分出哪些是要被IE的JavaScript解释器有条件地执行的代码。
 //大多数时候，只需要上面所示的简单的条件:@if(@_jscript)。
 //JScript是MS自己的JavaScript解释器名字，而@_jscript变量在IE中总是为true

 //通过条件注释和常规的JavaScript注释的合理的交叉组合，可以设置在IE中运行一段代码
 //而在所有其他浏览器中运行另一段不同的代码

 /*@cc_on
  @if(@_jscript)
  //这里的代码在一条条件注释中，也在一条常规的JavaScript注释中
  //IE会执行这段代码，其他浏览器不执行它
  alert("You are using Internet Explorer");
  @else*/
  //这段代码并没在JavaScript注释中，但仍然在IE条件注释中
  //也就是说除了IE之外的所有浏览器都执行这里的代码
  alert("You are not using Internet Explorer");
  /*@end
  */

  <script>
  var name=decodeURLComponent(window.location.search.substring(1))||"";
  document.write("hello"+name);
  </script>

  //通常，防止XSS攻击的方式是，在使用任何不可信的数据来动态创建文档内容之前，从中移除HTML标签。
  //可以通过添加如下一行代码来移除<script>标签两边的尖括号，从而修复前面给出的greet.html文件
  name=name.replace(/</g,"&lt;").replace(/>/,"&gt;");

  
