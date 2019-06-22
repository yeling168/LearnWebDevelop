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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	  //类的基本定义和生成实例
	  var Parent =
	  //定义构造函数
	  function Parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	    _classCallCheck(this, Parent);

	    this.name = name;
	  };

	  //生成实例


	  var v_parent = new Parent("v");
	  console.log("构造函数和实例", v_parent);
	}

	{
	  //继承
	  //定义父类
	  var _Parent =
	  //定义构造函数
	  function _Parent() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	    _classCallCheck(this, _Parent);

	    this.name = name;
	  };

	  //定义子类


	  var Child = function (_Parent2) {
	    _inherits(Child, _Parent2);

	    function Child() {
	      _classCallCheck(this, Child);

	      return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
	    }

	    return Child;
	  }(_Parent);

	  console.log("继承", new Child());
	}

	{
	  //继承
	  //定义父类
	  var _Parent3 =
	  //定义构造函数
	  function _Parent3() {
	    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	    _classCallCheck(this, _Parent3);

	    this.name = name;
	  };

	  //定义子类
	  //怎么修改父类中的参数，此处是name


	  var _Child = function (_Parent4) {
	    _inherits(_Child, _Parent4);

	    function _Child() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "child";

	      _classCallCheck(this, _Child);

	      //如果子类需要增加自己的属性,this一定要放在super之后，super一定放在第一行
	      var _this2 = _possibleConstructorReturn(this, (_Child.__proto__ || Object.getPrototypeOf(_Child)).call(this, name));
	      //super中的参数列表是父类constructor，也就是构造函数的参数列表
	      //super(),super()中参数为空，那么父类构造函数中的所有都会使用父类的默认值


	      _this2.type = "child";
	      return _this2;
	    }

	    return _Child;
	  }(_Parent3);

	  console.log("继承传递参数", new _Child());
	  //带参数，会覆盖默认值
	  console.log("覆盖默认值", new _Child("hello"));
	}

	{
	  //类中的getter和setter
	  var _Parent5 = function () {
	    //定义构造函数
	    function _Parent5() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	      _classCallCheck(this, _Parent5);

	      this.name = name;
	    }
	    //getter的写法，这不是一个函数方法，是一个属性


	    _createClass(_Parent5, [{
	      key: "longName",
	      get: function get() {
	        return "mk" + this.name;
	      }

	      //setter
	      ,
	      set: function set(value) {
	        this.name = value;
	      }
	    }]);

	    return _Parent5;
	  }();

	  //生成一个实例


	  var v = new _Parent5();
	  console.log("getter", v.longName);

	  v.longName = "hello";
	  console.log("setter", v.longName);
	}

	{
	  //类的静态方法
	  var _Parent6 = function () {
	    //定义构造函数
	    function _Parent6() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	      _classCallCheck(this, _Parent6);

	      this.name = name;
	    }
	    //用static定义静态方法
	    //静态方法通过类去调用，而不是通过类的实例去调用


	    _createClass(_Parent6, null, [{
	      key: "tell",
	      value: function tell() {
	        console.log("tell");
	      }
	    }]);

	    return _Parent6;
	  }();

	  //调用静态方法
	  //静态方法通过类去调用，而不是通过类的实例去调用


	  _Parent6.tell();
	}

	{
	  //静态属性
	  //类的静态方法
	  var _Parent7 = function () {
	    //定义构造函数
	    function _Parent7() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "mukewang";

	      _classCallCheck(this, _Parent7);

	      this.name = name;
	    }
	    //用static定义静态方法
	    //静态方法通过类去调用，而不是通过类的实例去调用


	    _createClass(_Parent7, null, [{
	      key: "tell",
	      value: function tell() {
	        console.log("tell");
	      }
	    }]);

	    return _Parent7;
	  }();

	  //静态属性在ES6中没有定义方法。但是可以在类定义完成后直接在类上定义
	  //定义静态属性


	  _Parent7.type = "test";
	  //读取静态属性
	  //Parent一定是类，而不是类的实例
	  console.log("Parent", _Parent7);
	  console.log("静态属性", _Parent7.type);
	}

/***/ })
/******/ ]);