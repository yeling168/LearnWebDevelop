import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 4
};

const mutations = {
  jia(state) {
    console.log(state);
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
