//地理位置
navigator.geolocation.getCurrentPosition(); //获取用户当前位置

navigator.geolocation.watchPosition(); //获取当前位置，同时不断地监视当前位置，一旦用户位置发生更改，就会调用指定的回调函数

navigator.geolocation.clearWatch(); //停止监视用户位置，传递给此方法的参数应当是调用watchPosition()方法获得的返回值

/**
 * 地理位置API是异步的:getCurrentPosition()和watchPosition()方法都徐亚接受一个回调函数作为参数
 * 在判断用户的位置信息时，浏览器会调用该函数。
 */

navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos);
    var latitude = pos.coords.latitute;
    var longitude = pos.coords.longitude;
    alert("Your position:" + latitude + "," + longitude);
})

//通过获取地理位置信息在地图上显示当前位置
//返回一个新创建的<img>元素，该元素用于在获取到地理位置信息后，显示一张Google地图
//插入到文档中，以使它可见
//如果当前浏览器不支持地理位置API，则抛出一个错误
function getmap() {
    //检查是否支持地理位置API
    if (!navigator.geolocation) {
        throw "Geolocation not supported.";
    }
    //创建一个新的<img>元素，并开始请求地理位置信息
    //img元素显示包含当前位置的地图，然后再将返回该图片
    var image = document.createElement("img");
    navigator.geolocation.getCurrentPosition(setMapURL);
    return image;
    //当(如果)成功获取到地理位置信息后，会在返回image对象后调用此方法
    function setMapURL(pos) {
        //从参数对象(pos)中获取位置信息
        var latitude = pos.coords.latitude; //经度
        var longitude = pos.coords.longitude; //纬度
        var accuracy = pos.coords.accuracy; //米

        //构造一个URL,用于请求一张显示当前位置的静态Google地图
        var url = "http://maps.google.com/maps/api/staticmap" + "?center=" + latitude + "," + longitude + "&size=640*640&sensor=true";

        //设置一个大致的缩放级别
        var zoomlevel = 0; //以各种方式开始缩放
        if (accuracy > 80) { //在低精度情况下进行放大
            zoomlevel -= Math.round(Math.log(accuracy / 50) / Math.LN2);
        }
        url += "&zoom=" + zoomlevel; //将缩放级别添加到URL中

        //现在在image对象中显示该地图。
        image.src = url;
    }
}

//展示如何使用所有地理位置特性
//异步的获取我的位置，并在指定的元素中展示出来
function whereami(elt) {
    //将此对象作为第三个参数传递给getCurrentPosition()方法
    var options = {
        //设置为true,表示如果可以的话
        //获取高精度的位置信息(例如,通过GPS获取)
        //但是，要注意的是,这会影响电池寿命
        enableHighAccuracy: false, //可以近似:这是默认值
        //如果获取缓存过的位置信息就足够的话，可以设置此属性
        //默认值为0,,表示强制检查新的位置信息
        maximunmAge: 300000, //5分钟左右
        //愿意等待多长时间来获取位置信息
        //默认值为无限长,getCurrentPosition()方法永不超时
        timeout: 15000 //不要超过15秒
    };
    if (navigator.geolocation) { //如果支持的话，就获取位置信息
        navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        elt.innerHTML = "Geolocation not supported in this browser";
    }
    //当获取位置信息失败的时候，会调用此函数
    function error(e) {
        //error对象包含一些数字编码和文本信息，如下所示:
        //1:用户不允许分享他/她的位置信息
        //2:浏览器无法确定位置
        //3:发生超时
        elt.innerHTML = "Geolocation error" + e.code + ":" + e.message;
    }
    //当获取位置信息成功的时候，会调用此函数
    function success(pos) {
        //总是可以获取如下这些字段
        //但是要注意的是时间戳信息在outer对象中，而不再inner、coords对象中
        var msg = "At" + new Date(pos.timestamp).toLocaleString() + " you were within" +
            pos.coords.accuracy + " meters of latitude " +
            pos.coords.latitude + " longitude " +
            pos.coords.longitude + ".";

        //如果设备还返回了海拔信息，则将其添加进去
        if (pos.coords.altitude) {
            msg += " You are " + pos.coords.altitude + "+-" +
                pos.coords.altitudeAccuracy + "meters above sea level.";
        }
        //如果设备还返回了速度和航向信息，也将它们添加进去
        if (pos.coords.speed) {
            msg += " You are travelling at" +
                pos.coords.speed + "m/s on heading" +
                pos.coords.heading + ".";
        }
        elt.innerHTML = msg; //显示所有的位置信息
    }
}

