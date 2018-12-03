//用Node实现异步I/o
//Node定义了console.log(),可以像在浏览器中那样调试代码输出
console.log("hello world");
//使用require()代替load()
//它加载并执行(只有一次)命名模块，返回包含其导出标识符的对象
var fs = require("fs"); //载入fs模块
fs.readFile('nodeTestFile/test.txt', function (err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log(data);
});
//示例地址:https://www.cnblogs.com/starof/p/5038300.html
//使用toString()写法
fs.readFile('nodeTestFile/test.txt', function (err, data) {
    //读取文件失败/错误
    if (err) {
        throw err;
    }
    //读取文件成功
    console.log(data.toString());
})

//设置编码格式
fs.readFile('nodeTestFile/test.txt', "utf-8", function (err, data) {
    //读取文件失败/错误
    if (err) {
        throw err;
    }
    //读取文件成功
    //使用console.log(data)也可以;
    console.log('utf-8:', data.toString());
})

//writeFile写入文件
// 写入文件内容(如果文件不存在会创建一个文件)
//写入时会先清空文件
fs.writeFile('nodeTestFile/test1.txt', 'test test', function (err) {
    if (err) {
        throw err;
    }
    console.log('saved.');
    //写入成功后读取测试
    fs.readFile('nodeTestFile/test1.txt', 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    })
})

//因为默认flag='w'是写，会清空文件，想要追加，可以传递一个flag参数，如下
//写入文件内容(如果文件不存在会创建一个文件)
//传递追加参数{'flag':'a'}
//flag传值，r代表读取文件，w代表写文件，a代表追加
fs.writeFile('nodeTestFile/test1.txt', 'test test1', {
    'flag': 'a'
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('Saved.');
    fs.readFile('nodeTestFile/test1.txt', 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    })
})

//使用fs.read和fs.write读写文件
//fs.read和fs.write功能类似fs.readFile和fs.writeFile()，但提供更底层的操作，实际应用中多用fs.readFile和fs.writeFile
//使用fs.read和fs.write读写文件需要使用fs.open打开文件和fs.close关闭文件

//fs.read()的flag值说明
//r:读取文件，文件不存在时报错
//r+:读取并写入文件，文件不存在时报错
//rs:以同步方式读取文件，文件不存在时报错
//rs+:以同步方式读取并写入文件，文件不存在时报错
//w:写入文件，文件不存在则创建，存在则清空
//wx:和w一样，但是文件存在时会报错
//w+:读取并写入文件，文件不存在则创建，存在则清空
//wx+:和w+一样，但是文件存在时会报错
//a:以追加方式写入文件，文件不存在则创建
//ax:和a一样，但是文件存在时会报错
//a+:读取并追加写入文件，文件不存在则创建
//ax+:和a+一样，但是文件存在时会报错

//fs.close(fd,[callback]),用于关闭文件，fd是所打开文件的文件描述符
//fs.read(fd,buffer,offset,length,postion,callback)接受6个参数
//参数说明:
//fd:文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数
//buffer:是存放读取到的数据的Buffer对象
//offset:指定向buffer中存放数据的起始文件
//length:指定读取文件中数据的字节数
//position:指定在文件中读取文件内容的起始位置
//callback回调函数，参数如下
//err:用于抛出异常
//byteRead:从文件中读取内筒的实际字节数
//buffer:被读取的缓存区对象
//read.js

//打开文件,r代表读取文件，文件不存在时报错
fs.open('nodeTestFile/test2.txt', 'r', function (err, fd) {
    //err打印的结果是null
    //fd打印的结果是6
    if (err) {
        throw err;
    }
    console.log('open file success.');
    var buffer = new Buffer(255);
    fs.read(fd, buffer, 0, 10, 0, function (err, bytesRead, buffer) {
        if (err) {
            throw err;
        }
        //打印除buffer中存入的数据
        console.log(bytesRead, buffer.slice(0, bytesRead).toString());
        //关闭文件
        fs.close(fd);
    })
})



//fs.write()
//fs.read(fd,buffer,offset,length[,position],callback(err,bytesWritten,buffer))接收6个参数。

//参数说明：

//fd 文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数。
//buffer 是存放 将被写入的数据，buffer尺寸的大小设置最好是8的倍数，效率较高。
//offset  buffer写入的偏移量。
//length (integer)指定 写入文件中数据的字节数。
//position (integer) 指定 在写入文件内容的起始位置。
//callback 回调函数，参数如下
//err 用于抛出异常
//bytesWritten从文件中读取内容的实际字节数。
//buffer 被读取的缓存区对象。

//打开文件,w代表写入文件，文件不存在则创建，存在则清空
fs.open('nodeTestFile/test3.txt', 'w', function (err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');
    var buffer = new Buffer('shiyanlou');
    //读取文件
    fs.write(fd, buffer, 0, 6, 0, function (err, bytesWritten, buffer) {
        if (err) {
            throw err;
        }
        console.log('write success.');
        //打印出buffer中存入数据
        console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());
        //关闭文件
        fs.close(fd);
    });
});

//目录操作
//创建目录
//使用fs.mkdir(path,[mode],callback)创建目录,path是需要创建的目录，callback是回调函数
//mkdir.js
//创建newdir目录
fs.mkdir('newdir', function (err) {
    if (err) {
        throw err;
    }
    console.log("make dir success.");
});
//读取目录
//readdir.js
fs.readdir('newdir', function (err, files) {
    if (err) {
        throw err;
    }
    //files是一个数组
    //每个元素是此目录下的文件或文件夹名称
    console.log(files);
})