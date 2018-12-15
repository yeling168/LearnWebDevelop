#### 文本属性 ####
## <font color="#ff995" face="微软雅黑" size="3">**text-indent**</font> ##

| 值 | `<length> <percentage> inherit` |
| ------ | ------ |
| 初始值 | 0 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**块级元素**</font> |
| 继承性 | 有 |
| 百分数 | 相对于包含块的宽度 |
| 计算值 | 对于百分数值，要根据指定确定;对于长度值，则为绝对长度|

通过使用text-indent属性，所有元素的第一行都可以缩进一个给定长度，设置该长度可以是负值。

#### 文本缩进 ####
>一般地，可以为所有<font color="#ff995" face="微软雅黑" size="3">**块级元素**</font>应用text-indent，但无法将这个属性应用到行内元素，图像之类的替换元素上也无法应用text-indent属性。不过，如果一个块级元素(如段落)的首行中有一个图像，它会随着该行的其余文本移动。

<font color="#ff995" face="微软雅黑" size="3">**注意:**</font>如果想把一个行内元素的第一行缩进，可以用左内边距或外边距创造这种效果。

text-indent还可以设置为负值，利用这种技术，可以实现很多有意思的效果。

#### 浮动图像和负文本缩进 ####
text-indent可以使用所有长度单位(包括百分数值)

#### 用百分数实现文本缩进 ####
注意，即使插入了行分隔符，这种缩进也只应用于一个元素的第一行。关于text-indent有意思的是，由于这个属性可以继承，它可能有预想不到的效果

## <font color="#ff995" face="微软雅黑" size="3">**text-align**</font> ##

| CSS2.1 | `left center right justify inherit` |
| ------ | ------ |
| CSS2 | `left center right justify <string> inherit` |
| 初始值 | 用户代理特定的值;还可能取决于书写方向 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**块级元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|
| 百分数 | CSS2包含一个<string>值，因为没有相应实现，所以在CSS2.1中已经去除 |

与text-indent相比，text-align是一个更基本的属性，它会影响一个元素的文本行相互之间的对齐方式。前3个值相当直接，不过第4个和第5个则略有些复杂。

显然，值left，right和center会导致元素中的文本分别左对齐，由对齐和居中。因为<font color="#ff995" face="微软雅黑" size="3">**text-align只应用于块级元素(如段落)，所以无法将行内的一个锚居中而不影响行中的其余部分**</font>（你可能也不想这么做，因为这很可能导致文本重叠）。

西方语言都从左向右读，所以text-align的默认值是left。文本在左边界对齐，右边界呈锯齿状(称为"从左到右"文本)。对于希伯来语和阿拉伯语之类的语言，text-align则默认为right，因为这些语言从右向左读。不出所料，center会使每个文本行在元素中居中。

<font color="#ff995" face="微软雅黑" size="3">**注意:**</font> **将块级元素或表元素居中，这要通过在这些元素上适当地设置左,右外边距来实现。**

<font color="#ff995" face="微软雅黑" size="3">**警告:**</font>IE6之前的IE/win有一个危害较大的bug:它确实会把text-align:center处理为`<CENTER>`元素，不仅将文本居中，还会将元素居中。在IE和更高版本IE的标准模式中就不会这样了，但在IE5.x和较早版本中仍是如此。

最后一个水平对齐属性是justify，它会带来自己的一些问题。在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。通过调整单词和字母间的间隔，使各行的长度恰好相等。

要由用户代理(而不是CSS)来确定两端对齐文本如何拉伸，以填满父元素左右边界之间的空间。例如，有些浏览器可能只是在单词之间增加额外的空间，而另外一些浏览器可能会平均分布字母间的额外空间(不过CSS规范特别指出，如果letter-spacing属性指定为一个长度值，“用户代理不能进一步增加或减少字符间的空间”)。还有一些用户代理可能会减少某些行的空间，使文本挤得更加紧密。所有这些做法都会影响元素的外观，甚至改变其高度，这取决于用户代理的对齐选择影响了多少文本行。

