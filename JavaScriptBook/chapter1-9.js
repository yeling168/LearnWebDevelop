function printArray(a) {
    if (!a) return;
    var len = a.length,
        i = 0;
    if (len == 0) {
        console.log('Empty Array');
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t !== 'function') {
        throw TypeError();
    }

    function f() {};
    f.prototype = p;
    return new f();
}

var o = {
    x: 1,
    y: 2,
    z: 3
};
o.propertyIsEnumerable("toString"); //false//某些内置的属性是不可枚举的
for (p in o) {
    console.log(p);
    //for in可以在循环体中遍历对象中所有可枚举的属性
    //包括自有属性和继承属性
}

//跳过继承的属性
for (p in o) {
    if (!o.hasOwnProperty(p)) continue;
}
//跳过方法
for (p in o) {
    if (typeof o[p] == 'function') {
        continue;
    }
}

/*
 * 用来枚举属性的对象工具函数
 * */
/*把p中的可枚举属性复制到o中，并返回o，如果o中和p中含有同名属性，则覆盖o中的属性*/
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}
/*把p中的可枚举属性复制到o中，并返回o，如果o中和p中含有同名属性，则o中的属性将不受影响*/
function merge() {
    for (prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop];
    }
    return o;
}
/*如果o中的属性在p中没有同名属性，则从o中删除这个属性*/
function restrict(o, p) {
    for (prop in o) {
        if (!(prop in p)) delete o[prop];
    }
    return o;
}
/*如果o中的属性在p中存在同名属性，则从o中删除这个属性*/
function subtract(o, p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}

/*返回一个新对象，这个对象同时拥有o的属性和p的属性*/
function union(o, p) {
    return extend(extend({}, o), p);
}
/*返回一个新对象，这个对象拥有同时在o和o中出现的属性*/
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

/*返回一个数组，这个数组包含的是o中可枚举的自有属性的名字*/
function keys(o) {
    if (typeof o !== 'object') throw TypeError();
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}

var p = {
    x: 1.0,
    y: 1.0,
    get r() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue / oldvalue;
        this.x *= ratio;
        this.y *= ratio
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    }
}

var serianum = {
    $n: 0,
    get next() {
        return this.$n++
    },
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw '序列号的值不能比当前值小';
    }
};

var random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    },
    get uint16() {
        return Math.floor(Math.random() * 65536);
    },
    get int16() {
        return Math.floor(Math.random() * 65536) - 32768;
    }
};

Object.getOwnPropertyDescriptor({
    x: 1
}, 'x');

Object.getOwnPropertyDescriptor(random, 'octet');

Object.getOwnPropertyDescriptor({}, 'x');

Object.getOwnPropertyDescriptor({}, 'toString');

var o = {};
Object.defineProperty(o, 'x', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});
o.x;
Object.keys(o);
Object.getOwnPropertyNames(o);
Object.defineProperty(o, 'x', {
    writable: false
})
Object.defineProperty(o, 'x', {
    value: 2
})
Object.defineProperty(o, 'x', {
    get: function () {
        return 0;
    }
});

Object.defineProperty(Object.prototype, 'extend', {
    writable: true,
    enumerable: false,
    configuration: true,
    value: function (o) {
        var names = Object.getOwnPropertyNames(o);
        for (var i = 0; i > names.length; i++) {
            if (names[i] in this) continue;
            var desc = Object.getOwnPropertyDescriptor(o, names[i]);
            Object.defineProperty(this, names[i], desc);
        }
    }
})

var p = {
    x: 1
};
var o = Object.create(p);
p.isPrototypeOf(o);
Object.prototype.isPrototypeOf(o);

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}
//another example,you will see "[object Object]","[object Array]","[object String]"
function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}
o = {
    x: 1,
    y: {
        z: [false, null, ""]
    }
};
s = JSON.stringify(o);
p = JSON.parse(s);

a = [1, 2, 3];
Object.defineProperty(a, "length", {
    writable: false
});
a.length = 0;

var keys = Object.keys(o);
var values = [];
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    values[i] = o[key];
}


var data = [1, 2, 3, 4, 5];
var sumOfSquares = 0;
data.forEach(function (x) {
    sumOfSquares += x * x;
})
sumOfSquares;

var table = new Array(10);
for (var i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}
for (var row = 0; row < table.length; row++) {
    for (var col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}
var product = table[5][7];

var a = [33, 4, 111, 222];
a.sort();
a.sort(function (a, b) {
    return a - b;
});
a.sort(function (a, b) {
    return b - a;
});

a = ['ant', 'Bug', 'cat', 'Dog'];
a.sort();
a.sort(function (s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})

var a = [1, 2, 3];
a.concat(4, 5);
a.concat([4, 5]);
a.concat([4, 5], [6, 7]);
a.concat(4, [5, [6, 7]]);

var a = [1, 2, 3, 4, 5];
a.slice(0, 3);
a.slice(3);
a.slice(1, -1);
a.slice(-3, -2);

var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4);
a.splice(1, 2);
a.splice(1, 1);

var a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b');
a.splice(2, 2, [1, 2], 3);


var stack = [];
stack.push(1, 2);
stack.pop();
stack.push(3);
stack.pop();
stack.push([4, 5]);
stack.pop();
stack.pop();

var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3, [4, 5]);
a.shift();
a.shift();
a.shift();

[1, 2, 3].toString();
['a', 'b', 'c'].toString();
[1, [2, 'c']].toString();

var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function (value) {
    sum += value;
})

function foreach(a, f, t) {
    try {
        a.forEach(f, t)
    } catch (e) {
        if (e === foreach.break) return;
        else throw e;
    }
}

foreach.break == new Error('StopIteration');

var a = [1, 2, 3];
var b = a.map(function (x) {
    return x * x;
})

a = [5, 4, 3, 2, 1];

smallvalues = a.filter(function (x) {
    return x < 3
});

everyother = a.filter(function (x, i) {
    return i % 2 == 0;
})

var a = [1, 2, 3, 4, 5];
a.every(function (x) {
    return x < 10;
})

a.every(function (x) {
    return x % 2 === 0;
})

a = [1, 2, 3, 4, 5];
a.some(function (x) {
    return x % 2 === 0;
})

a.some(isNaN);

var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) {
    return x + y
}, 0)

var product = a.reduce(function (x, y) {
    return x * y
}, 1)

var max = a.reduce(function (x, y) {
    return (x > y) ? x : y;
});

var a = [2, 3, 4, 5, 6, 7, 8];
var big = a.reduceRight(function (accumulator, value) {
    return Math.pow(value, accumulator);
})

var objects = [{
    x: 1
}, {
    y: 2
}, {
    z: 3
}];
var merged = objects.reduce(union);

var objects = [{
    x: 1,
    a: 1
}, {
    y: 2,
    a: 2
}, {
    z: 3,
    a: 3
}];
var leftunion = objects.reduce(union);
var rightunion = objects.reduceRight(union);

a = [0, 1, 2, 3, 1, 5, 6, 7, 8, 9, 0];
a.indexOf(1);
a.lastIndexOf(3);
a.indexOf(4);

function findall(a, x) {
    var results = [];
    len = a.length, pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}

Array.isArray([]);
Array.isArray({});

var isArray = Function.isArray || function (o) {
    return typeof o === "object" && Object.prototype.toString.call(o) == "[object Array]"
}

var a = {};
var i = 0;
while (i < 10) {
    a[i] == i * i;
    i++;
}
a.length = i;

var total = 0;
for (var j = 0; j < a.length; j++) {
    total += a[j];
}

function isArrayLike(o) {
    if (o && typeof o === "object" && isFinite(o.length) && o.length >= 0 && o.length == Math.floor(o.length) && o.length < 4294967296) {
        return true;
    } else {
        return false;
    }
}

var a = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
};
Array.prototype.join.call(a, "+")
Array.prototype.slice.call(a, 0)
Array.prototype.map.call(a, function (x) {
    return x.toUpperCase();
})

var a = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
};
Array.join(a, "+")
Array.slice(a, 0)
Array.map(a, function (x) {
    return x.toUpperCase();
})

Array.join = Array.join || function (a, sep) {
    return Array.prototype.join.call(a, sep);
}

Array.slice = Array.slice || function (a, from, to) {
    return Array.prototype.slice.call(a, from, to);
}
Array.map = Array.map || function (a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
}

var s = test;
s.charAt(0);
s[1]

s = "JavaScript"
Array.prototype.join.call(s, " ");
Array.prototype.filter.call(s, function (x) {
    return x.match(/[^aeiou]/);
}).join("")


function printprops(o) {
    for (var p in o) {
        console.log(p + ":" + o[p] + "\n");
    }
}

