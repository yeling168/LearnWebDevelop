//声明timer类
class Timer {
  //添加一个定时器方法
  //end截止时间,update时间更新回调,handle倒计时结束的回调函数
  countdown(end, update, handle) {
    //当前时间
    const now = new Date().getTime();
    //获取当前对象指针
    const self = this;
    //如果当前时间大于截止时间，倒计时结束
    if (now - end) {
      //倒计时结束的回调函数
      handle.call(self);
    } else {
      //倒计时没有结束
      //当前时间离截止时间的剩余时间
      let last_time = end - now;
      //1天是多少毫秒
      const px_d = 1000 * 60 * 60 * 24;
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      //剩余时间包含多少天
      let d = Math.floor(last_time / px_d);
      //剩余多少小时
      let h = Math.floor((last_time - d * px_d) / px_h);
      //剩余分钟数
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
      //剩余秒数
      let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
      //把值保存到结果中
      let r = [];
      if (d > 0) {
        r.push(`<em>${d}</em>天`);
      }
      if (r.length || h > 0) {
        r.push(`<em>${h}</em>时`);
      }
      if (r.length || m > 0) {
        r.push(`<em>${m}</em>时`);
      }
      if (r.length || s > 0) {
        r.push(`<em>${s}</em>时`);
      }
      //保存到self对象
      self.last_time = r.join("");
      //1秒钟更新一次
      update.call(self, r.join(""));
      //1秒钟轮询一次
      setTimeout(function() {
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}
