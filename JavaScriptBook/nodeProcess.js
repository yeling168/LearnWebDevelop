//Node在process名字空间中定义了其他重要的全局属性。这里有该对象的一些属性:
//在node环境下执行命令为node nodeProcess就可以看到返回结果
console.log(process.version); //Node的版本字符串信息
console.log(process.argv) //"node"命令行的数组参数,argv[0]是"node"
console.log(process.env) //环境变量对象。例如:process.env.PATH
console.log(process.pid) //进程id
process.getuid() //返回用户id
process.cwd() //返回当前的工作目录
process.chdir() //改变目录
process.exit() //退出(运行shutdown命令之后)

emitter.on(name, f) //emitter注册f函数处理name事件
emitter.addListener(name, f) //addListener()和on()是同一个方法
emitter.once(name, f) //只执行一次，然后f会自动删除
emitter.listeners(name); //返回事件处理函数组成的数组
emitter.removeListener(name, f); //注销时间处理程序f
emitter.removeAllListeners(name); //移除name事件的所有处理程序

//前面介绍的process对象是一个事件触发器，这里是其部分时间的处理程序示例：
//"exit"事件在Node退出之前发送
process.on("exit", function () {
    console.log("Goodbye");
})

//如果注册了任何事件处理程序，非捕获异常都会产生时间
//否则，异常仅会使Node输出错误然后退出

process.on("uncaughtException", function (e) {
    console.log(Exception, e);
});

//POSIX中诸如SIGIHT,SIGHUP和SIGTERM等信号产生时间
process.on("SIGINT", function () {
    console.log("Ignored Ctrl-C");
});

//NODE的设计目标是高性能I/O，因此其流API常被用到。当数据准备好时，可读流会触发时间。
//在下面的代码中，假设s是在其他地方得到的可读流。下面我们将看到如何从文件和网络套接
//字中得到流对象:

//输入流s
s.on("data", f); //当数据可用时，把它作为参数传给f()
s.on("end", f); //当不再有数据达到，在文件结束(EOF)时会触发"end"事件
s.on("error", f); //如果发生错误，把异常传递给f();
s.readable //如果它是依旧打开的可读流，返回true
s.pause(); //暂停"data"事件。例如：为了限制上传
s.resume(); //再次恢复

//如果想把字符串传给"data"事件处理程序，请指定编码
s.setEncoding(enc); //如何对字节编码:"utf-8","ascii",或"base64"

//可写流比可读流的核心事件少。使用write()方法发送数据，当所有数据写入完毕后使用end()方法结束流。
//write()方法决不会阻塞。若Node无法立即写入数据而不得不在内部缓存它，则write()方法返回false。
//如果你想知道Node何时刷新缓冲区并确保数据实际上已经写入，那么请注册"drain"事件的处理程序

//输出流
s.write(buffer); //写入二进制数据
s.write(string, encoding); //写入字符串数据，默认编码是"utf-8"
s.end(); //结束流
s.end(buffer); //写入最后的二进制数据块并结束
s.end(str, encoding); //写入最后的字符串并结束所有流
s.writeable; //如果流依旧打开且可写入，返回true
s.on("drain", f); //当内部缓冲区为空，调用f();


var bytes = new Buffer(256); //创建一个256字节的新缓冲区
for (var i = 0; i < bytes.length; i++) { //通过索引值进行遍历
    bytes[i] = i; //设置缓冲区的每个元素
}
var end = bytes.slice(240, 256); //为这个缓冲区创建一个新的视图
end[0]; //=>240,end[0]就是bytes[240]
end[0] = 0; //修改这个切片的一个元素
bytes[240]; //=>0:原始缓冲区也修改了
var more = new Buffer(8); //创建一个新的独立缓冲区
end.copy(more, 0, 8, 16); //把end[]的第8~15元素复制到more[]中
more[0]; //=>248

//缓冲区也可以实现二进制<=>文本的转换
//合法编码是"utf-8","ascii",和"base64"，默认编码是"utf-8"
var buf = new Buffer("2πr", "utf-8"); //使用UTF-8把文本编码为字节
buf.length; //=>3个字符占4个字节
buf.toString(); //=>"2πr":返回文本
buf = new Buffer(10); //开始一个新的固定长度的缓冲区
var len = buf.write("πr2", 4); //从第4个字节开始写入文本
buf.toString("utf8", 4, 4 + len); //=>"πr2":解码一段字节

//Node的文件和文件系统API位于"fs"模块中:
var fs = require("fs"); //加载文件系统API
//任何名字以"Sync"结尾的方法都是一个阻塞方法，它返回一个值或抛出一个异常。不以"Sync"结尾的文件系统方法都是非阻塞的方法
//它们会把结果或错误传给指定的回调函数。
//同步读取文件，通过传递编码获得文本而非字节
var text = fs.readFileSync("config.json", "utf-8");
//异步读取二进制文件，通过传递函数获得数据
fs.readFile("image.png", function (err, buffer) {
    if (err) {
        throw err; //如果出现任何错误
    }
    process(buffer); //文件内容在缓冲区中
})

//存在用来写文件的writeFile()和writeFileSync()函数
fs.writeFile("config.json", JSON.stringify(userprefs));

//下面这个函数实现了文件复制
//用流API复制文件
//若想知道何时完成，请传递回调函数
function fileCopy(filename1, filename2, done) {
    var input = fs.createReadStream(filename1); //输入流
    var output = fs.createWriteStream(filename2); //输出流
    input.on("data", function (d) {
        output.write(d); //把输入复制到输出
    });
    input.on("error", function (err) {
        throw err; //提示错误
    });
    input.on("end", function () { //当输入结束
        output.end(); //关闭输出
        if (done) {
            done(); //并通知回调函数
        }
    })
}

//使用同步方法列出一个目录的内容，并显示文件大小和修改日期
#!/usr/local / bin / Node

var fs = require("fs"),
    path = require("path"); //加载需要的模块
var dir = process.cwd(); //当前目录
if (process.argv.length > 2) {
    dir = process.argv[2]; //或来自命令行
}
var files = fs.readdirSync(dir); //读取目录内容

process.stdout.write("Name\tSize\tDate\n"); //输出头
files.forEach(function (filename) { //获取每个文件名
    var fullname = path.join(dir, filename); //拼接目录和文件名
    var stats = fs.statSync(fullname); //获取文件属性
    if (stats.isDirectory()) {
        filename += "/"; //标记子目录
        process.stdout.write(filename + "\t" + //输出文件名
            stats.size + "\t" + //文件大小
            stats + mtime + "\n"); //修改时间
    }
});

//注意"#!".这是Unix中的"shebang"注释，常用于使脚本文件被指定的某种语言解释器执行。当像这样的代码出现在文件的第一行时，Node会忽略它们。
//"net"模块是用于基于TCP网络的API。下面是Node中的一个非常简单的TCP服务器
//Node中简单的TCP回显服务器:它监听2000端口上的连接
//并把客户端的数据回显给它
var net = require("net");
var server = ner.createServer();
server.listen("2000", function () {
    console.log("Listenning on port 2000");
});
server.on("connection", function (stream) {
    console.log("Accepting connection from", stream.remoteAddress);
    stream.on("data", function (data) {
        stream.write(data);
    });
    stream.on("end", function (data) {
        console.log("Connection closed");
    })
})