模块

**ES6模块**

	import MyModule from './MyModule.js';

**CommonJS**

	var MyModule = require('./MyModule.js');

**AMD**

	define(['./MyModule.js'], function (MyModule) {
	
	});


相对路径是相对当前目录。绝对路径是相对入口文件