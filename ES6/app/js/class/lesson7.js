{
  function test(x, y = "world") {
    console.log("默认值", x, y);
  }

  test("hello");

  test("hello", "kill");

  //默认值，默认值后面不能再有没有默认值的变量
  //以下不合法
  //function test(x, y = "world", c) {}
}

{
  //作用域
  let x = "test";
  function test2(x, y = x) {
    //y取函数内的x，如果函数内没有x，则取外部声明的x
    console.log("作用域", x, y); //y返回的是'kill'
  }

  test2("kill");
}

{
  //rest参数，将离散的值转成数组
  //在函数输入参数不确定的情况下，将输入的参数转换为数组
  //ES5中arguments[0]代表？ES6中没有arguments[0]的问题
  //ES6中arg参数后不能再有其他参数
  function test3(...arg) {
    for (let v of arg) {
      console.log("rest", v);
    }
  }

  test3(1, 2, 3, 4, "a");
}

{
  //扩展运算符，将数组转成离散的值
  console.log(...[1, 2, 4]);
  console.log("a", ...[1, 2, 4]);
}

{
  //箭头函数
  //由函数名，函数参数，函数返回值三部分组成
  let arrow = v => v * 2;
  //没有函数参数时，用()代替
  let arrow2 = () => 5;
  console.log("arrow", arrow(3));
  console.log(arrow2());
}

{
  //尾调用，函数的最后一句话是不是一个函数,作用是提升性能，比如递归
  function tail(x) {
    console.log("tail", x);
  }

  function fx(x) {
    //return是函数fx的最后一步，是一个tail函数
    return tail(x);
  }

  fx(123);
}
