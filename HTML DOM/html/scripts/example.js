window.onload = function () {
    var para = document.createElement("p");
    // var info = "nodeName:";
    // info += para.nodeName;
    // info += " nodeType: ";
    // info += para.nodeType;
    // alert(info);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt=document.createTextNode("Hello world");
    para.appendChild(txt);
}