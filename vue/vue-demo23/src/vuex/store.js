import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//state在vuex中用于存储数据
var state = {
  count: 1,
  list: []
};

//mutations里面放的是方法，主要用于改变state里面的数据
var mutations = {
  incCount() {
    ++state.count;
  },
  addList(state, data) {
    state.list = data;
  }
};

/**getter类似计算属性，改变state里面的count数据的时候会触发getter里面的方法,基本用不到 */
var getters = {
  computedCount: state => {
    return state.count * 2;
  }
};

/**
 * 基本没用
 * Action类似于mutation，不同在于
 *
 * Action提交的是mutation，而不是直接变更状态
 * Action可以包含任意异步操作
 */

var actions = {
  incMutationsCount(context) {
    //因此你可以调用context.commit提交一个mutation
    //执行mutations里面的incCount方法，改变state里面的数据
    context.commit("incCount");
  }
};
//vuex实例化Vuex.store

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

export default store;
