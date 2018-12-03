//Window对象的setTimeout()方法用来实现一个函数在指定的毫秒数之后运行。
//setTimeout()返回一个值，这个值可以传递给clearTimeout()用于取消这个函数的执行。

//setInterval()和setTimeout()一样，只不过这个函数会在执行毫秒数的间隔里重复调用

//和setTimeout()一样,setInterval()也返回一个值，这个值可以传递给clearInterval()，用于取消后续函数的调用。

//定时器应用函数
/*
 *安排函数f()在未来的调用模式
 *在等待了若干毫秒之后调用f()
 *如果设置了interval()并没有设置end参数，则对f()调用将不会停止
 *如果没有设置interval和end,只在若干毫秒后调用f()一次
 *只有指定了f(),才会从start=0的时刻开始
 *注意，调用invoke()不会阻塞，它会立即返回
 */
function invoke(f, start, interval, end) {
    if (!start) start = 0;
    if (arguments.length <= 2) {
        setTimeout(f, start);
    } else {
        setTimeout(repeat, start);
    }

    function repeat() {
        var h = setInterval(f, interval);
        if (end) {
            setTimeout(function () {
                clearInterval(h);
            }, end);
        }
    }
}

//如果以0毫秒的超时时间来调用setTimeout()，那么指定的函数不会立即执行。相反
//会把它放到队列中，等到前面处于等待状态的事件处理程序全部执行完成后，再"立即"调用它。

//Window对象的location属性引用的是Location对象，它表示该窗口中当前显示的文档的URL
//并定义了方法来使窗口载入新的文档

//Document对象的location属性也引用到Location对象
window.location === document.location //总是返回true

//Document对象也有一个URL属性，是文档首次载入后保存该文档的URL的静态字符串。
//如果定位到文档中的片段标识符(如#table-of-contents),Location对象会做相应的更新，而document.URL属性却不会改变

/*解析URL*/
//Window对象的location属性引用的是Location对象，它表示该窗口中当前显示的文档的URL
//Location对象的href属性是一个字符串，后者包含URL的完整文本。Location对象的toString()方法返回href属性的值
//因此在会隐式调用toString()的情况下，可以使用location代替location.href.

//这个对象的其他属性-protocol,host,hostname,port,pathname和search,分别表示URL的各个部分。它们成为"URL分解"属性
//同时被Link对象(通过HTML文档中的<a>和<area>元素创建)支持。

//Location对象的hash和search属性比较有趣。如果有的话，hash属性返回URL中的"片段标识符"部分。
//search属性也类似，它返回的是问好之后的URL，这部分通常是某种类型的查询字符串。一般来说，这部分内容是用来参数化URL并在其中嵌入函数的。
//虽然这些参数通常用于运行在服务器脚本上，但在启动JavaScript的页面中当然也可以使用它们。


//利用下面这个函数将参数从URL的search中提取出来

function urlArgs() {
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf("=");
        if (pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

//Location对象的assign()方法可以使窗口载入并显示你指定的URL中的文档。replace()方法也类似
//但它在载入新文档之前会从浏览器历史中把当前文档删除。如果脚本无条件地载入一个新文档，replace()
//方法可能是比assgin()方法更好的选择。否则,"后退"按钮会把浏览器带回到原始文档，而相同的脚本则会再次载入新文档
//如果检测到用户的浏览器不支持某些特性来显示功能齐全的版本，可以用location.replace()来载入静态的HTML版本

//如果浏览器不支持XMLHttpRequest对象
//则将其重新定向到一个不需要Ajax的静态页面
if (!XMLHttpRequest) {
    location.replace("staticpage.html");
}

//除了assgin()和replace()方法，Location对象还定义了reload()方法，后者可以让浏览器重新载入当前文档

//使浏览器跳转到新页面的一种更传统的方法是直接把心的URL赋给location属性
location = "http://www.oreilly.com"; //在此网站购买书

//还可以把相对URL赋给location，它们会相对当前URL进行解析

location = "page2.html";

//纯粹的片段标识符是相对URL的一种类型，它不会让浏览器载入新文档，但只会使它滚动到文档的某个位置。
//#top标识符是个特殊的例子:如果文档中没有元素ID是"top",它会让浏览器跳到文档开始处。
location = "#top";

//Location对象的URL分解属性是可写的，对它们重新赋值会改变URL的位置，并且导致浏览器载入一个新的文档
//(如果改变的是hash属性，则在文档中进行跳转)、

location.search = "?page=" + (pagenum + 1);

//浏览历史
//Window对象的history属性引用的是该窗口的History对象。History对象是用来把窗口的浏览历史用文档
//和文档状态列表的形式表示。History对象的length属性表示浏览历史列表中的元素数量，但出于安全的因素，脚本不能访问已保存的URL。

//History对象的back()和forward()方法与浏览器的"后退"和"前进"按钮一样：它们使浏览器在浏览历史中前后跳转一格。
//第三个方法--go()接受一格整数参数，可以在历史列表中向前(正参数)或向后(负参数)跳过任意多个页。

history.go(-2);

//如果窗口包含多个子窗口(比如<iframe>元素)，子窗口的浏览历史会按时间顺序穿插在主窗口的历史中。
//这意味着在主窗口调用history.back()可能会导致其中一个子窗口往回跳转到前一个显示的文档，但主窗口保留当前状态不变。

//window.onerror的第一个参数是描述错误的一条信息，第二个参数是一个字符串，它存放引发错误的JavaScript
//代码所在的文档的URL。第三个参数是文档中发生错误的行数。

window.onerror = function (msg, url, line) {
    if (onerror.num++ < onerror.max) {
        alert("ERROR:" + msg + "\n" + url + ":" + line);
        return true;
    }
}
onerror.max = 3;
onerror.num = 0;

//如果在HTML文档中用id属性来为元素命名,并且如果Window对象没有此名字的属性，
//Window对象会赋予一个属性，它的名字是id属性的值，而它们的值指向表示文档元素的HTMLElement对象

//open()的返回值是代表命名或新创建的Window对象。可以在自己的JavaScript代码中使用这个Window对象来引用新创建的窗口
//就像使用隐式的Window对象window来引用运行代码的窗口一样

var w=window.open();
w.alert("About to visit http://example.com");
w.location="http://example.com";

//在由window.open()方法创建的窗口中，opener属性引用的是打开它的脚本的Window对象。在其他窗口中，opener为null
w.opener!==null;
w.open().opener===w;

//任何窗口或窗体中的JavaScript代码都可以将自己的窗口和窗体引用为window或self。窗体可以用parent属性引用包含它的窗口或窗体的Window对象
parent.history.back();

//如果一个窗口是顶级窗口或标签，而不是窗体，那么其parent属性引用的就是这个窗口本身
parent==self;//只有顶级窗口才会返回true

