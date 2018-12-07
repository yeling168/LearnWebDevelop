address:大多数浏览器会在 address 元素前后添加折行。

根据 HTML5 规范，在没有其他合适标签更合适时，才应该把 `<b>` 标签作为最后的选项。HTML5 规范声明：应该使用 `<h1> - <h6>` 来表示标题，使用 `<em>` 标签来表示强调的文本，应该使用` <strong>` 标签来表示重要文本，应该使用 `<mark>` 标签来表示标注的/突出显示的文本。

`<blockquote>` 标签定义块引用。

如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交 `<button> 与 <button/>` 之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用 input 元素来创建按钮。

在 button 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 input 元素创建的按钮之间的不同之处。

请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值
是 "submit"。
