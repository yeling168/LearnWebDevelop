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

const getters = {
  //处理谁?-count
  countmore: function(state) {
    return (state.count += 100);
  }
};

const actions = {
  //actions是异步的
  //mutations是同步的
  //context代表整个store
  jiaplus(context) {
    console.log(context);
    context.commit("jia", { a: 1 });
  },
  jianplus({ commit }) {
    console.log(commit);
    commit("jian");
  }
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
