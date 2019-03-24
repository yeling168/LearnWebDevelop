2.1.2  JSX语法

1.基本语法

JSX的基本语法和XML语法相同，都是使用成对的标签构成一个树状结构的数据

	const element={
	    <div>
	       <hl ＞hel lo, world ! </hl>
	    </div>
	}


2.标签类型

在JSX语法中，使用的标签类型有两种:DOM类型的标签(div,span等)和React组件的标签。当使用DOM类型的标签时，标签的首字母必须小写；当使用React组件类型的标签时，组件名称的首字母必须大写。React正是通过首字母的大小写判断渲染是一个DOM类型的标签还是一个React组件类型的标签，例如:

//DOM类型的标签

    const element=<h1>Hello,world!</h1>;

//React组件类型标签

    const element=</HelloWorld/>;

//二者可以互相嵌套使用

	const element=(
		<div>
	       <HelloWorld/>
	    </div>
	)

3.JavaScript表达式

在JSX中使用JavaScript表达式需要将表达式用大括号{}包起来。表达式在JSX中的使用场景主要有两个:通过表达式给标签属性赋值和通过表达式定义子组件。

//通过表达式给标签属性赋值

    const element=<MyComponent foo={1+2}/>

//通过表达式定义子组件(map虽然是函数，但它返回值是JavaScript表达式)

    const todos=['item1','item2','item3'];



	const element=(
	   <ul>
	      {todos.map(message=><Item key={message} message={message}/>)}
	   </ul>
	)

注意，JSX中只能使用JavaScript表达式，而不能使用多行JavaScript语句。

不过，JSX中可以使用三目运算符与(&&)运算符代替if语句的作用。

4.标签属性

当JSX标签是DOM类型的标签时，对应DOM标签支持的属性JSX也支持，例如:id、class、style、onclick等。但是，部分属性的名称会有所改变，主要的变化有:class要写成className，事件属性名采用驼峰格式，例如:onclick要写成onClick。原因是，class是JavaScript的关键字，所以改成className；React对DOM标签支持的事件重新做了封装，封装时采用了更常用的驼峰命名法命名事件。例如:

    <div id= ’ content ’ className= ’ foo ’ onClick= { () => {console . log ( ’ Hello,React ’) }}/>

当JSX标签是React组件类型时，可以任意自定义标签的属性名。例如:

    <User name= ’ React ’ age= ’ 4 ’ address = ’ America ’ >

2.1.3  JSX不是必需的

JSX语法对使用React来说并不是必需的，实际上，JSX语法只是React.createElement( component, props, ... children ）的语法糖

//JSX语法

    const element=<div className='foo'>Hello,React</div>

//转换后

    const element=React.createElement('div',{className:'foo'},'Hello React')

