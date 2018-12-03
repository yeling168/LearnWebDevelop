/**
 * 客户端存储
 */
//客户端存储遵循"同源策略"，因此不用站点的页面是无法互相读取对方存储的数据，而在同一站点的不同
//页面之间是可以互相共享存储数据的，它为我们提供了一种通信机制，例如:一个页面上填写的表单数据可以显示在另外一个页面中。
//web应用可以选择它们存储数据的有效期:比如采用临时存储可以让数据保存至当前窗口关闭或者浏览器退出
//采用永久存储，可以将数据永久地存储到硬盘上，数年或者数月不失效。

/**
 * web存储:Web存储标准所描述的API包含localStorage对象和sessionStorage对象，这两个对象
 * 实际上是持久化关联数组，是名值对的映射表，"名"和"值"都是字符串。Web存储易于使用，支持大
 * 容量(但非无限量)数据存储同时兼容当前所有主流浏览器，但是不兼容早期浏览器。
 */

/**
 * cookie:cookie是一种早期的客户端存储机制，起初是针对服务器端脚本设计使用的。尽管在客户端
 * 提供了非常繁琐的JavaScript API来操作cookie，但是他们难用至极，而且只适合存储少量文本数据
 * 不仅如此，任何以cookie形式存储的数据，不论服务器端是否需要，每一次HTTP请求都会把这些数据传输到
 * 服务器端。cookie目前仍然被客户端程序员大量使用的一个重要的原因是:所有的新旧浏览器都支持它。
 * 但是，随着Web Storage的普及，cookie终将会回归到最初的形态:作为一种被服务端脚本使用的
 * 客户端存储机制。
 */

var name = localStorage.username;
name = localStorage["username"];
if (!name) {
    name = prompt("what's your name?");
    localStorage.username = name;
}
for (var name in localStorage) {
    var value = localStorage[name];
}

//当存储一个数字的时候，会把它自动转换成一个字符串
//但是，当获取该值的时候别忘记了手动将其转换成数字类型
localStorage.x = 10;
var x = parseInt(localStorage.x);

//同样地，存储一个日期类型数据的时候进行编码，获取的时候进行编码
localStorage.lastRead = (new Date()).toUTCString();
var lastRead = new Date(Date.parse(localStorage.lastRead));

//使用JSON可以使得对基本数据类型编码的工作变得很方便
localStorage.data = JSON.stringify(data); //编码然后存储
var data = JSON.parse(localStorage.data); //获取数值之后再解码

/**
 * 通过localStorage存储的数据是永久性的，除非Web应用刻意删除存储的数据，或者用户
 * 通过设置浏览器配置(浏览器提供的特性UI)来删除，否则数据将一直保留在用户的电脑上
 * 永不过期。
 * 
 * localStorage的作用域是限定在文档源(document origin)级别的。文档源是通过协议，主机名以及端口
 * 三者来确定的。
 * 
 * 同源的文档间共享localStorage数据(不论该源的脚本是否真正地访问localStorage)
 * 它们可以互相读取对方的数据，甚至可以覆盖对方的数据。但是，非同源的文档间
 * 互相不能读取或者覆盖对方的数据(即使它们运行的脚本是来自同一台第三方服务器也不行)
 * 
 * 
 * 需要注意的是localStorage作用域也受浏览器供应商限制。如果你使用Firefox访问站点，
 * 那么下次用另一个浏览器(比如,chrome)再次访问的时候，那么本地是无法获取上次存储的数据的。
 * 
 * 通过sessionStorage存储的数据和通过localStorage存储的数据的有效期也是不同的:前者的有效期
 * 和存储数据的脚本所在的最顶层窗口或者是浏览器标签页是一样的。一旦窗口或者标签页被
 * 永久关闭了，那么所有通过sessionStorage存储的数据也都被删除了。(当时要注意的是
 * 现代浏览器已经具备了重新打开最近关闭的标签页随后恢复上一次浏览的会话功能，因此，这些标签页
 * 以及与之相关的sessionStorage的有效期可能会更加长些。)
 * 
 * 与localStorage一样，sessionStorage的作用域也是限定在文档源中，因此非同源文档间都是
 * 无法共享sessionStroage的，不仅如此，sessionStorage的作用域还被限定在窗口中。如果同源文档渲染在
 * 不同的浏览器标签页中，那么它们互相之间拥有的是各自的sessionStorage数据，无法共享；一个
 * 标签页中的脚本是无法读取或者覆盖由另一个标签页脚本写入的数据，哪怕这两个标签页渲染的是同一个页面，
 * 运行的是同一个脚本也不行。
 * 
 * 需要注意的是:这里提到的基于窗口作用域的sessionStorage指的窗口只是顶级窗口。如果一个浏览器标签页包含
 * 两个<iframe>元素，它们所包含的文档是同源的，那么这两者之间是可以共享sessionStorage的。
 */

/**存储API */
//使用length属性以及key()方法，传入0~length-1的数字，可以枚举所有存储数据的名字。
localStorage.setItem("x", 1);
localStorage.getItem("x");

