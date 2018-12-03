//Documeny类型代表一个HTML或XML文档，Element类型达标该文档中的一个元素。
//HTMLDocument和HTMLElement子类只是针对于HTML文档和元素。

//选取文档元素
//用指定的id属性
//用指定的name属性
//用指定的标签名字
//用指定的CSS类
//匹配指定的CSS选择器

//通过ID选取元素
var selection1 = document.getElementById("selection1");
//通过ID查找多个元素
function getElements( /*id*/ ) {
    var elements = {};
    for (var i = 0; i < arguments.length; i++) {
        var id = arguments[i];
        var elt = document.getElementById(id);
        if (elt == null) {
            throw new Error("No element with id:" + id);
        }
        elements[id] = elt;
    }
    return elements;
}

//通过名字选取元素

//name属性不是必须唯一，多个元素可能有同样的名字，在表单中，单选和复选按钮通常是这种情况。
//而且，和id不同的是，name属性只在少数HTML元素中有效，包括表单，表单元素，<iframe>和<img>元素
//具体是FRAME, FRAMESET, IFRAME, META, A, APPLET, attribute, BUTTON, EMBED, FORM, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=hidden, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, LINK, MAP, OBJECT, RT, RUBY, SELECT, TEXTAREA, PARAM
//可以使用Document对象的getElementsByName()方法
var radiobuttons = document.getElementsByName("favorite_color");

//getElementsByName()定义在HTMLDocument类中，而不在Document类中，所以它只针对HTML文档可用，在XML文档中不可用。
//它返回一个NodeList对象，后者的行为类似一个包含若干Element对象的只读数组。在IE中，getElementsByname()也返回ID属性
//匹配指定值元素。为了兼容，不要将同样的字符串同时用做名字和ID.

//为某些HTML元素设置name属性值将自动为Window对象中创建对应的属性，对Document对象也类似。
//为<form>、<img>、<iframe>、<applet>、<embed>或<object>元素设置name属性值，即在Document对象中创建以此name属性值为名字的属性

//如果给定的名字只有一个元素，自动创建的文档属性对应的该值是元素本身。如果有多个元素，该文档属性的值是一个NodeList对象，
//它表现为一个包含这些元素的数组。为若干命名的<iframe>元素所创建的文档属性比较特殊：它们指代这些框架的Window对象而不是Element对象
//这意味着有些元素可以作为Document属性仅通过名字来选取
//针对<form name="shipping_address">元素，得到Element对象
var form = document.shipping_address;

//通过标签名选取元素

//Document对象的getElementsByTagName()方法可用来选取指定类型(标签名)的所有HTML或XML元素。
var spans = document.getElementsByTagName("span");
//getElementsByTagName()返回一个NodeList对象。在NodeList中返回的元素按照在文档中的顺序排序的
//所以可用如下代码选取文档中的第一个<p>元素
var firstpara = document.getElementsByTagName("p")[0];
//HTML标签是不区分大小写的，当在HTML文档中使用getElementsByTagName()时，它进行不区分大小写的标签名比较
//例如:上述的变量span将包含所有携程<SPAN>的span标签

//给getElementsByTagName()传递通配符参数"*"将获得一个代表文档中所有元素的NodeList对象。

//Element类也定义getElementsByTagName()方法，其原理和Document版本的一样，但是它只选取调用该方法的元素的后代元素。
//因此,要查找文档中第一个<p>元素里面的所有<span>元素，代码如下
var firstpara = document.getElementsByTagName("p")[0];
var firstParaSpans = firstpara.getElementsByTagName("span");

//getElementsByName()和getElementsByTagName()都返回NodeList对象，而类似document.images和document.forms的属性为HTMLCollection对象
//这些对象都是只读的类数组对象。它们有length属性，也可以像真正的数组一样索引(只是读而不是写)。可以对一个NodeList或HTMLCollection
//的内容用如下标准的循环进行迭代

for (var i = 0; i < document.images.length; i++) {
    document.images[i].style.display = "none";
}

//不能直接在NodeList和HTML集合上调用Array的放法，但是可以间接的使用：
var content = Array.prototype.map.call(document.getElementsByTagName("p"), function (e) {
    return e.innerHTML;
});

/**
 * 通常，NodeList和HTMLCollection的实时性非常有用。但是，如果要在迭代一个NodeList
 * 对象时在文档中添加或删除的元素，首先会需要对NodeList对象生成一个静态的副本
 */

//通过css类选取元素
//查找其class属性值中包含"warning"的所有元素
var warnings = document.getElementsByClassName("warning");
//查找以"log"命名并且有"error"和"fatal"类的元素的所有后代
var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");

