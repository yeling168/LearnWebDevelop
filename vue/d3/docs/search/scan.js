var array = [{ foo: 42 }, { foo: 91 }];
d3.scan(array, function(a, b) {
  return a.foo - b.foo;
}); // 0
d3.scan(array, function(a, b) {
  return b.foo - a.foo;
}); // 1
