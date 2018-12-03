//获取文档中所有<div>元素
var div = $("div");

$("div.titleNode").css("background-color", "yellow").show("slow");

//当用户单击元素时，会调用该事件处理程序，使得该元素缓慢向上收缩，最终消失
$("div.titleNode").click(function () {
    $(this).slideUp("slow");
})

/**
 * $()的返回值是一个jQuery对象。jQuery对象是类数组:它们拥有length属性和介于
 * 0~length-1之间的数值属性。这意味着可以用标准的数组标识方括号来访问jQuery
 * 对象的内容:
 */
$("body").length; //=>1
$("body")[0]; //等于document.body

/**
 * 如果不想把数组标识用在jQuery对象上，可以使用size()方法来替代length属性，用
 * get()方法来替代方括号索引。可以使用toArray()方法来讲jQuery对象转化为真实数组。
 * 除了length属性，jQuery对象还有三个属性。selector属性是创建jQuery对象时的选择器
 * 字符串(如果有的话)。context属性是上下文对象，是传递给$()方法的第二参数，如果没有
 * 传递的话，默认是Document对象。最后，所有jQuery对象都有一个名为jquery的属性，检测
 * 该属性是否存在可以简单快捷地将jQuery对象与其他类数组对象区分开来。jquery属性值是字
 * 符串形式的jQuery版本号:
 */
//获取document body中的所有<script>元素
var bodyscripts = $("script", document.body);
bodyscripts.selector //=>"script"
bodyscripts.context //=>document.body
bodyscripts.jquery //=>"1.4.2"

var img = $("<img>", {
    src: url,
    css: {
        borderwidth: 5
    },
    click: handleClick
})
/**
 * 想要遍历jQuery对象中的所有元素时，可以调用each()方法来代替for循环。each()方法有点类似
 * ECMAScript 5(ES5)中的foreach()数组方法。它接受一个回调函数作为唯一参数，然后它对jQuery
 * 对象中的每一个元素(按照在文档中的顺序)调用回调函数。回调函数作为匹配元素的方法来调用，因此
 * 在回调函数作为匹配元素的方法来调用，因此在回调函数里this关键字指代Element对象。each()方法
 * 还会将索引值和该元素作为第一个和第二个参数传递给回调函数。注意:this和第二参数都是原生文档元素，
 * 而不是jQuery对象;如果想使用jQuery方法来操作该元素，需要先用$()封装它。
 */

/**
 * jQuery的each()方法和foreach()有一个显著区别:如果回调函数在任一元素上返回false，遍历将在该元素后
 * 后中止(就像在普通循环中使用break关键字一样)。each()返回调用自身的jQuery对象，因此它可以用于链式
 * 调用。
 */

//给文档中的div元素标号，从开始一直到div#last(包含边界值)
$("div").each(function (idx) {
    //找到所有的div元素，然后遍历它们
    $(this).prepend(idx + ":"); //在每一个元素前面插入索引值
    if (this.id === "last") {
        return false; //碰到#last元素时终止
    }
})

//找到所有标题元素，映射到它们的id，并转化为真实数据，然后排序
$(":header").map(function () {
    return this.id;
}).toArray.sort();

$("div").each(function () {
    if ($(this).is(":hidden")) return;
})

//获取和设置HTML属性
$("form").attr("action"); //获取第一个form元素的action属性
$("#icon").attr("src", "icon.gif"); //设置src属性
$("#banner").attr({
    //一次性设置4个属性
    src: "bannner.gif",
    alt: "Advertisement",
    width: 720,
    height: 64
});
$("a").attr("target", "_blank"); //使所有链接在新窗口中打开
$("a").attr("target", function () {
    //使站内链家在本窗口中打开
    if (this.host == location.host) {
        return "_self";
    } else {
        //非站内链家在新窗口中打开
        return "_blank";
    }
})
$("a").attr({
    target: function () {
        //可以像这样传入函数
    }
})

$("a").removeAttr("target"); //让所有链接在本窗口中打开

/**获取和设置CSS属性 */
/**
 * 在获取样式时，css()返回的是元素的当前样式(计算样式):返回值可能来自style属性也可能来自样式表。
 * 注意，不能获取复合样式的值，比如"font"或"margin"。而应该获取单个样式值，比如"font-weight"
 * "font-family"、"margin-top"或"margin-left"。在设置样式时,css()方法会将样式简单添加到
 * 该元素的style属性中。css()方法允许在CSS样式名中使用连字符("background-color")或使用驼峰格式
 * JavaScript样式名("backgroundColor")。在获取样式值时，css()会把数值转换成带有单位后缀的字符串
 * 返回。而在设置样式值时，则会将数值转换成字符串，在必要时添加"px"(像素)后缀。
 */

$("h1").css("font-weight"); //获取第一个<h1>的字体重量
$("h1").css("fontWeight"); //也可以采用驼峰格式
$("h1").css("font"); //错误:不可获取复合样式
$("h1").css("font-variant", "smallcaps"); //将样式设置在所有<h1>元素上
$("div.note").css("border", "solid black 2px"); //设置复合样式是OK的
$("h1").css({
    //一次设置多个样式
    //也可以用驼峰格式的名称
    //对象属性
    backgroundColor: "black",
    textColor: "white",
    fontVariant: "small-caps",
    padding: "10px 2px 4px 20px",
    border: "dotted black 4px"
})
//让所有<h1>的字体大小增加25%
$("h1").css("font-size", function (i, curval) {
    return Math.round(1.25 * parseInt(curval));
})

/**
 * 在JavaScript里通过className访问class属性值
 * addClass和removeClass用来从选中元素中添加和删除类。
 * toggleClass()的用途是，当元素还没有某些类时，给元素添加这些类，反之，则删除。
 * hasClass()用来判断某类是否存在
 */

//添加CSS类
$("h1").addClass("hilite"); //给所有<h1>元素添加一个类
$("h1+p").addClass("hilite first"); //给<h1>后面的<p>添加两个类
$("section").addClass(function (n) {
    //传递一个函数用来给匹配的每一个元素添加自定义类
    return "section" + n;
})

//删除CSS类
$("p").removeClass("hilite"); //从所有<P>元素中删除一个类
$("p").removeClass("hilite first"); //允许一次删除多个类
$("section").removeClass(function (n) {
    //从元素中删除自定义类
    return "section" + n;
});
$("div").removeClass(); //删除所有<div>中的所有类

//切换CSS类
$("tr:odd").toggleClass("oddrow"); //如果该类不存在则添加，如果存在则删除
$("h1").toggleClass("big bold"); //一次切换两个类
$("h1").toggleClass(function (n) {
    return "big bold h1-" + n; //切换用函数计算出来的类
});
$("h1").toggleClass("hilite", true); //作用类似addClass
$("h1").toggleClass("hilite", false); //作用类似removeClass
//检测css类
$("p").hasClass("first"); //是否所有p元素都有该类?
$("#lead").is(".first"); //功能和上面类似
$("#lead").is(".first.hilite"); //is()比hasClass()更灵活

/**
 * hasClass不如addClass(),removeClass.toggleClass()灵活。hasClass()只能接受单个类名
 * 作为参数，并且不支持函数参数。当选中元素中的任意元素有指定CSS类时，hasClass()返回true
 * 如果任何元素都没有，则返回false。
 */

/**获取和设置HTML表单值 */
/**
 * val()方法用来设置和获取HTML表单元素的value属性，还可用于获取和设置复选框、单选按钮以及
 * <select>元素的选中状态
 */
$("#surname").val(); //获取surname文本域的值
$("#usstate").val(); //从<select>中获取单一值
$("select#extras").val(); //从<select multiple>中获取一组值

