/* {
  //修饰器的定义和使用,修饰器是一个函数
  //限制某个属性是只读的
  //三个参数，target是类本身，不是类实例，第二个是属性名称，第三个是该属性的描述对象
  let readonly = function(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  };

  //因为是用在类里面，声明一个类
  //readonly把time方法变成只读了
  class Test {
    @readonly
    time() {
      return "2017-03-11";
    }
  }

  //生成一个实例
  let test = new Test();
  //重新赋值不被允许
  // test.time=function(){
  //   console.log('reset time');
  // }
  console.log(test.time());
}

{
  //在类外面操作，上面是在类里面操作
  //必须是在class前面操作
  //在类增加一个myname静态属性
  //target是类本身，不是类实例
  let typename = function(target, name, descriptor) {
    target.myname = "hello";
  };

  @typename
  class Test {}
  //静态属性通过类引用，而不是通过实例引用
  console.log("类修饰符", Test.myname);
}

{
  //前端埋点，日志统计
  let log = type => {
    return function(target, name, descriptor) {
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        //模拟一个埋点
        console.log(`log ${type}`);
      };
    };
  };

  class AD {
    @log('show')
    show() {
      console.info("ad is show");
    }
    @log('click')
    click() {
      console.log("ad is click");
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
 */