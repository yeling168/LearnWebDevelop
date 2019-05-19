import { observable } from "rxjs";

var numbers = observable([1, 2, 3]);

var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(sum.get()));

//输出

numbers.push(4);

//输出:10

disposer(); //清除autorun
numbers.push(5);

//没有输出