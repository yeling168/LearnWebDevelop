var util = require("util");

function Base() {
  this.name = "base";
  this.base = 2012;
  this.sayHello = function() {
    console.log("hello " + this.name + " this year is " + this.base);
  };
}

Base.prototype.showName = function() {
  console.log(this.name);
};

function Sub() {
  this.name = "sub";
}

util.inherits(Sub, Base);

var objBase=new Base();
objBase.showName();//base
objBase.sayHello();//hello base this year is 2012
console.log(objBase);
var objSub=new Sub();
objSub.showName();//sub
//objSub.sayHello();
console.log(objSub);
//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承