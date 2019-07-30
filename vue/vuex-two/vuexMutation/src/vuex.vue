<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <p>{{count}}</p>
    <p>
      <button @click='$store.commit("jia",{a:10})'>+</button>
      <button @click="jian">-</button>
    </p>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  name: "app",
  computed: mapState(["count"]),
  methods:mapMutations(['jia','jian'])
};
</script>
