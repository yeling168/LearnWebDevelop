// function test() {
//   for (let i = 1; i < 3; i++) {
//     console.log(i);//1,2
//   }
//   console.log(i);//Uncaught ReferenceError: i is not defined
// }

// test();

// function test() {
//   let a = 1;
//   let a = 2;
// }

// test();

function last() {
  const PI = 3.1415926;
  const k = {
    a: 1
  };
  k.b = 3;
  console.log(PI, k);
}

last();
