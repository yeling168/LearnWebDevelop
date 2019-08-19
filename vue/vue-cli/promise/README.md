##简介	

new Promise(
	  /**执行器executor */
	  function(resolve, reject) {
	    //一段耗时很长的异步操作
	    resolve(); //数据处理完成
	    reject(); //数据处理出错
	  }
	).then(
	  function A() {
	    //成功，下一步
	  },
	  function B() {
	    //失败，做相应处理
	  }
	);


Promise是一个代理对象，它和原先要进行的的操作并无关系，我们只是把原先的操作放到执行器


它通过引入一个回调，避免更多的回调


Promise实例一经创建，执行器(异步操作)立即执行。

https://blog.csdn.net/qq_37860963/article/details/81539118

https://blog.csdn.net/li123128/article/details/80650256

.then()

.then()接受两个函数作为参数，分别代表fulfilled和rejected

.then()返回一个新的promise实例，所以它可以链式调用

当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行

状态响应函数可以返回新的Promise,或其它值

如果返回新的Promise，那么下一级.then()会在新的Promise状态改变后执行

如果返回其它值，则会立即执行下一级.then()


##then()里面有.then()的情况

因为.then()返回的还是Promise实例。

会等里面的.then()执行完，在执行外面的。

对于我们来说，此时最好将其展开，会更好阅读

##we have problem with promise

https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

##error

强烈建议在所有队列最后都加上.catch()，以避免漏掉错误处理造成意想不到的问题

##promise.resolve()

返回一个fulfilled的Promise实例，或原始Promise实例。

参数为空，返回一个状态为fulfilled的Promise实例

参数是一个跟Promise无关的值，同上，不过fulfulled响应函数会得到这个参数

参数为Promise实例，则返回该实例，不做任何修改

参数为thenable(参数是对象，里面有then方法)，立刻执行它的.then()

##promise.reject()

Promise.reject()不认thenable，其他类似Promise.resolve()

##Promise.race()

类似Promise.all()，区别在于它有任意一个完成就算完成

常见用法：

1）把异步操作和定时器放在一起

2）如果定时器先触发，就认为超时，告知用户

##把回调包装成Promise最为常见。它有两个显而易见的好处

可读性更好

返回的结果可以加入任何Promise队列