function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

var f = function fact(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * fact(x - 1);
    }
}

//函数表达式也可以作为参数传递给其他函数
data.sort(function (a, b) {
    return a - b;
})

//函数表达式有时定义后立即调用
var tensquared = (function (x) {
    return x * x;
}(10));

function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }

    return Math.sqrt(square(a) + square(b));
}

printprops({
    x: 1
});
var total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
var probability = factorial(5) / factorial(13);

var stcict = (function () {
    return !this;
}());

var calculator = {
    operand1: 1,
    operand2: 2,
    add: function () {
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
calculator.result;

var o = {
    m: function () {
        var self = this;
        console.log(this === o);
        f()

        function f() {
            console.log(this === o);
            console.log(self === o);
        }
    }
}

o.m();

function getPropertyNames(o, /*optional*/ a) {
    if (a === undefined) a = [];
    for (var property in o) {
        a.push(property);
    }
    return a;
}

var a = getPropertyNames(o);
getPropertyNames(p, a);

function max( /**/ ) {
    var max = Number.NEGATIVE_INFINITY; //负无穷大
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
        return max;
    }
}

var largest = max(1, 2);

function arraycopy(from, from_start, to, to_start, length) {

}

function easycopy(args) {
    arraycopy(args.from, args.from_start || 0, args.to, args.to_start || 0, args.length)
}

var a = [1, 2, 3, 4],
    b = [];
easycopy({
    from: a,
    to: b,
    length: 4
});

function sum(a) {
    if (isArrayLike(a)) {
        var total = 0;
        for (var i = 0; i < a.length; i++) {
            var element = a[i];
            if (element == null) continue;
            if (isFinite(element)) total += element;
            else throw new Error("sum():elements must be finite numbers");
        }
        return total;
    } else throw new Error("sum():argument must be array-like");
}

function flexisum(a) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i],
            n;
        if (element == null) continue;
        if (isArray(element)) {
            n = flexisum.apply(this, element);
        } else if (typeof element === 'function') {
            n = Number(element)
        } else {
            n = Number(element);
        }
        if (isNaN(n)) {
            throw Error("flexisum():can't convert" + element + "to number");
        }
        total += n;
    }
    return total;
}

function square(x) {
    return x * x;
}

var s = square;
square(4);
s(4);

var o = {
    square: function (x) {
        return x * x;
    }
}

var y = o.square(16);
var a = [function (x) {
    return x * x;
}, 20]

a[0](a[1]);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, operand1, operand2) {
    return operator(operand1, operand2)
}

var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

var operators = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    pow: Math.pow
}

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    } else {
        throw "unknow operator";
    }
}

var j = operate2("add", "hello", operate2("add", "", "world"));
var k = operate2("pow", 10, 2);

uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++;
}

function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);
        }
        return factorial[n];
    } else {
        return NaN;
    }
}

factorial[1] = 1;

function mymodule() {
    //  模块代码
    //这个模块所使用的所有变量都是局部变量
    //而不是污染全局命名空间
}

//这段代码仅仅定义了一个单独的全局变量:名叫"mymodule"的函数
//这样还是太麻烦，可以直接定义一个匿名函数，并在单个表达式中调用它
(function () {
    //模块代码
}());

//特定场景下返回带补丁的extend()版本
//定义一个扩展函数，用来将第二个以及后续参数复制至第一个参数
//这里我们处理了IE bug：在多数IE版本中
//如果o的属性拥有一个不可枚举的同名属性，则for/in循环
//不会枚举对象o的可枚举属性，也就是说，将不会枚举对象o的可枚举属性，也就是说，将不会正确地处理诸如toString的属性
//除非我们显示检测它
var extend = (function () {
    for (var p in {
            toString: null
        }) {
        //如果代码执行到这里，那么for/in循环会正确工作并返回
        //一个简单版本的extend函数
        return function extend(o) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
            }
            return o;
        }
    }
    //如果代码执行到这里，说明for/in循环不会枚举测试对象的toString属性
    //因此返回另一个版本的extend()函数，这个函数显示测试
    //object.prototype中的不可枚举属性
    return function patched_extend(o) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var prop in source) {
                o[prop] = source[prop];
            }
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[j];
                if (source.hasOwnProperty(prop)) {
                    o[prop] = source[prop];
                }
            }
        }
        return o;
    };
    //这个列表列出了需要坚持的特殊属性
    var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty',
        'isPrototypeof', 'propertyIsEnumerable', 'toLocalString',
        'isPrototypeof', 'propertyIsEnumerable', 'toLocalString'
    ];
});


var scope = "global scope"; //全局变量
function checkscope() {
    var scope = "local scope"; //局部变量
    function f() {
        return scope; //在作用域中返回这个值
    }

    return f();
}

checkscope(); //=>"local scope"

//做一些改动
var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }

    return f;
}
checkscope()();

var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
})

function counter() {
    var n = 0;
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            n = 0;
        }
    }
}

var c = counter();
var d = counter;
c.count;
d.count;
c.reset;
c.count;
d.count;

function counter(n) {
    return {
        get count() {
            return n++;
        },
        set count(m) {
            if (m > n) {
                n = m;
            } else {
                throw Error("count can only be set to a larger value");
            }
        }
    }
}

var c = counter(2000);
c.count
c.count
c.count = 2000
c.count
c.count = 2000

//利用闭包实现的私有属性存取器方法
//这个函数给对象o增加了属性存取器方法
//方法名称为get(name)和set(name)。如果提供了一个判断函数
//setter方法就会用它来检测参数的合法性，然后在存储它
//如果判定函数返回false，setter方法抛出一个异常

//这个函数有一个非同寻常之处，就是getter和setter函数
//所操作的属性值并没有存储在对象o中
//相反，这个值仅仅是保存在函数中的局部变量中
//getter和setter方法同样是局部函数，因此可以访问这个局部变量
//也就是说，对于两个存取器方法来说这个变量是私有的
//没有办法绕过存取器方法来设置或者修改这个值

function addPrivateProperty(o, name, predicate) {
    var value; //这是一个属性值
    //getter方法简单地将其返回
    o["get" + name] = function () {
        return value;
    };
    //setter方法首先检查值是否合法，若不合法就抛出异常
    //否则就将其存储起来
    o["set" + name] = function () {
        if (predicate && !predicate(v)) {
            throw Error("set" + name + ":invalid value" + v);
        } else {
            value = v;
        }
    }
}

//下面的代码展示了addprivateProperty()方法
var o = {}; //设置一个空对象
//增加属性存取器方法getName()和setName()
//确保只允许字符串值
addPrivateProperty(o, "name", function (x) {
    return typeof x == "string";
});
o.setName("Frank"); //设置属性值
console.log(o.getName()); //得到属性值
o.setName(o); //试图设置一个错误类型的值

function constfunc(v) {
    return function () {
        return v;
    };
}
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}
funcs[5]()

function constfuncs() {
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = function () {
            return i;
        };
    }
    return funcs;
}

var funcs = constfuncs();
funcs[5]();

//这个函数使用arguments.callee,因此它不能在严格模式下工作
function check(args) {
    var actual = args.length; //实参的真实个数
    var expected = args.callee.length; //期望的实参个数
    if (actual !== expected) {
        throw Error("Expected" + expected + "args;got" + actual);
    }
}

function f(x, y, z) {
    check(arguments);
    return x + y + z;
}
//call()和apply()的第一个实参是要调用函数的母对象，它是调用上下文
//在函数体内通过this来获得对它的引用。
//要想以对象o的方法来调用函数f(),可以这样使用call()和apply()
f.call(o);
f.apply(o);

o.m = f;
o.m();
delete o.m;

//在es5严格模式中,call()和apply()的第一个实参都会变成this值，哪怕传入的实参是原始值甚至是null和undefined
//在es3和非严格模式中，传入的null和undefined会被全局对象代替，而其他原始值则会被相应的包装对象代替

f.call(o, 1, 2);
f.apply(o, [1, 2]);

var biggest = Math.max.apply(Math, arrry_of_numbers);

//将对象o中名为m()的方法替换为另一个方法
//可以在调用原始的方法之前和之后记录日志消息
function trace(o, m) {
    var original = o[m];
    o[m] = function () {
        console.log(new Date(), "Entering:", m);
        var result = original.apply(this, arguments);
        console.log(new Date(), "Exiting", m);
        return result;
    }
}

function f(y) {
    return this.x + y;
}

var o = {
    x: 1
};
var g = f.bind(o);
/*在es3中模拟bind，bind()是es5中新增的方法*/
function bind(f, o) {
    if (f.bind) {
        return f.bind(o);
    } else {
        return f.apply(o, arguments);
    }
}