//https://edu.aliyun.com/course/1236/lesson/list?spm=5176.8764728.aliyun-edu-course-tab.2.CV8M4a&previewAs=guest

//要创建一个新的worker，只须使用worker()构造函数，并将指定在Worker中运行的JavaScript脚本的
//URL传递给该构造函数即可，如下所示
var loader = new Worker("utils/loader.js");

/**一旦获取到Worker对象后，就可以通过postMessage()方法来传递参数了。传递给postMessage()
 * 方法的值会复制，最终的副本会通过message事件传递给Worker.
 */

loader.postMessage("file.txt");

/**
 * 要注意的是,Worker()的postMessage()方法是没有参数的，而Window对象的postMessage()方法是有的。
 * 还有，Worker的postMessage()方法在主流浏览器中都会正确地复制消息，不像Window.postMessage(),
 * 在一些重要的浏览器中，对字符串消息仍然是有限制的。
 * 
 * 可以通过监听Worker对象上的message事件来接收来自Worker的消息
 */

worker.onmessage = function (e) {
    var message = e.data;
    console.log("URL contents:" + message);
}

/**
 * 如果Worker抛出了异常，并且它自己没有对其进行捕获和处理，可以作为监听的一个error事件来传递该异常
 */

worker.onerror = function (e) {
    //记录错误消息日志:包括Worker的文件名和行数
    console.log("Error at" + e.filename + ":" + e.lineno + ":" + e.message);
}

/**
 * 和所有的事件目标一样，Worker对象也定义了标准的addEventListener()方法和removeEventListener()
 * 方法，如果想要管理多个事件处理程序，可以使用这些方法来代替onmessage和onerror属性
 * 
 * Worker对象还有另一个方法:terminate().该方法强制一个Worker线程结束运行。
 */

var bytes = new Uint8Array(1024);
for (var i = 0; i < bytes.length; i++) {
    bytes[i] = i & 0xFF;
}

var copy = new Uint8Array(bytes);
var ints = new Int32Array([0, 1, 2, 3]);

//使用埃拉瑟尼筛选法，返回一个小于n的最大素数
function sieve(n) {
    var a = new Int8Array(n + 1);
    var max = Math.floor(Math.sqrt(n));
    var p = 2;
    while (p <= max) {
        for (var i = 2 * p; i <= n; i += p) {
            a[i] = 1;
        }
        while (a[++p]);
    }
    while (a[n]) n--;
    return n;
}

var matrix = new Float64Array(9);
var Threedpoint = new Int16Array(3);
var rgba = new Uint8Array(4);
var sudoku = new Uint8Array(81);

/**
 * 类型化数组自己还定义了一些用于设置和获取整个数组内容的方法。其中set()方法用于将一个
 * 常规或者类型化数组复制到一个类型化数组中
 */

var bytes = new Uint8Array(1024);
var pattern = new Uint8Array([0, 1, 2, 3]);
bytes.set(pattern);
bytes.set(pattern, 4);
bytes.set([0, 1, 2, 3], 8);

/**
 * 类型化数组还有一个subarray()方法，调用该方法返回部分数组内容
 */

var ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
var last3 = ints.subarray(ints.length - 3, ints.length);

/**
 * subarray()方法不会创建数据的副本。它只是直接返回原数组的其中一部分内容
 */

ints[9] = -1;
last3[2];

/**
 * subarray方法返回当前数组的一个新视图，这一事实，说明了类型化数组中某些重要的概念:它们
 * 都是基本字节块的视图，称为一个ArrayBuffer。每个类型化数组都有与基本缓冲区相关的三个属性
 */

last3.buffer
last3.buffer == ints.buffer; //=>true:两者都是同一缓冲区上的视图
last3.byteOffset; //=>14:此视图从基本缓冲区的第14个字节开始
last3.byteLength; //=>6:该视图是6字节(3个16位整数)长


/**
 * ArrayBuffer对象自身只有一个返回它长度的属性。
 */

