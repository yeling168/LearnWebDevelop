<template>
  <div id="app">
    <p>变量</p>
    <variable></variable>
  </div>
</template>

<script>
import variable from './components/variable/variable.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    variable
  }
}
</script>

<style lang="less">

</style>
