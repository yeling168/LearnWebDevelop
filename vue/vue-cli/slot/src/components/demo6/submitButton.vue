<template>
    <div class="child">
        <button type="submit">
          <slot>Submit</slot>
        </button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            
        }
    },
    computed: {

    },
    methods:{

    },
    components: {

    },
    mounted:function() {
      
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
