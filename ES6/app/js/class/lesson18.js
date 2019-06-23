// export let A = 123;

// export function test() {
//   console.log("test");
// }

// export class Hello {
//   test() {
//     console.log("class");
//   }
// }

export let A = 123;

export function test() {
  console.log("test");
}

export class Hello {
  test() {
    console.log("class");
  }
}
//default给导出对象不起名字，取名权利交给引入方
export default {
  A,test,Hello
}