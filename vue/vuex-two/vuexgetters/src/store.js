import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//访问状态对象
const state = {
  count: 4
};
//访问触发状态
//mutations突变
const mutations = {
  //第一个参数必须是state
  //n可以的对象
  jia(state, n) {
    //console.log(state);
    state.count += n.a;
  },
  jian(state, n) {
    state.count -= n;
  }
};
//数据显示到视图之前的动态计算
const getters = {
  //同computered，getter官方也建议不使用箭头函数
  count: function(state) {
    return (state.count += 100);
  }
};
export default new Vuex.Store({
  state,
  mutations,
  getters
});
