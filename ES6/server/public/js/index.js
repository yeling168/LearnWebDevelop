/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	  //简洁表示法
	  var o = 1;
	  var k = 2;

	  //ES5简易对象
	  var es5 = {
	    o: o,
	    k: k
	  };
	  //ES6简易对象
	  var es6 = {
	    o: o,
	    k: k
	  };
	  console.log(es5, es6);

	  //对象方法，es5写法
	  var es5_method = {
	    hello: function hello() {
	      console.log("hello");
	    }
	  };
	  //对象方法，es6写法
	  var es6_method = {
	    hello: function hello() {
	      console.log("hello");
	    }
	  };

	  console.log(es5_method.hello(), es6_method.hello());
	}

	{
	  //属性表达式
	  //es5写法
	  var a = "b";
	  var es5_obj = {
	    a: "c",
	    b: "c"
	  };
	  //es6中，属性的key可以用表达式，也可以用变量当做k
	  //[]中包起来的是表达式
	  var es6_obj = _defineProperty({}, a, "c");

	  console.log(es5_obj, es6_obj);
	}

	{
	  //object新增API
	  //Object.is() 方法判断两个值是否是相同的值。和用===判断没有区别
	  console.log("字符串", Object.is("abc", "abc"), "abc" === "abc");
	  console.log("数组", Object.is([], []), [] === []); //数组是引用类型，两个数组虽然值相等,但两个数组引用的地址不同，返回false  false
	  //拷贝 assign是浅拷贝，只拷贝自身属性，不拷贝继承属性，不拷贝不可枚举的属性
	  console.log("拷贝", Object.assign({ a: "a" }, { b: "b" }));
	  //Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）
	  var test = { k: 123, o: 456 };
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = Object.entries(test)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          value = _step$value[1];

	      console.log([key, value]);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

	{
	  //扩展运算符,babel支持不友好,babel-polyfill也支持不友好
	  //let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ddd'};
	  //console.log(c);
	}

/***/ })
/******/ ]);