CSS也没有指定应当如何处理连字符(CSS中没有说明如何处理连字符，因为不同的语言有不同的连字符规则。规范没有尝试去调和这样一些很可能不完备的规则，而是干脆不提这个问题)。大多数两端对齐文本都使用将连字符分开放在两行上，从而缩小单词之间的间隔，改善文本行的外观。不过，由于CSS没有定义连字符的薪给，用户代理不太可能自动添加连字符。因此，在CSS中，两端对齐恩本看上去没有打印出来好看，特别是元素可能太窄，以至于每行只能放下几个单词。当然，使用窄设计元素是可以的，不过要当心相应的缺点。

## <font color="#ff995" face="微软雅黑" size="3">**line-height**</font> ##

#### 行高 ####
line-height属性是指文本行基线之间的距离，而不是字体的大小，它确定了将各个元素框的高度增加或减少多少。在最基本的情况下，指定line-height可以用来增加(或减少)文本行之间的垂直距离。line-height控制了行间距，这是文本行之间超出了字体大小的额外空间。换句话说，line-height值和字体大小之差就是行间距。

| 值 | `length percentage number normal inherit` |
| ------ | :------ |
| 初始值 | normal |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 百分数 | CSS2包含一个<string>值，因为没有相应实现，所以在CSS2.1中已经去除 |
| 计算值 | <font color="#ff995" face="微软雅黑" size="3">**对于长度和百分数值是绝对数值;否则，根据指定确定**</font>|

