var shoeObj = {}; //定义发布者
shoeObj.list = []; //缓存列表存放订阅者回调函数

//增加订阅者
shoeObj.listen = function(fn) {
  shoeObj.list.push(fn); //订阅消息添加到缓存列表
}

//发布消息
shoeObj.trigger = function() {
  for (var i = 0, fn; fn = this.list[i++];) {
    fn.apply(this, arguments);
  }
}

// 小红订阅如下消息
shoeObj.listen(function(color, size) {
  console.log('颜色是:' + color);
  console.log('尺码是:' + size);
});

//小花订阅如下消息
shoeObj.listen(function(color, size) {
  console.log('再次打印颜色是:' + color);
  console.log('再次打印尺码是:' + size);
})

shoeObj.trigger('红色', 40)
shoeObj.trigger('黑色', 42)