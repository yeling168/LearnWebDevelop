//设置Window对象的unload属性为一个函数
//该函数是事件处理程序:当文档加载完毕时调用它
window.onload=function(){
    //查找一个<form>元素
    var elt=document.getElementById("shipping_address");
    //注册事件处理程序函数
    //在表单提交之前调用它
    elt.onsubmit=function(){
        return validate(this);
    }
}

<button id="my button">click me</button>
<script>
    var b=document.getElementById("mybutton");
    b.onclick=function(){
        alert("Thanks for clicking me!");
    }
    b.addEventListener("click",function(){
        alert("Thanks again!");
    },false);
</script>

/**
 * 用"click"作为第一个参数调用addEventListener()不会影响onclick属性的值。在
 * 前面的代码中，单机按钮会产生两个alert()对话框。更重要的是，能通过多次调用
 * addEventListener()为同一个对象注册同一事件类型的多个处理程序函数。当对象上
 * 发生事件时，所有该事件类型的注册处理程序都会按照注册的顺序调用。使用相同的参数
 * 在用一个对象上多次调用addEventListener()是没用的，处理程序仍然只注册一次，同时
 * 重复调用也不会改变调用处理程序的顺序。
 */

/**
 * 相对addEventListener()的是removeEventListener()方法，它同样有三个参数，从对象
* 中删除事件处理程序函数而非添加，它常用于临时注册事件处理程序，然后不久就删除它。
* 例如，当你要得到mousedown事件时，可以为mousemove和mouseup事件注册临时捕获事件
* 处理程序来看看用户是否拖动鼠标。当mouseup事件到来后，可以注销这些事件处理程序，在
* 这种情况下，事件处理程序移除代码如下所示
*/
 document.removeEventListener("mousemove",handleMouseMove,true);
 document.removeEventListener("mouseup",handleMouseUp,true);
/**鼠标事件 */
/**
 * 当用户在文档上移动或单击鼠标时都会产生鼠标事件。这些事件在鼠标指针所对应的最深嵌套元素上触发
 * 但它们会冒泡直到文档最顶层。
 */

/**attachEvent() */
/**IE9之前的IE不支持addEventListener()和removeEventListener().IE5及以后版本定义了类似的
 * 的方法attachEvent()和detachEvent().
 * attachEvent()和detachEvent()方法的工作原理与addEventListener()和removeEventListener()
 * 类似，但有如下例外:
 */

/**
 * 因为IE事件模型不支持事件捕获，所以attachEvent()和detachEvent()要求只有两个参数:事件类型和处理程序函数。
 * 
 * IE方法的第一个参数使用了带"on"前缀的事件处理程序属性名，而非没有前缀的事件类型。
 * 例如，当给addEventListener()传递"click"时，要给attachEvent()传递"onclick".
 * 
 * attachEvent()允许相同的事件处理程序函数注册多次。当特定的事件类型发生时，注册函数的调用次数和注册次数一样。
 */

/**经常可以看到的事件处理程序注册代码是在支持addEventListener()的浏览器中就调用它，否则就用attachEvent() */
var b=document.getElementById("mybutton");
var handler=function(){
    alert("Thanks!");
}
if(b.addEventListener){
    b.addEventListener("click",handler,false);
}else if(b.attachEvent){
    b.attachEvent("onclick",handler);
}

/**
 * 一旦注册了事件处理程序，浏览器就会在指定对象上发生指定类型事件时自动调用它。
 */

/**
 * 通常调用事件处理程序时把事件对象作为它们的一个参数(有一个例外)。事件对象的属性提供了有关事件的详细信息。
 */

/**
 * 在IE8及以前版本中，通过设置属性注册事件处理程序，当调用它们时并未传递事件对象。取而代之，需要通过
 * 全局对象window.event来获得事件对象。
 */
function handler(event){
    event||window.event;
    //处理程序代码出现在这里
}

/**
 * 向使用attachEvent()注册的事件处理程序传递事件对象，但它们也能使用window.event
 */

/**
 * 当通过设置属性注册事件处理程序时，这看起来好像是在文档上定义了新方法
 */
e.onclick=function(){
    /**处理程序代码 */
}

/**
 * 事件处理程序在事件目标上定义，所以它们作为这个对象的方法来调用并不出人意料。也就是说，在事件处理程序内，this关键字指的是事件目标。
 */

