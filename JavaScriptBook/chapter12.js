//Rhino的全局函数
print(x);//全局输出函数，将内容输出到控制台
version(170);//告诉Rhino需要使用JS1.7的语言特性
load(filename,...);//加载并执行1个或多个JavaScript代码文件
readFile(file);//读取文本文件，并以字符串的形式返回内容
readUrl(url);//读取URL的原文内容，并以字符串的形式返回内容
spawn(f);//运行f()或者在一个新线程中加载执行文件f
runCommand(CSSMediaRule,[args...]);//使用0或多个命令行参数来运行系统命令
quit();//退出Rhino

//注意print()函数，在本节我们将用它取代console.log().Rhino会将Java包和类表示成JavaScript对象

//全局变量packages是Java包层次结构的根
Packages.any.package.name//任何来自Java CLASSPATH的包
java.lang//全局变量java是Packages.java的短名
javax.swing//javax是Packages.javax的短名

//由于Rhino把包和类表示为JavaScript对象，因此可以将它们赋值给变量从而得到相应的短名。
//如果愿意，也可以用更正式的方式导入它们:
var ArrayList=java.util.ArrayList;//为类创建短名
importClass(java.util.HashMap);//其等同于:var HashMap=java.util.HashMap

//使用importPackage()导入包(惰性地)
//不要导入java.lang:太多的名字和JavaScript全局变量有冲突
importPackage(java.util);
importPackage(java.net);
//另一技术:传入任意数量的类和包给JavaImporter()
//并在with语句中使用它返回的对象
var guipkgs=JavaImporter(java.awt,java.awt.event,Packages.javax.swing);
with(guipkgs){
    //这里定义Font、ActionListener和JFrame等类
}

//Java类能使用new进行实例化，就想JavaScript类一样:
//对象:使用new实例化Java类
var f=new java.io.File("/tmp/test");//我们随后将使用这些对象
var out=new java.io.FileWriter(f);

//Rhion让JavaScript中的instanceof运算符能用于Java对象和类
f instanceof java.io.File //=>true
out instanceof java.io.Reader //=>false:它是Writer而非Reader
out instanceof java.io.Closeable //=>true:Writer实现Closeable

//静态Java方法工作类似JavaScript函数
java.lang.System.getProperty("java.version");//返回Java版本
var isDigit=java.lang.Character.isDigit;//把静态方法赋值给变量
isDigit("2");//=>true:阿拉伯数字2

//调用Java对象f的实例方法，out已经在前面创建
out.write("Hello World\n");
out.close();
var len=f.length();

//Rhino也允许JavaScript代码查询、设置Java类的静态字段和Java对象的实例字段。
//Java类通常利用getter和setter方法避免定义公共字段。当getter和setter方法存在时，Rhino将其
//显示为JavaScript的属性

var stdout=java.lang.System.out;
//Rhino把getter和setter方法映射到单个JavaScript属性
f.name //=>"/tmp/test":调用f.getName()
f.directory //=>false:调用f.isDirectory()

//Java允许重载方法，它们名字相同但签名不同。一般，Rhino能根据传递的参数类型判断
//出所要调用方法的版本。不过偶尔也需要通过名字和签名来明确识别方法:
//假设Java对象o中有一个名为f()的方法，它接受int或float参数
//在JavaScript中，必须明确执行签名
o['f(int)'](3);//调用int方法
o['f(float)'](Math.PI);//调用float方法

//使用for/in循环能遍历Java类和对象的方法、字段和属性
importClass(java.lang.System);
for(var m in System) print(m);//输出java.lang.System的静态成员
for(m in f) print(m);//输出java.io.File的实例成员

//注意不能用这种方法枚举包中的类
for(c in java.lang) print(c);//无法工作

//Rhino允许JavaScript程序获取、设置Java数组的元素，就像它们是JavaScript数组那样
//当然，Java数组和JavaScript数组并不完全一致:Java数组长度固定、元素类型统一，但
//不具备像slice()这样的JavaScript方法。由于没有现成的JavaScript语法可供Rhino扩展
//JavaScript程序从而创建新的Java数组，因此必须使用java.lang.reflect.Array类来实现:
//分别创建一个长度为10的字符串数组和一个长度为128字节的数组
var words=java.lang.reflect.Array.newInstance(java.lang.String,10);
var bytes=java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE,128);
//一旦创建了数组，就可以像JavaScript数组样使用它们
for(var i=0;i<bytes.length;i++){
    bytes[i]=i;
}

//java编程经常涉及实现接口，这在GUI编程中很常见，每个事件处理程序都必须实现事件监听接口，接下来的例子演示如何实现Java事件监听接口
//接口:如下所示实现接口
var handler=new java.awt.event.FocusListener({
    focusGained:function(e){
        print("got focus");
    },
    focusLost:function(e){
        print("lost focus");
    }
});
//用同样的方式扩展抽象类
var handler=new java.awt.event.WindowAdapter({
    windowClosing:function(e){
        java.lang.System.exit(o);
    }
});
//当接口只有一个方法，可以使用一个函数取而代之
GamepadButton.addActionListener(function(e){
    print("button clicked");
});

//如果接口或抽象类的所有方法都有相同的签名
//则可以使用一个单独的函数作为接口的实现
//且Rhino将把方法名作为最后一个参数传入
frame.addWindowListemer(function(e,name){
    if(name==="windowClosing") java.lang.System.exit(o);
});

//如果需要一个对象实现多重接口，则使用JavaAdapter
var o=new JavaAdapter(java.awt.event.ActionListener,java.lang.Runnable,{
    run:function(){
        //实现Runnable
    },
    actionPerformed:function(e){
        //实现ActionListener
    }
})

//当Java方法抛出异常，Rhino将其作为JavaScript异常传递。通过JavaScript错误对象的
//javaException属性可以获取原始的Java.java.lang.Exception对象:
try{
    java.lang.System.getProperty(null);//null不是合法的参数
}catch(e){//e是JavaScript异常
    print(e.javaException);//它包含一个java.lang.NullPointException异常
}


