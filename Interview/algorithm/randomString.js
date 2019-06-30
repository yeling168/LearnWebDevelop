function randomString(n) {
  var str = "abcdefghijklmnopqrstuvwxyz0123456789";
  var tmp = "";
  for (var i = 0; i < n; i++) {
    //Math.round:一个数字舍入为最接近的整数
    tmp += str.charAt(Math.round(Math.random() * str.length));
    return tmp;
  }
}