var sum = function (x, y) {
    return x + y
};

//创建一个类似sum的新函数，但this的值绑定到null
//并且第一个参数绑定到1,这个新的函数期望只传入一个实参
var succ = sum.bind(null, 1);
succ(2);

function f(y, z) {
    return this.x + y + z
};

var g = f.bind({
    x: 1
}, 2);
g(3)

if (!Function.prototype.bind) {
    Function.prototype.bind = function (o /*,args*/ ) {
        //将this和arguments的值保存至变量中
        //以便在后面嵌套的函数中可以试用它们
        var self = this,
            boundArgs = arguments;
        //bind()方法的返回值是一个函数
        return function () {
            //创建一个实参列表，将传入bind()的第二个及后续的实参都传入这个函数
            var args = [],
                i;
            for (i = 0; i < boundArgs.length; i++) {
                args.push(boundArgs[i]);
            }
            for (i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            //现在将self作为o的方法来调用，传入这些实参
            return self.apply(o, args);
        }
    }
}
//通过构造Function()构造函数来定义
var f = new Function("x", "y", "return x*y;");
//与如下代码等价
var f = function (x, y) {
    return x * y;
}

//非函数式编程
//计算平均数
var data = [1, 1, 3, 5, 5];
var total = 0;
for (var i = 0; i < data.length; i++) {
    total += data[i];
}

var mean = total / data.length;
//计算标准差
total = 0;
for (var i = 0; i < data.length; i++) {
    var devidtion = data[i] - mean;
    total += devidtion * devidtion;
}
var stddev = Math.sqrt(total / (data.length - 1));

//采用函数式编程
//首先定义两个简单的函数
var sum = function (x, y) {
    return x + y;
};
var square = function (x) {
    return x * x;
}
var data = [1, 1, 3, 5, 5];
var mean = data.reduce(sum) / data.length;
var deviations = data.map(function (x) {
    return x - mean;
});
var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));

//自定义map()和reduce()
//对于每个数组元素调用函数f(),并返回一个结果数组
//如果Array.prototype.map定义了的话，就使用这个方法
var map = Array.prototype.map ? function (a, f) {
    return a.map(f);
    //如果已经存在map方法，就直接使用它
    //否则，就自己实现一个
} : function (a, f) {
    var results = [];
    for (var i = 0, len = a.length; i < len; i++) {
        if (i in a) {
            results[i] = f.call(null, a[i], i, a);
        }
    }
}

//使用函数f()和可选的初始值将数组a减至一个值
//如果Array.prototype.reduce存在的话，就使用这个方法
var reduce = Array.prototype.reduce ? function (a, f, initial) {
    if (arguments.length > 2) {
        return a.reduce(f, initial);
    } else {
        return a.reduce(f);
    }
} : function (a, f, initial) {
    var i = 0;
    len = a.length;
    accumulator;
    //以特定的初始值开始,否则第一个值取自a
    if (arguments.length > 2) {
        accumulator = initial;
    } else {
        if (len == 0) throw TypeError();
        while (i < len) {
            if (i in a) {
                accumulator = a[i++];
                break;
            } else {
                i++
            }
        }
        if (i == len) throw TypeError();
    }
    while (i < len) {
        if (i in a) {
            accumulator = f.call(undefined, accumulator, a[i], i, a);
            i++;
        }
    }
    return accumulator;
}

//高阶函数
function not(f) {
    return function () {
        var result = f.apply(this, arguments);
        return !result;
    };
}

var even = function (x) {
    return x % 2 === 0;
}

var odd = not(even);

[1, 1, 3, 5, 5].every(odd);

//通过原型继承创建一个新对象
//inherit()返回了一个继承自原型对象p的属性的新对象
//这里使用ES5中的Object.create()函数(如果存在的话)
//如果不存在Object.create()，则退化使用其他方法
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();

    function f() {};
    f.prototype = p;
    return new f();
}

//概念，如果定义一个原型对象，然后通过inherit()函数创建一个继承自它的对象，这样就定义了一个JavaScript类
//一个简单的JavaScript类
//range.js：实现一个能表示值的范围的类
//这个工厂方法返回一个新的"范围对象"
function range(from, to) {
    //使用inherit()函数来创建对象，这个对象继承自在下面定义的原型对象
    //原型对象作为函数的一个属性存储，并定义所有"范围对象"所共享的方法
    var r = inherit(range.methods);
    //存储新的"范围对象"的起始位置和结束位置(状态)
    //这两个属性是不可继承的，每个对象都拥有唯一的属性
    r.from = from;
    r.to = to;
    return r;
}

//原型对象定义方法，这些方法为每个范围对象所继承
range.methods = {
    //如果x在范围内，则范围true,否则返回false
    //这个方法可以比较数字范围,也可以比较字符串和日期范围
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    //对于范围内的每个整数都调用一次f
    //这个方法只可用做数字范围
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    //返回表示这个范围的字符串
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}
//调用函数
var person = new Person("Nicholas");
alert(person.getName());

//Range2.js：表示值的范围的类的另一种实现

//这是一个构造函数，用以初始化新创建的"范围对象"
//注意，这里并没有创建并返回一个对象，仅仅是初始化
function Range(from, to) {
    //存储"范围对象"的起始位置和结束位置(状态)
    //这两个属性是不可继承的，每个对象都拥有唯一的属性
    this.from = from;
    this.to = to;
}

//所有的"范围对象"都继承自这个对象
//注意，属性的名字必须是"prototype"
//但这个新定义的原型对象不包含constructor属性。因此Range类的实例也不含有constructor属性
Range.prototype = {
    //如果x在范围内，则范围true,否则返回false
    //这个方法可以比较数字范围,也可以比较字符串和日期范围
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    //对于范围内的每个整数都调用一次f
    //这个方法只可用做数字范围
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    //返回表示这个范围的字符串
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}
//以下通过补救措施来修正Range类的实例也不含有constructor属性
Range.prototype = {
    constructor: Range, //显示设置构造函数反向引用
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}
//另一种常见的解决办法是使用预定义的原型对象，预定义的原型对象包含constructor属性，然后依次给原型对象添加方法
//这样就自动创建Range.prototype.constructor属性
Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to;
};
Range.prototype.foreach = function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) {
        f(x);
    }
};
Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")";
};
var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);

var F = function () {

};
var p = F.prototype;
var c = p.constructor;
c === F //true:对于任意函数F.prototype.constructor==F

//一个用以定义简单类的函数
function defineClass(constructor, methods, statics) {
    if (methods) {
        extend(constructor.prototype, methods);
    }
    if (statics) {
        extend(constructor, statics);
    }
    return constructor
}

var SimpleRange = defineClass(function (f, t) {
    this.f = f;
    this.t = t;
}, {
    includes: function (x) {
        return this.f <= x && x <= this.t;
    },
    toString: function () {
        return this.f + "..." + this.t;
    }
}, {
    upto: function (t) {
        return new SimpleRange(o, t);
    }
})

//complex.js 表示复数的类
/*
 complex.js
 这个文件定义了complex类，用来描述复数
 回忆一下，复数是实数和虚数的和，并且虚数i是-1的平方根
 */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) {
        throw new TypeError();
    }
    this.r = real; //复数的实部
    this.i = imaginary; //复数的虚部
}
/*
 * 类的实例方法定义为原型对象的函数值属性
 * 这里定义的方法可以被所有实例继承，并为它们提供共享的行为
 * 需要注意的是，JavaScript的实例方法必须使用关键字this
 * 来存取实例的字段
 * */
//当前复数对象加上另外一个复数，并返回一个新的计算和值后的复数对象
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
}
//当前复数乘以另外一个复数，并返回一个新的计算乘积之后的复数对象
Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
}
//计算复数的模，复数的模定义为原点(0,0)到复平面的距离
Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}
//复数的求负运算
Complex.prototype.neg = function () {
    return new Complex(-this.r, -this.i);
}
//将复数对象转换为一个字符串
Complex.prototype.toString = function () {
    return "{" + this.r + "," + this.i + "}";
};
//检测当前复数对象是否和另外一个复数值相等
Complex.prototype.equals = function (that) {
    return that != null && //必须有定义且不能是null
        that.constructor === Complex && //并且必须是Complex的实例
        this.r === that.r && this.i === that.i; //并且必须包含相同的值
};
/*
 *类字段(比如常量)和类方法直接定义为构造函数的属性
 *需要注意的是，类的方法通常不使用关键字this,
 *它们只对其参数进行操作*/
