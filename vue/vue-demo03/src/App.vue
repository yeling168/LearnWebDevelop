<template>
<!-- 所有的组件要被一个根节点包含起来 -->
  <div id="app">
     <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  //data：业务逻辑里面定义的数据
  data () {
    return {
      msg: '你好vue',
    }
  }
}
</script>
