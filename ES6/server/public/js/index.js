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

	"use strict";

	var _lesson = __webpack_require__(2);

	var _lesson2 = _interopRequireDefault(_lesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_lesson2.default); // class Test{
	//     constructor(){
	//         this.a='hello world';
	//     }
	// }

	// let test=new Test();
	// console.log(test);

	// document.body.innerHTML=test.a;

	//import './class/lesson1';

	//import './class/lesson2';

	//import './class/lesson3';

	//import 'babel-polyfill';
	// import './class/lesson4';

	//import './class/lesson5';

	//import './class/lesson6';

	//import './class/lesson7';

	//import './class/lesson8';

	//import './class/lesson9';

	//import './class/lesson10';

	//import './class/lesson11';

	//import './class/lesson12';

	//import './class/lesson13';

	//import './class/lesson14';

	//import './class/lesson15';

	// import 'babel-polyfill';
	// import './class/lesson16';

	// import 'babel-polyfill';
	// import './class/lesson17';

	// import './class/lesson18';
	// import { A,test,Hello} from './class/lesson18';
	// console.log(A,test,Hello);

	// import * as lesson from './class/lesson18';
	// console.log(lesson);
	// console.log(lesson.A);

	console.log(_lesson2.default.A);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.test = test;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// export let A = 123;

	// export function test() {
	//   console.log("test");
	// }

	// export class Hello {
	//   test() {
	//     console.log("class");
	//   }
	// }

	var A = exports.A = 123;

	function test() {
	  console.log("test");
	}

	var Hello = exports.Hello = function () {
	  function Hello() {
	    _classCallCheck(this, Hello);
	  }

	  _createClass(Hello, [{
	    key: "test",
	    value: function test() {
	      console.log("class");
	    }
	  }]);

	  return Hello;
	}();
	//default给导出对象不起名字，取名权利交给引入方


	exports.default = {
	  A: A, test: test, Hello: Hello
	};

/***/ })
/******/ ]);