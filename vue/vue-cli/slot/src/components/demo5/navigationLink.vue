<template>
    <div class="child">
        <a v-bind:href="url" class="nav-link">
          <slot></slot>
          <div>
            {{this.$attrs.url}}
          </div>
        </a>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            url:'https://www.hao268.com/'
        }
    },
    computed: {

    },
    methods:{

    },
    components: {

    },
    mounted:function() {
      console.log(this);
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