[https://www.cnblogs.com/qiangspecial/p/4126842.html](https://www.cnblogs.com/qiangspecial/p/4126842.html "深入理解 CSS 中的行高与基线")

[https://blog.csdn.net/guantina/article/details/80166065](https://blog.csdn.net/guantina/article/details/80166065 "基线、行高、行内框、行框、vertical-align等概念理解")

>在应用到块级元素时，line-height定义了元素中文本基线之间的最小距离。注意，它定义的是最小距离，而不是一个绝对数字，文本基线拉开的距离可能比line-height值更大。line-height并不影响替换元素的布局，不过确实可以应用到替换元素。

#### 构造文本行 ####
文本行中的每个元素都会生成一个内容区，这由字体的大小确定。这个内容区则会生成一个行内框(inline box)，如果不存在其他因素，这个行内框就完全等于该元素的内容区。由line-height产生的行间距就是增加或减少各行内框高度的因素之一。

要确定一个给定元素的行间距，只需将line-height的计算值减去font-size的计算值，这个值是总的行间距。而且要记住，这可能是一个负值。然后行间距再除2，将行间距的一半分别应用到内容区的顶部和底部。其结果就是该元素的行内框。


#### 指定line-height值 ####
下面来考虑line-height的可取值。如果使用默认值normal，用户代理必须计算行间的垂直空间。不同的用户代理计算出的值可能不同，不过通常都是字体大小的1.2倍，这使得行框要高于给定元素的font-size值。

大多数值都是简单的长度度量(例如，18px或2em)。注意，即使使用一个合法的长度度量，如4cm，但浏览器(或操作系统)在实际度量中使用的标准可能并不正确，所以在你的显示器上行高可能不是4cm。

em,ex和百分数值都是相对于元素的font-size值计算。

#### 行高和继承 ####
当一个块级元素从另一个元素继承line-height时，问题会变得更为复杂。line-height从父元素继承时，要从父元素计算，而不是在子元素上计算。

em单位:p94

在CSS中，1个'em'定位为一种给定字体的font-size值。如果一个元素的font-size为14px，那么对于该元素，1em就等于14px

**基于继承机制，样式不仅应用到指定的元素，还会应用到它的后代元素。**

参考:line-height-inherit.html实例
line-height小，font-size大，这就带来了问题 
对于这种line-height太小的问题，一种解决办法是为每个元素设置一个显式的line-height，但是这种放大不太实用，更好的办法是指定一个数，由它设置缩放因子。

指定一个数时，缩放因子将是继承值而不是计算值。这个数会应用到该元素及其所有子元素，所以各元素都根据自己的font-size计算line-height.

## <font color="#ff995" face="微软雅黑" size="3">**vertical-align**</font> ##
#### 垂直对齐文本 ####

如果你曾用过sup和sub(上标和下标元素),或者曾用过`<img src="foo.gif" align="middle">`之类标记的图像，说明你已经做过一些基本的垂直对齐。在CSS中,<font color="#ff995" face="微软雅黑" size="3">**vertical-align属性只应用于行内元素和替换元素**</font>，如图像和表单输入元素。<font color="#ff995" face="微软雅黑" size="3">**vertical-align属性不能继承。**</font>

vertical-align只接受8个关键字，一个百分数值或一个长度值。这些关键字有些我们很熟悉，有些可能不熟悉，包括:baseline(默认值)、sub、super、bottom、text-bottom、middle、top和text-top。 我们将分析各关键字如何作用域行内元素。

| 值 | `baseline sub super top text-top middle bottom text-bottom <percentage> <length> inherit` |
| ------ | :------ |
| 初始值 | baseline |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**行内元素和表单元格**</font> |
| 继承性 | 无 |
| 百分数 | 相对于元素的line-height值 |
| 计算值 | <font color="#ff995" face="微软雅黑" size="3">**对于百分数和长度值，为绝对长度;否则，根据指定确定**</font>|
| 说明 | 应用到表单元格时，只能识别baseline、top、middle和bottom等值 |

<font color="#ff995" face="微软雅黑" size="3">**警告:**</font>要记住:vertical-align不影响块级元素中内容的对齐。不过，可以用它来影响表单元格中元素的垂直对齐。

#### 基线对齐 ####
vertical-align:<font color="#ff995" face="微软雅黑" size="3">**baseline要求一个元素的基线与其父元素的基线对齐。**</font>大多数情况下，浏览器都会这么做，以内你显然希望一行中所有文本元素的底端都对齐。

如果一个垂直对齐元素没有基线--也就是说，如果这是一个图像或表单输入元素，或者是其他替换元素---那么该元素的底端与其父元素的基线对齐。

#### 图像的基线对齐 ####
这个对齐规则很重要，因为它使得一些web浏览器总把替换元素的底边放在基线上，即使该行中没有其他文本。例如，假设一个表单元格中只有一个图像。这个图像可能实际在基线上，不过在某些浏览器中，基线下面的空间会导致图像下出现一段空白。另外一些浏览器则会把图像"紧包"在表单元格中，所以不会出现空白。
解决方案:[http://developer.mozilla.org/en/docs/Images._Tables._and_Mysterious_Gaps](http://developer.mozilla.org/en/docs/Images._Tables._and_Mysterious_Gaps "解决方案")

#### 上标和下标 ####
vertical-align:sub声明会使一个元素变成下标，这意味着其基线(或者如果这是一个替换元素，则是其底端)相对于其父元素的基线降低。规范并没有定义元素降低的距离，所以对于不同的用户代理，这个距离可能有所不同。

super刚好和sub相反;它将元素的基线(或替换元素的底端)相对于父元素的基线升高。同样地，文本升高的距离取决于具体的用户代理。

注意:值sub和super不会改变元素的字体大小，所以下标或上标文本不会变小(或变大)。相反，下标或上标元素中的所有恩本默认地都应当与父元素中的文本大小相同。

#### 底端对齐 ####
vertical-align:bottom将元素行内框的底端与行框的底端对齐。

vertical-align:text-bottom是指行内文本的底端。替换元素或任何其他类型的非文本元素会忽略这个值。对于这些元素，将考虑一个"默认"的文本框。这个默认框由父元素的font-size得到。要对齐元素的行内框底端再与这个默认文本框的底端对齐。

#### 顶端对齐 ####
vertical-align:top的效果与bottom刚好相反。类似地，vertical-align:text-top则与text-bottom的作用相反。

#### 居中对齐 ####
还有一个值middle，它往往（但并不总是）应用于图像。middle会把行内元素框的中点与父元素基线上方0.5ex处的一个点对齐，这里的1ex相对于父元素的font-size定义。

#### 百分数 ####
使用百分数不能模仿图像的align="middle"对齐。相反，如果为vertical-align设置一个百分数，会把元素的基线升高或降低指定的量(你指定的百分数要计算为该元素line-height的百分数，而不是相对于其父元素的line-height)。正百分数值会使元素升高，负值则会使其降低。取决于文本的升高或降低，可能看上去它放在了相邻的行上。


#### 长度对齐 ####
根据指定长度垂直对齐。vertical-align很明确：它把一个元素升高或降低指定的距离。因此，vertical-align:5px；会把一个元素与对齐前相比上升5像素。负长度值会使元素下降。这种简单的对齐形式在CSS1中不存在，但在CSS2中已经增加。

字间隔和字母间隔
## <font color="#ff995" face="微软雅黑" size="3">**word-spacing**</font> ##
#### 字间隔 ####
word-spacing属性接受一个正长度值或负长度值。这个长度会增加到字之间的标准间隔。实际上，word-spacing用于修改字间间隔。因此，默认值normal与设置值为0是一样的。

| 值 | `<length> normal inherit` |
| ------ | :------ |
| 初始值 | normal |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 百分数 | 相对于元素的line-height值 |
| 计算值 | 对于normal，为绝对长度0；否则，是绝对长度|
| 说明 | 应用到表单元格时，只能识别baseline、top、middle和bottom等值 |

"字"可以是任何非空白字符组成的串，并由某种空白符包围。这个定义没有实际语义，它只是假设一个文档包含由一个或多个空白符包围的字。

## <font color="#ff995" face="微软雅黑" size="3">**letter-spacing**</font> ##
#### 字母间隔 ####

| 值 | `<length> normal inherit` |
| ------ | :------ |
| 初始值 | normal |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 对于长度值，为绝对长度；否则，为normal|

#### 间隔和对齐 ####
word-spacing的值可能受text-align属性值的影响。如果一个元素是两端对齐的，字母和字之间的空间可能会调整，以便文本在整行中刚好放下。这可能又会改变创作人员用word-spacing声明的字间隔。如果为letter-spacing指定一个长度值，字符间隔则不会受text-align影响，但是如果letter-spacing的值是normal，字符间的间隔就可能改变，以便将文本两端对齐。

一般地，一个元素的子元素会继承该元素的计算值。无法为word-spacing或letter-spacing定义一个可继承的缩放因子来取代计算值(像line-height那样)。

## <font color="#ff995" face="微软雅黑" size="3">**text-transform**</font> ##
#### 文本转换 ####

| 值 | `uppercase lowercase capitalize none inherit` |
| ------ | :------ |
| 初始值 | none |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 根据指定确定|

默认值none对文本不做任何改动，将使用源文档中原有的大小写。顾名思义，uppercase和lowcase将文本转换为全大写或全小写字符。最后，capitalize只对**每个**单词的首字母大写。

## <font color="#ff995" face="微软雅黑" size="3">**text-decoration**</font> ##
#### 文本装饰 ####
| 值 | `none underline overline line-through blink inherit` |
| ------ | :------ |
| 初始值 | none |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

underline会对元素加下划线，就像HTML中的U元素一样。overline的作用恰好相反，会在文本的顶端画一个上划线。值line-through则会在文本中间画一个贯穿线，这也称为贯穿文本。blink会让文本闪烁。