/**
 * 甚至当使用addEventListener()注册时，调用的处理程序使用目标作为它们的this值。但是，对于attachment()
 * 来讲这是不对的：使用attachment()注册的处理程序作为函数调用，它们的this值是全局(Window)对象
 * 可以用如下代码来解决问题
 */

/**
 * 在指定的事件目标上注册用于处理指定类型事件的指定处理程序函数
 * 确保处理程序一直作为事件目标的方法调用
 */

function addEvent(target,type,handler){
    if(target.addEventListener){
        target.addEventListener(type,handler,false);
    }else{
        target.attachEvent("on"+type,function(event){
            //把处理程序作为事件目标的方法调用
            //传递事件对象
            return handler.call(target,event);
        })
    }
}

/**
 * 在支持addEventListener()的浏览器中，也能通过调用事件对象的preventDefault()方法取消事件的默认操作。不过，在IE9之前的IE中，可以
 * 通过设置事件对象的returnValue属性为false来达到同样的效果。下面的代码假设一个事件处理程序，它使用全部三种取消技术
 */
function cancelHandler(event){
    var event=event||window.event;//用于IE
    /**这里是处理事件的代码 */
    //现在取消事件相关的默认行为
    if(event.preventDefault){
        event.preventDefault();//标准技术
    }
    if(event.returnValue){
        event.returnValue=false;//IE9之前
    }
    return false;//用于处理使用对象属性注册的处理程序
}

/**
 * 当前的DOM事件模型草案定义了Event对象属性defaultPrevented.它尚未得到广泛支持，但其目的是常态下这个属性是false，但如果preventDefault()
 * 被调用则它将变成true.
 */

/**
 * 取消事件相关的默认操作只是事件取消中的一种，我们也能取消事件传播。在支持addEventListener()的浏览器中，可以调用事件对象的一个stopPropagation()
 * 方法阻止事件的继续传播。如果在同一对象上定义了其他处理程序，剩下的处理程序将依旧被调用，但调用stopPropagation()之后任何其他对象上的事件处理程序将
 * 不会被调用。stopPropagation()方法可以在事件传播期间的任何时间调用，它能工作在捕获期阶段，事件目标本身中和冒泡阶段。
 */

/**
 * IE9之前的IE不支持stopPropagation()方法。相反，IE事件对象有一个cancelBubble()属性，设置这个属性为true能阻止事件进一步传播。
 * (IE及之前版本不支持事件传播的捕获阶段，所以冒泡是唯一待取消事件的传播。)
 */

/**
 * 当前DOM事件规范草案在Event对象上定义另一个方法，命名为stopImmediatePropagation()。类似stopPropagation()，这个方法阻止了任何
 * 其他对象的事件传播，但也阻止了在相同对象上注册的任何其他事件处理程序的调用。
 */

 /**
  * 当文档加载解析完毕且所有延迟(deferred)脚本都执行完毕时会触发DOMContentLoaded事件，此时图片和异步
  * (async)脚本可能依旧在加载，但是文档已经为操作准备就绪了。
  */

/**
 * document.readyState属性随着文档加载过程而变。在IE中，每次状态改变都伴随着Document对象上
 * readystatechange事件，当IE接收到"complete"状态时使用这个事件来做判断是可行的。
 */

 //当文档准备就绪时调用函数
 /**
  * 传递函数给whenReady()，当文档解析完毕且为操作准备就绪时，
  * 函数将作为文档对象的方法调用
  * DOMContentLoaded、readystatechange或load事件发生时会触发注册函数
  * 一旦文档准备就绪，所有函数都将被调用，任何传递给whenReady()的函数都将立即调用
  */
 var whenReady=(function(){//这个函数返回whenReady()函数
    var funcs=[];//当获得事件时，要运行的函数
    var ready=false;//当触发事件处理程序时，切换到true
    //当文档准备就绪时，调用事件处理程序
    function handler(e){
        //如果已经运行过一次，只需要返回
        if(ready) return;
        //如果发生readystatechange事件
        //但其状态不是"complete"的话，那么文档尚未准备好
        if(e.type==="readystatechange"&&document.readyState!=="complete") return;
        //运行所有注册函数
        //注意每次都要计算funcs.length,
        //以防这些函数的调用可能会导致注册更多的函数
        for(var i=0;i<funcs.length;i++){
            funcs[i].call(document);
        }
        //现在设置ready标识为true，并移除所有函数
        ready=true;
        funcs=null;
    }
    //为接收到的任何事件注册处理程序
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded",handler,false);
        document.addEventListener("readystatechange",handler,false);
        window.addEventListener("load",handler,false);
    }else if(document.attachEvent){
        document.attachEvent("onreadystatechange",handler);
        window.attachEvent("onload",handler);
    }
    //返回whenReady()函数
    return function whenReady(f){
        if(ready){
            f.call(document);//若准备完毕，只需要运行它
        }else{
            funcs.push(f);//否则，加入队列等候
        }
    }
 })

 //鼠标事件
 /**
  * 与鼠标相关的事件有不少。除"mouseenter"和"mouseleave"外的所有鼠标事件都能冒泡。
  * 链接和提交按钮上的click事件都有默认操作且能够阻止。可以取消上下文菜单事件来阻止
  * 显示上下文菜单，但一些浏览器有配置选项导致不能取消上下文菜单。
  */

