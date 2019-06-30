function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.speak = function() {
    console.log(this.name);
  };
}

var person2 = new Person("panrui", 20, "前端工程师");
