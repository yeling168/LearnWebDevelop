<template>
  <div id="box">
    <div v-drag class="drag"></div>
    <div class='triangle'></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {
    drag: function(el) {
      var oDiv = el
      //console.log(oDiv)
      oDiv.onmousedown = function(ev) {
        var disX = ev.clientX - oDiv.offsetLeft
        console.log(disX)
        var disY = ev.clientY - oDiv.offsetTop

        document.onmousemove = function(ev) {
          var l = ev.clientX - disX
          var t = ev.clientY - disY
          oDiv.style.left = l + 'px'
          oDiv.style.top = t + 'px'
        }

        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#box {
  .drag {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 100px;
    top: 100px;
  }
  .triangle {
    width: 200px;
    height: 200px;
    border: 40px solid;
    border-color: orange blue red green;
    position: absolute;
    left: 200px;
    top: 200px;
  }
}
</style>