$("input:radio[name=ship]:checked").val(); //获取选中的单选按钮的值
$("#email").val("Invalid email address"); //给文本域设置值
$("input:checkbox").val(["opt1", "opt2"]); //选中带有这些名字或值的复选框
$("input:text").val(function () {
    //重置所有文本域的默认值
    return this.defaultValue;
})

/**
 * 设置和获取元素内容
 */
/**
 * text()和html()方法用来获取和设置元素的纯文本或HTML内容。当不带参数调用时，
 * text()返回所有匹配的所有子孙文本节点的纯文本内容，该方法设置可以工作在不支持
 * textContent或innerText属性的浏览器中。
 * 
 * 如果不带参数调用html()方法，它会返回第一个匹配元素的HTML内容。jQuery使用
 * innerHTML属性来实现:x.html()和x[0].innerHTML一样高效。
 * 
 * 如果传入字符串给text()或html()，该字符串会用做该元素的纯文本或格式化的HTML
 * 文本内容，它会替换掉所有存在的内容。
 */
var title = $("head title").text(); //获取文档标题
var headline = $("h1").html(); //获取第一个<h1>元素的html
$("h1").text(function (n, current) {
    //给每一个标题添加章节号
    return "$" + (n + 1) + ":" + current;
})

//获取和设置元素的位置高宽
/**
 * 使用offset()方法可以获取或设置元素的位置。该方法相对文档来计算位置值，返回一个对象
 * 带有left和top属性，用来表示X和Y坐标。如果传入带有这些属性的对象给该方法，它会设置
 * 指定的位置。在有必要时，会设置CSS的position属性来使得元素可定位:
 */
var elt = $("#sprite"); //需要移动的元素
var position = elt.offset(); //获取当前位置
position.top += 100; //改变Y坐标
elt.offset(position); //设置新位置

//将所有<h1>元素向右移动，移动距离取决于它们在文档中的位置
$("h1").offset(function (index, curpos) {
    return {
        left: curpos.left + 25 * index,
        top: curpos.top
    };
})

//offsetParent属性指定这些属性所相对的父元素。如果offsetParent为null，
//这些属性都是文档坐标
/**
 * position()方法很像offset()方法，但它只能做getter,它返回的元素位置是相对于其
 * 偏移父元素的，而不是相对于整个文档的
 */
/**
 * jQuery只会把定位元素作为偏移父元素，jQuery对象的offsetParent()方法则会把每个
 * 元素映射到最近的定位祖先元素或<body>元素。注意这些方法的名字并不很恰当:offset()
 * 返回元素的绝对位置，用相对于文档的坐标来表示。而position()则返回相对于元素的offsetParent()
 * 的偏移量
 */

/**
 * 用于获取元素宽度的getter有3个，获取高度的也有3个。width()和height()方法返回基本的宽度和
 * 高度，不包含内边距、边框和外边距。innerWidth()和innerHeight()返回元素的宽度和高度，不
 * 包含内边距的宽度和高度("内"表示这些方法度量的是边框以内的尺寸).outerWidth()和outerHeight()
 * 通常返回的是包含元素内边距和边框的尺寸。如果向两个方法中的任意一个传入true值，它们还可以返回
 * 包含元素外边距的尺寸。
 */
var body = $(body);
var contentWidth = body.width();
var paddingWidth = body.innerWidth();
var borderWidth = body.outerWidth();
var marginWidth = body.outerWidth(true);
var padding = paddingWidth - contentWidth; //左内边距和右内边距的和
var borders = borderWidth - paddingWidth; //左边框和右边框的和
var margins = marginWidth - borderWidth; //左外边距和右外边距的和

/**
 * width()和height()方法拥有其他4个方法(以inner和outer开头的方法)所没有的特性。
 * 首先，当jQuery对象的第一个元素是Window或Document对象时，width()和height()
 * 返回的是窗口的视口大小或者文档的整体尺寸。其他方法只适用于元素，不适用窗口和文档。
 */

/**
 * 另一个特性是width()和height()方法可以是setter也可以是getter。如果传递值给这些方法
 * 它们会给jQuery对象中的每一个元素设置宽度和高度。(注意，不能给Window和Document对象
 * 设置宽度和高度)。如果传入数值，会把它当成单位为像素的尺寸。如果传入字符串，会把它用做
 * CSS的width和height属性的值,因此可以使用任何CSS单位。最后，和其他setter类似，可以传入函数。
 * 用来计算要设置的宽度或高度。
 */

/**
 * 在width()和height()的getter和setter行为之间有个小的不对称。用做getter时，这些方法返回
 * 元素的内容盒子的尺寸，不包括内边距，边框和外边距。用做setter时，它们只是简单设置CSS
 * 的width和height属性。默认情况下，这些属性也指定内容盒子的大小。但是，如果一个元素的CSS box-sizing
 * 属性设置为border-box，则width()和height()方法设置的尺寸包括内边距和边框。对于使用
 * content-box作为盒模型的元素e，调用$(e).width(x).width()返回x值。然而，对于使用
 * border-box模型的元素，这种情况下一般不会返回x值。
 */

/**
 * 与位置尺寸相关的最后一对jQuery方法是scrollTop()和scrollLeft()，可获取或设置元素的滚动条位置。
 * 这些方法可用在Window对象以及Document元素上，当用在Document对象上时，会获取或设置存在
 * 在该Document的Window对象的滚动条位置。与其他setter不同，不可传递函数给scrollTop或scrollLeft()
 */

/**
 * 可使用scrollTop()作为getter和setter,与height()方法一起，来定义一个方法:根据指定的页面数向上或向下
 * 滚动窗口
 */

//根据页面数n来滚动窗口。n可以是分数或负数
function page(n) {
    var w = $(window);
    var pagesize = w.height();
    var current = w.scrollTop();
    w.scrollTop(current + n.pagesize);
}

/**
 * 获取和设置元素数据
 */
$("div").data("x", 1); //设置一些数据
$("div.nodata").removeData("x"); //删除一些数据
var x = $('#mydiv').data("x"); //获取一些数据

//jQuery还定义了data()和removeData()方法的工具函数形式。要给单一元素e关联数据，可以
//使用data()的方法形式，也可以使用其函数形式
//方法形式
$(e).data(
    //...
)
$.data(e, /*...*/ ) //函数形式

//插入和替换元素
/**
 * 根据调用方法不同，会在元素的里面，前面或后面位置中插入内容。如果待插入的内容是已存在于
 * 文档中的元素，会从当前位置移走它。如果它需要插入多次，在必要时会复制该元素。这些方法都返回
 * 调用自身的jQuery对象。注意，在replaceWith()运行后，该jQuery对象中的元素将不再存在于文档中。
 */
$("#log").append("<br/>" + message); //在#log元素的结尾处添加内容,该元素最后的子元素后面
$("h1").prepend("$"); //在每个<h1>的起始处添加章节标识，该元素子元素的第一个元素前面
$("h1").before("<hr/>"); //在每个<h1>的前面添加水平线，该元素父元素的子元素第一个元素之前
$("h1").after("<hr/>"); //在每个<h1>的后面添加水平线，该元素父元素的子元素最后一个元素之后
$("hr").replaceWidth("<br/>"); //替换<hr/>元素为<br/>
$("h2").each(function () {
    //将<h2>替换为<h1>,保持内容不变
    var h2 = $(this);
    h2.replaceWidth("<h1>" + h2.html() + "</div>");
})
//after()和before()也可用在文本节点上
//这是给每个<h1>的开头添加章节标识的另一种方法
$("h1").map(function () {
    return this.firstChild;
}).before("$");

//传入函数时，该函数会为每个选中的元素调用一次。this值指向该元素，在jQuery对象中元素的索引值将
//作为第一参数。

