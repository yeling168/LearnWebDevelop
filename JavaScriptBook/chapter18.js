/**
 * 使用HTTP API必须做的第一件事就是实例化XMLHttpRequest对象,XMLHttpRequest是一个类
 */
var request = new XMLHttpRequest();

/**
 * 你也能重用已存在的XMLHttpRequest，但注意这将会终止之前通过该对象挂起的任何请求。
 */

//在IE5和IE6中模拟XMLHttpRequest()构造函数
if (window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function () {
        try {
            //如果可用，则使用ActiveX对象的最新版本
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e1) {
            try {
                //否则，则回退到较旧的版本
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e2) {
                //否则，抛错
                throw new Error("XMLHttpRequest is not supported");
            }
        }
    }
}

/**
 * 创建XMLHttpRequest对象之后，发起HTTP请求的下一步是调用XMLHttpRequest对象的
 * open()方法去指定这个请求的两个必需部分:方法和URL
 */
request.open("GET", "data.csv");

/**
 * 如果有请求头的话，请求进程的下个步骤是设置它。例如，POST请求需要"Content-Type"
 * 头指定请求主题的MIME类型:
 *
 * 如果对相同的头调用setRequestHeader()多次，新值不会取代之前指定的值，相反，HTTP
 * 请求将包含这个头的多个副本或这个头将指定多个值。
 */
request.setRequestHeader("Content-Type", "text/plain");

/**
 * 你不能自己指定"Content-Length"、"Date"、"Referer"或"User-Agent"头，XMLHttpRequest
 * 将自动添加这些头而防止伪造它们。类似地，XMLHttpRequest对象会自动处理cookie、连接时间\
 * 字符集和编码判断，所以你无法向setRequestHeader()传递这些头
 */

/**
 * 使用XMLHttpRequest发起HTTP请求的最后一步是指定可选的请求主体并向服务器发送它。使用send()
 * 方法像如下这样做:
 */
request.send(null);

/**
 * GET请求绝对没有主体，所以应该传递null或省略这个参数。POST请求通常拥有主体，同时它也应该匹配
 * 使用setRequestHeader()指定的"Content-Type"头
 */

/**
 * 用POST方法发送纯文本给服务器
 *
 * 注意:setRequestHeader()方法的调用必须在调用open()之前但在send()之后，佛则它将抛出异常
 */
function postMessage(msg) {
    var request = new XMLHttpRequest(); //新请求
    request.open("POST", "/log.php"); //用POST向服务器端发送脚本
    //用请求主体发送纯文本消息
    request.setRequestHeader("Content-Type", //请求主体将是纯文本
        "text/plain;charset=UTF-8");
    //把msg作为请求主体发送
    request.send(msg);
    //请求完成，我们将忽略任何响应和任何错误
}

/**
 * status和statusText属性以数字和文本的形式返回HTTP状态码。这些属性保存标准的HTTP值，像200和"OK"表示成功
 * 请求，404和"Not Found"表示URL不能匹配服务器上的任何资源。
 */

/**
 * 使用getResponseHeader()和getAllResponseHeaders()能查询响应头。XMLHttpRequest会自动处理cookie:
 * 它会从getAllResponseHeaders()头返回集合中过滤掉cookie头，而如果给getResponeHeader()传递"Set-Cookie"
 * 和"Set-Cookie2"则返回null.
 */

/**
 * 响应主体可以从responseText属性中得到文本形式的，从responseXML文档中得到Document形式的。(这个属性名是有历史的:
 * 它实际上对XHTML和XML文档有效，但XHR2说它应该对普通的HTML文档工作。)
 */

/**
 * XMLHttpRequest的readyState值
 * UNSENT  0  open()尚未调用
 * OPENED  1  open()已调用
 * HEADERS_RECEIVED   2  接收到头信息
 * LOADING   3    接收到响应主体
 * DONE      4    响应完成
 */

/**
 * 获取HTTP响应的onreadystatechange
 */
