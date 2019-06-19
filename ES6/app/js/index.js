class Test{
    constructor(){
        this.a='hello world';
    }
}

let test=new Test();
console.log(test);

document.body.innerHTML=test.a;