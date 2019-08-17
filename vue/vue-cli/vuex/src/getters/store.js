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
  //同computered，getter官方也建议不使用箭头函数
  //getter就是一个计算属性
  countmore:function(state){
    return state.count+=100;
  }
};

const actions={
  //context代表整个store
  jiaplus(context){
    context.commit('jia',{a:1})
  },
  jianplus({commit}){
    commit('jian')
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
