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
| GrayText | 置灰（禁用）|