//发出一个HTTP GET请求以获得指定URL的内容
//当响应成功到达，验证它是否是纯文本
//如果是,把它传递给指定回调函数
function getText(url, callback) {
    var request = new XMLHttpRequest(); //创建新请求
    request.open("GET", url);
    request.onreadystatechange = function () { //定义事件处理程序
        //如果请求完成，则它是成功的
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader("Content-Type");
            if (type.match(/^text/)) { //确保响应是文本
                callback(request.responseText); //把它传递给回调函数
            }
        }
    };
    request.send(null); //立即发送请求
}

/**
 * 同步响应
 */
//发起同步的HTTP GET请求以获得指定URL内容
//返回响应文本，或如果请求不成功或响应不是文本就报错
function getTextSync(url) {
    var request = new XMLHttpRequest(); //创建新需求
    request.open("GET", url, false); //传递false实现同步
    request.send(null); //立即发送请求

    //如果请求不是200 OK，就报错
    var type = request.getResponseHeader("Content-Type");
    if (!type.match(/^text/)) {
        throw new Error("Expected textual response;got " + type);
    }
    return request.responseText;
};

/**
 * 解析HTTP响应
 */
//发起HTTP GET响应以获取指定URL的内容
//当响应到达时，把它以解析后的XML Document对象、解析后的JSON对象
//或字符串形式传递给回调函数
function get(url, callback) {
    var request = new XMLHttpRequest(); //创建新需求
    request.open("GET", url); //指定待获取的URL;
    request.onreadystatechange = function () { //定义事件监听器
        //如果请求完成且成功
        var type = request.getResponseHeader("Content-Type");
        //检测类型，这样我们不能再将来得到HTML文档
        if (type.indexOf("xml") !== -1 && request.responseXML) {
            //Document对象响应
            callback(request.responseXML);
        } else if (type === "application/json") {
            callback(JSON.parse(request.responseText)); //JSON响应
        } else {
            callback(request.responseText); //字符串响应
        }
    };
    request.send(null); //立即发送请求
}

/**
 * 用于HTTP请求的编码对象
 */

/**
 * 编码对象属性
 * 如果他们是来自HTML表单的名/值对，使用application/x-www-form-urlencode格式
 */
function encodeFormData(data) {
    if (!data) return ""; //一直返回字符串
    var pairs = []; //为了保存名=值对
    for (var name in data) { //为每个名字
        if (!data.hasOwnProperty(name)) continue; //跳过继承属性
        if (typeof data[name] === "function") continue; //跳过方法
        var value = data[name].toString(); //把值转换成字符串
        name = encodeURIComponent(name.replace("%20"), "+"); //编码名字
        value = encodeURIComponent(value.replace("%20"), "+"); //编码值
        pairs.push(name + "=" + value); //记住名=值对
    }
    return pairs.join('&'); //返回使用"&""连接的名/值对
}

//使用表单编码数据发起一个HTTPPOST请求
function postData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url); //对指定URL发生POST请求
    request.onreadystatechange = function () { //简单的事件处理程序
        if (request.readyState === 4 && callback) {
            callback(request); //调用回调函数
        }
    };
    request.setRequestHeader("Content-Type", //设置Content-Type
        "application/x-www-form-urlencoded");
    request.send(encodeFormData(data)); //发送表单编码的数据
}

/**
 * 表单数据同样可以通过GET请求来提交，既然表单提交的目的是为了执行只读查询，因此GET请求比POST请求更合适。
 * (当提交表单的目标仅仅是一个只读查询，GET比POST更合适。)GET请求从来没有主体，所以需要发送给服务器的表单编码
 * 数据"负载"要作为URL(后跟一个问号)的查询部分。encodeFormData()工具函数也能用于这种GET请求。
 */
//使用表单编码数据发起GET请求
function getData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url + "?" + encodeFormData(data)); //通过添加的编码数据获取指定的url
    request.onreadystatechange = function () { //简单事件处理程序
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.send(null); //发送请求
}

/**
 * 使用JSON编码主体来发起HTTPPOST请求
 */
