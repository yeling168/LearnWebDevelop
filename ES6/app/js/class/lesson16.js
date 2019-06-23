import { start } from "repl";

{
  //Generator基本用法
  //定义Generator函数
  let tell = function*() {
    yield "a";
    yield "b";
    return "c";
  };
  //如何使用
  let k = tell();
  //Generator函数返回的就是Iterator接口
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  //Generator函数和Iterator接口的关系
  let obj = {};
  obj[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  };

  for (let value of obj) {
    console.log("value", value);
  }
}

{
  //什么情况下Generator函数有巨大优势，状态机
  //定义一个状态集
  let state = function*() {
    while (1) {
      yield "A";
      yield "B";
      yield "C";
    }
  };
  //获取状态机结果
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

/* {
  //async语法,async和await是Generator的一个语法糖
  //以下代码需要安装插件才能执行
  let state = async function() {
    while (1) {
      await "A";
      await "B";
      await "C";
    }
  };
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
} */

/* {
  //实例，抽奖案例，抽奖次数限制
  //抽奖的业务逻辑
  let draw = function(count) {
    //具体抽奖逻辑
    console.info(`剩余${count}次`);
  };
  //剩余抽奖次数
  let residue = function* (count) {
    while (count > 0) {
      count--;
      //可抽奖情况下，执行抽奖逻辑
      yield draw(count);
    }
  };

  //执行抽奖环节
  let star = residue(5);
  //抽奖按钮
  let btn = document.createElement("button");
  btn.id = "start";
  btn.textContent = "抽奖";

  document.body.appendChild(btn);
  document.getElementById("start").addEventListener(
    "click",
    function() {
      star.next();
    },
    false
  );
} */

/* {
  //长轮询
  //实时取得服务端的变化，http是无状态连接
  //长轮询或者websock(兼容不好，一般不使用)
  //https://www.cnblogs.com/huchong/p/8595644.html
  let ajax = function*() {
    yield new Promise(function(resolve, reject) {
      //模拟请求耗时，比如花费了200毫秒
      setTimeout(function() {
        //对接口的模拟
        resolve({ code: 0 });
      }, 200);
    });
  };

  //轮询的过程
  let pull = function() {
    //对genertor实例化
    let genertor = ajax();
    //取得genertor步骤
    let step = genertor.next();
    //value是Promise实例
    step.value.then(function(d) {
      if (d.code != 0) {
        setTimeout(function() {
          console.log("wait");
          pull();
        }, 1000);
      } else {
        console.log(d);
      }
    });
  };

  pull();
}
 */