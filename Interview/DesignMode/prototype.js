function Person() {}
Person.prototype.name = "panrui";
Person.prototype.age = 23;
Person.prototype.job = "前端工程师";
Person.prototype.speak = function() {
  console.log(this.name);
};
var person3 = new Person();

console.log(person3);