for (var i = 0; i < localStorage.length; i++) {
    var name = localStorage.key(i);
    var value = localStorage.getItem(name);
}

localStorage.removeItem("x");
localStorage.clear();

/**
 * 对象和数组类型值通常是可变的，因此存储对象要求存储它们的副本，以确保之后任何对这类对象的改变
 * 都不影响到存储的对象。同样的，在获取该对象的时候也要求获取的是该对象的副本，以确保对已
 * 获取对象的改动不会影响到存储的对象。
 */
localStorage.o = {
    x: 1
}; //存储一个带有"x"属性的对象
localStorage.o.x = 2; //试图去设置该对象的属性值
localStorage.o.x //=>1:x没有变

//识别出使用的是哪类存储的机制
var memory = window.localStorage || (window.UserDataStorage && new UserDataStorage()) || new cookieStorage();
//然后在对应的机制中查询数据
var username = memory.getItem("username");

/**cookie */
//从底层来看，作为HTTP协议的一种扩展实现它。cookie数据会自动在Web浏览器和Web服务器之间传输的，
//因此服务端脚本就可以读，写存储在客户端的cookie的值。
//可以通过检测navigator.cookieEnabled这个属性检查cookie是否启用。若该值为true，则当前
//cookie是启用的，反之则是禁用的。
/**
 * cookie属性:有效期和作用域
 */
/**
 * cookie默认的有效期很短暂，它只能持续在Web浏览器的会话期间，一旦用户关闭浏览器，cookie保存的数据
 * 就丢失了，要注意的是:这与sessionStorage的有效期还是有区别的:cookie的作用域并不是局限
 * 在浏览器的单个窗口中，它的有效期和整个浏览器窗口的有效期一致，可以通过设置max-age属性，
 * 但是必须要明确告诉浏览器cookie的有效期是多长(单位是秒)。一旦设置了有效期，浏览器
 * 会将cookie数据存储在一个文件中，并且直到过了指定的有效期才会删除该文件。
 * 
 * 和localStorage以及sesstionStorage类似，cookie的作用域是通过文档源和文档路径来确定的
 * 该作用域通过cookie的path和domain属性也是可配置的。默认情况下，cookie和创建它的Web页面有关，
 * 并对该Web页面以及该Web页面同目录或者子目录的其他页面可见。
 * 
 * 将cookie的路径设置成"/"等于是让cookie和localStorage拥有同样的作用域，同时当它请求该站点
 * 上任何一个Web页面的时候，浏览器都必须将cookie的名字和值传递给服务器。
 */

/**保存cookie */
document.cookie = "version=" + encodeURIComponent(document.lastModified);
/**
 * 下次读取cookie属性的时候，之前存储的名/值对的数据就在文档的cookie列表中。由于cookie的名/值中的值
 * 是不允许包含分号、逗号和空白符，因此，在存储前一般可以采用JavaScript核心的全局函数encodeURIComponent()
 * 对值进行编码。相应的，读取cookie值的时候需要采用decodeURLComponent()函数解码。
 */

/**
 * 以名/值的形式存储cookie
 * 同时采用encodeURLComponent()函数进行编码，来转义分号，逗号和空白符
 * 如果daysToLive是一个数字，设置max-age属性为该数值表示cookie直到指定的天数
 * 到了才会过期。如果daysToLive是0就表示删除cookie
 */

function setcookie(name, value, daysToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
        cookie += ";max-age=" + (daysToLive * 60 * 60 * 24);
    }
    document.cookie = cookie;
}

/**
 * 同样地，如果要设置cookie的path、domain和secure属性，只须在存储cookie值前，以如下字符串形式追加
 * 在cookie值的后面
 */

;
path = path;
domain = domain;
secure

/**解析document.cookie属性值 */
//将document.cookie的值以名/值对组成的一个对象返回
//假设存储cookie的值的时候是采用encodeURLComponent()函数编码的
function getCookies() {
    var cookies = {};
    var all = document.cookie;
    if (all === "")
        return cookies;
    var list = all.split("; ");
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var value = cookie.substring(p + 1);
        value = decodeURIComponent(value);
        cookies[name] = value;
    }
    return cookies;
}

/**现代浏览器允许cookie总数超过300个，但是部分浏览器对单个cookie大小仍然有4KB的限制 */
//实现基于cookie的存储API
/**
 * cookieStorage.js
 * 本类实现像localStorage和sessionStorage一样的存储API，不同的是，基于HTTP cookie实现它
 */
