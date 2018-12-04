##HTML全局属性##
[http://www.w3school.com.cn/tags/html_ref_standardattributes.asp](http://www.w3school.com.cn/tags/html_ref_standardattributes.asp "HTML全局属性")
# accesskey :#
规定激活元素的快捷键

### 浏览器支持 ###
几乎所有浏览器均支持accesskey属性，除了Opera

###提示和注释###
以下元素支持accesskey:`<a>, <area>, <button>, <input>, <label>, <legend>` 以及 `<textarea>`。

### data-* 属性 ###

data-*属性用于存储页面或应用程序的私有自定义数据

data-*属性赋予我们在所有HTML元素上嵌入自定义data属性的能力

存储的(自定义)数据能够被页面的JavaScript中利用，以创建更好的用户体验(不进行Ajax调用或服务端数据库查询)

data-*属性包括两部分:

  .属性名不应该包含任何大写字母，并且在前缀"data-"之后必须有至少一个字母

  .属性值可以是任意字符串

**注释:** 用户代理会完全忽略前缀为 "data-" 的自定义属性。

### HTML dir 属性 ###
 
dir 属性规定元素内容的文本方向。

**注释**：dir 属性在以下标签中无效：`<base>, <br>, <frame>, <frameset>, <hr>, <iframe>, <param> 以及 <script>`

### HTML draggable 属性 ###
draggable 属性规定元素是否可拖动。

**提示**：链接和图像默认是可拖动的。

**提示**：draggable 属性常用在拖放操作中。请在我们的拖放教程中学习更多内容。

true:规定元素的可拖动的。

false:规定元素不可拖动。

auto:使用浏览器的默认行为。

### HTML dropzone 属性 ###
dropzone 属性规定在元素上拖动数据时，是否拷贝、移动或链接被拖动数据。

**copy**:拖动数据会产生被拖动数据的副本。

**move**:拖动数据会导致被拖动数据被移动到新位置。

**link**:拖动数据会产生指向原始数据的链接。

### HTML hidden 属性 ###
hidden 属性是布尔属性。

如果设置该属性，它规定元素仍未或不再相关。

浏览器不应显示已规定 hidden 属性的元素。

hidden 属性也可用于防止用户查看元素，直到匹配某些条件（比如选择了某个复选框）。然后，JavaScript 可以删除 hidden 属性，以使此元素可见

### HTML lang 属性 ###

注释：lang 属性在以下标签中无效：`<base>, <br>, <frame>, <frameset>, <hr>, <iframe>, <param> 以及 <script>。`

### HTML spellcheck 属性 ###

spellcheck 属性规定是否对元素进行拼写和语法检查。

可以对以下内容进行拼写检查：

`input` 元素中的文本值（非密码）

`<textarea>` 元素中的文本

可编辑元素中的文本

true:对元素进行拼写和语法检查。

false:不检查元素。

### HTML tabindex 属性 ###
tabindex 属性规定元素的 tab 键控制次序（当 tab 键用于导航时）。

**注释：**以下元素支持 tabindex 属性：`<a>, <area>, <button>, <input>, <object>, <select> 以及 <textarea>`。

### HTML translate 属性 ###

translate 规定是否应该翻译元素内容。
提示：请使用 class="notranslate" 替代。