//这里预定义了一些对复数运算有帮助的类字段
//它们的命名都是大写，用以表明它们是常量
//(在ES5中，还能设置这些类字段的属性为只读)
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
//这个类方法将由实例对象的toString方法返回的字符串格式解析为一个Complex对象
//或者抛出一个类型错误异常
Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch (x) {
        throw new TypeError("can't parse" + s + "'as a complex number.'");
    }
};
//定义类的"私有"字段，这个字段在Complex.parse()中用到了
//下划线前缀表明它是类内部使用的，而不是属于类的公有API部分
Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2, 3); //使用构造函数创建新的对象
var d = new Complex(c.i, c.r); //用到了c的实例属性
c.add(d).toString(); //=>"{5,5}":使用了实例的方法
//这个稍微复杂的表达式用到了类方法和类字段
Complex.parse(c.toString()). //将c转换为字符串
add(c.neg()). //加上它的负数
equal(Complex.ZERO) //结果应当永远是"零"
Complex.prototype.toString = function () {
    with(this) {
        return "{" + r + "," + i + "}";
    }
}
/*类的扩充*/
//返回当前复数的共轭复数(实部相等，虚部互为相反数的复数互为共轭复数)
Complex.prototype.conj = function () {
    return new Complex(this.r, -this.i);
}
//多次调用这个函数f，传入一个迭代函数
var n = 3;
n.times(function (n) {
    console.log(n + " hello");
})
//多次调用这个函数f，传入一个迭代数
//比如，要输出"hello"三次
Number.prototype.times = function (f, context) {
    var n = Number(this);
    for (var i = 0; i < n; i++) {
        f.call(context, i);
    }
}
//如果不存在ES5的String.trim()方法的话，就定义它
//这个方法用以去除字符串开头和结尾的空格
String.prototype.trim = String.prototype.trim || function () {
    if (!this) return this; //空字符串不做处理
    return this.replace(/^\s+|s+$/g, ""); //使用正则表达式进行空格替换
}
//返回函数的名字，如果它有(非标准的)name属性，则直接使用name属性
//否则，将函数转换为字符串然后从中提取名字
//如果是没有名字的函数，则返回一个空字符串
Function.prototype.getName = function () {
    //return this.name||this.toString().match(/function\s*([^()*]\(/)[1];
}
//通过instanceof检测对象的继承关系
range.methods.isPrototypeOf(r); //range.method是原型对象
//instanceof运算符和isPrototypeOf方法的缺点是，我们无法通过对象来获得类名，只能检测对象是否属于指定类名
//在两个不同框架页面中创建的两个数组继承自两个相同但相互独立的原型对象，其中一个框架页面中的数组不是另一个框架页面的Array()构造函数的实例，instanceof运算结果是false
//另一种识别对象是否属于某个类的方法是使用constructor属性。因为构造函数是类的公共标识，所以最直接的方法就是使用constructor属性，比如
function typeAndValue(x) {
    if (x == null) return "" //Null和undefined没有构造函数
    switch (x.constructor) {
        case Number:
            return "Number:" + x; //处理原始类型
        case String:
            return "String:'" + x + "'";
        case Date:
            return "Date:" + x; //处理内置类型
        case RegExp:
            return "Regexp:" + x;
        case Complex:
            return "Complex:" + x; //处理自定义类型
    }
}
//需要注意的是，在代码中关键字case后的表达式都是函数，如果改用typeof运算符或
//获取到对象的class属性的话，它们应当改为字符串

//使用contructor属性检测对象属于某个类的技术不足之处和instanceof一样。在多个执行上下文
//的场景中它是无法正常工作的(比如在浏览器窗口的多个框架子页面中)。在这种情况下，每个框架
//页面各自拥有独立的构造函数集合，一个框架页面中的Array构造函数和另一个框架页面
//的Array构造函数不是同一个构造函数。

//同样，在JavaScript中也并非所有对象都包含constructor属性。在每个新创建的函数原型上默认会有
//Constructor属性，但我们常常会忽略原型上的Constructor属性

//可以判断值类型的type函数
/*
 以字符串形式返回o的类型
 如果o是null，则返回null，如果o是NaN，返回"nan"
 如果typeof所返回的值不是"object",则返回这个值
 (注意，有一些JavaScript的实现将正则表达式识别为函数)
 如果o的类不是"object"，则返回这个值
 如果o包含构造函数并且这个构造函数具有名称,则返回这个名称
 否则，一律返回"object"
 */
function type(o) {
    var t, c, n //type,class,name
    //处理null值的特殊情形
    if (o === null) return "null";
    //另外一种特殊情形:NaN和它自身不相等
    if (o !== o) return "nan";
    //如果typeof的值不是"object"，则使用这个值
    //这可以识别出原始值的类型和函数
    if ((t = typeof o) !== "object") {
        return t;
    }
    //返回对象的类名,除非值为"object"
    //这种方式可以识别出大多数的内置对象
    if ((c == classof(o)) !== "object") {
        return c;
    }
    //如果对象构造函数的名字存在的话，则返回它
    if (o.constructor && typeof o.constructor === "function" && (n = o.constructor.getName())) {
        return n;
    }
    //其他的类型都无法判别，一律返回"Object"
    return "Object";
}
//返回对象的类
function classof() {
    return Object.prototype.toString.call(o).slice(8, -1);
}
//返回函数的名字(可能是空字符串),不是函数的话返回null
Function.prototype.getName = function () {
    if ("name" in this) return this.name;
    //return this.name=this.toString().match(/function\s*([^(]*)\(/)[1];
}
//这个构造函数没有名字
var Complex = function (x, y) {
    this.r = x;
    this.i = y;
}
//这个构造函数没有名字
var Range = function Range(f, t) {
    this.from = f;
    this.to = t;
}
//利用鸭式辩型实现的函数
//如果o实现了除第一个参数之外的参数所表示的方法，则返回true
function quacks(o /**/ ) {
    for (var i = 1; i < arguments.length; i++) { //遍历o之后的所有参数
        var arg = arguments[i];
        switch (typeof arg) {
            case "string": //如果参数是string，直接用名字做检查
                if (typeof o[arg] !== "function") return false;
                continue;
            case "function": //function：检查函数的原型对象上的方法
                //如果实参是函数，则使用它的原型
                arg = arg.prototype; //进入下一个case
            case "object":
                for (var m in arg) {
                    if (typeof (arg[m]) !== "function") continue; //跳过不是方法的属性
                    if (typeof o[m] !== "function") return false;
                }
        }
    }
    //如果程序能执行到这，说明o实现了所有的方法
    return true;
}
//set.js：值的任意集合
function Set() {
    this.values = {}; //集合数据保存在对象属性里
    this.n = 0; //集合中值的个数
    this.add.apply(this, arguments); //把所有参数都添加进这个集合
}
//将每个参数都添加至集合中
Set.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++) {
        var val = arguments[i];
        var str = Set._v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
    return this;
}
//从集合中删除元素，这些元素由参数指定
Set.prototype.remove = function () {
    for (var i = 0; i < arguments.length; i++) {
        var str = Set._v2s(arguments[i]);
        if (this.values.hasOwnProperty(str)) {
            delete this.values[str];
            this.n--;
        }
    }
    return this;
}
//如果集合中包含这个值，则返回true,否则，返回false
Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._v2s(value));
}
//遍历几个中的所有元素，在指定的上下文中调用f
Set.prototype.foreach = function (f, context) {
    for (var s in this.values) {
        if (this.values.hasOwnProperty(s)) {
            f.call(context, this.values[s]);
        }
    }
}
//这是一个内部函数,用以将任意JavaScript值和唯一的字符串对应起来
Set._v2s = function (val) {
    switch (val) {
        case undefined:
            return "u";
        case null:
            return "n";
        case true:
            return "t";
        case false:
            return "f";
        default:
            switch (typeof val) {
                case "number":
                    return "#" + val;
                case "string":
                    return "''" + val;
                default:
                    return "@" + objectId(val);
            }

            function objectId(o) {
                var prop = "|**objectid**|";
                if (!o.hasOwnProperty(prop)) {
                    o[prop] = Set._v2s.next++;
                }
                return o[prop];
            }
    }
}
Set._v2s.next = 100;
//使用4个值创建新的coin类:Coin.Penny,Coin.Nickel等
var Coin = enumeration({
    Penny: 1,
    Nickel: 5,
    Dime: 10,
    Quarter: 25
});
var c = Coin.Dime;
c instanceof Coin;
c.constructor == Coin;
Coin.Quarter + 3 * Coin.Nickel;
Coin.Dime == 10;
Coin.Dime > Coin.Nickel;
String(Coin.Dime) + ":" + Coin.Dime;
/**/
//JavaScript中的枚举类型
function enumeration(namesToValues) {
    //这个虚拟的构造函数是返回值
    var enumeration = function () {
        throw "can't Instantiate Enumerations";
    };
    //枚举值继承自这个对象
    var proto = enumeration.prototype = {
        constructor: enumeration, //标识类型
        toString: function () {
            return this.name; //返回名字
        },
        valueOf: function () {
            return this.value; //返回值
        },
        toJSON: function () {
            return this.name; //转换为JSON
        }
    };
    enumeration.values = []; //用以存放枚举对象的数组
    //现在创建新类型的实例
    for (name in namesToValues) {
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }
    //一个类方法，用来对类的实例进行迭代
    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) {
            f.call(c, this.values[i]);
        }
    }
    //返回标识这个新类型的构造函数
    return enumeration;
}
enumeration.values = [];
//返回集合的大小
Set.prototype.size = function () {
    return this.n;
}
//使用枚举类型来表示一副扑克牌
//定义一个表示玩牌的类
function Card(suit, rank) {
    this.suit = suit; //每张牌都有花色
    this.rank = rank; //和点数
}
//使用枚举类型定义花色和点数
Card.Suit = enumeration({
    Club: 1,
    Diamonds: 2,
    Hearts: 3,
    Spades: 4
});
Card.Rank = enumeration({
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14
});
//定义用以描述牌面的文本
Card.prototype.toString = function () {
    return this.rank.toString() + "of" + this.suit.toString();
}
//比较扑克牌中两张牌的大小
Card.prototype.compareTo = function (that) {
    if (this.rank < that.rank) return -1;
    if (this.rank > that.rank) return 1;
    return o;
}
//以扑克牌的玩法规则对牌进行排序的函数
Card.orderByRank = function (a, b) {
    return a.compareTo(b);
};
//以扑克牌的玩法规则对牌进行排序的函数
Card.orderBySuit = function (a, b) {
    if (a.suit < b.suit) return -1;
    if (a.suit > b.suit) return 1;
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
}
//定义用以表示一副标准扑克牌的类
function Deck() {
    var cards = this.cards = []; //一副牌就是由牌组成的数组
    Card.Suit.foreach(function (s) { //初始化这个数组
        Card.Rank.foreach(function (r) {
            cards.push(new Card(s, r));
        });
    });
}
//洗牌的方法：重新洗牌并返回好洗好的牌
Deck.prototype.shuffle = function () {
    //遍历数组中每个元素，随机找出牌面最小的元素，并与之（当前遍历的元素）交换
    var deck = this.cards,
        len = deck.length;
    for (var i = len - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1)),
            temp; //随机数
        temp = deck[i], deck[i] = deck[r], deck[r] = temp; //交换
    }
    return this;
}
//发牌的方法：返回牌的数组
Deck.prototype.deal = function (n) {
    if (this.cards.length < n) throw "Out of cards";
    return this.cards.splice(this.cards.length - n, n);
}
//创建一副新扑克牌，洗牌并发牌
var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);
//使用extend()函数来向Set.prototype来添加方法
extend(Set.prototype, {
    //将集合转换为字符串
    toString: function () {
        var s = "{",
            i = 0;
        this.foreach(function (v) {
            s += ((i++ > 0) ? "," : "") + v;
        });
        return s + "}";
    },
    toLocalString: function () {
        var s = "{",
            i = 0;
        this.foreach(function (v) {
            if (i++ > 0) s += ",";
            if (v == null) s += v; //null和undefined
            else s += v.toLocalString(); //其他情况
        });
        return s + "}";
    },
    //将集合转换为值数组
    toArray: function () {
        var a = [];
        this.foreach(function (v) {
            a.push(v);
        });
        return a;
    }
});
//对于要从JSON转换为字符串的集合都被当做数据来对待
Set.prototype.toJSON = Set.prototype.toArray;
//对于简单的类，可以通过简单地比较它们的constructor属性来确保两个对象是相同类型，然后比较两个对象的实例属性以保证它们的值相等
//给Complex类实现判断相等的方法
//Range类重写它的constructor属性，现在将它添加进去
Range.prototype.constructor = Range;

