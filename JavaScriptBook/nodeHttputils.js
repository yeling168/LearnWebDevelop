//基于Node的"httputils"模块

//为指定的URL实现一个异步HTTP GET请求
//并将HTTP状态，头和响应主体传递给指定的回调函数
//注意这里是如何通过exports对象导出这儿方法的

exports.get = function (url, callback) {
    //解析URL,获取所需的信息
    url = require('url').parse(url);
    var hostname = url.hostname,
        port = url.port || 80;
    var path = url.pathname,
        query = url.query;
    if (query) {
        path += "?" + query;
    }
    //判断将要作为请求主体发送的数据类型
    var type;
    if (data == null) data = "";
    if (data instanceof Buffer) { //二进制数据
        type = "application/octet-stream";
    } else if (typeof data === "string") { //字符串数据
        type = "text/plain;charset=UTF-8";
    } else if (typeof data === "object") { //名/值对
        data = require("querystring").stringify(data);
        type = "application/x-www-form-urlencoded";
    }

    //生成POST请求，其中包括请求主体
    var client = require("http").createClient(port, hostname);
    var request = client.request("POST", path, {
        "Host": hostname,
        "Content-type": type
    });
    request.write(data); //发送请求主体
    request.end();
    request.on("response", function (response) { //处理响应
        response.setEncoding("utf-8"); //假设它是文本
        var body = ""; //用于保存响应主体
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () { //完成后，调用回调函数
            if (callback) {
                callback(response.statusCode, response.headers, body);
            }
        });
    });
};