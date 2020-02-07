import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 44
};

const mutations = {
  jia(state, n) {
    state.count += n.a;
  },
  jian(state) {
    state.count--;
  }
};

const getters = {
  count: function(state) {
    return (state.count += 0);
  }
};

const actions = {
  jiaplus(context) {
    console.log(context);
    context.commit("jia", { a: 1 });
    setTimeout(() => {
      context.commit("jian");
    }, 3000);
    console.log("我先被执行了");
  },
  jianplus({ commit }) {
    commit("jian");
  }
};

const moduleA = {
  state,
  mutations,
  getters,
  actions
};

const moduleB = {
  state :{
    countB:99
  }
};

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

//https://www.bilibili.com/video/av75785188?p=63
