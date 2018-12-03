//在JavsScript 1.5及后续版本中可以使用const关键字来定义常量。
//常量可以看成不可重复赋值的变量(对常量重新赋值会失败但不会报错)，对常量的重复声明会报错

const pi = 3.14; //定义一个常量并赋值
pi = 4; //任何对这个常量的重新赋值都会被忽略
const pi = 4; //重新声明常量会报错
var pi = 4;
//这里也会报错

//关键字const和关键字var的行为非常相似
//由于JavaScript中没有块级作用域，因此常量会被提前至函数定义的顶部

//关键字let并不是保留字，JavaScript1.7及以后的版本才能识别，需要手动加入版本号才可以。

//在Firefox中，则可以在Script标签中指定语言的扩展版本，就像这样

<
script type = "application/javascript;version=1.8" > < /script>

/*
*关键字let有4种使用方式
1)可以作为变量声明，和var一样
2)在for或for/in循环中，作为var的替代方案
3)在语句块中定义一个新变量并显式指定它的作用域
4)定义一个在表达式内部作用域中的变量，这个变量只在表达式内使用
*/

//使用let最简单的方式就是批量替换程序中的var。通过var声明的变量在函数内部都是可用的，
//而通过let声明的变量则属于就近的花括号括起来的语句块(当然包括它所嵌套的语句块)。
//比如，如果在循环体内使用let声明变量，那么这个变量在循环体之外是不可用的
function oddsums(n) {
    let total = 0;
    result = []; //在函数内都是有定义的
    for (let x = 1; x <= n; x++) { //x只在循环体内有定义
        let odd = 2 * x - 1; //odd只在循环体内有定义
        total += odd;
        result.push(total);
    }
    //这里使用x或odd会导致一个引用错误
    return result;
}
oddsums(5);

<
script type = "application/javascript;version=1.8" > < /script >

/*
 *关键字let有4种使用方式
 1)可以作为变量声明，和var一样
 2)在for或for/in循环中，作为var的替代方案
 3)在语句块中定义一个新变量并显式指定它的作用域
 4)定义一个在表达式内部作用域中的变量，这个变量只在表达式内使用
 */

o = {
    x: 1,
    y: 2
};
for (let p in o) {
    console.log(p);
};
for each(let v in o) {
    console.log(v);
}
console.log(p);

let x = 1;
for (let x = x + 1; x < 5; x++) {
    console.log(x); //输出2-4
}

{
    let x = x + 1;
    console.log(x);
}

let x = 1,
    y = 2;
let (x = x + 1, y = x + 2) {
    console.log(x + y); //输出5
}

console.log(x + y); //输出3

let x = 1,
    y = 2;
console.log(let (x = x + 1, y = x + 2) x + y); //输出5

/*解构赋值*/
let [x, y] = [1, 2]; //等价于let x=1,y=2
[x, y] = [x + 1, y + 1]; //等价于x=x+1,y=y+1
[x, y] = [y, x]; //交换两个变量的值
console.log([x, y]); //输出[3,2]

//将[x,y]从笛卡尔(直角)坐标转换为[r,theta]极坐标
function polar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
//将极坐标转换为笛卡尔坐标
function cartesian(r, theta) {
    return [r.Math.cos(theta), r.Math.sin(theta)];
}

let [r, theta] = polar(1.0, 1.0); //r=Math.sqrt(2),theta=Math.PI/4
let [x, y] = cartesian(r, theta); //x=1.0,y=1.0

//解构赋值右侧的数组所包含的元素不必和左侧的变量一一对应，左侧多余的变量的赋值
//为undefined,而右侧多余的值则会忽略。左侧的变量列表可以包含连续的逗号用以跳过右侧对应的值
let [x, y] = [1] //x=1,y=undefined
[x, y] = [1, 2, 3]; //x=1,y=2
[, x, , y] = [1, 2, 3, 4]; //x=2,y=4

let first, second, all;
all = [first, second] = [1, 2, 3, 4]; //first=1,second=2,all=[1,2,3,4];

let [one, [twoA, twoB]] = [1, [2, 2.5], 3]; //one=1,twoA=2,twoB=2.5

let transparent = {
    r: 1.0,
    g: 0.0,
    a: 1.0
}; //一个用RGBA值表示的颜色
let {
    r: red,
    g: green,
    b: blue
} = transparent; //red=0.0,green=0.0,blue=1.0

//等价于let sin=Math.sin,cos=Math.cos,tan=Math.tan
let {
    sin: sin,
    cos: cos,
    tan: tan
} = Math;

//一个嵌套的数据结构：一个对象中包含数组，数组中又包含对象
let data = {
    name: "destructuring assignment",
    type: "extension",
    impl: [{
            engine: "spidermonkey",
            version: 1.7
        },
        {
            engine: "rhino",
            version: 1.7
        }
    ]
};

