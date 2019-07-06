import "babel-polyfill";
import Base from "./lottery/base.js";
import Timer from "./lottery/timer.js";
import Calculate from "./lottery/calculate.js";
import Interface from "./lottery/interface.js";
import $ from "jquery";

const copyProperties = function(target, source) {
  //object拿不到的，用Reflect
  for (let key of Reflect.ownKeys(source)) {
    if (key !== "constructor" && key !== "prototype" && key !== "name") {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      //console.log(desc);
      Object.defineProperty(target, key, desc);
      //console.log(target);
    }
  }
};

//一个多重继承的方法
const mix = function(...mixins) {
  //声明一个空的类
  class Mix {}
  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
};

//实现彩种的综合模块
//利用了实现多重继承的一种方式
class Lottery extends mix(Base, Calculate, Interface, Timer) {
  constructor(
    name = "syy",
    cname = "11选5",
    /**期号 */ issue = "xx",
    /**状态 */ state = "**"
  ) {
    super();
    //对象属性
    this.name = name;
    this.cname = cname;
    this.issue = issue;
    this.state = state;
    //当前选择器
    this.el = "";
    //遗漏是map对象，先初始化
    this.omit = new Map();
    //开奖号码，set对象
    this.open_code = new Set();
    //开奖记录
    this.open_code_list = new Set();
    //玩法列表
    this.play_list = new Map();
    //选号
    this.number = new Set();
    //选号期号选择器
    this.issue_el = "#curr_issue";
    //倒计时选择器
    this.countdown_el = "#countdown";
    //状态选择器
    this.state_el = ".state_el";
    //购物车选择器
    this.cart_el = ".codelist";
    //遗漏的选择器
    this.omit_el = "";
    //当前默认玩法
    this.cur_play = "r5";
    //三个方法
    this.initPlayList();
    this.initNumber();
    this.updateState();
    //事件初始化
    this.initEvent();
  }

  /**
   * 状态更新
   */
  updateState() {
    let self = this;
    this.getState().then(function(res) {
      self.issue = res.issue;
      self.end_time = res.end_time;
      self.state = res.state;
      //更新当前期号
      $(self.issue_el).text(res.issue);
      //更新倒计时
      self.countdown_el(
        res.end_time,
        function(item) {
          $(self.countdown_el).html(time);
        },
        function() {
          setTimeout(function() {
            self.updateState();
            self.getOmit(self.issue).then(function(res) {});
            //更新奖号
            self.getOpenCode(self.issue).then(function(res) {});
          }, 500);
        }
      );
    });
  }

  /**
   * 初始化事件
   */
  initEvent() {
    let self = this;
    //玩法的切换
    $("#plays").on("click", "li", self.changePlayNav.bind(self));
    //号码的选中
    $(".boll-list").on("click", ".btn-boll", self.toggleCodeActive.bind(self));
    //添加号码
    $("#confirm_sel_code").on("click", self.addCode.bind(self));
    //操作区大小奇偶清除
    $(".dxjo").on("click", "li", self.assistHandle.bind(self));
    //随机号码
    $("qkmethod").on("click", ".btn-middle", self.getRandomCode.bind(self));
  }
}

export default Lottery;
