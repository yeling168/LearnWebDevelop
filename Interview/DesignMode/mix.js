function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
Person.prototype.speak = function() {
  console.log(this.name);
};
var person4 = new Person();
