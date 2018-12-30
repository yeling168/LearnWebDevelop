#### 表显示值 ####
## <font color="#ff995" face="微软雅黑" size="3">**display**</font> ##

| 值 | `none、inline、block、inline-block、list-item、run-in、table、inline-table、table-row-group、table-header-group、table-footer-group、table-row、table-column-group、table-column、table-cell、table-caption、inherit` |
| ------ | ------ |
| 初始值 | inline |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 对于浮动、定位和根元素，计算值可变；否则，根据指定确定|
| 说明 | CSS2中还有值compact和marker，不过由于缺乏广泛的支持，在CSS2.1中已去掉|

table
    
   这个值指定一个元素定义了一个块级表。因此，它定义了一个生成块框的矩形块。相应的HTML元素当然是table。

inline-table

  这个值指定一个元素定义了一个行内级表。这说明，该元素定义了一个生成行内框的矩形块。与之最接近的非表值是inline-table。最接近的HTML元素为table，不过，默认情况下HTML表不是行内元素。

table-row
  
   这个值指定一个元素是一个单元格的行。相应的HTML元素是tr元素。

table-row-group
 
   这个值指定一个元素是一个或多个行的组。相应的HTML值是tbody。

table-header-group

   这个值与table-row-group非常相似，只是视觉格式化方面有所不同，标题行组总是在所有其他行和行组之前显示(如果最上面有总标题，要在总标题之后显示)。打印时，如果一个表需要多页打印，用户代理可以在各页顶端重复标题行。规范没有定义如果多个元素指定table-header-group值会发生什么情况。标题组可以包含多个行。与之对应的HTML元素是thead。

table-footer-group
  
   这个值与table-heade-group很类似，不过脚注行总是在所有其他行之后显示，如果最下面有页脚标题，要在该总标题之前显示。打印时，如果一个表需要多页打印，用户代理可以在各页顶端重复页脚行。规范没有定义如果为多个元素指定table-footer-group值会有什么结果。与之对应的HTML元素是tfoot。

table-column

   这个值声明元素描述了一个单元格的列。按CSS的术语来说，有这个display值的元素并不显示，就好像它的display值为none一样。之所以存在这个值，主要是为了帮助定义列中单元格的表示。相应的HTML元素是col元素。

table-column-group

   这个值声明一个元素是一个或多个列的组。类似于table-column元素，table-column-group元素也不显示，不过这个值有助于定义列组中元素的表示。相应的HTML元素是colgroup元素。

table-cell

   这个值指定一个元素表中的单个单元格。HTML元素th和td都属于table-cell元素。

table-caption

   这个值定义一个表的总标题。CSS没有定义如果多个元素的display值都为caption时会发生什么情况，不过CSS确实明确地警告--创作人员不要在一个表或行内表元素中放多个有display:caption的元素。

| 值 | 显示 |
| ------ | ------ |
| table | `{display:table}` |
| tr |`{display:table}` |
| thead | `{display:table-header-group}` |
| tbody | `{display:table-row-group}`|
| tfoot | `{display:table-footer-group}`|
| col | `{display:table-column}`|
| colgroup | `{display:table-column-group}`|
| td、th | `{display:table-cell}`|
| caption | `{display:table-caption}`|

#### 列 ####

尽管CSS表模型是面向行的，列在布局中仍有很重要的地位。虽然单元格在文档源中是行元素的后代，但它们可能同时属于上下文(行和列)。不过，在CSS中列和列组只能接受4种样式:border、background、width和visibility

border

   只有当border-collapse属性值为collapse时才能为列和列组设置边框。在这种情况下，列和列组边框会参与设置各单元格边界边框样式的合并算法。

background

   只有当单元格及其行有透明背景时，列或列组的背景才可见。

width
  
  width属性定义了列或列组的最小宽度。列(或列组)中单元格的内容可能要求列更宽。

visibility

  如果一个列或列组的visibility为collapse，则该列(或列组)中所有单元格都不显示。从合并列跨到其他列的单元格会被裁剪，这类似于从其他列跨到隐藏列中的单元格。另外，表的总宽度会减去已合并列的宽度。如果对列或列组将visibility声明为任何非collapse值，则会被忽略。

## <font color="#ff995" face="微软雅黑" size="3">**empty-cells**</font> ##

| 值 | `show、hide、inherit` |
| ------ | ------ |
| 初始值 | show |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**display值为table-cell的元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|
| 说明 | 除非border-collapse值为separate，否则会忽略该属性|

#### 合并单元格边框 ####
display值为table或inline-table的元素不能有任何内边距，不过它们可以有外边距。因此，表的外围边框与其最外单元格的边界之间不会有任何间隔。

边框可以应用到单元格、行、行组、列和列组。表元素本身通常都有一个边框。

单元格边框之间绝对不会有任何间隔。实际上，如果边框相邻，就会相互合并，使得实际上只画其中一个合并边框。这有些类似于外边距合并，即最大的一个外边距"胜出"。单元格边框合并时，"最有意思的"边框会胜出。

一旦合并，单元格之间的边框会在单元格间的假想表格线上居中。

#### 生成引号 ####
生成内容有一种特殊形式，即引号，CSS2.x提供了一种有效的方式来管理引号及其嵌套行为。由于提供了open-quote等成对的content值以及属性quotes，使得生成引号的管理成为可能。

## <font color="#ff995" face="微软雅黑" size="3">**quotes**</font> ##

| 值 | `<string><string>+ none、inherit` |
| ------ | ------ |
| 初始值 | 取决于具体的用户代理 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|

#### 重置和递增 ####
创建计数器的基础包括两个方面，一是能设置计数器的起点，二是能将其递增一定的量。前者由属性counter-reset处理。
## <font color="#ff995" face="微软雅黑" size="3">**counter-reset**</font> ##

| 值 | `identifier、integer none 、inherit` |
| ------ | ------ |
| 初始值 | 取决于具体的用户代理 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

还需要一个属性来指示元素将计数器递增。否则，计数器将永远保持计数器重置声明中指定的值。

## <font color="#ff995" face="微软雅黑" size="3">**counter-increment**</font> ##

| 值 | `identifier、integer none 、inherit` |
| ------ | ------ |
| 初始值 | 取决于具体的用户代理 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|