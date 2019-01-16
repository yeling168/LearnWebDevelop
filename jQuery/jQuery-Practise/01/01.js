// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(addhighlight);
$(document).ready(print);
function addhighlight(){
  $('div.poem-stanza').addClass('highlight');
}
function print(){
  console.log('12')
}
// window.onload=function(){
//   var poems=document.getElementsByClassName('poem-stanza');
//   for(var i=0;i<poems.length;i++){
//     poems[i].className+=' highlight';
//   }
// }
// window.onload=function(){
//   var divs=document.getElementsByTagName('div');
//   for(var i=0;i<divs.length;i++){
//     if(haveClass(divs[i],'poem-stanza')&&!haveClass(divs[i],'highlight')){
//       divs[i].className+=' highlight';
//     }
//   }

// }
// function hasClass(ele,cls){
//   // /cls/.test(ownclass)  //不能这样简单的验证，有可能出现/clsa/.test('cclsa')情况
//   // if(/ cls /.test(ownclass)) 也不能这样写
//   var reclass=new RegExp(' '+cls+' ');
//   return reclass.test(' '+ele.className+' ');

// }
// function haveClass(ele,cls){
//   var reclass=new RegExp("\\b"+cls+"\\b");
//   return reclass.test(ele.className);
// }