/**
 * click:高级事件，当用户按下并释放鼠标按键或其他方式"激活"元素时触发
 * 
 * contextmenu:可以取消的事件，当上下文菜单即将出现时触发。当浏览器在鼠标右击时显示上下文菜单，
 * 所以这个事件也能像click事件那样使用。
 * 
 * dbclick:当用户双击鼠标时触发
 * 
 * mousedown:当用户按下鼠标按键时触发
 * 
 * mouseup:当用户释放鼠标按键时触发
 * 
 * mousemove:当用户移动鼠标时触发
 * 
 * mouseover:当鼠标进入元素时触发。relatedTarget(在IE中是fromElement)指的是
 * 鼠标来自的元素
 * 
 * mouseout:当鼠标离开元素时触发。related(在IE中是toElement)指的是鼠标要去往的元素
 * 
 * mouseenter:类似"mouseover"，但不冒泡。IE将其引入，html5将其标准化，但尚未广泛实现
 * 
 * mouseleave:类似"mouseout"，但不冒泡。IE将其引入，html5将其标准化，但尚未广泛实现。
 */

 /**
  * 传递给鼠标事件处理程序的事件对象有clientX和clientY属性，它们指定了鼠标指针相对于
  * 包含窗口的坐标。加入窗口的滚动偏移量就可以把鼠标位置转换成文档坐标。
  */

/**
 * altKey、ctrlKey、metaKey和shiftKey属性指定了当事件发生时是否有各种键盘辅助键按下。
 * 例如:这让你能够区分普通单击和按着Shift键的单击。
 */

 /**
  * button属性指定当事件发生时哪个鼠标按键按下，但是，不用浏览器给这个属性赋不同的值，
  * 所以它很难用，更多详细信息请看Event参考页。某些浏览器只在单击左键时才触发click事件，
  * 所以如果需要探测其他键的单击需要监听mousedown和mouseup事件。通常contextmenu事件发生
  * 的标志是右击，但如上所述，当事件发生时可能无法阻止上下文菜单的显示。
  */

  /**
   * 鼠标事件对象有一些其他的鼠标特定属性，但它们并不经常使用。
   */

/**
 * IE事件模型无法想标准模型那样提供事件捕获，但它在这种情况下有一个专门用户捕获鼠标事件的setCapture()方法
 */

 /*拖动文档元素*/