function postJSON(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url); //对指定URL发送POST请求
    request.onreadystatechange = function () { //简单的事件处理程序
        if (request.readyState === 4 && callback) { //当响应完成时
            callback(request);
        }
    }
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}

/**
 * XML编码的请求
 */
//使用XML文档作为其主体的HTTPPOST请求
//在XML中编码什么东西，在哪儿和半径，然后向指定的URL发送POST请求
function postQuery(url, what, where, radius, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url); //对指定的URL发送POST请求
    request.onreadystatechange = function () { //简单的事件处理程序
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    //Create an XML document with root element <query>
    //对于支持W3C模型的浏览器，使用document.implementation.createDocument()函数来请求XML文档并导入到JavaScript中
    //ocument.implementation.createDocument()函数接受3个参数：指定文档的命名空间的一个命名空间URL，根标签名和一个doc类型。实际上，你将发现这些参数保持未定义或者空
    var doc = document.implementation.createDocument("", "query", null);
    var query = doc.documentElement; //<query>元素
    var find = doc.createElement("find"); //创建<find>元素
    query.appendChild(find); //并把它添加到<query>中
    find.setAttribute("zipcode", where); //设置<find>属性
    find.setAttribute("radius", radius);
    find.appendChild(doc.createTextNode(what)); //并设置<find>的内容

    //现在向服务器发送XML编码的数据
    //注意将自动设置Content-Type头
    request.send(doc);
}

/**
 * 使用HTTPPOST请求上传文件
 * 查找有data-uploadto属性的全部<input type="file">元素
 * 并注册onchange事件处理程序
 * 这样任何选择的文件都会自动通过POST方法发送到指定的"uploadto"URL
 * 服务器的响应是忽略的
 */

whenReady(function () { //当文档准备就绪时运行
    var elts = document.getElementsByTagName("input");
    for (var i = 0; i < elts.length; i++) {
        var input = elts[i];
        if (input.type !== "file") continue; //跳过所有非文件上传元素
        var url = input.getAttribute("data-uploadto"); //获取上传URL
        if (!url) continue; //跳过任何没有URL的元素
        input.addEventListener("change", function () { //当用户选择文件时
            //假设单个文件选择
            //<input type="file">元素有一个files属性，它是File对象中的类数组对象
            var file = this.files[0];
            if (!file) return; //如果没有文件，不做任何时间
            var xhr = new XMLHttpRequest(); //创建新请求
            xhr.open("POST", url); //向这个URL发送POST请求
            xhr.send(file); //把文件作为主体发送
        }, false); //false同步请求
    }
});

/**
 * 使用POST方法发送multipart/form-data请求主体
 */
function postFormData(url, data, callback) {
    if (typeof FormData === "undefined") {
        throw new Error("FormData is not implemented");
    }
    var request = new XMLHttpRequest(); //更新HTTP请求
    request.open("POST", url); //对指定URL发送POST请求
    request.onreadystatechange = function () { //简单的事件处理程序
        if (request.readyState === 4 && callback) {
            callback(request); //调用回调函数
        }
    };
    var formdata = new FormData();
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue; //跳过继承的属性
        var value = data[name];
        if (typeof value === "function") continue; //跳过方法
        //每个属性变成请求请求的一个部分
        //这里允许File对象
        formdata.append(name, value); //作为一部分添加名/值对
    }
    //在multipart/form-data请求主体中发送名/值对
    //每对都是请求的一个部分，注意，当传入FormData对象时
    //send()会自动设置Content-type头
    request.send(formdata);
}

//设计模式：https://www.cnblogs.com/cangowu/p/5070759.html,https://www.cnblogs.com/xiyangbaixue/p/3902699.html,https://www.cnblogs.com/xianyulaodi/p/5827821.html,https://www.cnblogs.com/z937741304/p/8671191.html

/**
 * process事件除了像type和timestamp这样常用的Event对象属性，与这些progress事件相关联的事件对象还有3个有用的属性。
 * loaded属性是目前传输的字节数值。total属性是自"Content-Length"头传输的数据的整体长度(单位是字节)，如果不知道内容
 * 长度则为0.最后，如果知道内容长度则lengthComputable属性为true；否则为false。显然，total和loaded属性对progress
 * 事件对progress事件处理程序相当有用
 */
