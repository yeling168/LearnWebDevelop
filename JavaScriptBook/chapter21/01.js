/**
 * 为了有用起见，像图片翻转这个月的效果需要较高响应度。这也意味着需要想办法来确保一些必要的图片要预提取，要浏览器缓存起来。
 * 客户端JavaScript定义了一个专用的API来达到这一目的:为了强制让图片缓存起来，首先利用Image()构造函数来创建一个屏幕
 * 外图片对象，之后，将该对象的src属性设置成期望的URL。由于图片元素并没有添加到文档中，因此，它是不可见的，但是浏览器还是
 * 会加载图片并将其缓存起来。这样一来，之后当设置成同样的URL来显示该屏幕内图片，它很快能从浏览器缓存中加载，而不需要再通过
 * 网络加载。
 */

 <script>(new Image()).src="images/help_rollover.gif"</script>
 <img src="images/help.gif" onmouseover="this.src='images/help_rollover.gif'" onmouseout="this.src='images/help.gif'"/>

 /**优雅的图片翻转实现方式 */
 /**
  * 要创建图片翻转效果，将此模块引入到HTML文件中
  * 然后在任意<img>元素上使用data-rollover属性来指定翻转图片的URL即可
  */
 onLoad(function(){//所有处理逻辑都在一个匿名函数中:不定义任何符号
    for(var i=0;i<document.images.length;i++){
        var img=document.images[i];
        var rollover=img.getAttribute("data-rollover");
        if(!rollover) continue;//跳过没有data-rollover属性的图片
        //确保将翻转的图片缓存起来
        (new image()).src=rollover;
        //定义一个属性来标识默认的图片URL
        img.setAttribute("data-rollout",img.src);
        //注册事件处理函数来创建翻转效果
        img.onmouseover=function(){
            this.src=this.getAttribute("data-rollover");
        };
        img.onmouseout=function(){
            this.src=this.getAttribute("data-rollout";)
        }
    }
 })