// var _listener={

// }
// var addEvent=function(type,fn){
//     _listener[type]=[];
//     _listener[type].push(fn);

// };
// var fireEvent=function(type){
//   if(_listener[type].length>0){
//     for(var i=0;i<_listener[type].length;i++){
//         _listener[type][i]();
//     }
//   }else{
//     return false;
//   }


// };
// var removeEvent=function(type,fn){
//     if(_listener[type].indexOf(fn)!=-1){
//       var index=_listener[type].indexOf(fn);
//       console.log(index);
//        _listener[type].splice(index,1);
//     }else{
//       return false;
//     }
// }

//以数组形式实现自定义事件，触发和删除，功能同addEventListener
var Event={
  _listener:{},
  addEvent:function(type,fn){
    if(this._listener[type]==undefined){
      this._listener[type]=[];
    }
    if(typeof fn=='function'){
      this._listener[type].push(fn);
    }
    return this;
  },
  fireEvent:function(type){
    var arr=this._listener[type];
  if(Object.prototype.toString.call(arr)=="[object Array]"){
    for(var i=0;i<this._listener[type].length;i++){
        arr[i]();
    }
    return this;
   }
  },
  removeEvent:function(type,fn){
    // if(this._listener[type].indexOf(fn)!=-1){
    //     var index=this._listener[type].indexOf(fn);
    //     this._listener[type].splice(index,1);
    //   }
    var arr=this._listener[type];
    if(typeof type=='string'&&arr instanceof Array){
        if(typeof fn=='function'){
          //不能用index获取，这样只是字符串匹配，而删除函数要同一个指向的
          // var index=this._listener[type].indexOf(fn);
          for(var i=0,length=arr.length;i<length;i++){
            if(arr[i]===fn){
              this._listener[type].splice(index,1);
              break;
            }
          }
        }else{
          //只提供type参数，删除整个数组，用户自定义的属性可以被删除
          delete this._listener[type];
        }
        return this;
     }
    }
}
