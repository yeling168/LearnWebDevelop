{
  //Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log("arr=", arr);

  let empty = Array.of();
  console.log("empty", empty);
}

{
  //Array.from() 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。
  let p = document.querySelectorAll("p");
  console.log(p);
  let pArr = Array.from(p);
  pArr.forEach(function(item) {
    //textContent获取DOM节点文本内容的方法
    console.log(item.textContent);
  });

  console.log(
    Array.from([1, 3, 5], function(item) {
      return item * 2;
    })
  );
}

{
  //填充数组
  //fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
  console.log("fill-7", [1, "a", undefined].fill(7));
  console.log("fill,pos", ["a", "b", "c"].fill(7, 1, 3)); //从0开始计数
}

{
  //遍历
  for (let index of ["1", "c", "ks"].keys()) {
    console.log("keys", index); //0,1,2
  }

  for (let value of ["1", "c", "ks"].values()) {
    console.log("values", value); //1，c,ks
  }

  for (let [index, value] of ["1", "c", "ks"].entries()) {
    console.log("values", index, value); //1，c,ks
  }
}

{
  //copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
  //查找
  //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  console.log(
    [1, 2, 3, 4, 5, 6].find(function(item) {
      return item > 3;
    })
  );
  //findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
  console.log(
    [1, 2, 3, 4, 5, 6].findIndex(function(item) {
      return item > 3;
    })
  );
}

{
  //includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
  //includes()比find()和findIndex()更强大，能处理NaN，因为NaN===NaN返回false,所以ES5中无法处理NaN相关
  console.log("number", [1, 2, NaN].includes(1)); //true
  console.log("number", [1, 2, NaN].includes(NaN));
}