//通过css选择器选取元素
//#nav id="nav"的元素
//div  所有<div>元素
//.warning  所有在class属性值中包含了"warning"的元素

//更一般的，元素可以基于属性值来选取
//p[lang="fr"] 使用法语的段落 <p lang="fr">
//*[name="x"] 所有包含name="x"属性的元素

//这些基本的选择器可以组合使用
//span.fatal.error  其class中包含"fatal"和"error"的所有<span>元素
//span[lang="fr"].warning  所有使用发育的且其class中包含"warning"的<span>元素

//选择器可以指定文档结构
//#log span  id="log"元素的后代元素中的所有<span>元素
//#log>span id="log"元素的子元素中的所有<span>元素
//body>h1:first-child <body>的子元素中的第一个<h1>元素

//选择器可以组合起来选取多个或多组元素
//div,#log  所有<div>元素以及id="log"的元素

//querySelectorAll()，它接受包含一个css选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素NodeList对象
//querySelectorAll()返回的NodeList对象并不是实时的：它包含在调用时刻选择器所匹配的元素，但它并不更新后续文档的变化。
//如果没有匹配的元素，querySelectorAll()将返回一个空的NodeList对象。如果选择器字符串非法，querySelectorAll()将抛出一个异常

//querySelector()方法与querySelectorAll()的工作原理类似，但它只是返回第一个匹配的元素，如果没有匹配的元素就返回null

//这两个方法在Element节点中也有定义(并且也在DocumentFragment节点中)。在元素上调用时，指定的选择器仍然在整个文档中进行匹配，然后过滤vhu结果集以便
//它只包含指定元素的后代元素。这意味着选择器字符串能包含元素的祖先而不仅仅是上述所匹配的元素。

//css定义了":first-line"和":first-letter"等伪元素。在css中，它们匹配文本节点的一部分而不是实际元素。
//如果和querySelectorAll()或querySelector()一起使用它们是不匹配的，而且，很多浏览器会拒绝返回
//":link"和":visited"等伪类的匹配结果，因为这会泄露用户的浏览历史记录。

//已弃用的document.all[]
document.all[0]; //文档中的第一个元素
document.all["navbar"]; //id或name为"navbar"的元素(或多个元素)
document.all.navbar //同上
document.all.tags("div"); //文档中所有的<div>元素
document.all.tag("p")[0]; //文档中第一个<p>元素

//Document对象，它的Element对象和文档中表示文本的Text对象都是Node对象。Node定义了以下的重要的属性:
//parentNode:该节点的父节点，或者针对类似的Document对象应该是null,因为它没有父节点

//childNodes:只读类数组对象(NodeList对象),它是该节点的子节点的实时表示

//firstChild、lastChild:该节点的子节点中的第一个和最后一个，如果该节点没有子节点则为null

//nextSibling、previoursSibling:该节点的兄弟节点中的前一个和下一个。具有相同父节点的两个节点为兄弟节点。节点的顺序反应了它们在文档中出现的顺序。这两个属性将节点之间以双向链表的形式连接起来。

//nodeType:该节点的类型。9代表Document节点，1代表Element节点，3代表Text节点，8代表Comment节点，11代表DocumentFragment节点

//nodeValue:Text节点或Comment节点的文本内容

//nodeName:元素的标签名，以大写形式表示

//使用这些Node属性，可以用 以下类似的表达式得到文档的第一个子节点下面的第二个子节点的引用
document.childNodes[0].childNodes[1];
document.firstChild.firstChild.nextSibling;

//我们可以使用另一个更有用的API。它将文档看做是Element对象树，忽略部分文档：Text和Comment节点。
//该API的第一部分是Element对象的children属性。类似ChildNodes,它也是一个NodeList对象，但不同的是children列表只包含Element对象。
//children并非标准属性，但是它在所有当前的浏览器中都能工作。


//注意，Text和Comment节点没有children属性，它意味着上述Node.parentNode属性不可能返回Text或Comment节点。
//任何Element的parentNode总是另一个Element，或者，追溯到树根的Document或DocumentFragment节点

//基于元素的文档遍历API的第二部分是Element属性，后者类似Node对象的子属性和兄弟属性
//firstElementChild,lastElementChild:类似firstChild和lastChild,但只代表Element
//nextElementSibling,previousElementSibling:类似nextSibling和previousSibling，但只代表兄弟Element
//childElementCount:子元素的数量。返回的值和children.length相等

//子元素和兄弟元素的属性是标准属性，并在除了IE之外的浏览器中都已实现

//可移植的文档遍历函数

/*返回元素e的第n层祖先元素，如果不存在此类祖先或祖先不是Element
 (例如Document或者DocumentFragment)，则返回null
 如果n为0，则返回e本身。如果n为1(或者省略)，则返回其父元素
 如果n为2，则返回其祖父元素，依次类推
 */

