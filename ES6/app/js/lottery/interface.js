import $ from "jquery";

class Interface {
  /**
   * 获取遗漏数据
   * 当前期号issue{string}
   */
  getOmit(issue) {
    //指向当前对象的引用,保留this指向
    let self = this;
    //前端发起请求，服务端返回数据之后，还需要进行下一步操作，传统的方式是使用回调函数，ES6中Promise可以解决这个问题
    //传统方法getOmit(issue,callback)
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "/get/omit",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          //把返回的数据传递给resolve的下一步，下一步执行的时候能取到当前服务端返回的数据
          //把当前的数据保存到当前对象，其他地方可以以当前对象作为桥梁取得数据
          self.setOmit(res, data);
          resolve.call(self, res);
        },
        error: function(err) {
          //如果出错了，阻塞下一步，执行reject
          reject.call(err);
        }
      });
    });
  }

  //获取开奖号码
  /**
   *
   */

  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "/get/opencode",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      });
    });
  }
  /**
   * 获取当前状态
   * @param {string} issue [当前期号]
   */
  getState(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "/get/state",
        data: {
          issue: issue
        },
        dataType: "json",
        success: function(res) {
          resolve.call(self, res);
        },
        error: function(err) {
          reject.call(err);
        }
      });
    });
  }
}


export default Interface