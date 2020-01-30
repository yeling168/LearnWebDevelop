<template>
    <div class="father">
        <submit-button></submit-button>
    </div>
</template>

<script>
import submitButton from './submitButton.vue'
export default {
    data: function () {
        return {
            
        }
    },
    components:{
        'submitButton': submitButton
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
