##vue的git地址:

[https://github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue)

[https://github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue)

##分享指南：

1.渐进式框架Vue

2.vue中的两个核心点

3.虚拟DOM

4.MVVM模式

5.Vue实例

6.声明式渲染

7.指令

8.模板


##Vue是什么

构建用户界面的渐进式框架

渐进式：

声明式渲染--->组件系统--->客户端路由--->大规模状态管理--->构建工具

只关注视图层


##vue中的两个核心

1)响应的数据绑定

当数据发生改变-->自动更新视图

利用Object.definedProperty中的setter/getter代理数据，监控对数据的操作

2)组合的视图组件

UI页面映射为组件树

划分组件可维护，可重用，可测试

##虚拟DOM

运行js的速度是很快的，大量的操作DOM就会很慢。时常在更新数据后会重新渲染页面，这样造成在没有改变数据的地方也重新渲染了DOM节点，这样就造成了很大程度上的资源浪费。

利用在内存中生成与真实DOM与之对应的数据结构，这个在内存中生成的结构称之为虚拟DOM。

当数据发生变化时，能够智能地计算出重新渲染组件的最小代价并应用到DOM操作上。

##MVVM模式

M：Model数据模型

V:view 视图模板

vm:view-Model 视图模型

##学习提纲

###基础语法

vue实例  模板语法
计算属性 class和style绑定
条件和列表渲染  事件处理器
表单控件绑定 组件

###高级进阶
vue插件别写  mixin混合
过渡效果 自定义指令
vue-router:路由系统的使用 vueX:状态管理器

###构建工具

nodejs：JavaScript运行环境  webpack:模块管理和打包工具
vue-cli:脚手架配置


##vue实例
###vue实例
每一个应用都是通过Vue这个构造函数创建根实例(root instance)启动

new Vue(选项对象)

需要传入选项对象，对象包含挂载元素，数据，模板，方法等。

el:挂载元素选择器 String|HtmlElement

data:代理数据  Objec|Function

methods:定义方法 Object

###vue代理data数据

每个Vue实例都会代理其data对象里所有的属性，这些被代理的属性是响应的。**新添加的属性不具备响应功能，改变后不会更新视图。**

###实例自身属性和方法

暴露自身属性和方法

暴露自身的属性和方法:以$开头，例如$el  $data

##声明式渲染

###声明式

只需要声明在哪里(where)做什么(what),而无需关心如何实现(how)

###命令式

需要以具体代码表达在哪里(where)做什么(what)，如何实现(how)

例子:求数组中每一项的倍数

命令式:使用for循环拿出每一项，然后求知完成后，再放入到另一数组中

声明式:使用map方法，关注如何求知

###vue声明式渲染

初始化根实例，vue自动将数据绑定在DOM模板上

##指令

指令是一种特殊的自定义行间属性

指令的职责就是当其表达式的值改变时相应地将某些行为应用到DOM上

在Vue中，指令以v-开头

