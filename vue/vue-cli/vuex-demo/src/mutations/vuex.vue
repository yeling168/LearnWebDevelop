<template>
  <div id="app">
    <h1>Hello Vuex</h1>
    <p>我是state的count:{{ this.$store.state.count }}</p>
    <p>我是组件的count:{{ count }}</p>
    <p>
      <button @click="$store.commit('jia', { a: 10 })">+</button>
      <button @click="jian(10)">-</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
console.log("mapState", mapState);
export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  // computed:mapState('[count]'),
  methods:mapMutations(["jia", "jian"])
};
</script>
