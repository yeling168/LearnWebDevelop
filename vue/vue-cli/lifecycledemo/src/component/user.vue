<template>
  <div>
    <i id="user">user {{message}}</i>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  beforeCreate: function() {
    console.log(9)
  },
  created: function() {
    console.log(10)
  },
  beforeMount: function() {
    console.log(11)
  },
  mounted: function() {
    console.log(12)
  },
  beforeUpdate() {
    console.log(13)
  },
  updated: function() {
    console.log(14)
  },
  beforeDestroy: function() {
    console.log(15)
  },
  destroyed: function() {
    console.log(16)
  }
}
</script>