//一个Range对象和其他不是Range的对象均不相等
//当且仅当两个范围的端点相等,它们才相等
Range.prototype.equals = function (that) {
    //处理null和undefined
    if (that == null) return false;
    //处理非Range对象
    if (that.constructor !== Range) return false;
    //当且仅当两个端点相等，才返回false
    return this.from == that.from && this.to == that.to;
}
//给Set类定义equals()方法稍微有些复杂。不能简单地比较两个集合的values属性，还要进行更深层次的比较
Set.prototype.equals = function (that) {
    //一些次要情况的快捷处理
    if (this === that) return true;
    //如果that对象不是一个集合，它和this不相等
    //我们用到了instanceof，使得这个方法可以用于Set的任何子类
    //我们用到了鸭式辩型的方法，可以降低检查的严格程度
    //或者可以通过this.constructor==that.construtor来加强检查的严格程度
    //注意，null和undefined两个值是无法用于instanceof运算的
    if (!(that instanceof Set)) return false;
    //如果两个集合大小不一样,则他们不相等
    if (this.size() != that.side()) return false;
    //现在检查两个集合不相等，则通过抛出异常来终止foreach循环
    try {
        this.foreach(function (v) {
            if (!that.contains(v)) throw false;
        });
        return true; //所有的元素都匹配：两个集合相等
    } catch (x) {
        if (x === false) return false; //如果集合中有元素在另一个集合中不存在
        throw x; //重新抛出异常
    }
}
Range.prototype.compareTo = function (that) {
    return this.from - that.from;
}
//根据下边界来对Range对象排序，如果下边界相等则比较上边界
//如果传入非Range值，则抛出异常
//当且仅当this.equals(that)，才返回0
Range.prototype.compareTo = function (that) {
    if (!(that instanceof Range)) {
        throw new Error("can't compare a Range with" + that);
    }
    var diff = this.from - that.from;
    if (diff == 0) {
        diff = this.to - that.to;
    }
    return diff;
}
Range.prototype.equals = generic.equals;
/*方法借用的泛型实现*/
var generic = {
    //返回一个字符串，这个字符串包含构造函数的名字(如果构造函数包含名字)
    //以及所有非继承来的、非函数属性的名字和值
    toString: function () {
        var s = '[';
        //如果这个对象包含构造函数，且构造函数包含名字
        //这个名字会作为返回字符串的一部分
        //需要注意的是，函数的名字属性是非标准的，并不是在所有的环境中可用
        if (this.constructor && this.constructor.name) {
            s += this.constructor.name + ":";
        }
        //枚举所有非继承且非函数的属性
        var n = 0;
        for (var name in this) {
            if (!this.hasOwnProperty(name)) continue; //跳过继承来的属性
            var value = this[name];
            if (typeof value === "function") continue; //跳过方法
            if (n++) s += ",";
            s += name + '=' + value;
        }
        return s + ']';
    },
    //通过比较this和that的构造函数和实例属性来判断它们是否相等
    //这种方法只适于那些实例属性是原始值的情况，原始值可以通过"==="来比较
    //这里还处理一种特殊的情况没救是忽略由Set类添加的特殊属性
    equals: function (that) {
        if (that == null) return false;
        if (this.constructor !== that.constructor) return false;
        for (var name in this) {
            if (name === "|**objectid**|") continue; //跳过特殊属性
            if (!this.hasOwnProperty(name)) continue; //跳过继承来的属性
            if (this[name] !== that[name]) return false; //比较是否相等
        }
        return true; //如果所有属性都匹配，两个对象相等
    }
}
//对Range类的读取端点方法的简单封装
function Range(from, to) {
    //不要将端点保存为对象的属性，相反
    //定义存取器函数来返回端点的值
    //这些值都保存在闭包中
    this.from = function () {
        return from;
    };
    this.to = function () {
        return to;
    }
}
//原型上的方法无法直接操作端点
//它们必须调用存取器方法
Range.prototype = {
    constructor: Range,
    includes: function (x) {
        return this.from() <= x && x < this.to();
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from()), max = this.to(); x <= max; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from() + "..." + this.to() + ")";
    }
};
//这个新的Range类定义了用以读取范围端点的方法，但没有定义设置端点的方法或属性。
//这让类的实例看起来是不可修改的，如果使用正确的话，一旦创建Range对象，端点数据就不可修改了。
var r = new Range(1, 5); //范围是1-5
r.from = function () {
    return 0;
}; //范围是0-5

