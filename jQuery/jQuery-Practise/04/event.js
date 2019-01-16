var span=document.getElementsByTagName('span')[0];
span.prototype.a=span.prototype.addEventListenr;
span.prototype.addEventListenraddEventListenr=function(type,callback,flag){
  if(typeof this.eventMarks=='undefined'){
    this.eventMarks=[];
  }
  this.eventMarks.push(arguments);
  this.a(type,callback,flag);
  return arguments;
}

console.log(span.addEventListenr('mouseover',function(){
  console.log(12)
},false));