function parent(e, n) {
    if (n === undefined) {
        n = 1;
    }
    while (n-- && e) {
        e.parentNode;
    }
    if (!e || e.nodeType !== 1) {
        return null;
    }
    return e;
}

/*
 *返回元素e的第n个兄弟元素
 *如果n为正，返回后续的第n个兄弟元素
 *如果n为负，返回前面的第n个兄弟元素
 *如果n为零，返回e本身 
 */
function sibling(e, n) {
    while (e && n !== 0) { //如果e未定义，即刻返回它
        if (n > 0) { //查找后续的兄弟元素
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling) {
                    //空循环
                }
            }
            n--;
        } else { //查找前面的兄弟元素
            if (e.previousElementSibing) {
                e = e.previousElementSibing;
            } else {
                for (e = e.previousSibing; e && e.nodeType !== 1; e = e.previousSibing) {
                    //空循环
                }
            }
            n++;
        }
    }
    return e;
}

//返回元素e的第n代子元素，如果不存在则为null
//负值代表从后往前计数。0表示第一个子元素，而-1代表最后一个，-2代表倒数第二个，依次类推

function child(e, n) {
    if (e.children) { //如果children数组存在
        if (n < 0) {
            n += e.children.length; //转换负的n为数组索引
            if (n < 0) { //如果它仍然为负，说明没有子元素
                return null;
            }
        }
        return e.children[n]; //返回指定的子元素
    }
    //如果e没有children数组，找到第一个子元素并向前数，或找到最后一个子元素并往回数
    if (n >= 0) { //n为负：从第一个子元素向前数
        //找到元素e的第一个子元素
        if (e.firstElementChild) {
            e = e.firstElementChild;
        } else {
            for (e = e.firstChild; e && e.nodeType !== 1; e = e.nextSibling) {
                //空循环
            }
        }
        return sibling(e, n);
    } else { //n为负:从最后一个子元素往回数
        if (e.lastElementChild) {
            e = e.lastElementChild;
        } else {
            for (e = e.lastChild; e && e.nodeType !== 1; e = e.previousSibing) {
                //空循环
            }
        }
        return sibling(e, n + 1); //+1来转化最后1个子元素为最后1个兄弟元素
    }
}

//HTML属性作为Element的属性
var image = document.getElementById("myimage");
var imgurl = image.src;
image.id = "myimage";

//同样的，可以为一个<form>元素设置表单提交的属性，代码如下
var f = document.forms[0];
f.action = "http://www.example.com/submit.php";
f.method = "POST";

//获取或设置非标准HTML属性
var image = document.images[0];
var width = parseInt(image.getAttribute("WIDTH"));
image.setAttribute("class", "thumbnail");

//hasAttribute()和removeAttribute(),它们用来检测命名属性是否存在和完全删除属性。

//作为Attr节点的属性
//针对非Element对象的任何节点，该属性为null
document.body.attributes[0];
document.body.attributes.bgcolor;
document.body.attributes["ONLOAD"];

//Element的innerHTML属性作为字符串标记返回那个元素的内容
//当查询outerHTML时，返回的HTML或XML标记的字符串包含被查询元素的开头和结尾标签。
//当设置元素的outerHTML时，元素本身被新的内容所替换。只有Element节点定义了outerHTML属性，Document节点则无。

//简易五子棋
//https://www.cnblogs.com/lzkwin/p/6933942.html

//有时需要查询纯文本形式的元素内容，或者在文档中插入纯文本
var para = document.getElementsByTagName("p")[0];
var text = para.textContent;
para.textContent = "Hello World";
//textContent属性在除了IE的所有当前的浏览器中都支持。在IE中，可以用Element的innerText属性来代替
//微软在IE4中引入了innerText属性，它在除了Firefox的所有当前浏览器中都支持

/**
 * 一个参数，返回元素的textContent或innerText
 * 两个参数，用value参数的值设置元素的textContent或innerText
 */
function textContent(element, value) {
    var content = element.textContent; //检测textContent是否有定义
    if (value === undefined) { //检测textContent是否有定义
        if (content !== undefined) {
            return content;
        } else {
            return element.innerText;
        }
    } else { //传递了value,因此设置文本
        if (content !== undefined) {
            element.textContent = value;
        } else {
            element.innerText = value;
        }
    }
}

//innerText不返回<script>元素的内容，它忽略多余的空白，并试图保留表格格式。
//同时，innerText针对某些表格元素(<table>、<tbody>和<tr>)是只读的属性

