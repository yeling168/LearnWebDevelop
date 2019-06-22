{
  //ES6中二进制以0b开头,b不区分大小写
  console.log("B", 0b11111011);
  //ES6中八进制以0b开头0o，o不区分大小写
  console.log(0o767);
}

{
  //判断值是否在有效范围Number.isFinite
  console.log("15", Number.isFinite(15));

  console.log("NaN", Number.isFinite(NaN)); //false,NaN不是一个数字
  console.log("1/0", Number.isFinite("true" / 0));

  //函数用来确定一个值是否为NaN
  console.log("NaN", Number.isNaN(NaN));
  console.log("0", Number.isNaN(0));
}

{
  //判断整数Number.isInteger，函数参数必须是一个数
  console.log("25", Number.isInteger(25)); //true
  console.log("25.0", Number.isInteger(25.0)); //true
  console.log("25.1", Number.isInteger(25.1)); //false
  console.log("25.1", Number.isInteger(25.1));
  console.log("25.1", Number.isInteger("25.1"));
}

{
  //表示端点
  //上线
  console.log(Number.MAX_SAFE_INTEGER);
  //下线
  console.log(Number.MIN_SAFE_INTEGER);
  //判断数是不是安全的
  console.log("10", Number.isSafeInteger(10));
  console.log("a", Number.isSafeInteger("a")); //false，a不是数字
}

{
  //返回数的整数部分
  console.log("4.1", Math.trunc(4.1));
  console.log("4.9", Math.trunc(4.9));
}

{
  //判断正数，负数，0
  //返回-1,0,1,NaN
  console.log("-5", Math.sign(-5));
  console.log("0", Math.sign(0));
  console.log("5", Math.sign(5));
  //参数必须是数字,否则通过Number对象转换成数字
  console.log("50", Math.sign("50"));
  //如果参数不能被转换
  console.log("foo", Math.sign("foo"));
}

{
  //立方根
  console.log("-1", Math.cbrt(-1));
  console.log("8", Math.cbrt(8));
}
