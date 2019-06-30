//非递归
function factorialize(num) {
  var result = 1;
  if (num < 0) return -1;
  if (num == 0 || num == 1) return 1;
  while (num > 1) {
    result *= num--;
  }
  return result;
}

//递归
function factorialize(num) {
  var result = 1;
  if (num < 0) return -1;
  if (num == 0 || num == 1) return 1;
  if (num > 1) {
    return num * factorialize(num - 1);
  }
}