request.onprogress = function (e) {
    if (e.lengthComputable) {
        //知道内容长度
        ProgressEvent.innerHTML = Math.round(100 * e.loaded / e.total) + "% Complete";
    }
}

/**
 * 上传进度事件
 */
//查找所有含有"fileDropTarget"类的元素
//并注册DnD事件处理程序使它们能响应文件的拖放
//当文件放下时，上传它们到data-uploadto属性指定的URL
whenReady(function () {
    var elts = document.getElementsByClassName("fileDropTarget");
    for (var i = 0; i < elts.length; i++) {
        var target = elts[i];
        var url = target.getAttribute("data-uploadto");
        if (!url) continue;
        createFileUploadDropTarget(target, url);
    }

    function createFileUploadDropTarget(target, url) {
        //跟踪当前是否正在上传，因此我们能拒绝放下
        //我们可以处理多个并发上传
        //但对这个例子使用进度通知太困难了
        var uploading = false;
        console.log(target, url);
        //拖放过程中回触发以下事件
        //在拖动目标上触发事件(源元素)
        //ondragstart--用户开始拖动元素时触发
        //ondrag--元素正在拖动时触发
        //ondragend--用户完成元素拖动后触发
        //释放目标时触发的事件
        //ondragenter--当被鼠标拖动的对象进入其容器范围内时触发次事件
        //ondragover--当某被拖动的对象在另一对象容器范围内拖动时触发此事件
        //ondragleave--当被鼠标拖动的对象离开其容器范围内时触发此事件
        //ondrop--在一个拖动过程中，释放鼠标键时触发此事件
        //链接和图片默认是可拖动的，不需要draggable属性
        target.ondragenter = function (e) {
            console.log("dragenter");
            if (uploading) return; //如果正在忙，忽略拖放
            //dataTransfer p481
            var types = e.dataTransfer.types;
            if (types && ((types.contains && types.contains("Files")) || (types.indexOf("Files") !== -1))) {
                target.classList.add("wantdrop");
                return false;
            }
        };
        target.ondragover = function (e) {
            if (!uploading) {
                return false;
            }
        };
        target.ondragleave = function (e) {
            if (!uploading) {
                target.classList.remove("wantdrop");
            }
        };
        target.ondrop = function (e) {
            if (uploading) return false;
            //p510 拖放API允许通过dataTransfer.files属性访问用户"拖放"到元素上的文件
            var files = e.dataTransfer.files;
            if (files && files.length) {
                uploading = true;
                var message = "Uploading files:<ul>";
                for (var i = 0; i < files.length; i++) {
                    message += "<li>" + files[i].name + "</li>";
                }
                message += "</ul>";
            }
            target.innerHTML = message;
            target.classList.remove("wantdrop");
            target.classList.add("uploading");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            var body = new FormData();
            for (var i = 0; i < files.length; i++) {
                body.append(i, files[i]);
            }
            xhr.upload.onprogress = function (e) {
                //如果知道内容长度则lengthComputable为true
                if (e.lengthComputable) {
                    target.innerHTML = message + Math.round(e.loaded / e.total * 100) + "% Complete";
                }
            };
            xhr.upload.onload = function (e) {
                uploading = false;
                target.classList.remove("uploading");
                target.innerHTML = "Drop files to upload";
            }
            xhr.send(body);
            return false;
        }
        target.classList.remove("wantdrop");
    }
})

//实现超时
/**
 * 发起HTTP GET请求获取指定URL内容
 * 如果响应成功到达，传入responseText给回调函数
 * 如果响应在timeout毫秒内没有到达，中止这个请求
 * 浏览器可能在abort()触发"readyStatechange"
 * 如果是部分请求结果到达，甚至可能设置status属性
 * 所以需要设置一个标记，当部门且超时的响应到达时不会调用回调函数
 * 如果使用load事件就没有这个风险
 */