$("<br/>+message").appendTo("#log"); //添加html到#log中
$(document.createTextNode("$")).prependTo("h1"); //给所有<h1>添加文本节点
("<hr/>").insertBefore("h1"); //在所有<h1>前面插入水平线
$("<hr/>").insertAfter("h1"); //在所有<h1>后面插入水平线
$("<br/>").replaceAll("hr"); //将<hr/>替换为<br/>

/**复制元素 */
//给文档结尾添加一个带有"linklist"id的新div
$(document.body).append("<div id='linklist'><h1>List of Links</h1></div>");
//将文档中的所有链接复制并插入该新的div中
$("a").clone().appendTo("#linklist");
//在每一个链接后面插入<br/>元素，使其以独立行显示
$("#linklist>a").after("<br/>");

/**包装元素 */
/**
 * wrap()包装每一个选中元素。
 * wrapInner()包装没余个选中元素的内容。
 * wrapAll()则将选中元素作为一组来包装。
 */

//用<i>元素包装所有<h1>元素
$("h1").wrap(document.createElement("i")); //产生<i><h1>...</h1></i>
//包装所有<h1>元素的内容，使用字符串参数更简单
$("h1").wrapInner("<i/>"); //产生<h1><i>...</i></h1>
//将第一个段落包装在一个锚点和div里
$("body>p:first").wrap("<a name='lead'><div class='first'></div></a>");
//将所有其他段落包装在另一个div里
$("body>p:not(:first)").wrapAll("<div class='rest'></div>");

/**删除元素 */
/**
 * empty()会删除每个选中元素的所有子节点(包括文本节点)，但不会修改元素自身。
 * remove()方法会从文档中移除选中元素(以及所有元素内容)。通常不带参数调用remove()，此时
 * 会从文档中移除jQuery对象中的所有元素。然而，如果传入一个参数，该参数会被当成选择器，
 * jQuery对象中只有匹配该选择器的元素才会被移除。
 */

/**
 * remove()方法会移除所有事件处理程序以及可能绑定到被移除元素上的其他数据。detach()方法和remove()
 * 类似，但不会移除事件处理程序和数据。想临时从文档中移除元素以便后续再次插入时，detach()可能会更有用。
 */

/**
 * upwrap()方法可以用来实现元素移除，其方式是wrap()或wrapAll()方法的反操作：移除每一个选中
 * 元素的父元素，不影响选中元素及其兄弟节点。也就是说，对于每一个选中元素，它替换该元素的父节点为父节点的子节点。
 * 与remobe()和detach()不同，upwrap()不接受可选的选择器参数。
 */

/**
 * 事件处理程序的简单注册
 */

//单击任意<p>时，使其背景变成灰色
$("p").click(function () {
    $(this).css("background-color", "gray");
})

/**
 * 调用jQuery的事件注册方法可以给所有选中元素注册处理程序。很明显，这笔使用addEventListener()
 * 或attachEvent()一次注册一个事件处理程序简单很多。
 */

/**
 * focus和blur事件不支持冒泡，但是focusin和focusout事件支持
 * mouseover和mouseout事件支持冒泡
 * mouseenter和mouseleave是非冒泡事件
 */

/**
 * resize和unload事件类型只在Window对象中触发，如果想要给这两个事件类型注册处理程序，应该在$(window)上调用
 * resize()和unload()方法。scroll()方法经常也用于$(window)对象上，但它也可以用在有滚动条的任何元素上(比如
 * 当CSS的overflow属性设置为"scroll"或"auto"时)。load()方法可以在$(window)上调用，用来给窗口注册加载事件处理程序
 * error()方法可用在<img>元素上，用来注册当图片加载失败时调用的处理程序。
 */

/**
 * hover()方法用来给mouseenter和mouseleave事件注册处理程序。调用hover(f,g)就和调用mouseenter(f)然后调用
 * mouseleave(g)一样。如果仅传入一个参数给hover()，该参数函数会同时用做enter和leave事件的处理程序。
 */

/**
 * toggle()，该方法将事件处理程序函数绑定到单击事件。可以指定两个或多个处理程序函数，当单击事件发生时，jQuery
 * 每次会调用一个处理程序函数。例如，如果调用toggle(f,g,h),第一次单击事件触发时，会调用函数f()，第二次会调用g(),
 * 第三次会调用h(),然后调用f()来处理第四次单击事件。
 */


$("<img/>", {
    src: image_url,
    alt: image_description,
    className: "translucent_image",
    click: function () {
        $(this).css("opacity", "50%");
    }
})

/**jQuery事件处理程序 */
/**
 * 调用事件处理程序时只带有事件对象这个唯一参数。如果用trigger()显示触发事件，可以传入额外的参数数组。这样做时，
 * 这些参数会在第一个事件对象参数之后传递给事件处理程序。
 */

/**
 * 不管它们是如何注册的，jQuery事件处理程序函数的返回值始终有意义。如果处理程序返回false，与该事件相关联的默认行为，
 * 以及该事件接下来的冒泡都会被取消。也就是说，返回false等同于，返回false等同于调用Event对象的preventDefault()和
 * stopPropagation()方法。同样，当事件处理程序返回一个值(非undefined值)时，jQuery会将该值存储在对象的result属性中，
 * 该属性可以被后续调用事件处理程序访问。
 */

/**
 * jQuery事件对象
 */

/**
 * metaKey:如果原生事件对象没有metaKey属性，jQuery会使其与ctrlKey属性的值一样。在Mac OS中，Command键设置meta
 * 键的属性。
 * 
 * pageX,pageY:如果原生事件对象没有定义这两个属性，但定义了鼠标指针的视口坐标clientX和clientY，jQuery会计算出
 * 鼠标指针的文档坐标并把它们存储在pageX和pageY中。
 * 
 * target,currentTarget,relatedTarget:target属性表示在其上发生事件的文档元素。如果原生事件对象的目标是文本节点，
 * jQuery返回的目标会替换为包含该文本节点的元素。currentTarget是当前正在执行的事件处理程序所注册的元素，与this
 * 应该始终一样。
 * 
 * 如果currentTarget和target不一样，那么正在处理的事件是从触发它的元素冒泡上来的，此时使用is()方法来检测target元素
 * 可能会很有用
 * 
 * if($(event.target).is("a")) return;
 * 
 * 涉及mouseover和mouseout等过渡事件时，reletedTarget表示其他元素。例如，对于mouseover事件，relatedTarget属性指鼠标
 * 指针移开的元素，target则是鼠标指针悬浮的元素。如果原生事件对象没有定义了toElement和fromElement，则会从这些属性中得到
 * relatedTarget.
 * 
 * timeStamp:事件发生时的事件，单位是毫秒，由Date.getTime()方法返回。这个字段是jQuery自身设置的，可以解决Firefox中一个
 * 长期存在的bug。
 * 
 * which:这是一个非标准事件属性，jQuery做了统一化处理，使其可以用来指明在事件发生期间，按下的是哪个鼠标按钮或键盘按键。
 * 对键盘事件来说，如果原生事件没有定义which，但定义了charCode或keyCode，which将被设置为定义过的charCode或keyCode。
 * 对于鼠标事件来说，如果which没有定义但定义了button属性，会根据button的值来设置which。0表示没有按钮按下，1表示鼠标左键
 * 按下，2表示鼠标中键按下，3表示鼠标右键。(注意，单击鼠标右键时，有些浏览器不会产生鼠标事件。)
 * 
 * data:如果注册事件处理程序时指定了额外的数据，处理程序可以用该字段的值来访问。
 * 
 * handler:当前正被调用的事件处理程序函数的引用。
 * 
 * result:该事件最近调用的处理程序的返回值，忽略没有返回值得处理程序
 * 
 * originalEvent:浏览器生成的原生事件对象的引用。
 */

