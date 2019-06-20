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

	{
	  //es5
	  var regex = new RegExp("xyz", "i");
	  var regex2 = new RegExp(/xyz/i);

	  console.log(regex.test("xyz123"), regex2.test("xyz123"));

	  //es6
	  //第二个参数的修饰符会覆盖前面正则表达式的修饰符
	  var regex3 = new RegExp(/xyz/gi, "i");
	  console.log(regex3.flags);
	}

	//y,u修饰符
	//都是全局匹配
	//g从上一次匹配的位置继续寻找
	//y匹配的第一个必须是紧跟着的下一个匹配成功
	{
	  var s = 'bbb_bb_b';
	  var a1 = /b+/g;
	  var a2 = new RegExp("b+", "y");

	  console.log('one', a1.exec(s), a2.exec(s));
	  console.log('two', a1.exec(s), a2.exec(s));
	}

/***/ })
/******/ ]);