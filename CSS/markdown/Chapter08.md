#### 基本元素框 ####

所有文档元素都生成一个矩形框，这称为元素框，它描述了一个元素在文档布局中所占的空间大小

#### 一个元素如何影响所有元素 ####
默认地，一个可以显示的文档由多个矩形框组成，这些矩形框分布开，从而不会相互重叠。另外，根据某些限制，这些框要尽可能少占空间，同时还要保证相互之间有租后的空间，以便清楚地看出哪些内容属于哪个元素。

#### 宽度和高度 ####
## <font color="#ff995" face="微软雅黑" size="3">**width**</font> ##

| 值 | `<length> <percentage> auto inherit` |
| ------ | ------ |
| 初始值 | auto |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**块级元素和替换元素**</font> |
| 继承性 | 无 |
| 百分数 | 相对于包含块的width |
| 计算值 | 对于auto和百分数值，根据指定确定；否则是一个绝对长度，除非元素不能应用该属性(此时为auto)|

## <font color="#ff995" face="微软雅黑" size="3">**height**</font> ##

| 值 | `<length>  auto inherit` |
| ------ | ------ |
| 初始值 | auto |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**块级元素和替换元素**</font> |
| 继承性 | 无 |
| 百分数 | 相对于包含块的height计算 |
| 计算值 | 对于auto和百分数值，根据指定确定；否则是一个绝对长度，除非元素不能应用该属性(此时为auto)|


#### 历史问题 ####
在IE6之前，Windows平台的Internet Explorer在width和height方面并没有按照CSS保证的那样做。以下是两个主要区别：

- IE/Win使用width和height来定义可见元素框的尺寸，而不是定义元素框的内容。如果定义一个元素的width为400px，IE/Win会使左外边框边界到右外边框边界之间的距离是400像素。换句话说，IE/Win使用width来描述元素内容区、左右内边距以及左右边框的综合。CSS3对此包含一些建议，允许创作人员决定width和height究竟是什么含义。
- IE/Win对行内非替换元素应用了width和height属性。例如，如果对一个超链接应用了width和height，将根据所提供的值来绘制。

这两种行为在IE6中得到了修正，不过仅限于"标准"模式。如果IE6以"quirks"模式显示文档，还是会有前面描述的行为。

#### 边框 ####
元素外边距内就是元素的边框。元素的边框就是围绕元素内容和内边距的一条或多条线。因此，元素的背景会在外边框边界处停止，因为背景不会延伸到外边距以内，而边框就在外边距内部。

每个边框都有3个方面:其宽度或粗细、其样式或外观，以及其颜色。边框宽度的默认值为medium，这个值没有明确定义，不过通常是2个像素。尽管如此，你不一定能看到边框，原因是边框的默认样式为none，这样一来，就不会有边框了。


最后，默认的边框颜色是元素本身的前景色。如果没有为边框声明颜色，它将与元素的文本颜色相同。另一方面，如果一个元素没有任何文本，假设它有一个表，其中只包含图像，那么该表的边框颜色就是其父元素的文本颜色(因为color可以继承)。这个父元素很可能是body、div或另一个table。因此，如果一个table有边框，而且其父元素是body，给定以下规则:

    body{color:purple;}

默认地，table外围的边框将是紫色(假设用户代理没有为表设置颜色)。当然，要让边框显示，必须先做一点工作。

#### 边框和背景 ####
CSS规范清除地指出元素的背景会延伸到边框边界之外，因为规范中提到，边框绘制在"元素的背景之上"。这很重要，以内有些边框是"间断的"(例如，点线边框或虚线框)，元素的背景应当在边框的可见部分之间。

发布CSS2时，它指出背景只延伸到内边距，而不是边框。后来又对此做了更正，CSS2.1明确指出元素的背景是内容、内边距和边框区的背景。大多数浏览器都遵循CSS2.1定义，不过一些较老的浏览器可能会有不同的表现。

#### 有样式的边框 ####
CSS为属性border-style定义了10个不同的非inherit样式，包括默认值none。

样式值hidden等价于none，不过应用于表时除外，对于表，hidden用于解决边框冲突。

## <font color="#ff995" face="微软雅黑" size="3">**border-style**</font> ##

| 值 | `none hidden dotted dashed solid double groove ridge inset outset {1,4} inherit` |
| ------ | ------ |
| 初始值 | 对简写属性没有定义 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 见各个属性(border-top-style)等|
| 说明 | 根据CSS1和CSS2，HTML用户代理只需支持solid和none；其余的值(除hidden外)可能被解释为solid；这个限制在CSS2.1中被去除|

#### 多种样式 ####

#### 单边样式 ####
## <font color="#ff995" face="微软雅黑" size="3">**border-top-style、border-right-style、border-bottom-style、border-left-style**</font> ##
| 值 | `none hidden dotted dashed solid double groove ridge inset outset inherit` |
| ------ | ------ |
| 初始值 | none |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

#### 边框和行内元素 ####
不论为行内元素的边框指定怎样的宽度，元素的行高都不会改变

#### 内边距 ####
## <font color="#ff995" face="微软雅黑" size="3">**padding**</font> ##
| 值 | `length、percentage、{1,4} inherit` |
| ------ | ------ |
| 初始值 | 对于简写元素未定义 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 百分数 | 相对于包含块的width|
| 计算值 | 见单个属性(padding-top等)|
| 说明 | 内边距绝对不能为负|

><font color="#ff995" face="微软雅黑" size="3">**外边距会合并但是内边距不合并。**</font>
#### 百分数值和内边距 ####
可以为元素的内边距设置百分数值。像外边距一样，百分数值要相对于其父元素的width计算。如果父元素的width改变，它们也会改变。


#### 单边内边距 ####
## <font color="#ff995" face="微软雅黑" size="3">**padding-top、padding-right、padding-bottom、padding-left**</font> ##
| 值 | `length、percentage、inherit` |
| ------ | ------ |
| 初始值 | 0 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 百分数 | 相对于包含块的width|
| 计算值 | 对于百分数值，根据指定确定;对于长度值，则为绝对长度|
| 说明 | 内边距绝对不能为负|
