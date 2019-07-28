import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 4
};

const mutations = {
  jia(state,payload) {
    state.count+=payload
  },

  jian(state) {
    state.count--;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