/**事件处理程序的高级注册 */
/**
 * bind()需要一个事件类型字符串作为其第一个参数，以及一个事件处理程序函数作为其第二份参数。事件注册的简单方法
 * 使用该形式的bind()。例如，调用$("p").click(f)等价:
 */
$('p').bind('click', f);

/**
 * 调用bind()时还可以带有三个参数，在这种形式下，事件类型是第一个参数，处理程序函数是第三个参数。在这两个参数中建
 * 可以传入任何值，jQuery会在调用处理程序前，将制定的值设置为Event对象的data属性。通过这种方式传递额外的数据给处理程序
 * 不需要使用闭包，有时很有用。
 */

/**
 * bind()还有其他高级特性，如果第一个参数是由空格分隔的事件类型列表，则处理程序函数会为每一个命名的事件类型注册
 */
$("a").bind('mouseenter mouseleave', f);

/**
 * bind()的另一个重要特性是允许为注册的事件处理程序指定命名空间，这使得可以定义处理程序组，能方便后续触发或卸载
 * 特定命名空间下的处理程序。处理程序的命名空间对于开发可复用jQuery代码的类库或模块的程序员来说特别有用。事件命名空间
 * 类似CSS的类选择器。要绑定事件处理器到命名空间中，添加句点(.)和命名空间名到事件类型字符串中即可
 */

//作为mouseover处理程序在命名空间"myMod"中把f绑定到所有元素
$("a").bind("mouseover.myMod", f);

//甚至还可以给处理程序分配多个命名空间
$("a").bind("mouseout.myMod.yourMod", f);

/**
 * bind()的最后一个特性是，第一个参数可以是对象，该对象把事件名映射到处理程序函数。调用$("a").hover(f,g)等价于:
 */
$("a").bind({
    mouseenter: f,
    mouseleave: g
});

/**
 * 使用one()注册的事件处理器永远只触发一次
 */

/**注销事件处理程序 */
/**
 * 用bind()注册事件处理程序后，可以使用unbind()来注销它，以避免在将来的事件中触发它。
 * (注意，unbind()只注销用bind()和相关jQuery方法注册的事件处理程序。通过addEventListener()或IE的attachEvent()
 * 方法注册的处理器不会注销，并且不会移除通过onclick和onmouseover等元素属性定义的处理程序。)不带参数时，unbind()
 * 会注销jQuery对象中所有元素的(所有事件类型的)所有事件处理程序
 */

$('*').unbind(); //从所有元素中移除所有jQuery事件处理程序

/**
 * 带有一个字符串参数时，由该字符串指明的事件类型(可以是多个，当字符串含有多个名字时)的所有处理程序会从jQuery对象的所有
 * 元素中取消绑定
 */

//从所有<a>元素中取消绑定所有mouseover和mouseout处理程序
$("a").unbind("mouseover mouseout");

//可以使用unbind()，传入一个参数，来做到只注销命名空间下的处理程序
//取消绑定在"myMod"命名空间下的所有mouseover和mouseout处理程序
$('a').unbind("mouseover.myMod mouseout.myMod");
//取消绑定在"myMod"命名空间下的所有事件类型的处理程序
$('a').unbind('.myMod');
//取消绑定同时在"ns1"和"ns2"命名空间下的单击处理程序

//button1的单击处理程序触发button2上的相同事件
$('#button1').click(function (e) {
    $('#button2').trigger(e);
})

//触发事件时，添加额外的属性给事件对象
$('#button1').trigger({
    type: 'click',
    synthetic: true
});

//该处理程序检测额外属性来区分是真实事件还是虚假事件
$('#button1').click(function (e) {
    if (e.synthetic) {
        //处理程序
    }
});

/**
 * 使用jQuery.event.trigger()函数替代trigger()方法，来全局触发处理器
 */

//用户单击"logooff"按钮时，广播一个自定义事件
//给任何需要保存状态的感兴趣的观察者，然后
//导航到logoff页面
$("#logoff").click(function () {
    $.event.trigger("logoff"); //广播一个事件
    window.location = "logoff.php"; //导航到新页面
})

/**实时事件 */
/**
 * 使用jQuery的Web应用经常动态创建新元素。如果使用bind()给文档中的所有<a>元素绑定了事件处理程序
 * 接着又创建了带有<a>元素的新文档内容，这些新元素和老元素不会拥有相同的事件处理程序，其行为将不一样。
 * 
 * 可以使用"实时事件"来解决这一问题，要使用实时事件，需要使用delegate()和undelegate()方法来替代bind()
 * 和unbind()。通常，在$(document)上调用delegate()，并传入一个jQuery选择器字符串、一个jQuery事件类型
 * 字符串以及一个jQuery事件处理程序函数。它会在document或window(或jQuery对象中的任何元素上)注册一个内部处理
 * 程序。当指定类型的事件冒泡到该内部处理程序时，它会判断事件目标(该事件所发生在的元素)是否匹配选择器字符串。
 * 如果匹配，则调用指定的处理程序函数。因此，为了同时处理老的和新创建的<a>元素上的mouseover事件，可能需要像
 * 下面这样注册处理程序
 */
$(document).delegate("a", "mouseover", linkHandler);
/**
 * 否则，需要使用bind()来处理文档中的静态部分，然后使用delegate()来处理动态修改的部分
 */
//静态链接的静态事件处理程序
$("a").bind("mouseover", linkHandler);
//文档中动态更新的部分使用实时事件处理程序
$(".dynamic").delegate("a", "mouseover", linkHandler);

//live()也可以用来注册实时事件，live()也有两参数和三参数调用形式，并且实际中用得更普遍。
$("a").live("mouseover", linkHandler);
$("a", $(".dynamic")).live("mouseover", linkHandler);

//实时销毁事件处理程序，使用die()和undelegate().

/**动画效果 */
/**
 * 每段动画都有时长，用来指定动画效果持续多少时间。可以使用毫秒数值或字符串来指定时长。字符串"fast"表示200ms
 * 字符串"slow"表示600ms。如果指定的字符串时长jQuery无法识别，则采用默认时长400ms。可以给jQuery.fx.speeds
 * 添加新的字符串到数值映射关系来定义新的时长名字
 */
jQuery.fx.speeds["medium-fast"] = 300;
jQuery.fx.speeds["medium-slow"] = 500;

/**
 * jQuery动画方法经常使用动画时长来作为可选的第一个参数。如果省略时长参数，通常会得到默认值400ms。注意，省略时长
 * 时，有部分方法会立刻跳到最后一帧，没有中间的动画效果
 */

$("#message").fadeIn(); //用淡入效果显示元素，持续400ms
$("#message").fadeOut("fast"); //用淡出效果隐藏元素，持续200ms
//为了让最终用户可以禁用动画，可以在脚本上使用如下代码
$(".stopmoving").click(function () {
    jQuery.fx.off = true;
})

/**
 * jQuery动画是异步的。调用fadeIn()等动画方法时，它会立刻返回，动画则在"后台"执行。由于动画方法
 * 会在动画完成之前返回，因此可以向很多jQuery动画方法传入第二个参数(也是可选的)，该参数是
 * 一个函数，会在动画完成时调用。该函数在调用时不会有任何参数传入，但this值会设置为发生动画的文档元素。
 * 对于每个选中元素都会调用一次该回调函数
 */
//用淡入效果快速显示元素，动画完成时，在元素里显示一些文字
$("#message").fadeIn("fast", function () {
    $(this).text("Hello World");
})

/**
 * 给动画方法传入回调函数，可以在动画结束时执行操作。不过，如果只是想顺序执行多段动画的话
 * 回调方式是没有必要的。jQuery动画默认是队列化的。如果一个元素已经在动画过程中，再调用
 * 一个动画方法时，新动画不会立刻执行，而会延迟到动画结束后才执行。
 */
