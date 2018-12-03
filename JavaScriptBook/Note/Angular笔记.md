protity:
1）设置指令的优先级，同一个DOM上的指令，priority值越大优先级越高。
2）当一个DOM元素上有多个指令时，会根据这个优先级执行指令代码。
3）指令的compile和preLink配置函数优先级越大先执行，postLink配置函数优先级越大越
后执行。
4）同一个DOM上的几个指令，priority也相同时，优先级按照指令名字的字母顺序确定。
例如：“aDirective”和“bDirective”两个指令priority相同， aDirective优先级高。
建议：自定义指令时如果没有特殊执行顺序要求，都不要设置这个属性，都使用默认值。
分析AngularJS源码，各个内置指令的priority设置会有些不一样，这些设置值都是基于AngularJS
架构做的整体规划。
terminal:
1）设置为true时，阻止当前DOM上priority比当前指令低的指令执行；
2）仅能阻止preLink和postLink的执行，不能阻止compile的执行；
3）如果当前指令和其它指令的priority相同，不能阻止其它指令的执行。
 AngularJS内部指令中ngIf就用了这一属性。
 scope:
 Scope设置当前指令的作用域。
1）false(默认值)：不创建新作用域scope，使用父作用域 ；
2）true：创建新作用域，新作用域继承了父作用域属性和方法；
3）对象：创建一个孤立作用域，孤立作用域不继承父作用域。
指令作用域包含两个部分：指令模板的作用域、指令所在DOM的作用域。
scope设置为对象
1）功能：创建一个孤立作用域，该作用域不继承父作用域属性和方法。这个孤立作用域依然会放入到作用域树当中（作用域树在AngularJS基础培训中已经详细讲解过了，这里不再重复）。
2）应用场景：孤立作用域对于创建可重用的组件是非常有用的，因为可重用的组件一般不应该自动读或写父作用域的数据，而是一个独立的个体，在任何作用域下使用，既不能影响父作用域，也不能被父作用域影响。
transclude属性
类型：Boolean(布尔值) 
默认值：false
功能：
设置为false时，指令所在DOM内部内容会被干掉；
设置为true时，指令所在DOM内部内容不会被干掉，而是放到了指令模板中
ngTransclude指令所在DOM的内部。
设置为true时，必须和ngTransclude指令联合使用。
放入指令模板ngTransclude内部的内容，其作用域仍然是父作用域。

compile属性
类型：Function
语法结构： function compile(tElement, tAttrs, transcludeFn) { ... }
功能：编译函数是用来处理需要修改模板DOM的情况的。因为大部分指令都不需要修改
模板，所以这个函数也不常用。
返回值：Function or Object
返回函数 - 等效于post-liking ；
返回对象 – 有两个属性pre 或 post ，分别对应pre-linking 和 post-liking 。
Pre-linking和post-liking会在后边link属性时讲解。大家只要知道，执行完compile函数后，会执
行Pre-linking和post-liking两个函数。
设置了compile属性后，指令配置对象中的link属性会被忽略掉，不再执行。而是执行complie属性函数返回的link函数。

link属性
类型：Function or Object
语法结构：function link(scope, iElement, iAttrs, controller, transcludeFn) { ... }
功能：链接函数负责注册DOM事件和更新DOM数据。它是在模板被克隆之后执行的，它也是大部分指令逻辑代码编写的地方。 
 如果定义了compile属性，link属性直接忽略，不会被执行。Compile返回值会被当做link执行。
设置为Object时，有两个属性可以设置pre或者post，这两个属性都是函数类型。
设置为Function时，相当于设置为对象时的post属性。

link属性：
参数：
scope - 指令模板的作用域。根据指令配置对象的scope属性值不同，这个作用域可能是父作用域、新创建的子作用域或者孤立作用域。
iElement - 指令所在的元素。只有在 postLink 函数中对元素的子元素进行操作才是安全的，因为那时它所有的子元素已经全部链接好。
iAttrs - 一个标准化的、所有声明在当前元素上的属性列表，这些属性在所有链接函数（一个DOM上可能有多个指令，因此可能有多个连接函数）间是共享的。
controller – 当前指令所依赖其它指令的控制器实例，用于多个嵌套指令之间的相互通信。这个参数是和指令配置对象的require属性一起使用的，如果require属性没有设置，controller值是undefined。这个属性在后边讲解require时会详细说明。
transcludeFn ：
1）一个嵌入的链接函数 function(scope, cloneLinkingFn)。
2）这个函数的作用是指定嵌入DOM的作用域scope，然后在cloneLinkingFn中对嵌入DOM进行操作，例如，将嵌入DOM移动位置等。

