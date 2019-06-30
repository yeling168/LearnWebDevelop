function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  if (typeof this.speak != "function") {
    Person.speak = function() {
      console.log(this.name);
    };
  }
}