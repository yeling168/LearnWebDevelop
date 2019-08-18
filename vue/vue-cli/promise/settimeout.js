console.log("here we go");

new Promise(resolve => {
  //console.log("resolve", resolve);
  setTimeout(() => {
    resolve("hello");
  }, 2000);
}).then(value => {
  console.log(value + "world");
});