function timeGetText(url, timeout, callback) {
    var request = new XMLHttpRequest(); //创建新请求
    var timeout = false; //是否超时
    //启动计时器，在timeout毫秒后将中止请求
    var timer = setTimeout(function () { //如果触发，启动一个计时器
        timeout = true; //设置标记
        request.abort(); //然后中止请求
    }, timeout); //中止请求之前的时长
    request.open("GET", url);
    request.onreadystatechange = function () { //定义事件处理程序
        if (request.readyState !== 4) return; //忽略未完成的请求
        if (timeout) return; //忽略中止请求
        clearTimeout(timer); //取消等待的超时
        if (request.status === 200) {
            callback(request.responseText); //把response传给回调函数
        }
    };
    request.send(null); //立即发送请求
}

//使用HEAD和CORS请求链接详细信息
/**
 * linkdetails.js
 *
 * 这个常见的JavaScript模块查询有href属性但没有title属性的所有<a>元素
 * 并给它们注册onmouseover事件处理程序
 * 这个事件处理程序使用XMLHttpRequest HEAD请求取得链接资源的详细信息
 * 然后把这些详细信息设置为链接的title属性
 * 这样它们将会在工具提示中显示
 */
whenReady(function () {
    //是否有机会使用跨域请求?
    //测试withCredentials的存在性是测试浏览器是否支持CORS的一种方法
    var supportsCORS = (new XMLHttpRequest()).withCredentials !== undefined;
    //遍历文档中的所有链接
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (!link.href) continue; //跳过没有超链接的锚点
        if (link.title) continue; //跳过已经有工具提示的链接
        //如果这是一个跨域链接
        if (link.host !== location.host || link.protocol !== location.protocol) {
            link.title = "站外链接"; //假设我们不能得到任何信息
            if (!supportsCORS) continue; //如果没有CORS支持就退出
            //否则，我们能了解这个链接的更多信息
            //所以继续前进，注册事件处理程序，于是我们可以尝试
        }
        //注册事件处理程序，当鼠标悬停时下载链接详细信息
        if (link.addEventListener) {
            link.addEventListener("mouseover", mouseoverHandler, false);
        } else {
            link.attachEvent("onmouseover", mouseoverHandler)
        }
    }

    function mouseoverHandler(e) {
        var link = e.target || e.srcElement; //<a>元素
        var url = link.href; //链接URL

        var req = new XMLHttpRequest(); //新请求
        req.open("HEAD", url); //仅仅询问头信息
        req.onreadystatechange = function () { //事件处理程序
            if (req.readyState !== 4) return; //忽略未完成的请求
            if (req.status === 200) { //如果成功
                var type = req.getResponseHeader("Content-Type"); //获取链接的详细情况
                var size = req.getResponseHeader("Content-Length");
                var date = req.getResponseHeader("Last-Modified");
                //在工具提示中显示详细信息
                link.title = "类型:" + type + "\n" + "大小:" + size + "\n" + "时间:" + date;
            } else {
                //如果请求失败，且链接没有"站外链接"的工具提示
                //那么显示这个错误
                if (!link.title) {
                    link.title = "Couldn't fetch details:\n" + req.status + "" + req.statusText;
                }
            }
        }
        req.send(null);
        //移除处理程序:仅想一次获取这些头信息
        if (link.removeEventListener) {
            link.removeEventListener("mouseover", mouseoverHandler, false)
        } else {
            link.detachEvent("onmouseover", mouseoverHandler);
        }
    }
});

//使用script元素发送JSONP请求
/**
 * 根据指定的URL发送一个JSONP请求
 * 然后把解析得到的响应数据传递给回调函数
 * 在URL中添加一个名为jsonp的查询参数，用于指定该请求的回调函数的名称
 */