//重载构造桉树让它根据传入参数的不同来执行不同的初始化方法
function Set() {
    this.values = {}; //用这个对象属性来保存这个集合
    this.n = 0; //集合中值的个数

    //如果传入一个类数组的对象，将这个元素添加至集合中
    //否则，将所有的参数都添加至集合中
    if (arguments.length == 1 && isArray(arguments[0])) {
        this.add.apply(this, arguments[0]);
    } else if (arguments.length > 0) {
        this.add.apply(this, arguments);
    }
}
//使用工厂方法来返回一个使用极坐标初始化Complex对象
Complex.polor = function (r, theta) {
    return new Complex(r * Math.cos(theta), r.Math.sin(theta));
}
//下面这个工厂方法用来通过数组初始化Set对象
Set.fromArray(function (a) {
    s = new Set(); //创建一个空集合
    s.add.apply(s, a); //将数组a的成员作为参数传入add()方法
    return s; //返回这个新集合
})
//Set类的一个辅助构造函数
function SetFromArray(a) {
    //通过以函数的形式调用Set()来初始化这个新对象
    //将a的元素作为参数传入
    Set.apply(this, a);
}

B.prototype = inherit(A.prototype); //子类派生自父类
B.prototype.constructor = B; //重载继承来的constructor属性

//设置原型，以便SetFromArray能创建Set实例
SetFromArray.prototype = Set.prototype;

var s = new SetFromArray([1, 2, 3]);
s instanceof Set //true

//定义子类
//用一个简单的函数创造简单的子类
function defineSubclass(superclass, //父类的构造函数
    constructor, //新的子类的构造函数
    methods, //实例方法：复制到原型中
    statics) //类属性：复制至构造函数中
{
    //建立子类的原型对象
    constructor.prototype = inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    //像对常规类一样复制方法和类属性
    if (methods) {
        extend(constructor.prototype, methods);
    }
    if (statics) {
        extend(constructor, statics);
    }
    //返回这个类
    return constructor;
}
//也可以通过父类构造函数函数的方法来做到这一点
Function.prototype.extend = function (constructor, methods, statics) {
    return defineSubclass(this, constructor, methods, statics);
}
//singlelettonSet:一个简单的子类
//构造函数
function SinglelettonSet(member) {
    this.member = member; //记住集合中这个唯一的成员
}
//创建一个原型对象，这个原型对象继承自Set原型
SinglelettonSet.prototype = inherit(Set.prototype);
//给原型添加属性
//如果有同名的属性就覆盖Set.prototype中的同名属性
extend(SinglelettonSet.prototype, {
    //设置合适的constuctor属性
    constructor: SinglelettonSet,
    //这个集合是只读的：调用add()和remove()都会报错
    add: function () {
        throw "read-only set";
    },
    remove: function () {
        throw "read-only Set";
    },
    //SinglelettonSet的实例中永远只有一个元素
    size: function () {
        return 1;
    },
    //这个方法只调用一次，传入这个集合的唯一成员
    foreach: function (f, context) {
        f.call(context, this.member);
    },
    //contains()方法非常简单：只须检查传入的值是否匹配这个集合的唯一成员即可
    contains: function () {
        return x === this.member;
    }
});

SinglelettonSet.prototype.equals = function (that) {
    return that instanceof Set && that.size() == 1 && that.contains(this.member);
}
//在子类中调用父类的构造函数和方法
/*
 *NonNullSet是Set的子类，它的成员不能是null和undefined
 */
function NonNullSet() {
    //仅链接到父类
    //作为普通函数调用父类的构造函数来初始化通过该构造函数调用创建的对象
    Set.apply(this, arguments);
}
//将NonNullSet设置为Set的子类
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

//为了将null和undefined排除在外，只须重写add()方法
NonNullSet.prototype.add = function () {
    //检查参数是不是null或undefined
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null) {
            throw new Error("Can't add null or undefined to a NonNullSet");
        }
    }
    //调用父类的add()方法以执行实际插入操作
    return Set.prototype.add.apply(this, arguments);
};
//定义一个只能保存字符串的"集合"类
var StringSet = filteredSetSubclass(Set, function (x) {
    return typeof x === "string";
});
//这个集合类的成员不能是null、undefined或函数
var MySet = filteredSetSubclass(NonNullSet, function (x) {
    return typeof x !== "function";
});
//以下这个类工厂函数的实现代码，这个例子中的方法链和构造函数链和NonNullset中的实现是一样的
//类工厂和方法链
/*
 * 这个函数返回具体Set类的子类
 * 并重写该类的add()方法用以对添加的元素做特殊的过滤
 */
function filteredSetSubclass(superclass, filter) {
    var constructor = function () { //子类构造函数
        superclass.apply(this, arguments); //调用父类构造函数
    };
    var proto = constructor.prototype = inherit(superclass.prototype);
    proto.constructor = constructor;
    proto.add = function () {
        //在添加任何成员之前首先使用过滤器将所有参数进行过滤
        for (var i = 0; i < arguments.length; i++) {
            var v = arguments[i];
            if (!filter(v)) {
                throw ("value" + v + "rejected by filter");
            }
        }
        //调用父类的add()方法
        superclass.prototype.add.apply(this, arguments);
    };
    return constructor;
}
//使用包装函数和Function.prototype.extend()重写NonNullSet
var NonNullSet = (function () { //定义并立即调用这个函数
    var superclass = Set;
    return superclass.extend(function () { //构造函数
        superclass.apply(this, arguments);
    }, { //方法
        add: function () {
            //检查参数是否是null或undefined
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == null) {
                    throw new Error("Can't add null or undefined");
                }
            }
            return superclass.prototype.add.apply(this, arguments);
        }
    });
}());
//使用组合代替继承的集合的实现
/*
 * 实现一个FilteredSet,它包装某个指定的"集合"对象，
 * 并对传入add()方法的值应用了某种指定的过滤器
 * "范围"类中其他所有的核心方法延续到包装后的实例中
 */
var FilteredSet = Set.extend(function FilteredSet(set, filter) { //构造函数
    this.set = set;
    this.filter = filter;
}, {
    //实例方法
    add: function () {
        //如果已有过滤器，直接使用它
        if (this.filter) {
            for (var i = 0; i < arguments; i++) {
                var v = arguments[i];
                if (!this.filter(v)) {
                    throw new Error("FilteredSet:value" + v + "rejected by filter");
                }
            }
        }
        //调用set中的add()方法
        this.set.add.apply(this.set, arguments);
        return this;
    },
    //剩下的方法都保持不变
    remove: function () {
        this.set.remove.apply(this.set, arguments);
    },
    contains: function (v) {
        return this.set.contains(v);
    },
    size: function () {
        return this.set.size();
    },
    foreach: function (f, c) {
        this.set.foreach(f, c);
    }
});

var s = new FilteredSet(new Set(), function (x) {
    return x !== null;
});
//var t=new FilteredSet(s,{function(x){return !(x instanceof Set);}};
//抽象类和非抽象Set类的层次结构
//这个函数可以用做任何抽象方法，非常方便
function abstractmethod() {
    throw new Error("abstract method");
}
/*
 * AbstractSet类定义了一个抽象的方法：contains()
 */
function AbstractSet() {
    throw new Error("can't instantiate abstract classes");
}
AbstractSet.prototype.contains = abstractmethod;
/*
 * NotSet是AbstractSet的一个非抽象子类
 * 所有不在其他集合中的成员都在这个集合中
 * 因为它是在其他集合是不可写的条件下定义的
 * 同时由于它的成员是无限个，因此它是不可枚举的
 * 我们只能用它来检测元素成员的归属情况
 * 注意，我们使用了Function.prototype.extend()方法来定义这个子类
 */
var NotSet = AbstractSet.extend(function NotSet(set) {
    this.set = set;
}, {
    contains: function (x) {
        return !this.set.contains(x);
    },
    toString: function (x) {
        return "~" + this.set.toString();
    },
    equals: function (that) {
        return that instanceof NotSet && this.set.equals(that.set);
    }
});
/*
 * AbstractEnumerableSet是AbstractSet的一个抽象子类
 * 它定义了抽象方法size()和foreach()
 * 然后实现了非抽象方法isEmpty(),toArray(),to[local]String()和equals()方法
 * 子类实现了contains()、size()和foreach()，这三个方法可以轻易地调用这5个非抽象方法
 */
