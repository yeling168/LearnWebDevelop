import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//访问状态对象
const state = {
  count: 4
};
//访问触发状态，使用commit访问触发状态
const mutations = {
  jia(state, n) {
    state.count += n.a;
  },

  jian(state) {
    state.count--;
  }
};

const getters={
  //处理谁?-count
  countmore:function(state){
    return state.count+=100;
  }
};
export default new Vuex.Store({
  state,
  mutations,
  getters
});