$("#blinker").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn();

/**
 * jQuery动画方法可以接受可选的时长和回调参数，还可以传入一个对象来调用动画方法，该对象的属性指定动画选项
 */
//将时长和回调参数作为对象属性而不是参数传入
$("#message").fadeIn({
    duration: "fast",
    complete: function () {
        $(this).text("Hello World");
    }
})

/**
 * 简单动画
 */
/**
 * fadeIn()、fadeOut()、fadeTo()
 * fadeIn()和fadeOut()简单地改变CSS的opacity属性来显示或隐藏元素。两者都接受可选的时长和
 * 回调参数。fadeTo()稍有不同:它需要传入一个opacity目标值，fadeTo()会将元素的当前opacity
 * 值变化到目标值。调用fadeTo()方法时，第一个参数必须是时长(或选项对象)，第二个参数是opacity
 * 目标值，回调函数则是可选的第三个参数。
 */

/**
 * show(),hide(),toggle()
 * 上面的fadeout()方法可以让元素不可见，但依旧保留了元素在文档布局中的占位。hide()方法则会将
 * 元素从布局中移除，就像把CSS的display属性设置为none一样。当不带参数调用时，hide()和show()
 * 方法只是简单地立刻隐藏或显示选中元素。带有时长(或选项对象)参数时，它们会让隐藏或显示有个动画
 * 过程。hide()在将元素的opacity减少到0时，同时它会将元素的宽度和高度收缩到0.show()则进行反向操作。
 * 
 * toggle()可以改变在上面调用它的元素的可视状态:如果隐藏，则调用show();如果显示，则调用hide()。
 * 与show()和hide()一样，必须传入时长或选项对象给toggle来产生动画效果。给toggle()传入true和不带
 * 参数调用show()是一样的，传入false则和不带参数调用hide()是一样的。注意，如果传入两个或多个函数参数
 * 给toggle()，它会注册为事件处理程序。
 */

/**
 * slideDown,slideUp,slideToggle()
 * slideUp会隐藏jQuery对象中的元素，方式是将其高度动态变化到0，然后设置CSS的display属性为"none".
 * slideDown()执行反向操作，来使得隐藏的元素再次可见。slideToggle()使用向上滑动或向下滑动动画来切换
 * 元素的可见性。这三个方法都接受可选的时长和回调参数(或选项对象参数)
 */

/**
 * 下面的例子调用了该组方法的每一个。要记得jQUery动画默认情况下是队列化的，因此这些动画会一个接一个执行
 */

//用淡出效果将所有图像隐藏，然后显示它们，接着向上滑动，再向下滑动
$("img").fadeOut().show(300).slideUp().slideToggle();

/**自定义动画 */
/**
 * 使用animate()方法可以实现更多通用动画效果。传给animate()方法的第一个参数指定动画内容，剩余参数指定
 * 如何定制动画。第一个参数是必须的:它必须是一个对象，该对象的属性指定要变化的CSS属性和它们的目标值。
 * animate()方法会将每个元素的这些CSS属性从初始值变化到指定的目标值。例如，上面描述的slideUp()效果
 * 可以用以下代码来实现:
 */
//将所有图片的高度缩小到0
$("img").animate({
    height: 0
})

/**第二个参数是可选的，可以传入一个选项对象给animate()方法 */
$("img").animate({
    opacity: .25,
    fontSize: 10
}, {
    duration: 500,
    complete: function () {
        $(this).text("GoodBye")
    }
});
/**
 *除了将选项对象作为第二个参数传入，animate()方法还允许将三个最常用的选项作为参数传入。可以将动画时长
 (数值或字符串)作为第二个参数传入。可以指定缓动函数名为第三个参数，最后可以将回调函数指定为第四个参数 */

/**
 * 在jQuery动画属性对象中，还可以使用三个其他值。"hide"值会保存属性的当前值，然后该属性的值变化到0.
 * "show"值会将CSS属性的值还原到之前保存的值。还可以使用"toggle"来实现显示或隐藏，具体效果取决于该属性的当前设置的
 * 当前设置。
 */
//使用"toggle"来实现显示或隐藏，具体效果取决于该属性的当前设置
$("img").animate({
    width: "hide",
    borderLeft: "hide",
    borderRight: "hide",
    paddingLeft: "hide",
    paddingRight: "hide"
})

/**动画选项对象 */
/**
 * 和complete属性类似，step属性指定在动画每一步或每一帧调用的回调函数。在回调函数中，this指向正在连续
 * 变化的元素，第一个参数则是正在变化的属性的当前值。
 * 
 * 在选项对象中，quene属性指定动画是否需要队列化---是否需要等到所有尚未发生的动画都完成后再执行该动画。
 * 默认情况下，所有动画都是队列化的。将quene属性设置为false可以取消队列化。非队列化的动画会立刻执行。随后队列化的
 * 动画不会等待非队列化的动画执行完成后才执行。
 */

$("img").fadeIn(500).animate({
    "width": "+=100"
}, {
    quene: false,
    duration: 1000
}).fadeOut(500);

/**
 * 上面的fadeIn()和fadeOut()效果是队列化的，但animate()的调用(在1000毫秒内连续改变width属性)是非队列化的。
 * 这段width动画和fadeIn()效果的开始时间相同。fadeOut()效果会在fadeIn()效果完成时立刻开始，它不会等到
 * width动画完成。*/

/**
 * jQuery的默认缓动函数是正弦函数:它开始很慢，接着加速，然后再缓慢"缓动"变化到终值。
 * jQuery中的缓动函数有名字。默认的缓动函数名为"swing"，jQuery还实现了一个线性缓动函数，
 * 名字为"linear".可以添加自定义缓动函数早jQUery.easing对象上*/

jQuery.easing["squareroot"] = Math.sqrt;

//剩余的动画选项和缓动函数有关。选项对象的easing属性指定缓动函数名。jQuery默认使用的是名为
//"swing"的正弦函数。如果想让动画线性变化，可以使用如下选项
$("img").animate({
    "width": "+=100",
}, {
    duration: 500,
    easing: "linear"
});

//除了传入选项对象，duration,easing和complete选项可以指定为animate()方法的参数。因此上面的代码等价于
$("img").animate({
    "width": "+=100",
    500,
    "linear";
})

//jQuery动画框架甚至还允许为不同的CSS动画属性指定不同的缓动函数。有两种方式来实现
//用hide()方法隐藏图片，图片大小采用线性动画
//不透明度则使用默认的"swing"缓动函数
//实现方式一:
//使用specialEasing选项来指定自定义缓动函数
$("img").animate({
    width: "hide",
    height: "hide",
    opacity: "hide"
}, {
    specialEasing: {
        width: "linear",
        height: "linear"
    }
});

//实现方式二:
//在第一个对象参数中传入[目标值，缓动函数]数组
$("img").animate({
    width: ["hide", "linear"],
    height: ["hide", "linear"],
    opacity: "hide"
});

/**动画的取消、延迟和队列 */
/**
 * stop()方法:它用来停止选中元素上的当前正在执行的任何动画。stop()方法可以接受可选的布尔值参数。如果第一个参数是true，会清除
 * 该选中元素上的动画队列:除了停止当前动画，还会取消任何等待执行的动画。第一个参数的默认值是false:如果忽略该参数，等待执行的动画
 * 不会被取消。第二个参数用来指定正在连续变化的CSS属性是否保留当前值，还是应该变化到最终目标值。传入true可以让它们到最终值。
 * 传入false(或省略该参数)会让它们保持为当前值。
 */

//当动画是由用户事件触发时，在开始新的动画前，可能需要取消掉当前或等待执行的任何动画。

//当鼠标悬浮在图片上时，图片变得不透明
//注意，我们没有在鼠标事件上持有队列化动画

