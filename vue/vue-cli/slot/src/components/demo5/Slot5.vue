<template>
    <div class="father">
        <navigationLink url="/profile">
           Clicking here will send you to: {{ url }}
        </navigationLink>
    </div>
</template>

<script>
import navigationLink from './navigationLink.vue'
export default {
    data: function () {
        return {
            url:'https://cn.vuejs.org/v2/guide/components-slots.html'
        }
    },
    components:{
        'navigationLink': navigationLink
    }
}
</script>

<style scoped>
  .father{
    width:100%;
    background-color: #ccc;
    height: 650px;
  }
  .tmpl{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 30%;
    margin: 0 auto;
  }
  .tmpl span{
    border:1px solid red;
    height:50px;
    line-height: 50px;
    padding: 10px;
  }
</style>