last3.byteLength; //=>6:此视图6个字节长
last3.buffer.byteLength; //=>20:但是基本缓冲区长度有20个字节长
/**
 * ArrayBuffer只是不透明块,可以通过类型化数组获取这些字节，但是ArrayBuffer自己并不是一个类型化数组。
 * 然而，要注意的是:可以像对任意JavaScript对象那样，使用数字数组索引来操作ArrayBuffer。但是，这样做并不能访问缓冲区中
 * 字节的权限。
 */

var bytes = new Uint8Array(8);
bytes[0] = 1;
bytes.buffer[0]; //undefined,缓冲区没有索引值0
bytes.buffer[1] = 255;
bytes.buffer[1];
bytes[1];

/**
 * 可以直接使用ArrayBuffer()构造函数来创建一个ArrayBuffer，有了ArrayBuffer对象后，可以在
 * 该缓冲区上创建任意数量的类型化数组视图
 */

var buf = new ArrayBuffer(1024 * 1024);
var asbytes = new Uint8Array(buf);
var asints = new Int32Array(buf);
var lastK = new Uint32Array(buf, 1023 * 1024);
var ints = new Int32Array(buf, 1024, 256);

var little_endian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

var data;
var view = DataView(data);
var int = view.getInt32(0);
int = View.getInt32(4, false);
int = View.getInt32(8, true);
view.setInt32(8, int, false);


/**
 * 使用XMLHttpRequest现在Blob
 */
//以Blob的形式获取URL指定的内容，并将其传递给指定的回调函数
//这里的代码没有测试过:因为截至撰写本书时，没有一个浏览器支持该API
function gerBlob(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function () {
        callback(xhr.response);
    }
    xhr.send(null);
}

//构造Blob
//创建一个新的BlobBuilder
var bb = new BlobBuilder();
//把一个字符串追加到Blob中，并以一个NUL字符标记为字符串结束
bb.append("This blob contains this text and 10 big-endian 32 bit signed ints.");
bb.append("\0");
//将数据存储到ArrayBuffer中
var ab = new ArrayBuffer(4 * 10);
var dv = new DataView(ab);
for (var i = 0; i < 10; i++) {
    dv.setInt32(i * 4, i);
}
//将ArrayBuffer添加到Blob中
bb.append(ab);
//现在从builder中获取Blob中，并指定MIME类型
var blob = bb.getBlob("x-optional/mime-type-here");

//实现跨浏览器创建Blob URL
var getBlobURL = (window.URL && URL.createObjectURL.bind(url)) ||
    (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL)) || window.createObjectURL ||
    window.createObjectURL;

//同步地获取一个文件系统。传统文件系统的有效期和大小参数
//返回一个文件系统系统对象或者抛出错误
var fs = requestFileSystemSync(PERSISTENT, 1024 * 1024);
//异步版本的API需要使用回调函数来处理成功和失败的情况
requestFileSystem(TEMPORARY, //有效期
    50 * 1024 * 1024, //大小:50MB                 
    function (fs) { //fs就是该文件系统对象
        //这里使用fs进行一些操作
    },
    function (e) { //这里e是一个错误对象
        console.log(e); //或者以其他方式处理它
    }
)


/**
 * 读取文本文件"hello.txt"，并将其内容以日志的形式输出
 * 由于使用了异步API，因此出现了4层函数嵌套
 * 此例子不包括任何错误回调处理
 */

requestFileSystem(PERSISTENT, 10 * 1024 * 1024, function (fs) {
    fs.root.getFile("hello.txt", {}, function (entry) {
        entry.file(function (file) {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                console.log(reader.result);
            }
        })
    })
})

//异步使用文件系统API
/**
 * 这些函数在Google Chrome10.0开发版本中都测试过了
 * 启动Chrome的时候需要开启这些选项
 * --unlimited-quota-for-files       : 启用文件系统访问
 * --allow-file-access-from-files    : 允许通过 file:// URLs进行测试
 */

//这里使用的大部分异步函数都接受一个可选的错误回调参数
//这里的回调函数只是简单地将错误输出
function logerr(e) {
    console.log(e);
}

