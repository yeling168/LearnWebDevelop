//ES5:循环一次

var arr1 = [1, 2, 3, 44, 44, 11, 2, 3, 333, 3, 3];

function removeRepeat(arr) {
  //Object的使用，利用key来进行筛选,key是唯一的
  var removeArr = [],
    obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      removeArr.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
  return removeArr;
}

var singleArr = removeRepeat(arr1);
console.log(singleArr);

//ES6:set是一种新的数据结构，它可以接收一个数组或者是类数组对象，自动去重其中的重复项目。
//Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
function remove2(arr) {
  return Array.from(new Set(arr));
}

var single2 = remove2(arr1);
console.log(single2);
