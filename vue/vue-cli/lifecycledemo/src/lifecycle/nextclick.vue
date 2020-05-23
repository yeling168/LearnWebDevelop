<template>
  <div id="app">
    <div id="example">{{message}}</div>
    <button @click="changeMsg()">change</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'this is message'
    }
  },
  //时刻监测数据message的变化，一但变化就会调该函数
  watch: {
    //message必须和监测的data名字一样
    message: function() {
      console.log('watch', 'message变了')
    }
  },
  methods: {
    foo: function() {
      console.log('foo', '这是初始化方法')
    },
    changeMsg() {
      this.message = 'I am new message.'
      console.log(this.$el.textContent) // => '未更新'
      this.$nextTick(function() {
        console.log(this.$el.textContent) // => '已更新'
      })
    }
  },

  //beforeUpdate钩子
  beforeUpdate: function() {
    console.group('beforeUpdate状态')
    console.log('beforeUpdate', this.$data)
    console.log(this.$el.textContent)
  },
  //beforeUpdate钩子
  updated: function() {
    console.group('updated状态')
    console.log('updated', this.$data)
    console.log(this.$el.textContent)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
