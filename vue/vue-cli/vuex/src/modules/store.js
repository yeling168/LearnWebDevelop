import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//访问状态对象
const state = {
  count: 4
};
//访问触发状态
//mutations突变
const mutations = {
  //第一个参数必须是state
  //n可以的对象
  jia(state, n) {
    //console.log(state);
    state.count += n.a;
  },
  jian(state) {
    state.count--;
  }
};
//数据显示到视图之前的动态计算
const getters = {
  //同computered，getter官方也建议不使用箭头函数
  count: function(state) {
    return (state.count += 100);
  }
};
//actions是异步的
const actions = {
  //context代表整个store
  jiaplus(context) {
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

const moduleA={
  state,
  mutations,
  getters,
  actions
}

const moduleB={
  state:{
    countB:99
  }
}
export default new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB
  }
});
