{
  let ajax = function(callback) {
    //ajax执行完后执行callback，用定时器模拟中间通信的整个步骤
    //标记
    console.log("执行");
    setTimeout(function() {
      callback && callback.call();
    }, 1000);
  };

  //调用
  ajax(function() {
    console.log("timeout1");
  });
}

{
  //promise写法,ajax函数运行完后返回一个对象，这个对象是promise实例
  //resolve要执行下一步操作，reject是中断当前执行的操作
  let ajax = function() {
    console.log("执行2");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  };
  //then的函数体就是下一步
  ajax().then(function() {
    console.log("promise", "timeout2");
  });
}

{
  let ajax = function() {
    console.log("执行2");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  };

  ajax()
    .then(function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 2000);
      });
    })
    .then(function() {
      console.log("timeout3");
    });
}

{
  //捕获异常
  let ajax = function(num) {
    console.log("执行4");
    return new Promise(function(resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error("出错了");
      }
    });
  };

  ajax(6)
    .then(function() {
      console.log("log", 6);
    })
    .catch(function(err) {
      console.log("catch", err);
    });
}

{
  //promise高级用法
  //所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(err) {
        reject(err);
      };
    });
  }
  //把图片添加到页面
  function showImgs(imgs) {
    imgs.forEach(function(img) {
      document.body.appendChild(img);
    });
  }

  //Promise.all
  //把多个promise实例当做一个promise实例，所有的promise必须状态发生改变(不一定都成功)才能触发新的promise
  Promise.all([
    loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
    loadImg("http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png")
  ]).then(showImgs);
}

{
  //Promise.race,race中有一个promise状态发生改变，那么promise就发生改变
  //有一个图片加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(err) {
        reject(err);
      };
    });
  }

  //把图片添加到页面
  function showImgs(img) {
    let p = document.createElement("p");
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    loadImg("http://i4.buimg.com/567571/2b07ee25b08930ba.png"),
    loadImg("http://i2.buimg.com/567571/5eb8190d6b2a1c9c.png")
  ]).then(showImgs);
}
