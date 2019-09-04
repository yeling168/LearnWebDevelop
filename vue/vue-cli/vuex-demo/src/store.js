import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const actions = {
  increment: commit => {
    console.log(commit);
  }
};


export default new Vuex.Store({
    actions
})