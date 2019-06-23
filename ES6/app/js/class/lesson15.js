{
  //Iterator在数组中的使用
  let arr = ["hello", "world"];
  //调用Iterator接口,()表示执行该方法
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  //自定义Iterator接口
  //Object没有部署Iterator接口
  //如何让Object也可以实现for...of循环
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    //实现先遍历end,后遍历start效果
    //声明Iterator接口方法
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      //这个方法返回一个对象，这个对象一定有next方法
      return {
        next() {
          //怎么遍历
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            };
          } else {
            return {
              value: arr[index++],
              done: true
            };
          }
        }
      };
    }
  };
  for (let key of obj) {
    console.log(key);
  }
}

{
  let arr = ["hello", "world"];
  for (let value of arr) {
    console.log("value", value);
  }
}
