<template>
  <div id="app">
    <h1>Hello</h1>
    <p>{{countmore}}</p>
    <p>
      <button @click="$store.commit('jia',{a:10})">+</button>
      <button @click="jian">-</button>
    </p>
  </div>
</template>


<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  //computed只允许一个
  //在组件未加载之前计算count的值
  computed:{
    ...mapState(["countmore"]),
    // countmore(){
    //   return this.$store.getters.count
    // }
    ...mapGetters([
      "countmore"
    ])
  },
  methods:mapMutations([
    'jia',
    'jian'
  ])
};
</script>