$("img").bind({
    mouseover: function () {
        $(this).stop().fadeTo(300, 1.0);
    },
    mouseout: function () {
        $(this).stop().fadeTo(300, 0.5);
    }
})

/**
 * 与动画相关的第二个方法是delay()。这会直接添加一个时间延迟到动画队列中:第一个参数是时长(以毫秒为单位的数值和字符串)，第二个参数是队列名
 * 是可选的(通常并不需要第二个参数)，可以在复合动画中使用delay()
 */

//快速淡出为半透明，等一等，然后向上滑动
$("img").fadeTo(100, 0.5).delay(200).slideUp();

/**
 * 使用mouseover和mouseout事件来变化图片的透明度。可以调整该例子:在开始动画时，添加一个短小的延迟。这样，
 * 当鼠标快速滑过图片而不停留时，不会有任何分神的动画产生
 */
$("img").bind({
    mouseover: function () {
        $(this).stop(true).delay(100).fadeTo(300, 1.0);
    },
    mouseout: function () {
        $(this).stop(true).fadeTo(300, 0.5);
    }
})

/**
 * 和动画相关的最后一组方法可以对jQuery的队列机制进行底层操作。jQuery队列是按顺序执行的函数
 * 列表。每一个队列都与一个文档元素(或者是Document或Window对象)关联，每一个元素的队列和其他元素的
 * 队列彼此独立。可以使用queque()方法给队列添加一个新函数。当某个函数到达队列头部时，它会自动从队列
 * 中去除并被调用。当函数到达队列头部时，它会自动从队列中去除并被调用。当函数被调用时，this指向
 * 与队列相关联的元素。被调用的函数会传入唯一一个回调函数作为参数。当函数完成运行时，它必须调用回调函数。
 * 这可以运行队列中的下一个操作，如果不调用回调函数，该队列会停止运行，剩余的函数将永远不会被调用。
 */
//淡入显示一个元素，稍等片刻，设置一些文字，然后变化边框
$("#message").fadeIn().delay(200).quene(function (next) {
    $(this).text("Hello World"); //显示一些文字
    next(); //运行队列中下一项
}).animate({
    borderWidth: "+=10px" //将边框变粗
})

/**
 * 队列函数中的回调函数参数是jQuery1.4引入的新特性。对于jQuery类库之前的版本，需要调用dequeue()方法
 * "手动"取消队列中的下一个函数，如果队列中什么也没有，调用dequeue()方法不会有任何响应。反之，它
 * 则会将队列头部的函数从队列中移除，并调用它，设置的this值和传入的回调函数如上所述。
 */
$(this).dequeue(); //替代next()方法

//如果在队列中什么也没有，调用dequeue()方法不会有什么反应。反之，它则会将队列头部的函数从队列中移除，
//并调用它，设置this值和传入的回调函数如上所述。

/**
 * clearQueue()方法用来清除队列。给queue()方法传入一个函数组成的数组而不是单一函数时，会用传入的函数数组
 * 来替换当前队列。如果在调用quene()方法时，不传入任何参数，则会返回当前队列数组。jQuery还将quene()
 * 和dequene()定义成了工具函数。如果想给元素e的队列添加一个函数f，可以用下面的方法
 */
$(e).quene(f); //创建一个持有e的jQuery对象，并调用quene()方法
jQuery.quene(e, f); //直接调用jQuery.quene()工具函数

/**
 * load()是所有jQuery工具中最简单的：向它传入一个URL,它会异步加载该URL的内容，然后将内容插入每一个选中
 * 元素中，替换掉已经存在的任何内容。
 */

//每隔60秒加载并显示最新的状态报告
setInterval(function () {
    $('#status').load('status_report.html');
}, 60000)

//如果传给该方法的第一个参数是函数而不是字符串，则load()方法是事件处理程序注册方法而不是Ajax方法
//如果只想显示被加载文档的一部分，可以在URL后面添加一个空格和一个jQuery选择器，当URL加载完成后，jQUery
//会用指定的选择器来从加载好的HTML中选取需要显示的部分,如果想只插入被加载文档的选中部分的话，空格是必需的

//加载并显示天气预告的温度部分
$('#temp').load("wheather_report.html #temperature");

/**
 * 除了必须的URL参数,load()方法还接受两个可选参数。第一个可选参数表示的数据，可以追加到URL
 * 后面，或者与请求一起发送。如果传入的是字符串，则会追加到URL后面(放在"?"或"&"后面)。如果传入对象，
 * 该对象会被转化为一个用"&"分隔的名/值对后与请求一起发送。通常情况下，load()方法发送HTTP GET
 * 请求，但是如果传入数据对象，则它会发送POST请求。
 */
//加载特定区号的天气预报
$('#temp').load("us_weather_report.html", "zipcode=02134");

//使用对象作为数据，并制定为华氏温度
$('#temp').load("us_weather_report.html", {
    zipcode: 02134,
    units: 'F'
});

/**
 * load()方法的另一个可选参数是回调函数。当Ajax请求成功或未成功，以及(当请求成功时)URL加载完毕并插入选中元素时，
 * 会调用该回调函数。如果没有指定任何数据，回调函数可以作为第二个参数传入。否则，它必须是第三个参数。
 * 在jQuery对象的每一个元素上都会调用回调函数，并且每次调用都会传入三个参数：被加载URL的完整文本
 * 内容，状态码字符串，以及用来加载该URL的XMLHttpRequest对象。其中，状态参数是jQuery的状态码，
 * 不是HTTP的状态码，其值类似"success","error"和"timeout"的字符串。
 */

/**
 * Ajax工具函数
 */
//1.jQuery.getScript()
/**
 * jQuery.getScript()函数的第一个参数是JavaScript代码文件的URL。它会异步加载文件，加载完成后在全局作用域
 * 执行该代码。它能同时适用于同源和跨源脚本
 */
//从其他服务器动态加载脚本
jQuery.getScript("http://example.com/js/widget.js");
//可以 传入回调函数作为第二个函数，在这种情况下，jQuery会在代码加载和执行完成后调用一次该回调函数
//加载一个类库，并在加载完成时立刻使用它
jQuery.getScript("js/jquery.my_plugin.js", function () {
    $('div').my_plugin(); //使用加载的类库
})

/**
 * jQuery.getScript()通常会使用XMLHttpRequest对象来获取要执行的脚本内容。但对于跨域请求
 * (脚本存在与当前文档不一样的服务器上)，jQuery会使用<script>元素来加载脚本。在同源情况下，
 * 回调函数的第一个参数是脚本的文本内容，第二个参数是"success"状态码，第三个参数则是用来获取
 * 脚本内容的XMLHttpRequest对象。在同源情况下，jQuery.getScript()函数的返回值也是该XMLHttpRequest对象
 * 对于跨源请求，不存在XMLHttpRequest对象，并且脚本的内容获取不到。在这种情况下，回调函数
 * 的第一个和第三个参数是undefined，jQuery.getScript()的返回值也是undefined.
 */

/**
 * 传递给jQuery.getScript()的回调函数，仅在请求成功完成时才会被调用。如果需要在发生错误以及成功
 * 都得到通知，则需要使用底层的jQuery.ajax()函数。
 */

//2.jQuery.getJSON()
/**
 * jQuery.getJSON()和jQuery.getScript类似：它会获取文本，然后特殊处理一下，再调用指定的回调函数
 * jQuery.getJSON()获取到文本后，不会将其当做脚本执行，而会将其解析为JSON。jQuery.getJSON()只有在传入了
 * 回调参数时才有用。当成功加载URL，以及将内容成功解析为JSON后，解析结果会作为第一个参数传入回调函数中。
 * 与jQuery.getScript()一样，回调函数的第二个和第三个参数是"success"和XMLHttpRequest对象
 */

