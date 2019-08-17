<template>
  <div id="ErrorPage" class="bg-tartan">
      <div id="ErrorPageImg">
          <router-link><img src="../assets/images/ErrorPage.png" alt="系统维护中">
      </div>
  </div>
</template>

<script>
export default {
    name:'ErrorPage',
    mounted(){
        document.getElementById("ErrorPage").style.height=window.screen.height+"px";
    }
}
</script>

<style lang="scoped">
  #ErrorPage{
      width:100%;
      padding:50px 0;
  }

  #ErrorPageImg{
      margin:0 auto;
      width: 100%;
      position:fixed;
      top:40%
  }

  #ErrorPage img{
      width:100%
  }
</style>