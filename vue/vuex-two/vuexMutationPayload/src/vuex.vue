<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <p>{{count}}</p>
    <p>
      <button @click='$store.commit("jia",{a:10})''>+</button>
      <button @click='$store.commit("jian",5)''>-</button>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app",
  computed: mapState(["count"])
};
</script>