/**
 * Drag.js:拖动绝对定位的HTML元素
 * 这个模块定义了一个drag()函数，它用于mousedown事件处理程序的调用
 * 随后的mousdmove事件将移动指定元素，mouseup事件将终止拖动
 * 这些实现能同标准和IE两种事件模型一起工作
 * 它需要用到本书其他地方(见第15章比较)介绍的getScrollOffsets()方法
 * 
 * 参数
 * 
 * elementToDrag:接受mousedown事件的元素或其他包含元素
 * 它必须是绝对定位的元素
 * 它的style.left和style.top值将随着用户的拖动而改变
 * 
 * event:mousedown事件对象
 */

 function drag(elementToDrag,event){
     //初始鼠标位置，转换为文档坐标
     var scroll=getScrollOffsets();//来自其他地方的工具函数
     var startX=event.clientX+scroll.x;
     var startY=event.clientY+scroll.y;

     //在文档坐标下，待拖动元素的初始位置
     //因为elementToDrag是绝对定位的
     //所以我们可以假设它的offsetParent就是文档的body元素
     //offsetLeft:1)如果父辈元素中有定位的元素，那么就返回距离当前元素最近的定位元素边缘的距离。
     //2)如果父辈元素中没有定位元素，那么就返回相对于body左边缘距离。
     var origX=elementToDrag.offsetLeft;
     var origY=elementToDrag.offsetTop;
     //计算mousedown事件和元素左上角之间的距离
     var deltaX=startX-origX;
     var deltaY=startY-origY;
     //注册用于响应接着mousedown事件发生的mousemove和mouseup事件的事件处理程序
     if(document.addEventListener){//标准事件模型
        //在document对象上注册捕获事件处理程序(第三个参数传true，见p465)
        document.addEventListener("mousemove",moveHandler,true);
        document.addEventListener("mouseup",upHandler,true)
     }else if(document.attachEvent){
        //用于IE5~8的IE事件模型
        //IE事件模型不支持事件捕获，所以只有两个参数，事件类型和处理程序函数
        //但它在这种情况下有一个专门用于捕获鼠标事件的setCapture()方法
        elementToDrag.setCapture();
        elementToDrag.attachEvent("onmousemove",moveHandler);
        elementToDrag.attachEvent("onmouseup",upHandler);
        //作为mouseup事件看待鼠标捕获的丢失
        elementToDrag.attachEvent("onlosecapture",upHandler);
     } 
     //我们处理了这个事件，不让任何其他元素看到它
     if(event.stopPropagation){
         event.stopPropagation();//标准模型
     }else{
         //IE事件对象有一个cancelBubble属性，设置这个属性为true能阻止事件进一步传播
         event.cancelBubble=true;//IE
     }
     //现在阻止任何默认操作
     if(event.preventDefault){
         //标准模型
         event.preventDefault();
     }else{
         //在IE9之前，可以设置事件对象的returnValue属性为false来达到同样的效果
         event.returnValue=false;//IE
     }
     /**
      * 当元素正在被拖动时，这就是捕获mousemove事件的处理程序
      * 它用于移动这个元素
      */
     function moveHandler(e){
         if(!e){
             e=window.event;//IE事件模型
         }
         //移动这个元素到当前鼠标位置
         //通过滚动条的位置和初始单击的偏移量来调整
         var scroll=getScrollOffsets();
         elementToDrag.style.left=(e.clientX+scroll.x-deltaX)+"px";
         elementToDrag.style.top=(e.clientY+scroll.y-deltaY)+"px";
         //同时不让任何其他元素看到这个事件
         if(e.stopPropagation){
             e.stopPropagation();//标准
         }else{
             e.cancelBubble=true;//IE事件对象有一个cancelBubble属性，设置这个属性为true能阻止事件进一步传播
         }
     }
     /**
      * 这是捕获在拖动结束时发生的最终mouseup事件的处理程序
      */
     function upHandler(e){
        if(!e){
            e=window.event;
        }
        //注销捕获事件处理程序
        if(document.removeEventListener){
            document.removeEventListener("mouseup",upHandler,true);
            document.removeEventListener("mousemove",moveHandler,true);
        }else if(document.detachEvent){
            //IE 5+事件模型
            elementToDrag.detachEvent("onlosecapture",upHandler);
            elementToDrag.detachEvent("onmouseup",upHandler);
            elementToDrag.detachEvent("onmousemove",moveHandler);
            //IE事件模型无法像标准事件模型那样提供事件捕获，因此有setCapture()方法
            elementToDrag.releaseCapture();
        }
        //并且不让事件进一步传播
        if(e.stopPropagation){
            e.stopPropagation();//标准
        }else{
            e.cancelBubble=true;//IE事件对象有一个cancelBubble属性，设置这个属性为true能阻止事件进一步传播
        }
     }
 }

 /**如何使用drag() */
 <script src="getScrollOffsets.js"></script>
 <script src="Drag.js"></script>
 //要拖动的元素
 <div style="position:absolute;left:100px;top:100px;width:250px;background-color:white;border:solid black;">
    <div style="background-color:gray;border-bottom:dotted black;padding:3px;font-family:sans-serif;font-weight:bold" onmousedown="drag(this.parentNode,event)">
    </div>
    <p>这是一个测试。测试中，测试中，测试中</p><p>测试</p><p>测试</p>
 </div>
 
 /**
  * 除Firefox之外的所有浏览器都支持"mousewheel"事件，但Firefox使用"DOMMouseScroll"，而3级DOM事件规范建议使用事件名"wheel"
  * 替代"mousewheel"。除了事件名的不同，向各种传递事件对象也使用了不同的属性名来指定滚轮发生的旋转量。
  */