//requestFileSystem()方法创建了一个在沙箱环境中的本地文件系统
//并且只有同源的应用才可以访问
//可以在该文件系统中进行文件读/写，但是只能限定在该沙箱中
//不能访问其他的文件系统
var filesystem; //假设在调用下面的函数之前，已经初始化完毕
requestFileSystem(PERSISTENT, //或者采用用于缓存文件的临时(TEMPORARY)文件系统
    10 * 1024 * 1024, //10MB
    function (fs) { //完成后，调用此方法
        filesystem = fs; //将问价系统保存到一个全局变量中
    }, logerr); //如果发生错误则调用此方法
//以文本形式读取指定文件的内容，并将它们传递给回调函数
function readTextFile(path, callback) {
    //根据指定的文件名，调用getFile()获取相应的FileEntry对象
    filesystem.root.getFile(path, {}, function (entry) {
        //使用FileEntry调用此方法来获得文件
        //现在调用FileEntry.file()方法获取File对象
        entry.file(function (file) { //file就表示File对象
            var reader = new FileReader(); //创建一个FileReader对象
            reader.readAsText(file); //读取文件
            reader.onload = function () {
                callback(reader.result); //将其内容传递给回调函数
            }
            reader.onerror = logerr; //如果发生错误则调用此方法
        }, logerr); //记录调用getFile()时发生的错误
    })
}

//将制定的内容添加到指定路径的文件中,
//如果指定路径的文件不存在，则使用该文件名创建一个新的文件
//完成之后，调用回调函数
function appendToFile(path, contents, callback) {
    //filesystem.root指根目录
    filesystem.root.getFile( //获取FileEntry对象
        path, //想要获取的文件的名字和路径
        {
            create: true
        }, //如果不存在则创建一个
        function (entry) { //完成之后调用此函数
            entry.createWriter( //创建完成之后调用此函数
                function (writer) { //创建完成之后调用此函数
                    //默认情况下，从文件最开始开始写入
                    //这里指定从文件最后开始写
                    writer.seek(writer.length); //移动到文件最后

                    //将文件内容转换成Blob
                    //contents参数可以是字符串，Blob或者ArrayBuffer
                    var bb = new BlobBuilder();
                    bb.append(contents);
                    var blob = bb.getBlob();

                    //现在将该Blob写入到文件中
                    writer.writer(blob);
                    writer.onerror = logerr; //记录调用writer()方法时发生的错误
                    if (callback) { //如果有回调函数
                        writer.onwrite = callback; //
                    }
                },
                logerr); //记录调用createWriter()方法时发生的错误
        },
        logerr) //记录调用getFile()方法时发生的错误
}

//删除指定的文件，完成后调用指定的回调函数
function deleteFile(name, callback) {
    filesystem.root.getFile(name, {}, //根据指定的名字获取相应的FileEntry对象
        function (entry) { //entry就是该FileEntry对象
            entry.remove(callback, //删除FileEntry对象
                logerr); //或者记录调用remove()方法时发生的错误
        }, logerr); //记录调用getFile()方法时发生的错误
}

//根据指定的名字创建一个新的目录
function makeDirectory(name, callback) { //要创建的目录的名字
    filesystem.root.getDirectory(name, { //选项
            create: true, //如果不存在，则创建
            exclusive: true //如果存在，则报错
        },
        callback, //完成后调用此方法
        logerr); //记录错误
}

//选取指定目录的内容，并以字符串数组的形式将内容传递给指定的回调函数
function listFiles(path, callback) {
    //如果指定的内容不存在，则列出根目录
    //否则，根据名字查找目录并将目录内容列出来(或者如果发生错误就记录错误)
    if (!path) getFiles(filesystem.root);
    else filesystem.root.getDirectory(path, {}, getFiles, logerr);

    function getFiles(dir) {
        var reader = dir.createReader(); //一个DirecoryReader对象
        var list = []; //用来存储文件名
        reader.readEntries(handleEntries, //将每项都传递给下面的函数
            logerr); //或者记录错误
        //读取目录可以分成很多步
        //必须一直调用readEntries()方法直到获取到空数组为止
        //完成之后可以将整个列表传递给回调函数
        function handleEntries(entries) {
            if (entries.length == 0) callback(list); //完成
            else {
                //否则，将这些项添加到列表中，并继续读取
                //此类数组对象包含FileEntry对象
                //这里需要挨个获取它们的名字
                for (var i = 0; i < entries.length; i++) {
                    var name = entries[i].name; //获取名字
                    if (entries[i].isDirectory) name += "/"; //标记目录
                    list.push(name); //添加到列表中
                }
                //获取下一批项
                reader.readEntries(handleEntries, logerr);
            }
        }
    }
}