//使用解构赋值从数据结构中提取4个值
let ({
        name: feature
    }, [{
        engine: impl1,
        version: v1
    }, {
        engine: impl2
    }]
}) = data) {
    console.log(feature);
    console.log(impl1);
    console.log(v1);
    console.log(impl2);
}

//for/each并不是遍历对象的属性，而是遍历属性的值
//对象
let o = {
    one: 1,
    two: 2,
    three: 3
}

for (let p in o) console.log(p);

for each(let in o) console.log(v);

//数组
a = ['one', 'two', 'three'];
for (let p in a) console.log(p);
for each(let v in a) console.log(v);

//迭代器必须包含next()方法
function counter(start) {
    let nextValue = Math.round(start); //表示迭代器的一个私有状态
    return {
        next: function () {
            return nextValue++; //返回迭代器对象
        }
    }
}
let serialNumberGenerator = counter(1000);
let sn1 = serialNumberGenerator.next(); //1000
let sn2 = serialNumberGenerator.next(); //1001

//这个函数返回了一个迭代器，它可以迭代某个范围内的整数
function rangeIter(first, last) {
    let nextValue = Math.ceil(first);
    return {
        next: function () {
            if (nextValue > last) throw StopIteration;
            return nextValue++;
        }
    };
}

//使用这个范围迭代器实现的一次糟糕的迭代
let r = rangeIter(1, 5); //获得迭代器对象
while (true) { //在循环中使用它
    try {
        console.log(r.next()); //调用next方法
    } catch (e) {
        if (e == StopIteration) break; //抛出StopIteration时退出顺序
        else throw e;
    }
}
//可迭代对象表示一组可迭代处理的值。可迭代对象必须定义一个名叫_iterator_()的方法(开始和结尾有两条下划线)，
//可以返回这个集合的迭代器对象。

function range(min, max) {
    return { //返回一个表示这个范围的对象
        get min() {
            return min; //范围边界是固定的
        },
        get max() {
            return max; //并在闭包内保存起来
        },
        includes: function (x) {
            return min <= x && x <= max; //检测成员是否属于这个范围
        },
        toString: function () {
            return "[" + min + "," + max + "]"; //以字符串形式输出这个范围
        },
        _iterator_: function () {
            let val = Math.ceil(min); //将当前位置保存在闭包中
            return { //范围内的整数都是可迭代的
                next: function () { //范围范围内的下一个值
                    if (val > max) { //如果到达结尾就停止
                        throw StopIteration;
                    }
                    return val++; //否则返回下一个值，并自增1
                }
            }
        }
    }
}
//这里我们对这个区间中的值进行迭代
for (let i in range(1, 10)) {
    console.log(i); //输出1-10之间的数字
}

for (let [k, v] in Iterator({
        a: 1,
        b: 2
    })) { //对属性和值作迭代
    console.log(k + "=" + v); //输出"a=1"和"b=2"
}

//Iterator()函数返回的迭代器还有两个重要的特性。第一，它只对自有属性进行遍历而忽略继承的属性，通常我们希望是这个样子。
//第二，如果给Iterator()传入第二个参数true，返回的迭代器只对属性名进行遍历，而忽略其值

o = {
    x: 1,
    y: 2
}; //定义一个对象，它有两个属性
Object.prototype.z = 3; //所有的对象都继承了z
for (p in o) console.log(p); //输出"x","y"和"z"
for (p in Iterator(o, true)) console.log(p); //只输出"x"和"y"

/*生成器是JavaScript1.7中的特性,这里用到了一个新的关键字yield,使用这个关键字时代码必须显示指定
JavaScript的版本1.7.关键字yield在函数内使用，用法和return类似,返回函数中的一个值
yiled和return的区别在于,在于yield的函数"产生"一个可保持函数内部状态的值，这个值是
可以恢复的.这种可恢复性使得yield成为编写迭代器的有力工具.生成器是一种强大的语言特性
但它初次理解起来可能有些困难. */

//针对一个整数范围定义一个生成器函数
function range(min, max) {
    for (let i = Math.ceil(min); i <= max; i++) yield i;
}
//调用这个生成器函数以获得一个生成器，并对它进行遍历
for (let n in range(3, 8)) console.log(n); //输出数字3~8

//一个用以产生一个Fibonacci数列的生成器函数
function fibonacci() {
    let x = 0,
        y = 1;
    while (true) {
        yield y;
        [x, y] = [y, x + y];
    }
}
//调用生成器函数以获得一个生成器
f = fibonacci();
//将生成器当做迭代器，输出Fibonacci数列的前10个数
for (let i = 0; i < 10; i++) {
    console.log(f.next());
}