//查找元素的后代中节点中的所有Text节点
//返回元素e的纯文本内容，递归进入其子元素
//该方法的效果类似于textContent属性
function textContent(e) {
    var child, type, s = ""; //s保存所有子节点的文本
    for (child = e.firstChild; child != null; child = child.nextSibling) {
        type = child.nodeType;
        if (type === 3 || type === 4) { //Text和CDATASection节点
            s += child.nodeValue;
        } else if (type === 1) {
            s += textContent(child);
        }
    }
    return s;
}

//从指定的URL,异步加载和执行脚本
function loadasync(url) {
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);
}

//Text节点用类似的方法创建
var newnode = document.createTextNode("text node content");

//另一个创建新文档节点的方法是复制已存在的节点。每个节点有一个cloneNode()方法来返回该节点的一个全新副本。
//给方法传递参数true也能够递归地复制所有的后代节点，或传递参数false只是执行一个浅复制。
//在除了IE的其他浏览器中，Document对象还定义了一个类似的方法叫做importNode()。如果给它传递另一个文档的一个节点
//它将返回一个适合本文档插入的节点的副本。传递true作为第二个参数，该方法将递归地导入所有的后代节点

//插入节点
/**一旦有了一个新节点，就可以用Node的方法appendChild()或insertBefore()将它插入
 * 到文档中。appendChild()是在需要插入的Element节点上调用的，它插入指定的节点使其成为那个节点的最后一个子节点
 */

/**insertBefore()就像appendChild()一样，除了它接受两个参数。第一个参数就是待插入的节点，
 * 第二个参数是已存在的节点，在新节点将插入该节点的前面。该方法应该是在新节点的父节点上调用，方法的第二个参数必须是该父节点的子节点。
 * 如果传递null作为第二个参数，insertBefore()的行为类似appendChild()，它将节点插入最后
 */

//将child节点插入到parent中，使其成为第n个子节点
function insertAt(parent, child, n) {
    if (n < 0 || n > parent.childNodes.length) {
        throw new Error("invalid index");
    } else if (n == parent.childNodes.length) {
        parent.appendChild(child);
    } else {
        parent.insertBefore(child, parent.childNodes[n]);
    }
}

/**如果调用appendChild()或insertBefore()将已存在文档中的一个节点再次插入
 * 那个节点将自动从它当前删除并在新的位置重新插入:没有必要显示删除该节点
 */

//表格的行排序
//根据指定表格每行第n个单元格的值，对第一个<tobody>中的行进行排序
//如果存在comparator函数则使用它，否则按照按照字母表顺序比较

function sortrows(table, n, comparator) {
    var tbody = table.tBodies[0]; //第一个<tbody>,可能是隐式创建的
    var rows = tbody.getElementsByTagName("tr"); //tbody中的所有行
    rows = Array.prototype.slice.call(rows, 0); //真实数组中的快照，见p368方框内容
    //基于第n个<td>元素的值对行排序
    rows.sort(function (row1, row2) {
        var cell1 = row1.getElementsByTagName("td")[n]; //获得第n个单元格
        var cell2 = row2.getElementsByTagName("td")[n]; //两行都是
        var val1 = cell1.textContent || cell1.innerText; //获得文本内容
        var val2 = cell2.textContent || cell2.innerText; //两单元格都是
        if (comparator) return comparator(val1, val2); //进行比较
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    });
    //在tbody中按照它们的顺序把行添加到最后
    //这将自动把它们从当前位置移走，故没必要预先先删除它们
    //如果<tbody>还包含了除了<tr>的任何其他元素，这些节点将会悬浮到顶部位置
    for (var i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }
}

//查找表格的<th>元素(假设只有一行)，让它们可单击
//以便单击列标题，把该列对行排序
function makeSortale(table) {
    var headers = table.getElementsByTagName("th");
    for (var i = 0; i < headers.length; i++) {
        (function (n) { //嵌套函数来创建本地作用域
            headers[i].onclick = function () {
                sortrows(table, n);
            };
        }(i)); //将i的值赋给局部变量n
    }
}

/**
 * removeChild()方法是从文档树种删除一个节点。但是，该方法不是在待删除的节点上调用
 * 而是(就像其名字的一部分"child"所暗示的一样)在其父节点上调用。在父节点上调用该方法，并将
 * 需要删除的子节点作为方法参数传递给它。从文档中删除n节点，代码可以这样写:
 */
n.parentNode.removeChild(n);

/**
 * replaceChild()方法删除一个子节点并用一个新的节点取而代之，从父节点上调用该方法，
 * 第一个参数是新节点，第二个参数是需要代替的节点。例如，用一个文本字符串来替换节点n，
 * 代码可以这样写：
 */
