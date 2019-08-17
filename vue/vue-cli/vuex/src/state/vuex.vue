<template>
  <div id="app">
    <h1>Hello Vuex</h1>
    <p>{{$store.state.count}} -- {{count}}</p>
    <p>
      <button @click="$store.commit('jia')">+</button>
      <button @click="$store.commit('jian')">-</button>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
console.log("mapState", mapState);
export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  //   computed: {
  //     //在组件未加载之前计算count的值
  //     countmore() {
  //       return this.$store.state.count;
  //     }
  //   }

  //   computed: mapState({
  //     countmore(state) {
  //       return state.count;
  //     }
  //   })
  computed: mapState(["count"])
};
</script>