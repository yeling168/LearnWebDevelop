import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//访问状态对象
const state = {
  count: 4
};
//访问触发状态，使用commit访问触发状态
const mutations = {
  jia(state) {
    state.count++;
  },

  jian(state) {
    state.count--;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