n.parentNode.replaceChild(document.createTextNode("[REDACTED]"), n);

/**
 * 以下函数展示了replaceChild()的另一种方法
 */
//用一个新的<b>元素替换n节点，并使n成为该元素的子节点
function embolden(n) {
    //假如参数为字符串而不是节点，将其当做元素的id
    if (typeof n == "string") {
        n = document.getElementById(n);
    }
    var parent = n.parentNode; //获得n的父节点
    var b = document.createElement("b"); //创建一个<b>元素
    parent.replaceChild(b, n); //用该<b>元素替换节点节点n
}

/**
 * 使用innerHTML实现outerHTML属性
 */

//为那些不支持它的浏览器实现outerHTML
//假设浏览器确实支持innerHTML,并且有个可扩展的Element.prototype
//并且可以定义getter和setter
(function () {
    //如果outerHTML存在，则直接返回
    if (document.createElement("div").outerHTML) return;
    //返回this所引用元素的外部HTML
    function outerHTMLGetter() {
        var container = document.createElement("div"); //虚拟元素
        container.appendChild(this.cloneNode(true)); //复制到该节点虚拟节点
        return container.innerHTML; //返回虚拟节点的innerHTML
    }
    //用指定的值设置元素的外部HTML
    function outerHTMLSetter(value) {
        //创建一个虚拟元素，设置其内容为指定值
        var content = document.createElement("div");
        container.innerHTML = value;
        //将虚拟元素中的节点全部移动到文档中
        while (container.firstChild) { //循环，直到container没有子节点为止
            //第一个参数是待插入的节点，第二个参数是该父节点的子节点
            this.parentNode.insertBefore(container.firstChild, this);
        }
        //删除所被取代的节点
        //如果调用appendChild()或insertBefore()将已存在文档中的一个节点再次插入
        //那个节点将自动从它当前删除并在新的位置重新插入:没有必要显示删除该节点
        this.parentNode.removeChild(this);
    }
    //现在使用这两个函数作为所有Element对象的outerHTML属性的getter和setter
    //如果它存在则使用ES5的Object.defineProperty()方法
    //否则，退而求其次，使用_defineGetter_()和_defineSetter_()
    if (Object.defineProperty) {
        Object.defineProperty(Element.prototype, "outerHTML", {
            get: outerHTMLGetter,
            set: outerHTMLSetter,
            enumerable: false,
            configurable: true
        });
    } else {
        Element.prototype._defineGetter_("outerHTML", outerHTMLGetter);
        Element.prototype._defineSetter_("outerHTML", outerHTMLSetter);
    }
}());

/**
 * DocumentFragment是一种特殊的Node,它作为其他节点的一个临时的容器。像这样创建
 * 一个DocumentFragment
 */
var frag = document.createDocumentFragment();

/**
 * 像Document节点一样，DocumentFragment是独立的，而不是任何其他文档的一部分。它的
 * parentNode总是null。但类似Element，它可以有任何多的子节点，可以用appendChild()
 * insertBefore()等方法来操作它们。
 */

/**
 * DocumentFragment的特殊之处在于它使得一组节点被当做一个节点看待：如果给
 * appendChild()、insertBefore()或replaceChild()传递一个DocumentFragment
 * 其实是将该片段的所有子节点插入到文档中，而非片段本身。（文档片段的子节点从片段
 * 移动到文档中，文档片段清空以便重用。
 */

//倒叙排列节点n的子节点
function reverse(n) {
    //创建一个DocumentFragment作为临时容器
    var f = document.createDocumentFragment();
    //从后至前循环子节点，将每一个子节点移动到文档片段中
    //n的最后一个节点变成f的第一个节点，反之亦然
    //注意，给f添加一个节点，该节点自动地会从n中删除
    while (n.lastChild) {
        f.appendChild(n.lastChild);
    }
    //最后，把f的所有子节点一次性全部移回n中
    n.appendChild(f);
}

