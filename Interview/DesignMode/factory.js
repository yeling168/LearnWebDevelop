//工厂模式

function createPerson(name, age, job) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  obj.speak = function() {
    console.log(this.name);
  };
  return obj;
}

var person1 = createPerson('panrui',20,'前端工程师');
console.log(person1);