//一个生成器管道
//一个生成器，每次产生一行字符串
//这里没有使用s.split()，因为这样会每次都处理整个字串，并分配一个数组
//我们希望能更"懒"一些
function eachline(s) {
    let p;
    while ((p = s.indexOf("\n")) != -1) {
        yield s.substring(0, p);
        s = s.substring(p + 1);
    }
    if (s.length > 0) {
        yield s;
    }
}

//一个生成器函数，对于每个可迭代的i的每个元素，都会产生一个f(x)
function map(i, f) {
    for (let x in i) {
        yield f(x);
    }
}

//一个生成器函数，针对每个结果为true的f(x)，为i生成一个元素
function select(i, f) {
    for (let x in i) {
        if (f(x)) yield i;
    }
}

//准备处理这个字符串
let text = "#content \n \n hello \nworld \n quit \n unreached \n";

//现在创建一个生成器管道来处理它
//首先，将文本分隔成行
let lines = eachline(text);
//然后，去掉行首和行尾的空格
let trimmed = map(lines, function (line) {
    return line.trim();
});
//最后，忽略空行和注释
let nonblank = select(trimmed, function (line) {
    return line.length > 0 && lines[0] != "#"
});

//现在从管道中取出经过删减和筛选后的行对其进行处理
//直到遇到"quit"的行
for (let line in nonblank) {
    if (line === "quit") break;
    console.log(line);
}

//一个生成器函数，用以从某个初始值开始计数
//调用生成器send()来进行增量计算
//调用生成器throw("reset")来重置初始值
//这里的代码只是示例，throw()的这种方法并不推荐
function counter(initial) {
    let nextValue = initial; //定义初始值
    while (true) {
        try {
            let increment = yield nextValue; //产生一个值并得到增量
            if (increment) { //如果我们传入一个增量
                nextValue += increment; //那么使用它
            } else {
                nextValue++; //否则自增1
            }
        } catch (e) { //如果调用了生成器的throw(),则执行这里的逻辑
            if (e === "reset") {
                nextValue = initial;
            } else {
                throw e;
            }
        }
    }
}
let c = counter(10); //用10来创建生成器
console.log(c.next()); //输出10
console.log(c.send(2)); //输出12
console.log(c.throw("reset")); //输出10

let evensquares = [x * x
    for (x in range(0, 10))
        if (x % 2 === 0)
];
//上面代码和下面的一致
let evensquares = [];
for (x in range(0, 10)) {
    if (x % 2 === 0) {
        evensquares.push(x * x);
    }
}

//一般来讲，数组推导的语法如下
[expression
    for (variable in object)
        if (condition)
]

//下面是一些具体的例子
data = [2, 3, 4, -5];
squares = [x * x
    for each(x in data)
];
//如果数组元素是非负数，求它的平方根
roots = [Math.sqrt(x) for each(x in data) if (x >= 0)]

//将一个对象的属性名放入新创建的数组中
o = {
    a: 1,
    b: 2,
    f: function () {}
}

let allkeys = [p
    for (p in o)
]
let ownkeys = [p
    for (p in o)
        if (o.hasOwnProperty(p))
]
let notfuncs = [k
    for ([k, v] in Iterator(o))
        if (typeof v !== "function")
]

//使用生成器表达式而不用数组也有不足之处，生成器只支持对值的顺序存取而不是随机存取。
//和数组不同，生成器并没有索引，为了得到第n个值，必须遍历它之前的n-1个值

function map(i, f) {
    for (let x in i) yiled f(x);
}

//使用生成器表达式
let h = (f(x) for (x in g))

//使用生成器对eachline()重写
let lines = eachline(text);
let trimmed = (l.trim() for (l in lines));
let nonblank = (l
    for (l in trimmed)
        if (l.length > 0) && l[0] != '#');

/*javascript1.8引入了一种简写形式：表达式闭包。如果函数只计算一个表达式
并返回它的值，关键字return和花括号都可以省略，并将待计算的表达式接着放在
参数列表之后*/
let succ = function (x) x + 1,
    yes = function () true,
    no = function () false;

//对数组按照数字大小顺序进行降序排列
data.sort(function (a, b) b - a);
//定义一个函数，用以返回数组元素的平方和
let sumOfSquares = function (data) {
    Array.reduce(Array.map(DataCue, function (x) x * x), function (x, y) x + y);
}

//多catch从句
try {
    //这里可能会抛出多种类型的异常
    throw 1;
} catch (e
    if e instanceof ReferenceError) {
    //这里处理引用错误
} catch (e
    if e === "quit") {
    //这里处理抛出的字符串是"quit"的情况
} catch (e
    if typeof e === "string") {
    //处理其他字符串的情况
} catch (e) {
    //处理余下的异常情况
} finally {
    //finally从句正常执行
}