//使用innerHTML实现insertAdjacentHTML
//本模块为不支持它的浏览器定义了Element.insertAdjacentHTML
//还定义了一些可移植的HTML插入函数，它们的名字比insertAdjacentHTML更符合逻辑
//Insert.before()、Insert.after()、Insert.atStart()和Insert.atEnd()
var Insert = (function () {
    //如果元素有原声的insertAdjacentHTML
    //在4个函数名更名了的HTML插入函数中使用它
    if (document.createElement("div").insertAdjacentElement) {
        return {
            before: function (e, h) {
                e.insertAdjacentElement("beforebegin", h);
            },
            after: function (e, h) {
                e.insertAdjacentElement("afterend", h);
            },
            atStart: function (e, h) {
                e.insertAdjacentElement("afterbegin", h);
            },
            atEnd: function (e, h) {
                e.insertAdjacentElement("beforeend", h);
            }
        }
    }
    //否则，无原声的insertAdjacentHTML
    //实现同样的4个插入函数，并使用它们来定义insertAdjacentHTML

    //实现，定义一个工具函数，传入HTML字符串，返回一个DocumentFragment，
    //它包含了解析后的HTML的表示
    function fragment(html) {
        var elt = document.createElement("div"); //创建空元素
        var flag = document.createDocumentFragment(); //创建空文档片段
        elt.innerHTML = html; //设置元素内容
        while (elt.firstChild) { //移动所有的节点
            frag.appendChild(elt.firstChild); //从elt到frag
        }
        return frag; //然后返回flag
    }
    var Insert = {
        before: function (elt, html) {
            elt.parentNode.insertBefore(fragment(html), elt);
        },
        after: function (elt, html) {
            elt.parentNode.insertBefore(fragment(html), elt.nextSibling);
        },
        atStart: function (elt, html) {
            elt.insertBefore(fragment(html), elt.firstChild);
        },
        atEnd: function (elt, html) {
            elt.appendChild(fragment(html));
        }
    };
    //基于以上函数实现insertAdjacentHTML
    Element.prototype.insertAdjacentElement = function (pos, html) {
        switch (pos.toLowerCase) {
            case "beforebegin":
                return Insert.before(this, html);
            case "afterend":
                return Insert.after(this, html);
            case "afterbegin":
                return Insert.atStart(this, html);
            case "beforeend":
                return Insert.atEnd(this, html);
        }
    };
    return Insert; //最后返回4个插入函数
}());

/**
 * 为了在坐标系之间互相转换，我们需要判定浏览器窗口的滚动条位置。Window对象的
 * pageXOffset和pageYOffset属性在所有的浏览器中提供这些值，除了IE8及更早的版本
 * 以外。IE(和所有现代浏览器)也可以通过scrollX和scrollTop属性来获得滚动条的位置。
 * 正常情况下通过查询文档根节点(document.documentElement)来获取这些属性值，但是在
 * 怪异模式下，必须在文档的<body>元素(document.body)上查询它们。
 */

//查询窗口滚动条位置
//以一个对象的x和y属性的方式返回滚动条的偏移量
function getScrollOffsets(w) {
    //使用指定的窗口，如果不带参数则使用当前窗口
    w = w || window;
    //除了IE8及更早的版本以外，其他浏览器都能用
    if (w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
    }
    //要进行这种渲染模式的特性检测，通常检查document.compatMode属性
    //如果其值为"CSS1Compat",则说明浏览器工作在标准模式
    //如果值为"BackCompat"(或undefined,说明属性根本不存在),则说明浏览器工作在怪异模式
    //对标准模式下的IE(或任何浏览器)
    var d = w.document;
    if (document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        };
    }
    //对怪异模式下的浏览器
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
}

//查询窗口的视口尺寸
//作为一个窗口对象的w和h属性返回视口的尺寸
function getViewportSize(w) {
    //使用指定的窗口，如果不带参数则使用当前窗口
    w = w || window;
    //除了IE8及更早的版本以外，其他浏览器都能用
    if (w.innerWidth != null) {
        return {
            w: w.innerWidth,
            h: h.innerHeight
        };
    }
    //对标准模式下的IE(或任何浏览器)
    var d = w.document;
    if (document.compatMode == "CSS1Compat") {
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        }
    }
    //对怪异模式下的浏览器
    return {
        w: d.body.clientWidth,
        h: d.body.clientHeight
    }
}

//查询元素的几何尺寸
/**
 * getBoundingClientRect()方法返回一个有left、right、top和bottom属性的对象。
 * left和top属性表示元素的左上角的X和Y坐标，right和bottom属性表示元素的右下角的X和Y坐标
 * 这个方法返回元素在视口坐标中的位置。getBoundingClientRect()方法名中的"Client"是一种间接指代。
 * 它就是web浏览器客户端---专指它定义的窗口或视口。为了转化为甚至用户浏览器窗口以后仍然有效的文档最表，需要
 * 加上滚动的偏移量。
 */

var box = e.getBoundingClientRect(); //获得在视口坐标中的位置
var offsets = getScrollOffsets(); //上面定义的工具函数
var x = box.left + offsets.x; //转化为文档坐标
var y = box.top + offsets.y;

/**
 * 在很多浏览器(和W3C标准中)，getBoundingClientRect()返回的对象还包含width和height属性
 * 但是在原始的IE中未实现。为了简便起见，可以这样计算元素的width和height
 */