//同步文件系统API
//在worker线程中使用同步API实现的文件系统工具函数
var filesystem = requestFileSystemSync(PERSISTENT, 10 * 1024 * 1024);

function readTextFile(name) {
    //从根DirectoryEntry总获取FileEntry对象，再从FileEntry中获取File
    var file = filesystem.root.getFile(name).file();
    //使用同步FileReaderAPI读取
    return new FileReaderSync().readAsText(file);
}

function appendToFile(name, contents) {
    //从根DirectoryEntry中获取FileEntry对象，再从FileEntry中获取FileWriter
    var writer = filesystem.root.getFile(name, {
        create: true
    }.createWriter());
    writer.seek(writer.length); //从文件最后开始
    var bb = new BlobBuilder(); //将文件内容构造进Blob中
    bb.append(contents);
    writer.write(bb.getBlob()); //将Blob写入文件中
}

function deleteFile(name) {
    filesystem.root.getFile(name).remove();
}

function makeDirectory(name) {
    filesystem.root.getDirectory(name, {
        create: true,
        exclusive: true
    });
}

function listFiles(path) {
    var dir = filesystem.root;
    if (path) dir = dir.getDirectory(path);

    var lister = dir.createReader();
    var list = [];
    do {
        var entries = lister.readEntries();
        for (var i = 0; i < entries.length; i++) {
            var name = entries[i].name;
            if (entries[i].isDirectory) name += "/";
            list.push(name);
        }
    } while (entries.length > 0);
    return list;
}

//允许主线程通过发送消息来使用这些工具函数
onmessage = function (e) {
    //消息是如下形式的对象
    //{function:"appendToFile",args:["test","testing,testing"]}
    //根据指定的args调用指定的函数
    //再将结果消息发送回去
    var f = self[e.data.function];
    var result = f.apply(null, e.data.args);
    postMessage(result);
}

/**
 * WebSocket API的使用非常简单。首先，通过WebSocket()构造函数创建一个套接字
 */

var socket = new WebSocket("ws://ws.example.com:1234/resource");

//创建了套接字之后，通常需要在上面注册一个事件处理程序
socket.onopen = function (e) {
    //套接字已经连接
}

socket.onclose = function (e) {
    //套接字已经关闭
}

socket.onerror = function (e) {
    //出错了
}

socket.onmessage = function (e) {
    var message = e.data; //服务器发送一条消息
}

//为了通过套接字发送数据给服务器，可以调用套接字的send()方法
socket.send("Hello, server!");


/**
 * 这是运行在NodeJS的服务器端的JavaScript
 * 在HTTP服务器上，它运行一个WebSocket服务器，该服务使用来自
 * https://github.com/miksago/node-websocket-server/的第三方WebSocket库实现
 * 如果得到"/"的一个HTTP请求，则返回聊天客户端的HTML文件
 * 除此之外任何HTTP请求都返回404
 * 通过WebSocket协议接收到的消息都仅广播给所有激活状态的连接
 */

var http = require('http'); //使用Node的HTTP服务器API
var ws = require('websocket-server'); //使用第三方WebSocket库

//启动阶段，读取聊天客户端的资源文件
var clientui = require('fs').readFileSync("wschatclient.html");

//创建一个HTTP服务器
var httpserver = new http.Server();

//当HTTP服务器获得一个新请求时，运行此函数
httpserver.on("request", function (request, response) {
    //如果请求'/',则返回客户端聊天UI
    if (request.url === "/") {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(clientui);
        response.end();
    } else {
        //对任何其他的请求返回404'无法找到'编码
        response.writeHead(404);
        response.end();
    }
});

//在HTTP服务器上包装一个WebSocket服务器
var wsserver = ws.createServer({
    server: httpserver
});

//当接收到一个新的连接请求的时候，调用此函数
wsserver.on("connection", function (socket) {
    socket.send("Welcome to the chat room."); //向新客户端打招呼
    socket.on("message", function (msg) {
        wsserver.broadcast(msg); //并将它们广播给每个人
    });
});

//在8000端口运行服务器。启动WebSocket服务器的时候也会启动HTTP服务器
//连接到http:localhost:8000/，并开始使用它
wsserver.listen(8000);