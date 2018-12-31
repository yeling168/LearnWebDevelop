#### 系统字体 ####

caption--由标题控件使用的字体样式，如按钮和下拉控件

icon--操作系统图标标签所用的字体样式，如硬盘驱动器、文件夹和文件图标

menu--下拉菜单和菜单列表中文本使用的字体样式

message-box--对话框中文本使用的字体样式

small-caption--由标题小控件的标签使用的字体样式

status-bar--窗口状态条中文本使用的字体样式

有一点很重要，要认识到这些值只能用于font属性，它们本身就是简写形式。假设一个用户的操作系统将图标标签显示为10像素的Geneva字体，而且没有加粗，没有斜体，也没有小型大写字母效果。这意味着以下3个规则都是等价的。

        body {
            font: icon;
        }
        body{
            font: 10px Geneva;
        }
        body{
            font-weight: normal;
            font-style: normal;
            font-variant: normal;
            font-size: 10px;
            font-family: Geneva;
        }


#### 系统颜色 ####
例如，可以通过以下声明让一个元素的背景与用户桌面的颜色一致
  
    div#test{background-color:Background;}

默认，可以如下为文档指定系统的默认文本颜色和背景颜色

    body{color:WindowText;background:Window;}

#### 系统颜色关键字 ####

| 值 | 说明 |
| ------ | ------ |
| ActiveBorder | 这种颜色应用于活动窗口的外边框("活动窗口边框")中的第一个颜色 |
| ActiveCaption | 当前活动窗口标题的背景色("活动标题栏"中的第一个颜色) |
| AppWorkspace | 支持多个文档的应用中使用的背景色，例如Microsoft Word中打开文档"后面"的背景色("应用背景")中的第一个颜色。 |
| Background | 桌面的背景色("桌面"中的第一个颜色)。|
| ButtonFace | 三维按钮"面"上使用的颜色。|
| ButtonHighlight | 三维显示元素背离虚拟光源的边沿上的亮色。因此，如果虚拟光源位于左上角，这就是显示元素右边界和下边界上使用的亮色。|
| ButtonShadow | 三维显示元素的阴影色。|
| ButtonText | "按下"按钮上文本的颜色("3D对象"中的字体颜色。)|
| CaptionText | 标题、大小框中的文本以及滚动箭头框中符号的颜色（"活动标题栏"中的字体颜色）。|
| GrayText | 置灰（禁用）文本。如果当前显示驱动程序不支持纯灰色，这个关键字解释为#000。|
| Highlight | 控件中选中项的颜色("选中项"中的第一个颜色)。|
| HighlightText|控件中选中项的文本颜色("选中项"中的字体颜色。) |
| InactiveBorder |应用于不活动窗口的外边框 |
| InactiveCaption | 不活动窗口的标题的背景色("不活动标题栏"的第一个颜色)。|
| InactiveCaptionText |不活动标题中的文本颜色("不活动标题栏"的字体颜色)。 |
| InfoBackground  |工具提示中的文本颜色("工具提示"中的第一个颜色)。 |
| InfoText |工具提示中的文本颜色("工具提示"中的字体颜色)。 |
| Menu | 菜单背景的颜色("菜单"中的第一个颜色)。|
| MenuText | 菜单中的文本颜色("菜单"中的字体颜色)。|
| Scrollbar|滚动条的"灰色区域"。 |
| ThreeDDarkShadow |与三维显示元素的深阴影颜色相同。 |
| ThreeDFace |与三维显示元素的表面颜色相同。 |
| ThreeDHighlight |三维显示元素上的亮色。 |
| ThreeDHighShadow |三维显示元素上的浅色(面向光源边沿上的颜色)。 |
| ThreeDShadow |三维显示元素上的深阴影。 |
| Window |窗口的背景的颜色("窗口"中的第一个颜色)。 |
| WindowFrame |应用于窗口的框架的颜色。 |
| WindowText |窗口中的文本颜色("窗口"中的字体颜色)。 |

#### 光标 ####
## <font color="#ff995" face="微软雅黑" size="3">**cursor**</font> ##

| 值 | `<uri>、auto、default、pointer、crosshair、move、e-resize、ne-resize、nw-resize、n-resize、se-resize、sw-resize、s-resize、w-resize、text、wait、help、process、inherit` |
| ------ | ------ |
| 初始值 | auto |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 有 |
| 计算值 | 对于`<uri>`值，为绝对值；否则，根据指定确定|

默认值auto只表示用户代理应当确定最适合当前上下文的光标图标。这与default不同，后者要求图标是操作系统的默认光标。默认光标通常是一个箭头，不过也不一定，这取决于当前的计算环境。

#### 设置轮廓样式 ####

## <font color="#ff995" face="微软雅黑" size="3">**outline-style**</font> ##

| 值 | `none、dotted、dashed、solid、double、groove、ridge、inset、outset、inherit` |
| ------ | ------ |
| 初始值 | none |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

>这组样式关键字和边框样式关键字基本相同，其视觉效果也是一样的。只是少了一个关键字:hidden不是一个合法的轮廓样式，用户代理实际上要把它处理为none。这是有道理的，因为即使轮廓可见也不会影响布局。

#### 轮廓宽度 ####

## <font color="#ff995" face="微软雅黑" size="3">**outline-width**</font> ##

| 值 | `thin、medium、thick、<length>、inherit` |
| ------ | ------ |
| 初始值 | medium |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 绝对长度；如果轮廓样式是none或hidden，则为0.|

>如果你设置过边框的宽度，对这个关键字列表应该不陌生。outline-width与border-width之间唯一真正的区别是整个轮廓只能声明一个宽度(类似于轮廓样式)。因此，一个值中只允许一个关键字。

#### 设置轮廓颜色 ####

## <font color="#ff995" face="微软雅黑" size="3">**outline-color**</font> ##

| 值 | `<color>、invert、inherit` |
| ------ | ------ |
| 初始值 | invert(或用户代理特定的值；见正文说明) |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 根据指定确定|

>轮廓颜色有关键字invert，而且这是默认值。反色轮廓意味着要对轮廓所在的像素完成反色转换。
>invert导致对轮廓"后面"的像素完成反色转换，这个过程可以确保不论轮廓后面是什么都将可见。如果一个用户代理出于某种无法支持反色转换，则会使用元素的color计算值。

#### 汇总 ####

## <font color="#ff995" face="微软雅黑" size="3">**outline**</font> ##

| 值 | `<outline-color>、<outline-style>、<outline-width>` |
| ------ | ------ |
| 初始值 | 对简写属性未定义 |
| 应用于 | <font color="#ff995" face="微软雅黑" size="3">**所有元素**</font> |
| 继承性 | 无 |
| 计算值 | 见各个属性(outline-color等等)|