var AbstractEnumerableSet = AbstractSet.extend(function () {
    throw new Error("can't instantiate abstract classes");
}, {
    size: abstractmethod,
    foreach: abstractmethod,
    isEmpty: function () {
        return this.size() == 0;
    },
    toString: function () {
        var s = "{",
            i = 0;
        this.foreach(function (v) {
            if (i++ > 0) {
                s += ",";
            }
        });
        return s + "}";
    },
    toLocaleString: function () {
        var s = "{",
            i = 0;
        this.foreach(function (v) {
            if (i++ > 0) {
                s += ",";
            }
            if (v == null) {
                //null和undefined
                s += v;
            } else {
                s += v.toLocaleString(); //其他情况
            };
        });
        return s + "}";
    },
    toArray: function () {
        var a = [];
        this.foreach(function (v) {
            a.push(v);
        })
        return a;
    },
    equals: function (that) {
        if (!(that instanceof AbstractEnumerableSet)) return false;
        //如果它们的大小相同，则它们不相等
        if (this.size() != that.size()) return false;
        //检查每一个元素是否也在that中
        try {
            this.foreach(function (v) {
                if (!that.contains(v)) throw false;
            });
            return true; //所有的元素都匹配：集合相等
        } catch (x) {
            if (x === false) return false; //集合不相等
            throw x; //发生了其他的异常：重新抛出异常
        }
    }
});
/*
 * SingletonSet是AbstractEnumerableSet的非抽象子类
 * singleton集合是只读的，它只包含一个成员
 */
var SingletonSet = AbstractEnumerableSet.extend(function SingletonSet(member) {
    this.member = member;
}, {
    contains: function (x) {
        return x === this.member;
    },
    size: function () {
        return 1;
    },
    foreach: function (f, ctx) {
        f.call(ctx, this.member);
    }
});
/*
 * AbstractWritableSet是AbstractEnumerableSet的抽象子类
 * 它定义了抽象方法add()和remove()
 * 然后实现了非抽象方法union()、intersection()和difference()
 */
var AbstractWriableSet = AbstractEnumerableSet.extend(function () {
    throw new Error("Can't instantiate abstract classes");
}, {
    add: abstractmethod,
    remove: abstractmethod,
    union: function (that) {
        var self = this;
        that.foreach(function (v) {
            self.add(v);
        });
        return this;
    },
    intersection: function (that) {
        var self = this;
        this.foreach(function (v) {
            if (!that.contains(v)) {
                self.remove(v);
            }
        });
        return this;
    },
    difference: function (that) {
        var self = this;
        that.foreach(function (v) {
            self.remove(v);
        });
        return this;
    }
});
/*
 * ArraySet是AbstractWritableSet的非抽象子类
 * 它以数组的形式表示集合中的元素
 * 对于它的contains()方法使用了数组的线性查找
 * 因为contains()方法的算法复杂度是0(n)而不是0(1)
 * 它非常适用于相对小型的集合，注意，这里的实现用到了ES5的数组方法indexof和foreach
 */
var ArraySet = AbstractWriableSet.extend(function ArraySet() {
    this.values = [];
    this.add.apply(this, arguments);
}, {
    contains: function (v) {
        return this.values.indexOf(v) != -1;
    },
    size: function () {
        return this.values.length;
    },
    foreach: function (f, c) {
        this.values.forEach(f, c);
    },
    add: function () {
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!this.contains(arg)) {
                this.values.push(arg);
            }
        }
        return this;
    },
    remove: function () {
        for (var i = 0; i < arguments.length; i++) {
            var p = this.values.indexOf(arguments[i]);
            if (p == -1) continue;
            this.values.splice(p, 1);
        }
        return this;
    }
})

//定义不可枚举属性
//将代码包装在一个匿名函数中，这样定义的变量就在这个函数作用域内
(function () {
    //定义一个不可枚举的属性objectId，它可以被所有对象继承
    //当读取这个属性时调用getter函数
    //它没有定义setter，因此它是只读的
    //它是不可配置的，因此它是不能删除的
    Object.defineProperty(Object.prototype, "objectId", {
        get: idGetter, //取值器
        enumerable: false, //不可枚举的
        configurable: false //不可删除的
    });

    function idGetter() {
        if (!(idprop in this)) { //如果对象中不存在id
            if (!Object.isExtensible(this)) { //并且可以增加属性
                throw Error("Can't define id for nonextensible objects");
            }
            Object.defineProperty(this, idprop, { //给它一个值
                value: nextid++, //就是这个值
                writable: false, //只读的
                enumerable: false, //不可枚举的
                configurable: false //不可删除的
            });
        }
        return this[idprop]; //返回已有的或新值
    };
    //idGetter()用到了这些变量，这些都属于私有变量
    var idprop = "|*objectId*|"; //假设这个属性没有用到
    var nextid = 1; //给它设置初始值
}()); //立即执行这个包装函数

//创建一个不可变的类，它的属性和方法都是只读的
//这个方法可以使用new调用，也可以省略new，它可以用做构造函数也可以用做工厂函数
function Range(from, to) {
    //这些是对from和to只读属性的描述符
    var props = {
        from: {
            value: from,
            enumerable: true,
            writable: false,
            configuration: false
        },
        to: {
            value: to,
            enumerable: true,
            writable: false,
            configuration: false
        }
    };
    if (this instanceof Range) {
        Object.defineProperties(this, props);
    } else {
        return Object.create(Range.prototype, props);
    }
}
//如果用同样的方法给Range.prototype对象添加属性
//那么我们需要给这些属性设置它们的特性
//因为我们无法识别出它们的可枚举性，可写性或可配置属性，这些属性默认都是false
Object.defineProperties(Range.prototype, {
    includes: {
        value: function (x) {
            return this.from <= x && x <= this.to;
        }
    },
    foreach: {
        value: function (f) {
            for (var x = Math.ceil(this.from); x < this.to; x++) {
                f(x);
            }
        }
    },
    toString: {
        value: function () {
            return "(" + this.from + "..." + this.to + ")";
        }
    }
});
//属性描述符工具函数
//将o的指定名字(或所有)的属性设置为不可写的和不可配置的
function freezeProps(o) {
    var props = (arguments.length == 1) //如果只有一个参数
        ?
        Object.getOwnPropertyNames(o) //使用所有的属性
        :
        Array.prototype.splice.call(arguments, 1); //否则传入了指定名字的属性
    props.forEach(function (n) { //将它们都设置为只读的和不可变的
        if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
        Object.defineProperty(o, n, {
            writable: false,
            configurable: false
        });
    });
    return o;
}
//将o的指定名字(或所有)的属性设置为不可枚举的和可配置的
function hideProps(o) {
    var props = (arguments.length == 1) ?
        Object.getOwnPropertyNames(o) :
        Array.prototype.splice.call(arguments, 1);
    props.forEach(function (n) {
        if (!Object.getOwnPropertyDescriptor(o, n).configurable) return;
        Object.defineProperty(o, n, {
            writable: false,
            configurable: false
        });
    });
    return o;
}

/*一个简单的不可变的类*/
function Range(from, to) {
    this.from = from;
    this.to = to;
    freezeProps(this); //将属性设置为不可变的
}
Range.prototype = hideProps({
    constuctor: Range,
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
});
//将Range类的端点严格封装起来
//这个版本的Range类是可变的，但将端点变量进行了良好的封装
//但端点的大小顺序还是固定的：from<=to
function Range(from, to) {
    //如果from大于to
    if (from > to) throw new Error("Range:from must be <=to");
    //定义存取器方法维持不变
    function getFrom() {
        return from;
    }

    function getTo() {
        return to;
    }

    function setFrom(f) { //设置from的值时，不允许from大于to
        if (f <= to) from = f;
        else throw new Error("Range:from must be <=to");
    }

    function setTo(t) { //设置to的值时，不允许to小于from
        if (t >= from) to = t;
        else throw new Error("Range:to must be >=from");
    }

    //将使用取值器的属性设置为不可枚举的、不可配置的
    Object.defineProperties(this, {
        from: {
            get: getFrom,
            set: setFrom,
            enumerable: true,
            configurable: false
        },
        to: {
            get: getTo,
            set: setTo,
            enumerable: true,
            configurable: false
        }
    });
}
//和前面的例子相比，原型对象没有做任何修改
//实例方法可以像读取普通的属性一样读取from和to
Range.prototype = hideProps({
    constructor: Range,
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
})

Object.seal(Object.prototype);
var original_sort_method = Array.prototype.sort;
Array.prototype.sort = function () {
    var start = new Date();
    original_sort_method.apply(this.arguments);
    var end = new Date();
    console.log("Array sort took" + (end - start) + "milliseconds.");
}

