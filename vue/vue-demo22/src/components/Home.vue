<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    我是首页组件 ---{{this.$store.state.count}}
    <button @click="incCount()">增加数量+</button>
  </div>
</template>

<script>
//1.引入store
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
      console.log(this);
      this.$store.commit('incCount');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>