//除了函数之外所有标准的JavaScript对象的typeof运算结果都是"object"
//对XML对象执行typeof运算的结果是"xml"
//XML对象和DOM(文档对象模型)对象没有任何关系

//可以在JavaScript代码中直接书写XML标签直接量
//创建一个XML对象
var pt = < periodictable >
    <
    element id = "1" > < name > Hydrogen < /name></element >
    <
    element id = "2" > < name > Helium < /name></element >
    <
    element id = "3" > < name > Lithium < /name></element >
    <
    /periodictable>

//给这个表格添加一个新元素
pt.element += < element id = "4" > < name > Beryllium < /name></element > ;

//XML直接量语法中使用花括号作为转义字符，可以在XML中嵌入JavaScript表达式。
pt = < periodictable > < /periodictable>/ / 创建一个空表格
var element = ["Hydrogen", "Helium", "Lithium"]; //带添加的元素
//使用数组元素创建XML标签
for (var n = 0; n < elements.length; n++) {
    pt.element += < element id = {
        n + 1
    } > < name > {
        elements[n]
    } < /name></element >
}
//除了使用直接量语法，我们也可以将字符串解析成XML
pt.element += new XML('<element id="5"><name>Boron</name></element>');

//当涉及XML片段的时候，使用XMLList()替换XML()
pt.element += new XMLList = ('<element id="6"><name>Carbon</name></element>' + '<element id="7"><name>Nitrogen</name></element>');

//E4X提供了一些语法用以访问所创建的XML文档的内容
var elements = pt.element; //得到所有<element>标签组成的一个列表
var names = pt.element.name; //得到所有的<name>标签的一个列表
var n = names[0]; //"Hydrogen",name的第0个标签的内容

//点点(..)运算符是"后代运算符"，可以用它替换普通的店(.)成员访问运算符
//另一种得到所有<name>标签对应列表的方法
var names2 = pt..name;

//E4X甚至定义了通配符运算
//得到所有<element>标签的所有子节点
//这也是得到所有<name>标签对应列表的另外一种方法
var names3 = pt.element.*;


//E4X中使用@来区分属性名和标签名,比如可以这样来获得一个属性
var atomicNumber = pt.element[1].@id;

//可以使用通配符来获得属性名@*:
var atomicNums = pt.element.@ * ;

//E4X甚至包含了一种强大且极其简洁的语法用来对列表进行过滤，过滤条件可以是任意谓词表达式
//对所有的<element>元素组成的一个列表进行过滤
//过滤出那些id属性小于3的元素
var lightElements = pt.element.(@id < 3);

//对所有的element元素组成的列表进行过滤
//过滤出那些name以B开始的元素
//然后得到过滤后的元素的<name>标签列表
var bElementNames = pt.element.(name.charAt(0) == 'B').name;

//for/in循环用以遍历对象的属性名,for/each循环用以遍历对象的属性值
//输出元素周期表中的每个元素名
for each(var e in pt.element) {
    console.log(e.name);
}
//输出每个元素的原子序数
for each(var n in pt.element.@ * ) {
        console.log(n);
    }

    //修改氢元素的<element>标签，给它添加一个新属性
    //像下面这样添加一个子元素

    <
    element id = "1"
symbol = "H" >
    <
    name > Hydrogen < /name> <
    weight > 1.00794 < /weight> <
    /element>

pt.element[0].@symbol = "H";
pt.element[0].weight = 1.00794;

//通过标准的delete运算符也可以方便地删除属性和标签
delete pt.element[0].@symbol; //删除一个属性
delete pt..weight; //删除所有的<widget>标签

//E4X同样定义了能够调用XML对象的方法，如:insertChildBefore()方法
pt.insertChildBefore(pt.element[1], < element id = "1" > < name > Deuterium < /name></element > );

//E4X中是完全支持命名空间的，它为使用XML命名空间提供了语法支持和API支持
//声明默认的命名空间
default xml namespace = "http://www.w3.org/1999/xhtml";
//这里也是一个包含一些svg标签的xhtml文档
d = < html >
    <
    body >
    This is a small red square:
    <
    svg xmlns = "http://www.w3.org/2000/svg"
width = "10"
height = "10" >
    <
    rect x = "0"
y = "0"
width = "10"
height = "10"
fill = "red" / >
    <
    /svg> <
    /body> <
    /html>

//body元素和它的命名空间里的uri及其localName
var tagname = d.body.name();
var bodyns = tagname.uri;
var localname = tagname.localName;

//选择<svg>元素需要多做一些工作，因为<svg>不在默认的命名空间中
//因此需要为svg创建一个命名空间，并使用::运算符将命名空间添加至标签名中
var svg = new Namespace("http://www.w3.org/2000/svg");
var color = d..svg::rect.@fill //red