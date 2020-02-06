<template>
  <div id="app">
    <h1>Hello</h1>
    <p>{{count}}</p>
    <p>
      <button @click="$store.commit('jia',{a:10})">+</button>
      <button @click="jian">-</button>
    </p>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name:'app',
  data() {
    return {
      // count:0
    }
  },
  computed:{
    // ...mapState('[count]'),
    count() {
      return this.$store.getters.count
    }
  },
  methods:{
    ...mapMutations(["jia", "jian"]),
  }
}
</script>