#### HTML DOM innerHTML 属性 ####

#### 定义和用法 ####
innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。

#### 语法 ####

    HTMLElementObject.innerHTML=text


innerHTML：https://www.cnblogs.com/jongsuk0214/p/6930876.html

><font color="#ff995" face="微软雅黑" size="3">**文档中的每一个元素都是一个对象。利用DOM提供的方法能得到任何一个对象。**</font>

1. getElementById---这个调用将返回一个对象
2. getElementsByTagName---这个调用返回一个对象数组
3. getElementsByClassName---这个调用返回一个对象数组

#### 知识点 ####
文档中的每个元素节点都是一个对象。不仅如此，这些对象中的每一个还天生具有一系列非常有用的方法，这要归功于DOM。利用这些预先定义好的方法，我们不仅可以检索出文档里任何一个对象的信息，甚至还可以改变元素的属性。

- 一份文档就是一棵节点数木
- 节点分为不同的类型:元素节点，属性节点和文本节点等，
- getElementById将返回一个对象，该对象对应着文档里的一个特定的元素节点。
- getElementsByTagName和getElementByclassName将返回一个对象数组，它们分别对应着文档里的一组特定的元素节点。
- 每个节点都是一个对象。

#### getAttribute ####
getAttribute方法不属于document对象，所以不能通过document对象调用。它只能通过元素节点对象调用。

#### setAttribute ####
setAttribute()有点不同:它允许我们对属性节点的值做出修改。与getAttribute一样，setAttribute也只能用于元素节点。setAttribute做出的修改不会反映在文档本身的源代码里。这种"表里不一"的现象源自DOM的工作模式:先加载文档的静态内筒，再动态刷新，动态刷新不影响文档的静态内容。这正是DOM的真正威力:对页面内筒进行刷新却不需要在浏览器里刷新页面。