Post-linking和pre-linking区别：
1） Post-linking function 中进行注册DOM事件、更新DOM数据、逻辑业务代码等操作更安全。
Pre-linking function 在子元素（尤其是子元素有指令嵌套时）被链接前执行。
Post-linking function 所有子元素都被链接后执行，保证当前指令内部DOM数据都已添加，内部子DOM都已是最后形态，不会变化了。
2）对每个指令来说，先执行compile，然后preLinking，最后执行postLinking。
3）多个指令嵌套时，按所在DOM位置，从外到内先执行所有指令的compile函数，然后从外到内执行所有指令的Pre-linking函数，最后从内到外执行所有指令的postLinking函数。
4） compile、preLinking和postLinking三者关系和区别详细分析： http://www.jb51.net/article/58229.htm

controller属性
类型： String or Function 
设置为字符串时，会以字符串的值为名字，来查找注册在应用中的控制器的构造函数。
设置为Function时：
语法结构：function controller($scope, $element, $attrs, $transcludeFn){ ... }
$scope - 与当前元素结合的scope
$element - 当前的元素
$attrs - 当前元素的属性对象
$transcludeFn - 一个嵌入的链接函数。这个与link中的第五个参数一样，详情请参考link。
功能：为当前指令设置一个控制器，通过控制器我们给外部暴露一些方法或数据。其它指令可以通过配置require属性拿到当前指令的控制器，这部分会在require部分详细讲解。通过controller可以实现指令之间的通信。
什么时候用Controller？什么时候用link？
规则：当指令需要给外部暴露一些方法或者数据时，使用controller。对指令内部操作时，用link。
Controller在pre-linking之前执行。
require属性
类型： String or String[](字符串数组)
字符串代表另外一个指令的名字（驼峰形式），这样就将这个指令的控制器注入到了当前指令当中，作为当前指令的link函数的第四个参数。
字符串中指令名字前边可以加一些前缀标志，用于告诉AngularJS查找这些指令的方式：
1）如果没有前缀，指令只会在自身的元素上查找指定的指令；
2）如果使用?前缀，在当前指令中没有找到所需要的控制器，会将null作为传给link函数的第四个参数；
3）如果添加了^前缀，指令会在指令所在元素和父元素中查找指定的指令；
4）如果添加了^^?前缀，指令会在父元素中查找指定的指令；
通过require和controller两个属性的配合，就建立起了两个指令之间的通信通道。

angular.js最佳实践：
1.依赖注入不要用推断式
2.双向绑定的变量设置成$scope下一个对象的属性（因为直接设置成$scope的属性时，给这个属性设置值时不会从父容器中查找该属性。）
3.多个控制之间的通信尽量使用service去实现，不要使用全局变量或者$rootScope
4尽量不要在控制器中操作DOM，而是使用指令（AngularJS内置指令或者自定义指令）
5对images使用ng-src 替代src
6不要压缩angular.min.js 因为AngularJS团队已经通过预定义设置压缩了angular文件,如果我们再压缩可能会产生破坏。所以直接使用。
7.总是把第三方API的回调包裹到$apply，用来通知AngularJS关于环境的变化，触发賍值检查，实现视图等同步更新
8.如果我们不想让用户在AngularJS加载之前显示HTML ，使用ng-cloak指令或者ng-bind指令绑定数据
9.为了阻止任何冲突，不要在我们自己的directives里使用“ng”前缀。因为“ng”前缀是AngularJS内部指令。
10.尽量不用$watch监控一个层次很深属性很多非常复杂的对象。减轻性能消耗和内存消耗。

http://lib.csdn.net/base/angularjs/resource
$q服务：http://www.cnblogs.com/xing901022/p/4928147.html
FrameWork框架:http://3ms.huawei.com/hi/group/3331/blog_1455091.html?mapId=1984689
前端知识合集：http://www.jianshu.com/p/c3dae0951f74

哪些指令会创建$scope(子作用域）?
ng-controller、ng-repeat、 ng-switch、ng-view和ng-include 都会创建子作用域，并继承父作用域的属性和方法。
通过directive()方法定义的指令，如果返回对象中配置了scope属性为对象时，创建了一个孤立scope。