学习地址:[https://cn.vuejs.org/v2/api/#v-text](https://cn.vuejs.org/v2/api/#v-text)

##内置指令

v-bind:动态更新的绑定数据，简写为:

v-on:绑定事件监听器。简写为@

v-text:更新数据，会覆盖已有结构

v-html:可以解析数据中的html结构

v-show:根据值得真假，切换元素的display属性

v-if:根据值得真假，切换元素会被销毁，重建

v-else-if:多条件判断，为真则渲染

v-else:条件都不符合渲染

v-for:基于源数据多次渲染元素或模板块

v-model:在表单控件元素上创建双向数据绑定

v-pre:跳过元素和子元素的编译过程

v-once:只渲染一次，随后数据更新不重新渲染

v-cloak:隐藏未编译的Mustache语法，css中设置[v-cloak]:display:none


##html模板

html模板:基于DOM的模板，模板都是可解析的有效的HTML

插值:

文本:使用"Mustache"语法(双大括号){{value}}

作用:替换实例上的属性值，当值改变时，插值内容会自动更新

原生的html:双大括号输出的是文本，不会解析html

属性:使用v-bind进行绑定，可以响应变化

使用JavaScript表达式:写简单的表达式

##字符串模板

###template字符串

template选项对象的属性

模板将会替换挂载的元素，挂载元素的内容都将被忽略

根节点只能有一个

将html结构写在一对script标签中，设置type="x-template"

##模板-render函数

###render函数

render选项对象的属性

createElement(标签名,[数据对象],子元素)

子元素为文本或数组

###数据对象属性

class:{},绑定class，和'v-bind:class'一样的API

style:{},绑定样式，和'v-bind:style'一样的API

attrs:{},添加行间属性

domProps:{},DOM元素属性

on:{}绑定事件

nativeOn:{},监听原生事件

directives:{},自定义指令

scopedSlots:{},slot作用域

slot:{},定义slot名称

key:"key"，给元素添加唯一标示

ref:"ref" 引用信息

##列表渲染

###v-for指令

根据一组数组的选项列表进行渲染

语法:

value,key in items

value,key of items

###变异方法

vue提供一组方法，对数组进行操作的时候，会触发视图更新

push(),pop(),shift(),unshift(),splice(),sort(),reverse()

##事件处理器

###v-on指令

用来监听DOM事件触发代码

语法:v-on:eventName="eventHandle"

指令简写:@

事件处理函数:写在methods中统一管理

事件对象:在事件处理函数中获取，内联事件处理函数执行，传入事件对象$event

事件修饰符:事件处理函数只有纯粹的逻辑判断，不处理DOM事件的细节，例如:阻止冒泡，取消默认行为，判断按键


##事件修饰符

###事件修饰符

事件处理函数只有纯粹的逻辑判断，不处理DOM事件的细节，例如:阻止冒泡，取消默认行为，判断按键

修饰符的位置:v-on:eventName.修饰符

修饰符:.stop,.pevent,.capture,.self,.once

按键修饰符:.enter,.tab,.delete,.esc,.space,.up,.down,.left,.right,.ctrl,.alt,.shift,.meta,.键值

##条件渲染

###v-show

根据表达式的值，用来显示/隐藏元素

语法:v-show="表达式"

元素会被渲染在页面中，只根据表达式的值进行css切换

##动态class

###动态绑定class

class也为元素的属性，可以使用v-bind:class

语法:

：clsss="{className:表达式}"

表达式为true，添加className

表达式为false不添加className

:class="[className,classname]"

##自定义指令

###自定义指令

除了vue内置的指令，可以自己设置指令

选项对象的directives属性

{
   directives:{}
}

钩子函数:

update被绑定元素所在的模板更新时调用

钩子函数中的参数:

el:指令所绑定的元素，可以用来直接操作DOM

binding:一个对象

value:指令的绑定值

自定义指令官方地址:[https://cn.vuejs.org/v2/guide/custom-directive.html](https://cn.vuejs.org/v2/guide/custom-directive.html)

v-model可以用于能和用户进行交互的表单控件，比如input,checkbox,select

##计算数据

###为什么要使用计算属性

模板是为了描述视图的结构，模板中放入太多逻辑，导致模板过重且难以维护。

在计算一个计算属性时，Vue.js更新它的依赖列表并缓存结果，只有当其中一个依赖发生了变化，缓存的结果才无效。

语法:

在选项对象中

{
  ...
  computed:{}
}

##vue中的组件

###vue中的组件

vue中的组件是一个自定义标签，Vue.js的编译器为它添加特殊功能。vue也可以扩展原生的html，封装可重用的代码


组件的基本组成:

样式结构

行为逻辑

数据

##注册组件

###全局注册

可以在任何模板中使用，使用之前要先注册

语法:使用Vue.component(组件名，选项对象)

组件名命名约定:

驼峰(camelCase),烤串(kebab-case)

在html中使用组件:

使用烤串(kebab-case)命名法

例如，注册:Vue.component('my-component',{})

使用:<my-component></my-component>

###局部注册

在组件实例中通过选项对象注册，只在所注册的作用域中使用

{
  components:{组件名:选项对象}
}

##组件间通信

父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件

###父组件>子组件

组件实例的作用域是孤立的，不能在子组件直接用父组件的数据。

可以在组件上使用自定义属性绑定数据，在组件中需要显式的用props声明自定义属性名。

###子组件>父组件

需要用到自定义事件，父组件用$on监听自定义事件，$emit触发父组件所关心的自定义事件。

##组件中data必须是函数

每个组件都是相互独立的，如果它们共用一个对象，在更改一个组件数据的时候，会影响其他组件。如果是函数的话，每个组件都有自己独立的数据。相互之间不会影响。

##受限制的元素

###DOM模板解析

Vue是在浏览器解析和标准化HTML后才能获取模板内容，所以有些元素限制了能被它包裹的元素。

例如:ul中只能放li;select中只能放option

某些元素中放入了自定义元素，不符合W3C标准，最终会解析错误。

变通的方式是使用特殊属性is来扩展HTML标签功能。


##单向数据流

###什么是单向数据流

数据从父组件流向(传递)给子组件，只能单向绑定。在子组件内部不应该修改父组件传递过来的数据


组件可以为props指定验证要求。如果未指定验证要求，Vue会发出警告。

props:{
   propA:Number,//指定类型
   propB:[string,Number],//多种类型
   propC:{typs:String,required:true},//必传，且为字符串
   propD:{type:Number,default:100},//字符串类型，默认值为100
   propE:{type:Number,defaulr:function(){return 1000}},
   //自定义验证规则
   propF:{validator:function(value){return value>10}}
}

验证类型为原生构造器:String,Number,FunctionObject,Boolean,Array

##非父子间通信

可以把Vue实例作为中央事件总线(central event bus).

这种方式组件嵌套的比较多，数据要改动，会越来越复杂，所以考虑使用专门的状态管理模式(vueX)

##使用slot分发内容

使用一种方式混合父组件的内容与子组件自己的模板。这个过程被称为'内容分发'。在子组件中使用特殊的<slot>元素作为内容的插槽。这样会使组件的可扩展性更强。

###单个slot

在子组件模板中有slot标签，被视为备用内容，在父组件不提供内容的情况下使用。如果父组件提供内容，则把整个内容片段插入到slot所在的DOM位置，并替换掉slot标签本身。

子组件模板中没有slot标签，父组件提供的内容会被抛弃。

###具名slot

<slot>元素可以用一个特殊的属性name来配置如何分发内容。

可以使用一个匿名的slot，处理那些没有对应slot的内容

###编译作用域

父组件模板的内容在父组件作用域内编译

子组件模板的内容在子组件作用域内编译