/**
 * 传递给"mousewheel"处理程序的事件对象有wheelDelta属性，其指定用户滚动滚轮有多远。远离用户方向的一次鼠标滚轮"单击"的wheelDelta
 * 值通常是120，而接近用户方向的一次"单击"的值是-120.在Safari和Chrome中，为了支持使用二维轨迹球而非一维滚轮的Apple鼠标，除了wheelDelta
 * 属性外，事件对象还有wheelDeltaX和wheelDeltaY，而wheelDelta和wheelDeltaY的值一直相同。
 */

 /**
  * 在Firefox中，可以使用非标准的DOMMouseScroll事件取代mousewheel，使用事件对象的detail属性取代wheelDelta。但是，detail属性值的
  * 缩放比率和正负符号不同于wheelDelta，detail值乘以-40和wheelDelta值相等。
  */

  /**
   * 目前，3级DOM事件规范草案标准定义了wheel事件作为mousewheel和DOMMouseScroll的标准版本。传递给wheel事件处理程序的事件对象将有deltaX、
   * deltaY和deltaZ属性，以指定三个维度的旋转。这些值必须乘以-120才和mousewheel事件的wheelDelta值和正负符号相匹配。
   */

   //处理鼠标滚轮事件
   /**
    * 把内容元素装入到一个指定大小(最小是50*50)的窗体或视口内
    * 可选参数contentX和contentY指定内容相对于窗体的初始偏移量
    * (如果指定，它们必须<=0)
    * 这个窗体有mousewheel事件处理程序
    * 它允许用户平移元素和缩放窗体
    */
   function enclose(content,framewidth,frameheight,contentX,contentY){
       //这些参数不仅仅是初始值
       //它们保存当前状态，能被mousewheel处理程序使用和修改
       framewidth=Math.max(framewidth,50);
       frameheight=Math.max(frameheight,50);
       contentX=Math.min(contentX,0)||0;
       contentY=Math.min(contentY,0)||0;
       //创建frame元素，且设置CSS类名和样式
       var frame=document.createElement("div");
       frame.className="enclosure";
       frame.style.width=framewidth+"px";
       frame.style.height=frameheight+"px";
       frame.style.overflow="hidden";
       frame.style.boxSizing="border-box";
       frame.style.webkitBoxSizing="border-box";
       frame.style.MozBoxSizing="border-box";
       //把frame放入文档中，并把内容移入frame中
       content.parentNode.insertBefore(frame,content);
       frame.appendChild(content);

       //确定元素相对于frame位置
       content.style.position="relative";
       content.style.left=contentX+"px";
       content.style.top=contentY+"px";
       //我们需要针对下面一些特定浏览器怪癖进行处理
       var isMacWebkit=(navigator.userAgent.indexOf("Macintosh")!==-1&&navigator.userAgent.indexOf("WebKit")!==-1);
       var isFirefox=(navigator.userAgent.indexOf("Gecko")!==-1);
       //注册mousewheel事件处理程序
       frame.onwheel=wheelHandler;//未来浏览器
       frame.onmousewheel=wheelHandler;//大多数当前浏览器
       if(isFirefox){
           //仅Firefox
           frame.addEventListener("DOMMouseScroll",wheelHandler,false);
       }
       function wheelHandler(event){
           var e=event||window.event;//标准或IE事件对象
           //查找wheel事件对象，mousewheel事件对象(包括2D和1D形式);
           //和Firefox的DOMMouseScroll事件对象的属性
           //从事件对象中提取旋转量
           //绽放delta以便一次鼠标滚轮"单击"相对于屏幕的缩放增量是30像素
           //如果未来浏览器在同一事件上同时触发"wheel"和"mousewheel"
           //这里最终会重复计算
           //所以，希望取消wheel事件将阻止mousewheel事件的产生
           var deltaX=e.deltaX*-30|| //wheel事件
                      e.wheelDeltaX/4||//mousewheel
                      0;//属性未定义
           var deltaY=e.deltaY*-30||//wheel事件
                      e.wheelDeltaY/4||
                      (e.wheelDeltaY===undefined&&//如果没有2D属性,
                                    e.wheelDelta/4)||//那么就用1D的滚轮事件
                                    e.detail*-10||//Firefox的DOMMouseScroll事件
                                    0;//属性未定义
            //在大多数浏览器中，每次鼠标滚轮单击对应的delta是120
            //但是，在MAC中，鼠标滚轮似乎对速度更敏感
            //其delta值通常要大120倍，使用Apple鼠标至少如此
            //使用浏览器测试解决这个问题    
            if(isMacWebkit){
                deltaX /=30;
                deltaY /=30;
            }
            //如果在Firefox(未来版本)中得到mousewheel或wheel事件
            //那么就不再需要DOMMouseScroll
            if(isFirefox&&e.type!=="DOMMouseScroll"){
                frame.removeEventListener("DOMMouseScroll",wheelHandler,false);
            }                               
            //获取内容元素的当前尺寸
            var contentbox=content.getBoundingClientRect();
            var contentwidth=content.right-content.left;
            var contentheight=content.bottom-contentbox.top;
            if(e.altkey){//如果按下Alt键，就可以调整frame大小
                if(deltaX){
                    framewidth-=deltaX;//新宽度，但不能比内容大
                    framewidth=Math.min(framewidth,contentwidth);
                    framewidth=Math.max(framewidth,50);//但也不能比50小
                    frame.style.width=framewidth+"px";//在frame上设置它
                }
                if(deltaY){
                    frameheight-=deltaY;//同样的操作对frame的高度做一遍
                    frameheight=Math.min(frameheight,contentheight);
                    frameheight=Math.max(frameheight-deltaY,50);
                    frame.style.height=frameheight+"px";
                }
            }else{
                //没有按下Alt辅助键，就可以平移frame中的内容
                if(deltaX){
                    //不能再滚动了
                    var minoffset=Math.min(framewidth-contentwidth,0);
                    //把deltaX添加到contentX中，但不能小于minoffset
                    contentX=Math.min(contentX+deltaX,minoffset);
                    contentX=Math.min(contentX,0);//或比0大
                    content.style.left=contentX+"px";//设置新的偏移量
                }
                if(deltaY){
                    var minoffset=Math.min(frameheight-contentheight,0);
                    //把deltaY添加到contentY,但不能小于minoffset
                    contentY=Math.max(contentY+deltaY,minoffset);
                    contentY=Math.min(contentY,0);//或比0大
                    content.style.top=contentY+"px";//设置新的偏移量
                }
            }
            //不让这个事件冒泡，阻止任何默认操作
            //这会阻止浏览器使用mousewheel事件滚动文档
            //希望用于相同的鼠标滚动
            //调用wheel事件上的preventDefault()也能阻止mousewheel事件的产生
            if(e.preventDefault){
                e.preventDefault();
            }
            if(e.stopPropagation){
                e.stopPropagation();
            }
            e.cancelBubble=true;//IE9之前的IE不支持stopPropagation()方法。相反，IE事件对象有一个cancelBubble()属性，设置这个属性为true能阻止事件进一步传播
            e.returnValue=false;//通过设置事件对象的returnValue属性为false来达到同样的效果,取消默认操作
            return false;
       }
   }

