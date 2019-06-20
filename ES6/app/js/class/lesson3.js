{
  //es5
  let regex = new RegExp("xyz", "i");
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test("xyz123"), regex2.test("xyz123"));

  //es6
  //第二个参数的修饰符会覆盖前面正则表达式的修饰符
  let regex3 = new RegExp(/xyz/gi, "i");
  console.log(regex3.flags);
}


//y,u修饰符
//都是全局匹配
//g从上一次匹配的位置继续寻找
//y匹配的第一个必须是紧跟着的下一个匹配成功
{
  let s='bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;

  console.log('one',a1.exec(s),a2.exec(s));
  console.log('two',a1.exec(s),a2.exec(s));
}