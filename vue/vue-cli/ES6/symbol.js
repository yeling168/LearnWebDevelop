{
    // 声明
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);
}

{
    let a1 = Symbol.for("abc");
    let obj = {
        [a1]: "123",
        abc: 345,
        c: 456,
    };
    console.log("obj", obj);
}

{
    // 对象用Symbol做key值，通过for in和for of均拿不到属性
    // 需要使用getOwnPropertySymbols(obj)
    let a1 = Symbol.for("abc");
    let obj = {
        [a1]: "123",
        abc: 345,
        c: 456,
    };
    console.log("obj", obj);
    // 除了Symbol都能难道
    for (let [key, value] of Object.entries(obj)) {
        console.log("let of", key, value);
    }
    // 只能拿到Symbol
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    });
    //拿到所有的包含Symbol
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownKeys', item, obj[item])
    })
}