/**
 * 使用propertychange事件探测文本输入
 */
function forceToUpperCase(element){
    if(typeof element==="string"){
        element=document.getElementById(element);
    }
    element.oninput=upcase;
    element.onpropertychange=upcaseOnPropertyChange;
    //简易案例:用于input事件的处理程序
    function upcase(event){
        this.value=this.value.toUpperCase();
    }
    //疑难案例：用于propertychange事件的处理程序
    function upcaseOnPropertyChange(event){
        var e=event||window.event;
        //如果value属性发生改变
        if(e.propertyName==="value"){
            //移除onpropertychange处理程序，避免循环调用
            this.onpropertychange=null;
            //把值都变成大写
            this.value=this.value.toUpperCase();
            //然后恢复原来的propertychange处理程序
            this.onpropertychange=upcaseOnPropertyChange;
        }
    }
}

/**
 * Keymap.js:绑定键盘事件和处理程序函数
 * 
 * 这个模块定义一个Keymap类
 * 这个类的实例表示按键标识符(下面有定义)到处理程序函数的映射
 * Keymap能配置到HTML元素上以处理keydown事件
 * 当此类事件发生时，keymap会使用它的映射来调用合适的处理程序
 * 
 * 当创建keymap时，
 * 能传入一个JavaScript对象，它表示keymap绑定的初始设置
 * 对象的属性名是按键标识符，而属性值是处理程序的函数
 * 在创建Keymap之后
 * 通过给bind()方法传入按键标识符和处理程序函数可以添加一个新绑定
 * 能给unbind()方法传入按键标识符来移除绑定
 * 
 * 通过给Keymap的install()方法传入像document对象那样的HTML元素，然后就可以使用它
 * install()方法给指定的对象添加onkeydown事件处理程序
 * 当调用这个处理程序时
 * 它判断按下键的键标识符
 * 如果有这个按键标识符的任何绑定，就调用对应的处理程序函数
 * 一个Keymap可以在多个HTML元素上配置
 * 
 * 按键标识符
 * 
 * 按键标识符是一个区分大小写的字符串
 * 它表示按键加上同一时刻按下的辅助键
 * 按键的名字通常是按键上的字符(不会变)
 * 法定的键名包括"A"、"7"、"F2"、"PageUp"、"Left"、"Backspace"和"Esc"
 * 
 * 请参阅模块的Keymap.keyCodeToKeyName对象中的键名列表
 * 这里有3级DOM规范定义的键名子集
 * 并且当实现时这个类将使用事件对象的key属性
 * 
 * 按键标识符也可以包含辅助键前缀
 * 这些前缀是Alt、Ctrl、Meta和Shift
 * 它们区分大小写，且必须使用空格、下划线、连字符或"+"来和按键名或彼此分开
 * 例如:"SHIFT+A"、"Alt_F2"、"meta-v"和"ctrl alt left"
 * 在Mac中，Meta是Command键，alt是Option键
 * 一些浏览器把Windows键映射到Meta辅助键
 * 
 * 处理程序函数
 * 
 * 处理程序在配置keymap的文档或文档元素上作为其方法调用
 * 并传入两个参数:
 * 1)keydown事件的事件对象
 * 2)按下的按键的标识符
 * 处理程序的返回值就是keydown处理程序的返回值
 * 如果处理程序函数返回false
 * Keymap将停止冒泡并取消和keydown事件相关的默认操作
 * 
 * 限制
 * 
 * 在所有按键上绑定一个事件处理函数的不可能的
 * 操作系统会限制一些按键序列(例如，Alt+F4)
 * 而浏览器本身也可能限制其他一些按键序列(比如:Ctrl+S)
 * 这些代码受限于浏览器、OS和本地设置。功能键和有辅助键的功能键工作得很好
 * 而没有辅助键的字母数字键也工作得很好
 * Ctrl和Alt与字母键盘键的结合非常强健
 * 
 * 在美国标准键盘布局上
 * 能够支持大多数不需要Shift键的标点字符(`=[];',./\但不包括连字符)
 * 但是它们不特别适合其他键盘布局，应该避免
 */

