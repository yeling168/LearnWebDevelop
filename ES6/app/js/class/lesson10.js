{
  //Set
  let list = new Set();
  //向set中增加元素用add方法
  list.add(5);
  list.add(7);
  //获取set元素的长度,用size属性
  console.log(list);
  console.log("size", list.size);
}

{
  //Set的另一种定义方式,Set初始化的时候，就把值添加进去
  let arr = [1, 2, 3, 4, 5];
  //Set对数组进行转化，转化成了一个集合
  let list = new Set(arr);
  console.log("size", list.size);
}

{
  let arr = new Array();
  arr.push(1);
  arr.push(2);
  arr.push(1);
  console.log(arr); //[1,2,1]
}

{
  //Set类型的元素必须是唯一的,最常见的使用是对数组去重
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log("list", list);

  //去重
  let arr = [1, 2, 3, 1, 2];
  let list2 = new Set(arr);
  console.log("unique", list2);

  //Set转换元素的时候不会做数据类型的转换
  //所以利用元素过滤性去重的时候一定要注意元素数据类型是否一致
  let arr1 = [1, 2, 3, 1, "2"];
  let list3 = new Set(arr);
  console.log("unique1", list3);
}

{
  //Set的API
  //add
  //delete
  //clear
  //has
  let arr = ["add", "delete", "clear", "has"];
  let list = new Set(arr);
  console.log("has", list.has("add"));
  console.log("delete", list.delete("add"), list);
  list.clear();
  console.log(list);
}

{
  //Set实例的遍历
  let arr = ["add", "delete", "clear", "has"];
  let list = new Set(arr);
  //key和value都一样，都是元素名称
  //key
  for (let key of list.keys()) {
    console.log("keys", key);
  }
  //value
  for (let value of list.values()) {
    console.log("value", value);
  }
  //直接遍历list也能取value
  for (let value of list) {
    console.log("value", value);
  }

  //entries也可以使用，返回key,value显示
  for (let [key, value] of list.entries()) {
    console.log("entries", key, value);
  }

  //关于foreach
  list.forEach(function(item) {
    console.log("item", item);
  });
}

{
  //WeakSet和Set很像
  //WeakSet和Set支持的数据类型不一样，WeakSet的元素只能是对象
  //WeakSet中的对象都是弱引用，它不会检测这个对象有没有在其他地方用过，这也意味着它不会和垃圾回收机制挂钩上，通俗讲，在WeakSet中添加了一个对象，这个对象不是整个值拷过来，它是地址的引用，而且它也不会检测这个地址是不是已经被垃圾回收机制回收掉了
  //WeakSet没有size属性，也有一些方法,如clear方法也没有
  //WeakSet不能遍历
  //WeakSet
  let weakList = new WeakSet();
  let arg = {};
  weakList.add(arg);
  console.log("weakList", weakList);
}

//Map
{
  let map = new Map();
  let arr = ["123"];
  //Set添加元素是用add
  //map添加元素是用set,set是一个key，一个value
  map.set(arr, 456);
  //get用来获取arr这个key它的值
  console.log("map", map, map.get(arr));
}

{
  //map的另一种定义方式
  let map = new Map([["a", 123], ["b", 456]]);
  console.log(map);

  //常用的属性值，方法
  //获取map长度
  console.log("size", map.size);
  //获取用get
  //删除用delete
  console.log("delete", map.delete("a"), map);
  //清空用clear
  console.log("clear", map.clear(), map);
}

{
  //WeakMap
  //WeakMap和Map区别  和set和WeakSet的区别类似
  let weakmap = new WeakMap();

  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}
