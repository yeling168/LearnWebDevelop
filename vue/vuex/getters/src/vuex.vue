<template>
  <div id="app">
    <h1>Hello</h1>
    <p>{{$store.state.count}}---{{countmore}}</p>
    <p>
      <button @click="$store.commit('jia',{a:10})">+</button>
      <button @click="jian">-</button>
    </p>
  </div>
</template>


<script>
import {mapMutations} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      count: 0
    };
  },
  computed: {
    //在组件未加载之前计算count的值
    countmore() {
      return this.$store.state.count + 1;
    }
  },
  methods:mapMutations([
    'jia',
    'jian'
  ])
};
</script>