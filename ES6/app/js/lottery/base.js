//彩种，奖金，玩法
import $ from "jquery";

class Base {
  /**
   * [initPlayList] 初始化奖金和玩法及说明
   * @return {[type]} [description]
   */
  initPlayList() {
    this.play_list
      .set("r2", {
        bonus: 6,
        tip:
          '从01-11中任选2个或多个号码，所选号码与开奖海马任意两个号码相同，即中奖<em class="red">6</em>',
        name: "任二"
      })
      .set("r3", {
        bonus: 19,
        tip:
          '从01-11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>',
        name: "任二"
      })
      .set("r4", {
        bonus: 78,
        tip:
          '从01-11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>',
        name: "任二"
      });
  }
}

export default Base;