function getJSONP(url, callback) {
    //为本次请求创建一个唯一的回调函数名称
    var cbnum = "cb" + getJSONP.counter++; //每次自增计数器
    var cbname = "getJSONP." + cbnum; //作为JSONP函数的属性

    //将回调函数名称以表单编码的形式添加到URL的查询部分中
    //使用jsonp作为参数名，一些支持JSONP的服务
    //可能使用其他的参数名，比如callback
    if (url.indexOf("?") === -1) { //url没有查询部分
        url += "?jsonp" + cbname; //作为查询部分添加参数
    } else {
        //否则
        url += "&jsonp=" + cbname; //作为新的参数添加它
    }
    //创建script元素用于发送请求
    var script = document.createElement("script");

    //定义将被脚本执行的回调函数
    getJSONP[cbnum] = function (response) {
        try {
            callback(response); //处理响应数据
        } finally { //即使回调函数或响应抛出错误
            delete getJSONP[cbnum]; //删除该函数
            script.parentNode.removeChild(script); //移除script元素
        }
    };
    //立即触发HTTP请求
    script.src = url; //设置脚本的URL
    document.body.appendChild(script); //把它添加到文档中
}
getJSONP.counter = 0; //用于创建唯一回调函数名称的计数器

/**
 * EventSource()构造函数
 */

var ticker = new EventSource("stockprices.php");
ticker.onmessage = function (e) {
    var type = e.type;
    var data = e.data;
    //现在处理事件类型和事件的字符串数据
}

//使用XMLHttpRequest模拟EventSource
/**
 * 在不支持EventSource API的浏览器里进行模拟
 * 需要有一个XMLHttpRequest对象在新数据写到长期存在的HTTP连接中时发送readystatechange事件
 * 注意，这个API的实现是不完整的
 * 它不支持readyState属性，close()方法，open和error事件
 * 消息事件也是通过onmessage属性注册的--这个版本还没有定义add EventListener()方法
 */
if (window.EventSource === undefined) { //如果还没有定义add EventListener()方法
    window.EventSource = function (url) { //如果未定义EventSource对象
        var xhr; //HTTP连接器
        var evtsrc = this; //在事件处理程序中用到
        var charsReceived = 0; //这样我们就可以知道什么是新的
        var type = null; //检查属性响应类型
        var data = ""; //存放消息数据
        var eventName = "message"; //事件对象的类型字段
        var lastEventId = ""; //用于和服务器再次同步
        var retrydelay = 1000; //在多个连接请求之间设置延迟
        var aborted = false; //设置为true表示放弃连接

        //创建一个XHR对象
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 3:
                    processData();
                    break; //当数据块到达时
                case 4:
                    reconnect();
                    break; //当请求关闭的时候
            }
        }
        //通过connect()创建一个长期存在的连接
        connect();

        //如果连接正常关闭，等待1秒钟再尝试连接
        function reconnect() {
            if (aborted) return; //在终止连接后不进行重连操作
            if (xhr.status >= 300) return; //在报错之后不进行重连操作
            setTimeout(connect, retrydelay); //等到1秒后进行重连
        };
        //这里的代码展示了如何建立一个连接
        function connect() {
            charsReceived = 0;
            type = null;
            xhr.open("GET", url);
            xhr.setRequestHeader("Cache-Control", "no-cache");
            if (lastEventId) xhr.setRequestHeader("Last-Event-ID", lastEventId);
            xhr.send();
        }
        //每当数据到达的时候，会处理并触发onmessage处理程序
        //这个函数处理Server-Send Events协议的细节
        function processData() {
            if (!type) { //如果没有准备好，先检查响应类型
                type = xhr.getResponseHeader('Content-Type');
                if (type !== "text/event-stream") {
                    aborted = true;
                    xhr.abort();
                    return;
                }
            }
            //记录接收的数据
            //获得响应中未处理的数据
            var chunk = xhr.responseText.substring(charsReceived);
            charsReceived = xhr.responseText.length;
            //将大块的文本数据分成多行并遍历它们
            var lines = chunk.replace(/(\r\n|\r|\n)$/, "").split("/\r\n|\r|\n/");
            for (var i = 0; i < lines.length; i++) {
                var line = lines[i],
                    pos = line.indexOf(":"),
                    name, value = "";
                if (pos == 0) continue; //忽略注释
                if (pos > 0) { //字段名称:值
                    name = line.substring(0, pos);
                    value = line.substring(pos + 1);
                    if (value.charAt(0) == " ") value = value.substring(1);
                } else {
                    name = line;
                }
                switch (name) {
                    case "event":
                        eventName = value;
                        break;
                    case "data":
                        data += value + "\n";
                        break;
                    case "id":
                        lastEventId = value;
                        break;
                    case "retry":
                        retrydelay = parseInt(value) || 1000;
                        break;
                    default:
                        break; //忽略其他行
                }
                if (line === "") { //一个空行意味着发送事件
                    if (evtsrc.onmessage && data !== "") {
                        //如果末尾有新行，就裁剪新行
                        if (data.charAt(data.length - 1) == "\n") {
                            data = data.substring(0, data.length - 1);
                        }
                        evtsrc.onmessage({ //这里是一个伪造的事件对象
                            type: eventName, //事件类型
                            data: data, //事件数据
                            origin: url //数据源
                        })
                    }
                }
            }
        }
    }
}