function cookieStorage(maxage, path) {
    //获取一个存储全部cookie信息的对象
    var cookie = (function () {
        var cookie = {};
        var all = document.cookie;
        if (all === "")
            return cookie;
        var list = all.split("; ");
        for (var i = 0; i < list.length; i++) {
            var cookie = list[i];
            var p = cookie.indexOf("=");
            var name = cookie.substring(0, p);
            var value = cookie.substring(p + 1);
            value = decodeURIComponent(value);
            cookie[name] = value;
        }
        return cookie;
    }());
    //将所有cookie的名字存储到一个数组中
    var keys = [];
    for (var key in cookie) {
        keys.push(key);
    };
    //现在定义存储API公共的属性和方法
    this.length = keys.length;
    //返回第n个cookie的名字，如果n越界则返回null
    this.key = function (n) {
        if (n < 0 || n >= keys.length) return null;
        return keys[n];
    };
    //返回指定名字的cookie值，如果不存在则返回null
    this.getItem = function (name) {
        return cookie[name] || null;
    };
    //存储cookie的值
    this.setItem = function (key, value) {
        if (!(key in cookie)) {
            keys.push(key);
            this.length++;
        }
        //将该名/值对数据存储到cookie对象中
        cookie[key] = value;
        //开始正式设置cookie
        //首先要将存储的cookie的值进行编码，同时创建一个"名字=编码后的值"形式的字符串

        var cookie = key + "=" + encodeURIComponent(value);
        //将cookie的属性也加入到该字符串中
        if (maxage) cookie += ";max-age" + maxage;
        if (path) cookie += ";path=" + path;
        //通过document.cookie属性来设置cookie
        document.cookie = cookie;
    };
    //删除指定的cookie
    this.removeItem = function (key) {
        if (!(key in cookie)) return; //如果cookie不存在，则什么也不做
        //从内部维护的cookie组删除指定的cookie
        delete cookie[key];
        //同时将cookie中的名字也在内部的数组中删除
        //如果使用ES5定义的数组indexOf()方法会更加简单
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === key) {
                key.splice(i, 1);
                break;
            }
        }
        this.length--;
    }
    //最终通过将该cookie值设置成空字符串以及将有效期设置为0来删除指定的cookie
    document.cookie = key + "=;max-age=0";

    //删除所有的cookie
    this.clear = function () {
        for (var i = 0; i < keys.length; i++) {
            document.cookie = keys[i] + "=;max-age=0";
        }
        cookie = {};
        keys = [];
        this.length = 0;
    };
}

/**利用IE userData持久化数据 */
var memory = document.createElement("div");
memory.id = "_memory";
memory.style.display = "none";
memory.style.behavior = "url('#default#userData')";
document.body.appendChild(memory);

memory.load("myStoredData");
var name = memory.getAttribute("username");
if (!name) {
    name = prompt("what is your name?");
    memory.setAttribute("username", name);
    memory.save()
}
/**
 * 默认情况下，通过userData存储的数据，除非手动去删除它否则永不时效。但是，也可以通过
 * 设置expires属性来指定它的过期时间。就拿上面的例子来说，可以给存储的数据设置时长100天的有效期。
 */
var now = (new Date()).getTime(); //获取当前时间，以毫秒为单位
var expires = now + 100 * 24 * 60 * 60 * 100; //距离当前时间100天，把天数换算成毫秒
expires = new Date(expires).toUTCString(); //将其转换成字符串
memory.expires = expires; //设置userData的过期时间
/**
 * IE userData的作用域限制在和当前文档同目录的文档中，它的作用域没有cookie宽泛，cookie
 * 对其所在目录的子目录也有效。userData的机制并没有像cookie那样，通过设置path和domain属性来
 * 控制或者改变其作用域的方式。
 * 
 * userData允许存储的数据量要比cookie大，但是却比localStorage以及sessionStorage允许存储的数据量要小。
 */
//基于IE的userData实现部分存储API
function UserDataStorage(maxage) {
    //创建一个document元素并附加userData行为
    //因此该元素获得save()和load(0方法
    var memory = document.createElement("div");
    memory.style.display = "none"; //将其隐藏
    memory.style.behavior = "url('#default#userData')"; //附加userData行为
    document.body.appendChild(memory); //将该元素添加到document元素中
    //如果传递了maxage参数(单位为秒)，则将其设置为userData的有效期，以毫秒为单位
    if (maxage) {
        var now = new Date().getTime(); //当前时间
        var expires = now + maxage * 1000; //当前时间加上有效期就等于过期时间
        memory.expires = new Date(expires).toUTCString();
    }

    //通过载入存储的数据来初始化memor元素
    //参数是任意的，只要是在保存的时候存在的就可以了
    memory.load("UserDataStorage"); //载入存储的数据
    this.getItem = function (key) { //通过属性来获取保存的值
        return memory.getAttribute(key) || null;
    };
    this.setItem = function (key, value) {
        memory.setAttribute(key, value); //以设置属性的形式来保存数据
        memory.save("UserDataStorage"); //保存数据改变后的状态
    };
    this.removeItem = function (key) {
        memory.removeAttribute(key); //删除存储的数据
        memory.save("UserDataStorage"); //再次保存状态
    }
}

//以上代码只在IE浏览器下有效，最好使用IE条件注释来避免其他浏览器载入上述代码
<!--[if IE]>
<script src = "UserDataStorage.js" > < /script>
 <![endif] -->