import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = { count: 10 };

const mutations = {
  increment(state) {
    //处理状态(数据)变化
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
const actions = {
  //处理你要干什么，异步请求，判断，流程控制
  increment: ({ commit }) => {
    console.log(commit);
    commit("increment");
  },
  decrement: ({ commit }) => {
    commit("decrement");
  },
  clickOdd: ({ commit, state }) => {
    if (state.count % 2 === 0) {
      commit("increment");
    }
  },
  clickAsync: ({ commit }) => {
    new Promise(resolve => {
      setTimeout(function() {
        commit("increment");
      }, 1000);
    });
  }
};

const getters = {
  count() {
    return state.count;
  },
  getOdd(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数";
  }
};
//需要导出Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
