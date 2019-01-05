#### encodeURI 方法 ####

encodeURI 方法返回一个编码的 URI。如果您将编码结果传递给 decodeURI，那么将返回初始的字符串。encodeURI 方法不会对下列字符进行编码：":"、"/"、";" 和 "?"。请使用 encodeURIComponent 方法对这些字符进行编码。

#### encodeURIComponent 方法 ####

encodeURIComponent 方法返回一个已编码的 URI。如果您将编码结果传递给 decodeURIComponent，那么将返回初始的字符串。因为 encodeURIComponent 方法对所有的字符编码，请注意，如果该字符串代表一个路径，例如 /folder1/folder2/default.html，其中的斜杠也将被编码。这样一来，当该编码结果被作为请求发送到 web 服务器时将是无效的。如果字符串中包含不止一个 URI 组件，请使用 encodeURI 方法进行编码。

#### escape 方法 ####
escape 方法返回一个包含了 charstring 内容的字符串值（ Unicode 格式）。所有空格、标点、重音符号以及其他非 ASCII 字符都用 %xx 编码代替，其中 xx 等于表示该字符的十六进制数。例如，空格返回的是 "%20" 。

字符值大于 255 的以 %uxxxx 格式存储。 

<font color="#ff995" face="微软雅黑" size="3">**注意:**</font>   escape 方法不能够用来对统一资源标示码 (URI) 进行编码。对其编码应使用 encodeURI 和encodeURIComponent 方法。

一个错误:Maximum call stack size exceeded

	function Date() {
	            var d, s = "今天日期是: ";
	            d = new Date();
	            s += (d.getMonth() + 1) + "/";
	            s += d.getDate() + "/";
	            s += d.getYear();
	            return (s);
	        }


Browser 对象：

[http://www.w3school.com.cn/jsref/dom_obj_window.asp](http://www.w3school.com.cn/jsref/dom_obj_window.asp "Browser 对象")

JavaScript HTML DOM：

[http://www.runoob.com/js/js-htmldom.html](http://www.runoob.com/js/js-htmldom.html "DOM")