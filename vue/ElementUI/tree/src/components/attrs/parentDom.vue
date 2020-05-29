<template>
  <div>
    <child-dom :foo="foo" :coo="coo" v-on:upRocket="reciveRocket">
    </child-dom>
  </div>
</template>
<script>
import childDom from './childDom'
export default {
  components: {
    childDom
  },
  data() {
    return {
      foo: 'Hello,world',
      coo: 'Hello,rui'
    }
  },
  methods: {
    reciveRocket() {
      console.log('reciveRocket success')
    }
  }
}
</script>