//这是构造函数
function Keymap(bindings){
    this.map={};//定义按键标识符->处理程序映射
    if(bindings){//给它复制初始绑定
        for(name in bindings){
            this.bind(name,bindings[name]);
        }
    }
}

//绑定指定的按键标识符和指定的处理程序函数
Keymap.prototype.bind=function(key,func){
    this.map[Keymap.normalize(key)]=func;
}

//删除指定按键标识符的绑定
Keymap.prototype.unbind=function(key){
    delete this.map[Keymap.normalize];
}

//在指定HTML元素上配置Keymap
Keymap.prototype.install=function(element){
    //这里事件处理函数
    var keymap=this;
    function handler(event){
        return keymap.dispatch(event,element);
    }
    //现在安装它
    if(element.addEventListener){
        element.addEventListener("keydown",handler,false);
    }else if(element.attachEvent){
        element.attachEvent("onkeydown",handler);
    }
};

//这个方法基于keymap绑定分派按键事件
Keymap.prototype.dispatch=function(event,element){
    //开始没有辅助键和键名
    var modifiers="";
    var keyname=null;
    //按照标准的小写字母顺序构建辅助键字符串
    if(event.altkey) modifiers+="alt_";
    if(event.ctrlkey) modifiers+="ctrl_";
    if(event.metakey) modifiers+="meta_";
    if(event.shiftkey) modifiers+="shift_";

    //如果实现3级DOM规范的key属性，获取keyname很容易
    if(event.key){
        keyname=event.key;
    }else if(event.keyIdentifier&&event.keyIdentifier.substring(0,2)!=="U+"){
        //在Safari和Chrome上用keyIdentifier获取功能键键名
        keyname=event.keyIdentifier;
    }else{
        //否则，使用keyCode属性和后面编码到键名的映射
        keyname=Keymap.keyCodeToKeyName[event.keyCode];
    }
    //现在查看按键标识符是否绑定了任何东西
    var handler=this.map[keyid];
    if(handler){
        //如果这个键有处理程序，调用它
        //调用处理程序函数
        var retval=handler.call(element,event,keyid);
        //如果处理程序返回false,取消默认操作并阻止冒泡
        if(retval===false){
            if(event.stopPropagation){
                event.stopPropagation();//DOM模型
            }else{
                event.cancelBubble=true;//IE模型
            }
            if(event.preventDefault){
                event.preventDefault();//DOM
            }else{
                event.returnValue=false;//IE
            }
        }
        //返回处理程序的返回值
        return retval;
    }
}

