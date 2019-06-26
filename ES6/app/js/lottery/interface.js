import $ from "jquery";

class Interface {
  /**
   * 获取遗漏数据
   * 当前期号{string}
   */
  getOmit(issue) {
    //指向当前对象的引用,保留this指向
    let self = this;
    //前端发起请求，服务端返回数据之后，还需要进行下一步操作，传统的方式是使用回调函数，ES6中Promise可以解决这个问题
    //传统方法getOmit(issue,callback)
    return new Promise((resolve,reject)=>{
        
    })
  }
}
