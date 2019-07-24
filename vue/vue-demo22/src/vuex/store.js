import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//state在vuex中用于存储数据
var state = {
  count: 1
};

//mutations里面放的是方法，主要用于改变state里面的数据
var mutations = {
  incCount() {
    ++state.count;
  }
};

//vuex实例化Vuex.store

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
