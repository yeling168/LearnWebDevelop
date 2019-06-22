{
  //简洁表示法
  let o = 1;
  let k = 2;

  //ES5简易对象
  let es5 = {
    o: o,
    k: k
  };
  //ES6简易对象
  let es6 = {
    o,
    k
  };
  console.log(es5, es6);

  //对象方法，es5写法
  let es5_method = {
    hello: function() {
      console.log("hello");
    }
  };
  //对象方法，es6写法
  let es6_method = {
    hello() {
      console.log("hello");
    }
  };

  console.log(es5_method.hello(), es6_method.hello());
}

{
  //属性表达式
  //es5写法
  let a = "b";
  let es5_obj = {
    a: "c",
    b: "c"
  };
  //es6中，属性的key可以用表达式，也可以用变量当做k
  //[]中包起来的是表达式
  let es6_obj = {
    [a]: "c"
  };

  console.log(es5_obj, es6_obj);
}

{
  //object新增API
  //Object.is() 方法判断两个值是否是相同的值。和用===判断没有区别
  console.log("字符串", Object.is("abc", "abc"), "abc" === "abc");
  console.log("数组", Object.is([], []), [] === []); //数组是引用类型，两个数组虽然值相等,但两个数组引用的地址不同，返回false  false
  //拷贝 assign是浅拷贝，只拷贝自身属性，不拷贝继承属性，不拷贝不可枚举的属性
  console.log("拷贝", Object.assign({ a: "a" }, { b: "b" }));
  //Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）
  let test = { k: 123, o: 456 };
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
}

{
  //扩展运算符,babel支持不友好,babel-polyfill也支持不友好
  //let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ddd'};
  //console.log(c);
}