//假设data.json包含文本
jQuery.getJSON("data.json", function (data) {
    //data参数是对象{x:1,y:2}
})

/**
 * 与jQuery.getScript()不同，jQuery.getJSON()接受一个可选的数据对象参数，就和传入load()方法中的一样。
 * 如果传入数据到jQuery.getJSON()中，该数据必须是第二个参数，回调函数则是第三个。如果不传入任何数据，
 * 则回调函数可以是第二个参数。如果数据是字符串，则它会被添加到URL的"?"和"&"后面。如果数据是一个对象，则它
 * 会转化为字符串，然后添加到URL上。
 */

/**
 * jQuery.ajax()函数仅接受一个参数，一个选项对象，该对象的属性指定Ajax请求如何执行的很多细节。
 */
//jQuery.getScript(url,callback)与以下jQuery.ajax()的调用等价
jQuery.ajax({
    type: "GET", //HTTP请求方法
    url: url, //要获取数据的url
    data: null, //不给url添加任何数据
    dataType: "script", //一旦获取到数据，立刻当做脚本执行
    success: callback //完成时调用该函数
})

/**
 * jQuery.get()和jQuery.post()也接受上面这5个基本选项。然而，如果直接调用jQuery.ajax()的话，它可以
 * 支持更多的选项。
 */

//可以通过给jQuery.ajaxSetup()传入一个选项对象来设置任意选项的默认值
jQuery.ajaxSetup({
    timeout: 2000, //在两秒后取消所有Ajax请求
    cache: false //通过给URL添加时间戳来禁用浏览器缓存
})
//运行以上代码后，指定的timeout和cache选项会在所有未指定这两个选项的值的Ajax请求中使用(包括jQuer.get()和load()方法
//等高级工具)

/**ajax通用选项 */
/**
 * type:指定HTTP的请求方法。默认是"GET"。另一个常用值是"POST"。可以指定其他HTTP请求方法，比如
 * "DELETE"或"PUSH",但不是所有浏览器都支持它们。注意:该选项与请求或响应的数据类型没有任何关系，获取
 * 取名为"method"或是一个更好的选择。
 */

/**
 * url:要获取的URL.对于GET请求，data选项会添加到该URL后。对于JSONP请求，当cache选项为false时
 * jQuery可以添加参数到URL中。
 */

/**
 * data:添加到URL中(对GET请求)活在请求的内容体中(对POST请求)发送的数据。这可以是字符串或对象。通常会
 * 把对象转为话字符串，除了再process data选项中描述的异常情况。
 */

/**
 * dataType:指定响应数据的预期类型，以及jQuery处理该数据的方式。合法值是"text","html","script"
 * "json","jsonp"和"xml".该选项没有默认值，当没有指定时，jQuery会检查响应中的Content-type头来
 * 确定如何处理返回的数据
 */

/**
 * contentType:指定请求的HTTP Content-Type头，默认是"application/x-www-form-urlencoded",这是
 * HTML表单和绝大部分服务器脚本使用的正常值。如果type选项设置为"POST"，想发送纯文本或XML文档作为请求体
 * 时，需要设置该选项。
 */

/**
 * timeout:超时时间，单位是毫秒，如果设置了该选项，当请求没有在指定超时时间内完成时，请求会取消
 * 同时触发error回调，回调中的状态码参数为"timeout"。默认超时时间是0，表示除非请求完成，否则永远不会取消。
 */

/**
 * cache:对于GET请求，如果该选项设置为false,jQuery会添加一个"_="参数到URL中，或者替换已经存在的同名参数。
 * 该参数的值是当前时间(毫秒格式)。这可以禁用基于浏览器的缓存，因为每次请求的URL都不一样。
 */

/**
 * ifModified:当该选项设置为true时，jQuery会为请求的每一个URL记录Last-Modified和If-None-Match
 * 响应头的值，并会在接下来的请求中为相同的URL设置这些头部信息。这可以使得，如果上次请求后URL的内容没有改变，
 * 则服务器会发送回HTTP 304 "Not Modified"响应。默认情况下，该选项未设置，jQuery不会设置或记录
 * 这些头部信息。
 * 
 * jQuery将HTTP 304响应解释成"notmodified"状态码。"notmodified"状态不会被当成错误，传入success
 * 回调中的状态码是"notmodified"，而不是通常的"success"状态码。因此，如果设置了ifModified,就必须在回调中检查该状态码
 * ---如果状态码是"notmodified"，则第一个参数(响应数据)会是undefined。在jQuery 1.4及其之前的版本，HTTP
 * 304会被当成一个错误，"notmodified"状态码会被传入error回调中，而不是success回调中。
 */

/**
 * global:该选项指定jQuery是否应该触发上面描述的Ajax请求过程中。默认值是true;设置该选项为false
 * 会禁用Ajax相关的所有时间。该选项的命名有些令人迷惑:取名为"global"是因为jQuery通常会全局地触发这些事件
 * 而不是在具体某个对象上。
 */


/**
 * 回调
 */

/**
 * context:该选项指定回调函数在调用时的上下文对象--就是this。该选项没有默认值，如果不设置，this会指向选项对象。
 * 设置context选项也会影响Ajax事件触发的方式。如果设置该选项，值应该为Window、Document或触发事件所在的Element。
 */

/**
 * beforeSend:该选项指定Ajax请求发送到服务器之前激活的回调函数。第一个参数是XMLHTTPRequest对象，第二个参数是
 * 该请求的选项对象。beforeSend回调使得程序有机会在XMLHttpRequest对象上设置自定义HTTP头部。如果该回调函数返回false，
 * Ajax请求会取消。注意跨域的"script"和"jsonp"请求没有使用XMLHttpRequest对象，因此不会触发beforeSend回调。
 */
/**
 * success:该选项指定Ajax请求成功完成时调用的回调函数。第一个参数是服务器发送的数据；第二个参数是jQuery状态码；第三个参数用来
 * 发送该请求的XMLHttpRequest对象，第一个参数的类型取决于datatype选项或服务器响应的Content-Type头信息。如果类型是"xml"，则第一个
 * 参数是Document对象。如果类型是"json"或"jsonp"，第一个参数是服务器返回的JSON格式响应的解析结果。如果类型是"script"，则响应内容
 * 是所加载的文本内容(该脚本已经执行了，因此，在这种情况下通常可以忽略响应内容)。对于其他类型，响应内容直接就是请求资源的文本内容。
 * 
 * 
 * 第二个参数的状态码通常是字符串"success",但是如果设置了ifModified选项，该参数就可能是"notmodified"。在这种情况下，服务器不发送
 * 响应并且不定义第一个参数。"script"和"jsonp"类型的跨域请求通过<script>元素而不是XMLHttpRequest执行，因此对于那些请求，不会定义
 * 第三个参数。*/

/**
 * error:该选项指定Ajax请求不成功时调用的回调函数。该回调的第一个参数是该请求的XMLHttpRequest对象。第二个参数是jQuery的状态码。对于HTTP
 * 错误，该状态码可能是"error"，对于超时，则是"timeout"，"parseerror"则表示解析服务器响应时出了问题。例如，如果XML文档或JSON对象
 * 不符合格式，则状态码为"parseerror"。在这种情况下，error回调的第三个参数是抛出Error对象。注意datatype为"script"的请求在返回
 * 无效JavaScript代码时不会触发错误。脚本中的任何错误都会直接忽略，调用的回调则是success而不是error。
 */

/**
 * complete:该选项指定Ajax请求完成时激活的回调函数。在每一个Ajax请求或者成功时调用success回调，挥着失败时调用error回调。在调用
 * success或error后，jQuery会调用complete回调。传给complete回调的第一个参数是XMLHttpRequest对象，第二个参数则是状态码。
 */

