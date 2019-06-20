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
	  var a = void 0,
	      b = void 0,
	      rest = void 0;
	  a = 1;
	  b = 2;

	  console.log(a, b);
	}

	{
	  var _a = void 0,
	      _b = void 0,
	      _rest = void 0;
	  _a = 1;
	  _b = 2;
	  _rest = [3, 4, 5, 6];

	  console.log(_a, _b, _rest);
	}

	{
	  var _a2 = void 0,
	      _b2 = void 0;
	  var _a$b = { a: 1, b: 2 };
	  _a2 = _a$b.a;
	  _b2 = _a$b.b;

	  console.log(_a2, _b2);
	}

	{
	  var _a3 = void 0,
	      _b3 = void 0,
	      c = void 0,
	      _rest2 = void 0;
	  var _ref = [1, 2];
	  _a3 = _ref[0];
	  _b3 = _ref[1];
	  var _ref$ = _ref[2];
	  c = _ref$ === undefined ? 3 : _ref$;

	  console.log(_a3, _b3, c); //1,2,3
	}

	{
	  var _a4 = void 0,
	      _b4 = void 0,
	      _c = void 0,
	      _rest3 = void 0;
	  var _ref2 = [1, 2];
	  _a4 = _ref2[0];
	  _b4 = _ref2[1];
	  _c = _ref2[2];

	  console.log(_a4, _b4, _c); //1,2,undefined
	}

/***/ })
/******/ ]);