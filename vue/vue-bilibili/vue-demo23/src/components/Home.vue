<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    我是首页组件 ---{{this.$store.state.count}} ----{{this.$store.getters.computedCount}}
    <button
      @click="incCount()"
    >增加数量+</button>
  </div>
</template>

<script>
//1.引入store,建议store的名字不要变
import store from "../vuex/store";
//注册store
export default {
  data() {
    return {
      msg: "我是一个home组件"
    };
  },
  store,
  methods: {
    incCount() {
      //改变vuex state里面的数据
      //console.log(this);
      //this.$store.commit('incCount');

      //触发actions里面的方法
      this.$store.dispatch("incMutationsCount");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>