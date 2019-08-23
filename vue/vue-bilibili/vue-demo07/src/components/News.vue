<template>
  <div>
    <div id="news">我是新闻组件</div>
    <br />
    <button @click="emitHome()">给Home组件广播数据</button>
    <br />
  </div>
</template>
<script>
//引入vue实例
import VueEvent from "../model/VueEvent";
export default {
  data() {
    return {
      msg: "我是新闻组件"
    };
  },
  methods: {
    emitHome() {
      //广播
      VueEvent.$emit("to-home", this.msg);
    }
  },
  mounted() {
    VueEvent.$on("to-news", function(data) {
      console.log(data);
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