var box = e.getBoundingClientRect();
var w = box.width || (box.right - box.left);
var h = box.height || (box.bottom - box.top);

/**
 * 元素内容被一块可选的空白区域所包围，叫做内边距。内边距被边框所包围，边框被外边距所包围。
 * 内边距、边框和外边距都是可选的。getBoundingClientRect()所返回的坐标包含元素的边框和内边距，但不包含元素的外边距
 */

/**
 * 如果getBoundingClientRect()方法名中"Client"指定了返回的矩形的坐标系，那么方法名中的"Bounding"做何解释呢？
 * 浏览器在布局时块状元素(如图片、段落和<div>元素等)总是为矩形。但是，内联元素(如<span>、<code>和<b>等)可能跨了多行
 * 因此可能有多个矩形。例如:一些被断成两行的斜体文本(用<i>和</i>标签标记的)。它的形状是由第一行右边部分和第二行左边两部分
 * 两个矩形组成的。如果在内联元素上调用getBoundingClientRect()，它返回"边界矩形"。对于如上描述的<i>元素，边界矩形会包含整整两行的宽度
 * 如果想查询内联元素每个独立的矩形，调用getClientRects()方法来获得一个只读的类数组对象，它的每个元素类似于getBoundingClientRect()返回的矩形对象
 * getBoundingClientRect()和getClientRects()所返回的矩形对象(和矩形对象列表)并不是实时的，
 */

/**
 * 可以用Document对象的elementFromPoint()方法来判定视口中指定的位置上有什么元素。
 * 选取该元素的算法还未详细指定，但意图是它返回在那个店的最里面和最上面的(z-index)元素，
 * 如果指定的店在视口外，则返回null
 * elementFromPoint()方法最典型的案例是将鼠标指针的坐标传递给它来判定鼠标在哪个元素上，但是，鼠标事件对象在target属性中包含了这些信息，所以elementFromPoint()不经常使用。
 */

/**
 * 滚动
 */

//获得文档和视口的高度，offsetHeight会在下面解释
var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight;
//然后，滚动让最后一页在视口中可见
window.scrollTo(0, documentHeight - viewportHeight);

/**
 * Window的scrollBy()方法和scroll()和scrollTo()类似，但是它的参数是相对的，并在当前滚动条的偏移量上增加。
 */

javascript: voild setInterval(function () {
    scrollBy(0, 10)
}, 200);


//关于元素尺寸、位置和溢出的更多信息
/**
 * 任何HTML元素的只读属性offsetWidth和offsetHeight以CSS像素返回它的屏幕尺寸。
 * 返回的尺寸包含元素的边框和内边距，除去了外边距。
 */

/**
 * 所有HTML元素拥有offsetLeft和offsetTop属性来返回元素的X和Y坐标。对于很多元素，这些值是文档坐标，并直接指定元素的位置。
 * 但对于已定位元素的后代元素和一些其他元素(如表格单元)，这些属性返回的坐标是相对于祖先元素的而非文档。
 * offsetParent属性指定这些属性所相对的父元素。如果offsetParent为null，这些属性都是文档坐标。因此，一般来说，
 * 用offsetLeft和offsetTop来计算元素e的位置需要一个循环。
 */
function getElementPosition(e) {
    var x = 0,
        y = 0;
    while (e != null) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return {
        x: x,
        y: y
    };
}

/**
 * clientWidth和clientHeight类似offsetWidth和offsetHeight，不同的是它们不包含边框大小，只包含内容和它的内边距。
 * 同时，如果浏览器在内边距和边框之间添加了滚动条，clientWidth和clientHeight在其返回值中也不包含滚动条。注意，对于类似
 * <i>、<code>和<span>这些内联元素，clientWidth和clientHeight总是返回0.
 */

/**
 * clientLeft和clientTop属性没什么用:它们返回元素的内边距的外边缘和它的边框的外边缘之间的水平距离和垂直距离，通常这些值
 * 就等于左边和上边的边框宽度。但是如果元素有滚动条，并且浏览器将这些滚动条放置在左侧或顶部(可这不太常见)，clientLeft和clientTop
 * 也就包含了滚动条的宽度。对于内联元素，clientleft和clientTop总是为0.
 */

/**
 * scrollWidth和scrollHeight是元素的内容区域加上它的内边距再加上任何溢出内容的尺寸。当内容正好和内容区域匹配而没有溢出时，
 * 这些属性clientWidth和clientHeight是相等的。但当溢出时，它们就包含溢出的内容，返回值比clientWidth和clientHeight要大。
 */

