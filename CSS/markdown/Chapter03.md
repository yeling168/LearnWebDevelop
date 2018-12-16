#### 特殊性 ####
选择器的特殊性由选择器本身的组件确定。特殊性表述为4个部分，如:0,0,0,0.一个选择器的具体特殊性如下确定:

- 对于选择器中给定的各个ID属性值，加0,1,0,0.
- 对于选择器中给定的各个类属性值，属性选择或伪类，加0,0,1,0.
- 对于选择器中给定的各个元素和伪元素，加0,0,0,2.伪元素是否有特殊性？在这方面CSS2有些自相矛盾，不过CSS2.1很清楚地指出，伪元素有特殊性，而且特殊性为0,0,0,1.
- 结合符和通配选择器对特殊性没有任何贡献。

<font color="#ff995" face="微软雅黑" size="3">**内联声明的特殊性最高。**</font>

#### 继承 ####
<font color="#ff995" face="微软雅黑" size="3">**基于继承机制，样式不仅应用到指定的元素，还会应用到它的后代元素。**</font>

[http://markdownpad.com/faq.html#livepreview-directx](http://markdownpad.com/faq.html#livepreview-directx "markdown")

元素的声明会沿着树向下传播到后代元素，并一直继续，直到再没有更多的后代元素继承这个值为止。值绝对不会向上传播，也就是说，元素不会把值向上传递到其祖先。

<font color="#ff995" face="微软雅黑" size="3">**注意:**</font>在HTML中，对于向上传播规则有一个例外:应用到body元素的背景样式可以传递到html元素(html是文档的根元素)，相应地可以定义其画布。
