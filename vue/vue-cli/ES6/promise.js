{
    // 模拟ajax
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call()
        }, 1000)
    };

    ajax(function () {
        console.log('timeout1')
    })
}

{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    }

    ajax().then(function () {
        console.log('promise', 'timeout2')
    })
}

{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    }

    ajax().then(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve()
                }, 2000)
            })
        })
        .then(function () {
            console.log('timeout3')
        })
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });

    ajax(3).then(function () {
        console.log('log', 3);
    }).catch(function (err) {
        console.log('catch', err)
    })
}

{
    //promise高级用法
    //所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve,reject) =>{
            let img = document.createElement('img');
            img.src= src;
            img.onload =function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        })
    }
 
    //把图片添加到页面
    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
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