<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <p>{{$store.state.a.count}}-{{count}}-{{$store.state.b.countB}}</p>
    <p>
      <button @click='$store.commit("jia",{a:10})'>+</button>
      <button @click="jian(10)">-</button>
    </p>
    <p>
      <button @click="jiaplus">+plus</button>
      <button @click="jianplus">-plus</button>
    </p>
  </div>
</template>no

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  //computed不建议使用箭头函数
  /* computed: {
    //...mapState(["count"]),
    // count(){
    //   return this.$store.getters.count
    // }
    ...mapGetters(["count"])
  }, */

  // computed: {
  //   ...mapState(["count"])
  // },

  computed: {
    count() {
      return this.$store.state.a.count;
    }
  },

  // methods: {
  //   ...mapMutations(["jia", "jian"]),
  //   ...mapActions(["jiaplus", "jianplus"])
  // }
  methods: {
    ...mapMutations(["jia", "jian"]),
    ...mapActions(["jiaplus"]),
    ...mapActions({
      jianplus: "jianplus"
    })
  }
};
</script>
