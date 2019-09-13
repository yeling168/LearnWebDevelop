//process.stdin是标准输入流，初始时它是被暂停的。要想从标准输入流读取数据，必须恢复流，并手动编写流的事件响应函数

//恢复流
process.stdin.resume();
//注册事件
process.stdin.on("data", function(data) {
  process.stdout.write("read from console " + data.toString());
});