/**
 * 最后，scrollLeft和scrollTop指定元素的滚动条位置。在getScrollOffsets()方法中在文档的根元素上我们查询过它们。注意，scrollLeft
 * 和scrollTop是可写的属性，通过设置它们来让元素的内容滚动。(HTML元素并没有类似Window对象的scrollTo()方法。)
 */

/**
 * 当文档包含可滚动的且有溢出内容的元素时，上述定义的getElementPosition()方法就不能正常工作了，因为它没有把滚动条考虑进去。
 * 这里有一个修订版，它把累计的偏移量中减去了滚动条的位置。这样一来，将返回的位置从文档坐标转换为视口坐标。
 */
function getElementPos(elt) {
    var x = 0,
        y = 0;
    //循环以累加偏移量
    for (var e = elt; e != null; e.e.offsetParent) {
        x += e.offsetLeft;
        y += e.offsetTop;
    }
    //再次循环所有的祖先元素，减去滚动的偏移量
    //这也减去了主滚动条，并转换为视口坐标
    for (var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode) {
        x -= e.scrollLeft;
        y -= e.scrollTop;
    }
    return {
        x: x,
        y: y
    }
}

/**
 * 选取表单和表单元素
 */
var fields = document.getElementById("address").getElementsByTagName("input");

/**
 * 在支持querySelectorAll()浏览器中，从一个表单中选取所有的单选按钮或所有同名的元素的代码如下:
 */
//id为"shipping"的表单中所有的单选按钮
document.querySelectorAll('#shipping input[type="radio"]');
//id为"shipping"的表单中所有名字为"method"的单选按钮
document.querySelectorAll('#shipping input[type="radio"][name="method"]');

//name="address"属性的<form>可以用以下任何方法来获取
window.address; //不可靠，不要使用
document.address //仅当表单有name属性时可用
document.forms.address //显示访问有name或id的表单
document.forms[0]; //不可靠:n是表单的序号

/**
 * document.forms是一个HTMLCollection对象，可以通过数字序号或id或name来选取表单元素。
 * Form对象本身的行为类似于多个表单元素组成的HTMLCollection集合，也可以通过name或数字序号来索引。
 * 如果名为"address"的表单的第一个元素的name是"street"，可以使用以下任何一种表达式来引用该元素
 */
document.forms.address[0];
document.forms.address.street;
document.address.street //当有name="address"，而不是只有id="address"

//如果要明确地选取一个表单元素，可以索引表单对象的elements属性

/**
 * 提交和重置元素本就是按钮，不同的是它们有与之相关联的默认动作(表单的提交和重置)。如果onclick事件处理程序返回false
 * 这些按钮的默认动作就不再执行了。可以使用提交元素的onclick事件处理程序来执行表单校验，但是更为常用的是使用Form
 * 对象本身的onsubmit事件处理程序来执行表单校验。
 */

/**
 * referrer:包含用户链接到当前文档的上一个文档的URL。可以用如下代码来使用该属性
 */
if (document.referrer.indexOf("http://www.google.com/search?") == 0) {
    var args = document.referrer.substring(ref.indexOf("?") + 1).split("&");
    for (var i = 0; i < args.length; i++) {
        if (args[i].substring(0, 2) == "q=") {
            document.write("<p>Welcome Google User.");
            document.write("You searched for:" + unescape(args[i].substring(2)) + replace('+', ' '));
            break;
        }
    }
}

/**
 * 查询选取的文本，可以利用如下的函数
 */
function getSelectedText() {
    if (window.getSelection) { //HTML5标准API
        return window.getSelection().toString();
    } else if (document.selection) { //IE特有技术
        return document.selection.createRange().text;
    }
}

/**
 * 可编辑的内容
 * 有两种方法来启用编辑功能。其一，设置任何标签的HTML contenteditable属性，其二，设置对应元素的JavaScript contenteditable属性
 * 这都使得元素的内容变成可编辑。当用户单击该元素的内容时就会出现插入光标，用户敲击键盘就可以插入其中。如：
 */

<div id="editor" contenteditable>
    Click to edit.
</div>

/**
 * 浏览器可能为表单字段和contenteditable元素支持自动拼写检查。在支持该功能的浏览器中，检查可能默认开启或关闭。为元素添加spellcheck属性
 * 来显示开启拼写检查，而使用spellcheck=false来显示关闭该功能。
 */

/**
 * 将Document对象的designMode属性设置为字符串"on"使得整个文档可编辑。(设置为"off"将文档恢复为只读文档。)designMode属性并没有对应的HTML属性。如下代码使得<iframe>内部的文档可编辑。
 */
<iframe id="editor" src="about:blank"></iframe>//空iframe
<script>
    oonload(function(){
        var editor=document.getElementById("editor");
        editor.contentDocument.designMode="on";//开启编辑
    })
</script>