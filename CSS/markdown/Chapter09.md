#### 颜色和背景 ####
><font color="#ff995" face="微软雅黑" size="3">**一般来说，前景是元素的文本，不过前景还包括元素周围的边框。因此，有两种方式直接影响一个元素的前景色:可以使用color属性，也可以使用某个边框属性设置边框颜色。**</font>

#### 前景色 ####
## <font color="#ff995" face="微软雅黑" size="3">**color**</font> ##

| 值 | `color inherit` |
| ------ | ------ |
| 初始值 | 用户代理特定的值 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|

><font color="#ff995" face="微软雅黑" size="3">**注意:默认前景色为黑色。并不总是如此，因为用户可能让其浏览器(或其他用户代理)使用另外一种前景(文本)颜色。**</font>

#### 影响边框 ####
color值还可以影响元素周围的边框。

#### 背景 ####
元素的背景区包括前景之下直到边框外边界的所有空间;因此，内容框和内边距都是元素背景的一部分，且边框华仔背景之上。

#### 背景色 ####
类似于设置前景色，可以为元素的背景声明一个颜色。为此，可以使用属性background-color，毫不奇怪，它接受所有合法的颜色，还可以接受一个使背景透明的关键字。

## <font color="#ff995" face="微软雅黑" size="3">**background-color**</font> ##

| 值 | `color transparent inherit` |
| ------ | ------ |
| 初始值 | transparent |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|

><font color="#ff995" face="微软雅黑" size="3">**可以为几乎所有元素设置背景色，这包括body一直到em和a等行内元素。background-color不能继承。其默认值是transparent，这是有道理的:如果一个元素没有指定的颜色，那么背景就应当是透明的，这样其祖先元素的背景才能可见。**</font>

## <font color="#ff995" face="微软雅黑" size="3">**background-image**</font> ##

| 值 | `url none inherit` |
| ------ | ------ |
| 初始值 | none |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 绝对URL|

默认值none表示的含义正是你所期望的：背景上没有放任何图像。如果你希望有一个背景图像，必须为这个属性指定一个URL值

    body{background-image:url(bg23.gif);}

如果其他背景属性取默认值，这就会把图像bg23.gif平铺在文档在文档的背景上。

><font color="#ff995" face="微软雅黑" size="3">**允许向任何元素应用背景图像，可以是块级元素也可以是行内元素。当然，大多数背景都应用到body元素，不过并不仅限于此。**</font>


理论上讲，设置可以向textareas和select列表等替换元素的背景应用图像，不过并不是所有用户代理都能很好地处理这种情况。

类似于background-color,background-image也不能继承---实际上，所有背景属性都不能继承。还要记住，指定背景图像的URL时，关于url值的限制和警告还是一如从前；相对URL要结合样式表来解释。

## <font color="#ff995" face="微软雅黑" size="3">**background-repeat**</font> ##

| 值 | `repeat、repeat-x、repeat-y、no-repeat、inherit` |
| ------ | ------ |
| 初始值 | repeat |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

## <font color="#ff995" face="微软雅黑" size="3">**background-position**</font> ##

| 值 | `percentage、length、left、center、right、percentage、length、top、center、bottom、left、center、right、top、center、bottom` |
| ------ | ------ |
| 初始值 | 0% 0% |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**块级元素和替换元素**</font> |
| 继承性 | 无 |
| 计算值 | 如果指定了length，则为绝对长度偏度；否则，是百分数值|

><font color="#ff995" face="微软雅黑" size="3">**根据background-position,将相对于元素的内边距边界放置原图像。换计划说，放置图像的上下文是内边框边界，尽管背景区会延伸到外边框边界。**</font>

#### 关键字 ####
## <font color="#ff995" face="微软雅黑" size="3">**等价的位置关键字**</font> ##

| 单个关键字 | 等价关键字 |
| ------ | ------ |
| center | center center  |
| top | top center |
|  | center top  |
| bottom | bottom center |
|  | center bottom  |
| right | center right |
|  | right center  |
| left | center left |
|  | left center  |

><font color="#ff995" face="微软雅黑" size="3">**注意:如果用百分数设置位置，水平值总是先出现**</font>

## <font color="#ff995" face="微软雅黑" size="3">**background-attachment**</font> ##

| 值 | `scroll、fixed、inherit` |
| ------ | ------ |
| 初始值 | scroll |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

#### 汇总 ####
## <font color="#ff995" face="微软雅黑" size="3">**background**</font> ##

| 值 | `<background-color>、<background-image>、<background-repeat>、<background-attachment>、<background-position>、inherit` |
| ------ | ------ |
| 初始值 | 根据单个属性 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 百分数 | `<background-position>允许的值`|
| 计算值 | 见单个属性|