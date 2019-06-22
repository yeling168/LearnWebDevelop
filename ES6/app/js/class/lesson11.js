{
  //数据结构横向对比，增，查，改，删
  let map = new Map();
  let array = [];

  //增
  map.set("t", 1);
  array.push({ t: 1 });

  console.log("map-array", map, array);

  //查
  let map_exist = map.has("t");
  //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  //如果存在，则直接返回值
  let array_exist = array.find(item => item.t);
  console.log("map-array", map_exist, array_exist);

  //改
  //对map
  map.set("t", 2);
  //对Array
  array.forEach(item => (item.t ? (item.t = 2) : ""));
  console.log("map-array-modify", map, array);

  //删除
  //map
  map.delete("t");
  //数组，使用splice
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log("map-array-empty", map, array);
}

//set和array的对比

{
  let set = new Set();
  let array = [];

  //增
  set.add({ t: 1 });
  array.push({ t: 1 });

  console.log("set-array", set, array);

  //查
  let set_exist = set.has({ t: 1 }); //false，引用对象,如果需要返回true，需要把{t:1}，保存到一个变量上
  let array_exist = array.find(item => item.t);
  console.log("set-array", set_exist, array_exist);

  //改
  //为什么不用add的方式修改？因为add的话，那么元素的值是一个新的对象，它不会检测到和原来的是冲突的，所有不会修改原来的，而是直接新增一个值
  set.forEach(item => (item.t ? (item.t = 2) : ""));
  array.forEach(item => (item.t ? (item.t = 2) : ""));
  console.log("set-array-modify", set, array);

  //删
  set.forEach(item => (item.t ? set.delete(item) : ""));
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.info("set-array-empty", set, array);
}

//Map与Object对比
//Set和Object对比
{
  let item = { t: 1 };
  let map = new Map();
  let set = new Set();
  let obj = {};

  //增
  map.set("t", 1);
  set.add(item);
  obj["t"] = 1;
  console.info("map-set-obj", obj, map, set);

  //查
  console.info({
    map_exist: map.has("t"),
    set_exist: set.has(item),
    obj_exist: "t" in obj
  });

  //改
  map.set("t", 2);
  item.t = 2;
  obj["t"] = 2;
  console.info("map-set-obj-modify", obj, map, set);

  //删除
  map.delete("t");
  set.delete(item);
  delete obj["t"];
  console.info("map-set-obj-empty", obj, map, set);
}