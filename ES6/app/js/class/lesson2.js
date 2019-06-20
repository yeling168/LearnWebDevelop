{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest);
}

{
  let a, b;
  ({ a, b } = { a: 1, b: 2 });
  console.log(a, b);
}

{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c); //1,2,3
}

{
  let a, b, c, rest;
  [a, b, c] = [1, 2];
  console.log(a, b, c); //1,2,undefined
}