/*利用ECMAScript5的特性定义的子类*/
function StringSet() {
    this.set = Object.create(null); //创建一个不包含原型的对象
    this.n = 0;
    this.add.apply(this, arguments);
}
//注意，使用Object.create()可以继承父类的原型
//而且可以定义单独调用的方法，因此我们没有指定属性的可写性、可枚举性和可配置性
//因此这些属性特性的默认值都是false
//只读方法让这个类难于子类化(被继承)
StringSet.prototype = Object.create(AbstractWriableSet.prototype, {
    constructor: {
        value: StringSet,
    },
    contains: {
        value: function (x) {
            return x in this.set;
        }
    },
    size: {
        value: function (x) {
            return this.n;
        }
    },
    foreach: {
        value: function (f, c) {
            Object.keys(this.set).forEach(f, c);
        }
    },
    add: {
        value: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (!(arguments[i]) in this.set) {
                    this.set[arguments[i]] = true;
                    this.n++
                }
            }
            return this;
        }
    },
    remove: {
        value: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] in this.set) {
                    delete this.set[arguments[i]];
                    this.n--;
                }
            }
            return this;
        }
    }
})
//ECMAScript5属性操作
/*
 * 给Object.prototype定义properties()方法，
 * 这个方法返回一个表示调用它的对象上的属性名列表的对象
 * (如果不带参数调用它，就表示该对象的所有属性)
 * 返回的对象定义了4个有用的方法:toString()、descriptors()、hide()和show()
 */
(function namespace() { //将所有逻辑闭包在一个私有函数作用域中
    //这个函数成为所有对象的方法
    function properties() {
        var names; //属性名组成的数组
        if (arguments.length == 0) {
            names = Object.getOwnPropertyNames(this);
        } else if (arguments.length == 1 && Array.isArray(arguments[0])) {
            names = arguments[0];
        } else {
            names = Array.prototype.splice.call(arguments, 0);
        }
        return new Properties(this, names);
    }

    //将它设置为Object.prototype的新的不可枚举的属性
    //这是从私有函数作用域导出的唯一一个值
    Object.defineProperty(Object.prototype, "properties", {
        value: properties,
        enumerable: false,
        writable: true,
        configurable: true
    });
    //这个构造函数是由上面的properties()函数调用的
    //Properties类表示一个对象的属性集合
    function Properties(o, names) {
        this.o = o;
        this.names = names;
    }

    //将代表这些属性的对象设置为不可枚举的
    Properties.prototype.hide = function () {
        var o = this.o,
            hidden = {
                enumerable: false
            };
        this.names.forEach(function (n) {
            if (o.hasOwnProperty(n)) {
                Object.defineProperty(o, n, hidden);
            }
        })
        return this;
    }
    //强这些属性设置为只读和不可配置的
    Properties.prototype.freeze = function () {
        var o = this.o,
            frozen = {
                writable: false,
                configurable: false
            };
        this.names.forEach(function (n) {
            if (o.hasOwnProperty(n)) {
                Object.defineProperty(o, n, frozen);
            }
        });
        return this;
    };
    //返回一个格式化良好的属性列表
    //列表中包含名字，值和属性特性，使用"permanent"表示不可配置
    //使用"readonly"表示不可写，使用"hidden"表示不可枚举
    //普通的可枚举，可写和可配置属性不包含特性列表
    Properties.prototype.toString = function () {
        var o = this.o;
        var lines = this.name.map(nameToString);
        return "{\n" + lines.join(",\n") + "\n}";

        function nameToString(n) {
            var s = "",
                desc = Object.getOwnPropertyDescriptor(o, n);
            if (!desc) return "nonexistent" + n + ":undefined";
            if (!desc.configurable) s += "permanent";
            if ((desc.get && !desc.set) || !desc.writable) s += "readonly";
            if (!desc.enumerable) s += "hidden";
            if (desc.get || desc.set) {
                s += "accessor" + n;
            } else {
                s += n + ":" + ((typeof desc.value === "function") ? "function" : desc.value);
            }
            return s;
        }
    };
    //最后，将原型对象中的实例方法设置为不可枚举的
    //这里用到了刚定义的方法
    Properties.prototype.properties().hide();
}()); //立即执行这个匿名函数
var sets = {};
//sets.SingletonSet=sets.AbstractEnumerableSet.extend(...);
var s = new sets.SinglelettonSet(1);

var Set = sets.Set, //将Set导入到全局命名空间中
    var s = new Set(1, 2, 3); //这样每次使用它就不必加Set前缀了

var collections;
if (!collections) {
    collections = {};
}
collections.sets = {}
//在collections.sets内定义set类
collections.sets.AbstractSet = function () {

}
/*
 *声明全局变量Set，使用一个函数的返回值给它赋值
 *函数结束时紧跟的一个圆括号说明这个函数定义后立即执行
 *它的返回值将赋值给Set，而不是将这个函数赋值给Set
 *注意它是一个函数表达式，不是一条语句，因此函数"invocation"并没有创建全局变量
 */
var Set = (function invocation() {
    function Set() { //这个构造函数是局部变量
        this.values = {}; //这个对象的属性用来保存这个集合
        this.n = 0; //集合中值的个数
        this.add.apply(this.arguments); //将所有的参数都添加至集合中
    }
    //给Set.prototype定义实例方法
    //这里省略了详细代码
    Set.prototype.contains = function (value) {
        //注意我们调用了v2s()，而不是调用带有笨重的前缀set._v2s()
        return this.values.hasOwnProperty(v2s(value));
    }
    Set.prototype.size = function () {
        return this.n;
    };
    Set.prototype.add = function () {
        /**/
    };
    Set.prototype.remove = function () {
        /**/
    };
    Set.prototype.foreach = function (f, context) {
        /**/
    };
    //这里是上面的方法用到的一些辅助函数和变量
    //它们不属于模块的共有API，但它们都隐藏在这个函数的作用域内
    //因此我们不必将他们定义为Set的属性或使用下划线作为其前缀
    function v2s(val) {
        /**/
    }

    function objectId(o) {
        /**/
    }
    var nextId = 1;
    //这个模块的共有API是Set()构造函数
    //我们需要把这个函数从私有命名空间导出来
    //以便在外部也可以使用它，在这种情况下，我们通过返回这个构造函数来导出它
    //它变成第一行代码所指的表达式的值
    return Set;
}()); //定义函数后立即执行
//创建一个全局变量用来存放集合相关的模块
var collections;
if (!collections) {
    collections = {};
}
//定义Sets模块
collections.sets = (function namespace() {
    //在这里定义多种"集合"类，使用局部变量和函数
    //这里省略很多代码
    //通过返回命名空间对象将API导出
    return {
        //导出的属性名：局部变量名字
        AbstractSet: AbstractSet,
        NotSet: NotSet,
        AbstractEnumerableSet: AbstractEnumerableSet,
        SingletonSet: SingletonSet,
        AbstractWritableSet: AbstractWritableSet,
        ArraySet: ArraySet
    };
}());

var collections;
if (!collections) collections = {};
collections.sets = (new function namespace() {
    //省略代码
    //将API导出至this对象
    this.AbstractSet = AbstractSet;
    this.NotSet = NotSet;
}());

var collections;
if (!collections) collections = {};
collections.sets = {};
(function namespace() {
    //省略很多代码
    //将共有API导出到上面创建的命名空间对象
    collections.sets.AbstractSet = AbstractSet;
    collections.sets.NotSet = NotSet;
    //导出的操作已经执行了，这里不需要再写return语句了
}());
//全局的this(浏览器)
console.log(this.document === document); //true
console.log(this === window); //true
this.a = 37;
console.log(window.a);

//一般函数的this(浏览器)
function f1() {
    return this;
}
f1() === window; //true,global object

function f2() {
    "use strict";
    return this;
}
f2() === undefined; //true

//作为对象方法的函数的this
//通过对象字面量
var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};
console.log(o.f()); //logs 37

var o = {
    prop: 37
};

function independent() {
    return this.prop;
}
o.f = independent;
console.log(o.f());

//对象原型链上的this
var o = {
    f: function () {
        return this.a + this.b;
    }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;
console.log(p.f());

//get,set方法的this会指向get,set方法所在的对象
function modulus() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
}
var o = {
    re: 1,
    im: -1,
    get phase() {
        return Math.atan2(this.im, this.re);
    }
};
Object.defineProperty(o, "modulus", {
    get: modulus,
    enumerable: true,
    configurable: true
});
console.log(o.phase, o.modulus);

//构造器中的this
//this指向空对象，并且这个对象的原型是MyClass.prototype
function MyClass() {
    this.a = 37;
}
var o = new MyClass();
console.log(o.a);
//this指的是return返回的对象
function C2() {
    this.a = 37;
    return {
        a: 38
    }
}
o = new C2();
console.log(o.a);

//call和apply方法与this
function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {
    a: 1,
    b: 3
};
add.call(o, 5, 7); //1+3+5+7=16;
add.apply(o, [10, 20]); //1+3+10+20;

function bar() {
    console.log(Object.prototype.toString.call(this));
}
bar.call(7);

//bind方法与this
function f() {
    return this.a;
}

var g = f.bind({
    a: "test"
});
console.log(g()); //test

var o = {
    a: 37,
    f: f,
    g: g
};
console.log(o.f(), o.g()); //37,test
