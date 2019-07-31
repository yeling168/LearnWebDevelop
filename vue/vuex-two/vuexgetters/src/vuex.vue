<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <p>{{count}}</p>
    <p>
      <button @click='$store.commit("jia",{a:10})'>+</button>
      <button @click="jian(10)">-</button>
    </p>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from "vuex";

export default {
  name: "app",
  //computed不建议使用箭头函数
  computed: {
    //...mapState(["count"]),
    // count(){
    //   return this.$store.getters.count
    // }
    ...mapGetters(["count"])
  },
  methods:mapMutations(['jia','jian'])
};
</script>
