## HTML onafterprint 事件属性 ##
注释：在 IE 中，onafterprint 属性在打印对话框出现之前而不是之后发生。

### 定义和用法 ###
onafterprint 属性发生于用户设置页面打印并且打印对话框已出现之后。

提示：onafterprint 属性常与 onbeforeprint 属性一同使用。

## HTML onbeforeprint 事件属性 ##

onbeforeprint 属性在用户已设置页面打印之后立即触发，但是在打印对话框出现之前。

**提示：**onbeforeprint 属性常与 onafterprint 属性一同使用。


## HTML onload 事件属性 ##
onload 属性在对象已加载时触发。

onload 常用在 <body> 中，一旦完全加载所有内容（包括图像、脚本文件、CSS 文件等），就执行一段脚本。


## HTML onunload 事件属性 ##

onunload 属性会在页面下载时触发（或者浏览器窗口已关闭）。

onunload 在用户从页面导航离开时发生（通过点击链接、提交表单或者关闭浏览器窗口等等）。

注释：如果您重载页面，也会触发 unload 事件（以及 onload 事件）。