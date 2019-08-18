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