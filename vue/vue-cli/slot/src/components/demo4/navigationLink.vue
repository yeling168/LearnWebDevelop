<template>
    <div class="child">
        <a v-bind:href="url" class="nav-link">
          <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            url:'https://cn.vuejs.org/v2/guide/components-slots.html'
        }
    },
    computed: {

    },
    methods:{

    },
    components: {

    }
}
</script>

<style scoped>
  .child{
    background-color: #00bbff;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