//定制的Server-Sent Events聊天服务器
/**
 * 这个例子用的服务器是JavaScript，运行在NodeJS平台上
 * //该聊天室的实现比较简单，而且是完全匿名的
 * 将新的消息以POST发送到/chat地址，或者以GET形式从同一个URL获取消息的文本/事件流
 * 创建一个GET请求到"/"来返回一个简单的HTML文件
 * 这个文件包括客户端聊天UI
 */
var http = require('http');//NodeJS HTTP服务器API
//聊天客户端使用的HTML文件，在下面会用到
var clientui = require('fs').readdirSync('chatclient.html');
var emulation = require('fs').readFileSync('EventSourceEmulation.js');

//ServerResponse对象数组，用于接收发送的事件
var clients = [];

//每20秒发送一条注释到客户端
//这样它们就不会关闭连接再重连
setInterval(function () {
    clients.forEach(function (client) {
        client.write(":ping?n");
    })
}, 20000);

//创建一个新服务器
var server = new http.Server();
//当服务器获取到一个新的需求，运行回调函数
server.on("request", function (request, response) {
    //解析请求的URL
    var url = require('url').parse(request.url);
    //如果请求是发送到"/",服务器就发送客户端聊天室UI
    if (url.pathname === "/") {//聊天客户端的UI请求
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<script>" + emulation + "</script>");
        response.write(clientui);
        response.end();
        return;
    } else if (url.pathname !== "/chat") {
        //如果请求是发送到"/chat"之外的地址，则返回404
        response.writeHead(404);
        response.end();
        return;
    }
    //如果请求类型是post,那么就有一个客户端发送了一条新的消息
    if (request.method === "POST") {
        request.setEncoding("utf-8");
        var body = "";
        //在获取到数据之后，将其添加到请求主体中
        request.on("data", function (chunk) {
            body += chunk;
        })
        //当请求完成时，发送一个空响应
        //并将消息传播到所有处于监听状态的客户端中
        request.on("end", function () {
            response.writeHead(200);//响应该请求
            response.end();

            //将消息转换为文本/事件流格式
            //并以两个换行符结束
            message = 'data:' + body.replace('\n', '\ndata:' + '\r\n\r\n');
            //发送消息给所有监听的客户端
            clients.forEach(function (client) {
                client.write(message);
            });
        })
    } else {
        //otherwise,a client is requesting a stream of messages
        //如果不是POST类型的请求，则客户端正在请求一组消息
        response.writeHead(200, { 'Content-Type': 'text/event-stream' });
        response.write("data:connect\n\n");
        //如果客户端关闭了连接
        //从活动客户端数组中删除对应的响应对象
        request.connection.on("end", function () {
            clients.splice(clients.indexOf(response), 1);
            response.end();
        });
        //记下响应对象，这样就可以向它发送未来的消息
        clients.push(response);
    }
});
//启动服务器，监听8000端口，访问http:localhost:8000/来进行使用它
server.listen(8000);
