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