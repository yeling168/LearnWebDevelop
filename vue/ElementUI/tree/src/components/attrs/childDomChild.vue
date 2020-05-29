<template>
  <div>
    <p>coo:{{coo}}</p>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>
<script>
export default {
  name: 'childDomChild',
  props: ['coo'],
  inheritAttrs: false,
  methods: {
    startUpRocket() {
      this.$emit('upRocket')
      console.log('startUpRocket')
    }
  }
}
</script>