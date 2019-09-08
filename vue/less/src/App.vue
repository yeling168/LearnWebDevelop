<template>
  <div id="app">
    <p>变量</p>
    <variable></variable>
    <hr>
    <p>混合</p>
    <mixins></mixins>
  </div>
</template>

<script>
import variable from './components/variable/variable.vue';
import mixins from './components/variable/mixins.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    variable,mixins
  }
}
</script>

<style lang="less">

</style>