//用于把按键标识符转换成标准形式的工具函数
//在非Mac硬件，我们这里把"meta"映射到"ctrl"
//这样在Mac中"Meta+C"将变成"Command+C",其他都是"Ctrl+C"
Keymap.normalize=function(keyid){
    keyid=keyid.toLowerCase();//一切都小写
    var words=keyid.split(/\s+|[\-+_]/);//分割辅助键和键名
    var ketname=words.pop();//键名是最后一个
    keyname=keymap.aliases[keyname]||keyname;//它是别名吗？
    words.sort();//排序剩下的辅助键
    words.push(keyname);//添加到序列号名字后面
    return words.join("_");//把它们拼接起来
}

Keymap.aliases={
    "escape":"esc",//把按键的常见别名映射到它们的"正式名"
    "delete":"del",//键名使用3级DOM规范的定义和后面的编码到键名映射
    "return":"enter",//所有的键和值都必须小写
    "ctrl":"control",
    "space":"spacebar",
    "ins":"insert"
}

//传统的keydown事件对象的keyCode属性是不标准的
//但下面的值似乎可以在大多数浏览器和OS中可行
Keymap.keyCodeToKeyName={
    //使用词或方向键的按键
    8:"Backspace", 9:"Tab", 13:"Enter", 16:"Shift", 17:"Control", 18:"Alt",
    19:"Pause", 20:"CapsLock", 27:"Esc", 32:"Spacebar", 33:"PageUp",  
    34:"PageDown", 35:"End", 36:"Home", 37:"Left", 38:"Up", 39:"Right",
    40:"Down", 45:"Insert", 46:"Del",

    //主键盘(非数字小键盘)上的数字键
    48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",

    //字母按键，注意我们不区分大小写
    65:"A", 66:"B", 67:"C", 68:"D", 69:"E", 70:"F", 71:"G", 72:"H", 73:"I",
    74:"J", 75:"K", 76:"L", 77:"M", 78:"N", 79:"O", 80:"P", 81:"Q", 82:"R",
    83:"S", 84:"T", 85:"U", 86:"V", 87:"W", 88:"X", 89:"Y", 90:"Z",

    //数字小键盘的数字和标点符号按键(Opera不支持这些)
    96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",
    106:"Multiply", 107:"Add", 109:"Subtract", 110:"Decimal", 111:"Divide",

    //功能键
    112:"F1", 113:"F2", 114:"F3", 115:"F4", 116:"F5", 117:"F6",
    118:"F7", 119:"F8", 120:"F9", 121:"F10", 122:"F11", 123:"F12",
    124:"F13", 125:"F14", 126:"F15", 127:"F16", 128:"F17", 129:"F18",
    130:"F19", 131:"F20", 132:"F21", 133:"F22", 134:"F23", 135:"F24",

    //不需要按下Shift键的标点符号键
    //连字符不兼容，FF返回的编码和减号一样
    59:";", 61:"=", 186:";", 187:"=", // Firefox and Opera return 59,61 
    188:",", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'"
};
