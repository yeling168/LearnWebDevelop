<template>
  <div id="app">
    <h1>Hello</h1>
    <p>{{$store.state.count}}---{{countmore}}</p>
    <p>
      <button @click="$store.commit('jia')">+</button>
      <button @click="$store.commit('jian')">-</button>
    </p>
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      count: 0
    }
  },
  computed: {
    //在组件未加载之前计算count的值
    countmore() {
      return this.$store.state.count + 1;
    }
  }
};
</script>