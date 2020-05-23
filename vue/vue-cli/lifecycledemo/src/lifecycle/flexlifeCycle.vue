<template>
  <div id="app" v-if="showComponent">
    <ul>
      <li v-for="(item,index) of list" :key="'info-'+ index">{{item}}--{{message}}</li>
    </ul>
    <p>p1</p>
    <p>p1</p>
    <p>p1</p>
    <user v-if="showComponent" :message="message"/>
    <button @click="showOrHide()">change</button>
  </div>
</template>

<script>
import user from '../component/user'
export default {
  name: 'app',
  components: {
    user
  },
  data() {
    return {
      message: 'this is message',
      list: ['aaaa', 'bbbbbb', 'ccccc'],
      showComponent: true
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
    showOrHide() {
      this.message = 'I am new message.'
      //this.showComponent = false 
    }
  },
  beforeCreate: function() {
    console.log(1)
  },
  created: function() {
    console.log(2)
  },
  beforeMount: function() {
    console.log(3)
  },
  mounted: function() {
    console.log(4)
  },
  beforeUpdate() {
    console.log(5)
  },
  updated: function() {
    console.log(6)
  },
  beforeDestroy: function() {
    console.log(7)
  },
  destroyed: function() {
    console.log(8)
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
