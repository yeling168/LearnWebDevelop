{
  console.log("a", `\u0061`);

  //当编码大于两个字符的最大编码;两个字符最大是0xFFFF
  console.log("s", `u20BB7`);
  //如何处理编码0xFFFF
  console.log("s", `u{20BB7}`);

  let s = "𠮷"; //用4个字节存储的
}

{
  //es5怎么处理这个值，s编码大于0xFFFF
  let s = "𠮷";
  //每两个字节算一个长度，s编码大于0xFFFF(两个字节)，计算机处理成四个字节
  console.log("length", s.length); //2

  //取字符(编码),charAt
  console.log("0", s.charAt(0));
  console.log("1", s.charAt(1));
  //取字符unique编码的码值，charCodeAt只取两个字节
  console.log("at0", s.charCodeAt(0));
  console.log("at1", s.charCodeAt(1));

  //以上说明es5对unique的处理是不到位的

  //es6对unique的处理
  let s1 = "𠮷a"; //a的编码是97
  console.log("length", s1.length);
  //ES6中取字符的码值
  console.log("code0", s1.codePointAt(0));
  //查看这个码值对应的什么字符，需要用toString()转换成16进制
  console.log("code0", s1.codePointAt(0).toString(16)); //20BB7
  console.log("code1", s1.codePointAt(1)); //取字符的第一个字节
  console.log("code2", s1.codePointAt(2)); //a
}

{
  //codePointAt相反，es5使用fromChartCode，es6中的方法fromCodePoint，fromChartCode和fromCodePoint区别是能不能处理unique的字符
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  //字符串遍历器接口
  let str = "\u{20bb7}abc";
  for (let i = 0; i < str.length; i++) {
    console.log("es5", str[i]);
  }
  //通过字符串遍历器接口，可以处理字符串编码大于0xFFFF的情况
  for (let code of str) {
    console.log("es6", code);
  }
}

{
  let str = "string";
  console.log("includes", str.includes("c"));
  console.log("start", str.startsWith("str"));
  console.log("end", str.endsWith("ng"));
}

{
  let str = "abc";
  console.log(str.repeat(2));
}

{
  //模板字符串
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m);
}

{
  //ES7提案，需要加babel-polyfill才能在ES6中使用
  console.log("1".padStart(2, "0")); //01
  console.log("1".padEnd(2, "0")); //10
}

{
  //标签模板
  //用于过滤字符串，xss攻击
  //用于多语言
  let user = {
    name: "list",
    info: "hello world"
  };

  console.log(abc`i am ${user.name},${user.info}`);

  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2;
  }
}

{
  //raw,raw转义了\，使\不生效，相当于\\，一般使用频率很低
  console.log(String.raw`Hi\n${1 + 2}`);
  console.log(`Hi\n${1 + 2}`);
}
