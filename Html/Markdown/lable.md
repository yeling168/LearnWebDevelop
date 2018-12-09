## `<address>`标签 ##
大多数浏览器会在 address 元素前后添加折行。

## `<b> `标签 ##
根据 HTML5 规范，在没有其他合适标签更合适时，才应该把 `<b>` 标签作为最后的选项。HTML5 规范声明：应该使用 `<h1> - <h6>` 来表示标题，使用 `<em>` 标签来表示强调的文本，应该使用` <strong>` 标签来表示重要文本，应该使用 `<mark>` 标签来表示标注的/突出显示的文本。

## `<blockquote>` 标签 ##
`<blockquote>` 标签定义<font face="微软雅黑" size="4" color="red">块</font>引用。
## `<button>`标签 ##
如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交 `<button> 与 <button/>` 之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用 input 元素来创建按钮。

在 button 元素内部，您可以放置内容，比如文本或图像。**这是该元素与使用 input 元素创建的按钮之间的不同之处。**

请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值
是 "submit"。


## `<div>`标签 ##

`<div>`可以定义文档中的分区或节(division/section).

`<div>`标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。如果用id或class来标记`<div>`，那么该标签的作用会变得更加有效。

<font face="微软雅黑" size="3">**用法:**</font>

`<div>`是一个<font face="微软雅黑" size="4" color="red">**块级**</font>元素。这意味着它的内容自动地开始一个新行。实际上，换行是`<div>`固有的唯一格式表现。可以通过`<div>`的class或id应用额外的样式。

不必为每一个`<div>`都加上类或id，虽然这样做也有一定的好处。

可以对同一个`<div>`元素应用class或id属性，但是更常见的情况是只应用其中一种。这两者的主要差异是，class(类似的元素，或者可以理解为某一类元素)，而id用于标识单独的唯一元素。

**注释:**:`<div>`是一个块级元素，浏览器通常会在div元素前后放置一个换行符。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>请使用`<div>`元素来组合块级元素，这样就可以使用样式对它们进行格式化。

## HTML `<dl>` 标签 ##
`<dl>`标签定义了定义列表

`<dl>`标签用于结合`<dt>`(定义列表中的项目)和`<dd>`（描述列表中的项目）。

## HTML `<font> `标签 ##
`<font> `是<font face="微软雅黑" size="4" color="red">**行内**</font>元素

## HTML `<footer> `标签 ##
`<footer>` 标签定义文档或节的页脚。

`<footer>` 元素应当含有其包含元素的信息。

页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。

您可以在一个文档中使用多个 `<footer>` 元素。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>`<footer>` 元素内的联系信息应该位于 `<address>` 标签中。

## HTML DOM Form 对象 ##

Form对象代表一个HTML表单。
在HTML文档中`<form>`每出现一次，Form对象就会被创建一次。

[http://www.w3school.com.cn/jsref/dom_obj_form.asp](http://www.w3school.com.cn/jsref/dom_obj_form.asp "HTML DOM Form 对象")

## HTML DOM elements 集合 ##

elements 集合可返回包含表单中所有元素的数组。

元素在数组中出现的顺序和它们在表单的HTML 源代码中出现的顺序相同。

每个元素都有一个 type 属性，其字符串值说明了元素的类型。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>如果 elements[] 数组具有名称（input 标签的 id 或 name 属性），那么该元素的名称就是 formObject 的一个属性，因此可以使用名称而不是数字来引用 input 对象。

举例，假设 x 是一个 form 对象，其中的一个 input 对象的名称是 fname，则可以使用 x.fname 来引用该对象。

## HTML DOM Frame 对象 ##
Frame 对象代表一个 HTML 框架。

在 HTML 文档中 `<frame>` 每出现一次，就会创建一个 Frame对象。

## HTML `<head>` 标签 ##

`<head>` 标签用于定义文档的头部，它是所有头部元素的容器。`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。

文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

下面这些标签可用在 head 部分：`<base>, <link>, <meta>, <script>, <style>, 以及 <title>。`

`<title>` 定义文档的标题，它是 head 部分中唯一必需的元素。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>应该把` <head>` 标签放在文档的开始处，紧跟在 `<html>` 后面，并处于 `<body> 标签或 <frameset>` 标签之前。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>请记住始终为文档规定标题！

## HTML `<i>` 标签 ##

`<i>` 标签显示斜体文本效果。

`<i>` 标签和基于内容的样式标签 `<em>` 类似。它告诉浏览器将包含其中的文本以斜体字（italic）或者倾斜（oblique）字体显示。如果这种斜体字对该浏览器不可用的话，可以使用高亮、反白或加下划线等样式。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>`<i>` 标签一定要和结束标签 `</i>` 结合起来使用。

## HTML `<li> `标签 ##
`<li>` 标签定义列表项目。

`<li>` 标签可用在有序列表 (`<ol>`) 和无序列表 (`<ul>`) 中。

## HTML `<p>` 标签 ##
`<p>` 标签定义段落。

p 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。

## HTML `<pre>` 标签 ##
<font face="微软雅黑" size="3" color="#ff9955">提示:</font>制表符（tab）在 `<pre>` 标签定义的块当中可以起到应有的作用，每个制表符占据 8 个字符的位置。但是我们不推荐使用它，因为在不同的浏览器中，Tab 的实现各不相同。在用 `<pre>` 标签格式化的文档段中使用空格，可以确保文本正确的水平位置。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>如果您希望使用` <pre>` 标签来定义计算机源代码，比如 HTML 源代码，请使用符号实体来表示特殊字符，比如 "&lt;" 代表 "<"，"&gt;" 代表 ">"，"&amp;" 代表 "&"。

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>在 W3School 中，非常多页面中的源代码实例都是通过` <pre>` 标签定义的，您可以参考这些页面，学习如何使用该标签。我们甚至把 `<pre>` 标签与 `<code>` 标签结合起来使用，以获得更加精确的语义。

## HTML `<span>` 标签 ##
HTML `<span>` 标签

<font face="微软雅黑" size="3" color="#ff9955">提示:</font>请使用 <span> 来组合行内元素，以便通过样式来格式化它们。

**注释：**span 没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。