//不常用的选项和钩子
/**
 * async:脚本化的HTTP请求本身就是异步的。然而，XMLHttpRequest对象提供了一个选项，可用来阻塞当前进程，直到接收到响应。如果想开启
 * 这一阻塞行为，可以设置该选项为false。
 */

/**
 * dataFilter:该选项指定一个函数，用来过来或预处理数据。
 */

$("#loading_animation").bind({
    ajaxStart: function () {
        $(this).show();
    },
    ajaxStop: function () {
        $(this).hide();
    }
})

/**
 * 工具函数
 */

/**
 * 选取方法
 */
var paras = $("p");
paras.first(); //仅选取元素第一个<p>元素
paras.last(); //仅选取最后一个<p>
paras.eq(1); //选取第二个<p>
paras.eq(-2); //选取倒数第二个<P>
paras[1]; //第二个<p>元素自身


/**
 * filter()是通用的选区过滤方法，有3种调用方式:
 * 
 * 传递选择器字符串给filter()，它会返回一个jQuery对象，仅包含也匹配该选择器中的选中元素。
 * 
 * 传递给另一个jQuery对象给filter()，它会返回一个新的jQuery对象，该对象包含这两个
 * jQuery对象的交集。也可以传递元素数组甚至单一文档元素给filter.
 * 
 * 传递判断函数给filter()，会为每一个匹配元素调用该函数,filter()则返回一个jQuery对象
 * 仅包含判断函数为true(或任意真值)的元素。在调用判断函数时，this值为当前元素，参数是元素序号。
 */

$("div").filter(".note"); //与$("div.note")一样
$("div").filter($(".note")); //与$("div.note")一样
$("div").filter(function (idx) {
    return idx % 2 == 0; //与$("div:even")一样
})

$("div").not("#header,#footer"); //除了两个特殊元素之外的所有<div>元素

$("p").has("a[href]"); //包含链接的段落

//选取所有<div>和所有<p>元素的等价方式
$("div,p"); //使用选择器组
$("div").add(p); //给add()传入选择器
$("div").add($("p")); //给add()传入jQuery对象
var paras = document.getElementsByTagName("p"); //类数组对象
$("div").add(paras); //给add()传入元素数组

/**
 * find()会在每一个当前选中的子孙元素中寻找与指定选择器字符串匹配的元素，然后它返回一个新的jQuery
 * 对象来代表所匹配的子孙元素集。注意这些新选中的元素不会并入已存在的选中元素集中。同时注意find()和
 * filter()不同，filter()不会选中新元素，只是简单地将当前选中的元素集进行缩减。
 */

$("div").find("p"); //在<div>中查找<p>元素，与$("div p")相同

/**
 * children()方法返回每一个选中元素的直接子元素，可以用可选的选择器参数进行过滤
 */

//寻找id为"header"和"footer"元素子节点元素中所有的<span>元素
//与$("#header>span,#footer>span")相同
$("#header,#footer").children("span");

/**
 * contents()方法与children()方法类似，不同的是它会返回每一个元素的所有子节点
 * 包括文本节点。如果选中元素集中有<iframe>元素，contents()还会返回该<iframe>
 * 内容的文档对象。注意contents()不接受可选的选择器字符串参数--因为它返回的文档节点
 * 不完全是元素，而选择器字符串仅用来描述元素节点。
 */

/**
 * next()和prev()方法返回每一个选中元素的下一个和上一个兄弟元素(如果有的话)，如果传入了选择器
 * 会只选中匹配该选择器的兄弟元素
 */

$("h1").next("p"); //与$("h1+p")相同
$("h1").prev(); //<h1>元素前面的兄弟元素

/**
 * nextAll()和prevAll()返回每一个选中元素前面或后面的所有兄弟元素(如果有的话)。siblings()
 * 方法则返回每一个选中元素的所有兄弟元素(选中元素本身不是自己的兄弟元素)。如果给这些方法传入选择器
 * 则只会返回匹配的兄弟元素
 */

$("#footer".nextAll("p")); //紧跟#footer元素的所有<P>兄弟元素
$("#footer").prevAll() //#footer元素前面的所有兄弟元素

/**
 * nextUntil和prevUntil()方法接受一个选择器参数，会选取选中元素后面或前面的所有兄弟元素，直到
 * 找到某个匹配该选择器的兄弟元素为止。如果省略该选择器，这两个方法的作用就和不带选择器的nextAll()
 * 和prevAll()一样。
 */
//parent()方法返回每一个选中元素的父节点
$("li").parent(); //列表元素的父节点，比如<ul>和<ol>元素

//parents()方法返回每一个选中元素的祖先节点(向上直到<html>元素。)parent()和parents()都接受
//一个可选的选择器字符串参数
$("a[href]").parents("p"); //含有链接的<p>元素

/**
 * parentsUntil()返回每一个选中元素的祖先元素，直到出现匹配指定选择器的第一个祖先元素。
 * closest()方法必须传入一个选择器字符串，会返回每一个选中元素的祖先元素中匹配该选择器
 * 的最近一个祖先元素(如果有的话)。对该方法而言，元素被认为是自身的祖先元素。还可以
 * 给closest()传入一个祖先元素作为第二个参数，用来阻止jQuery往上查找时超越该指定元素:
 */
$("a[href]").closest("div"); //包含链接的最里层<div>
$("a[href]").parentsUntil(":not(div)"); //所有包裹<a>的<div>元素

/**恢复到之前的选中元素集 */
/**在链式调用中调用end()会将匹配元素集还原到之前的状态 */
//寻找所有<div>元素，然后在其中寻找<p>元素
//高亮显示<P>元素，然后给<div>元素添加一个边框

//首先，不使用链式调用
var divs = $("div");
var paras = div.find("p");
paras.addClass("highlight");
divs.css("border", "solid black 1px");

//下面展现如何使用链式调用来实现
$("div").find("p").addClass("highlight").end().css("border", "solid black 1px");

//还可以将操作调换顺序来避免调用end()
$("div").css("border", "solid block 1px").find("p").addClass("highlight");

//如果想手动定义选中元素集，同时保持与end()方法的兼容，可以将新的元素集作为数组或类数组对象传递给
//pushStack()方法。指定的元素会成为新的选中元素，之前选中的元素集则会压入栈中，之后可以用
//end()方法还原它们
var sel = $("div"); //选取所有<div>元素
sel.pushStack(document.getElementsByTagName("p")); //修改为所有<p>元素
sel.end(); //还原为<div>元素

/**
 * addSelf()返回一个新的jQuery对象，包含当前的所有选中元素，加上之前的所有选中元素，加上之前的
 * 所有选中元素(会去除重复的)。addSelf()和add()方法一样，或许"addPrev"是一个更具描述性
 * 的名字。
 */

$("div").find("p").addSelf(). //寻找<div>中的<p>,合并起来
addClass("highlight"). //都高亮
end().end(). //弹出栈两次，返回$("div")
css("border", "solid black 1px"); //给divs添加边框

/**
 * 要想使用jQuery插件，必须在引用jQuery之后引入插件
 * 
 * jQuery.fn是所有jQuery对象的原型对象。如果给该对象添加一个函数，该函数会成为一个jQuery方法。
 */

jQuery.fn.printIn = function () {
    //将所有参数合并成空格分隔的字符串
    var msg = Array.prototype.join.call(arguments, " ");
    //遍历jQuery对象中的每一个元素
    this.each(function () {
        //将参数字符串作为纯文本添加到每一个元素后面，并添加一个<br/>
        jQuery(this).append(document.createTextNode(msg).append("<br/>"));
    });
    //返回这个未加修改的jQuery对象，以便链式调用
    return this;
}

$("#debug").printIn("x=", x, ";y=", y);