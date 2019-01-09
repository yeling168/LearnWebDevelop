function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历这些缩略词
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);
}

function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");
    //遍历引用
    for (var i = 0; i < quotes.length; i++) {
        //如果没有cite属性，继续循环
        if (!quotes[i].getAttribute("cite")) {
            continue;
        }
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //如果没有元素节点，继续循环
        if (quoteChildren.length < 1) continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length - 1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
    }
}

function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //取得文档中的所有链接
    var links = document.getElementsByTagName("a");
    //创建一个数组，保存访问键
    var akeys = new Array();
    //遍历链接
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        //如果没有accesskey属性，继续循环
        if (!current_link.getAttribute("accesskey")) continue;
        //取得accesskey的值
        var key = current_link.getAttribute("accesskey");
        //取得链接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    console.log(akeys);
    //创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for (key in akeys) {
        var text = akeys[key];
        //创建放到列表项中的字符串
        var str = key + ":" + text;
        //创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        //把列表项添加到列表中
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把列表添加到页面主体
    document.body.appendChild(list);
}

addLoadEvent(displayCitations);
addLoadEvent(displayAbbreviations);
addLoadEvent(displayAccesskeys);