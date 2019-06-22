{
  //声明
  let a1 = Symbol();
  let a2 = Symbol();
  //a1和a2永远不相等
  console.log(a1);
  console.log(a1 === a2); //false
  //Symbol.for和直接使用Symbol的区别是可以取到生成的值
  //a3是key值，a3是字符串
  //生成前先全局检查a3是否注册过，如果注册过，返回注册过的值，如果没注册，则调用Symbol生成一个注册的值
  let a3 = Symbol.for("a3");
  let a4 = Symbol.for("a3");
  console.log(a3 === a4); //true
}

{
  //不使用Symbol
  let a1 = "abc";
  let obj = {
    [a1]: "123",
    abc: 345,
    c: 456
  };
  //a1的属性表达式值会被覆盖
  console.log(obj);
}

{
  //Symbol的使用场景
  let a1 = Symbol.for("abc");
  let obj = {
    [a1]: "123",
    abc: 345,
    c: 456
  };
  console.log(obj);

  //对象中有Symbol做key值，通过`for...in`和`let...of`都拿不到属性
  for (let [key, value] of Object.entries(obj)) {
    console.log("let of", key, value);
  }
  //使用getOwnPropertySymbols，返回数组
  console.log("getOwnPropertySymbols", Object.getOwnPropertySymbols(obj));
  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.log(item);
  });
  //可以使用Reflect.ownKeys方法同时拿到Symbol属性和非Symbol属性,返回值也是数组
  console.log(Reflect.ownKeys(obj));
  Reflect.ownKeys(obj).forEach(function(item) {
    console.log("ownkeys", item, obj[item]);
  });
}
