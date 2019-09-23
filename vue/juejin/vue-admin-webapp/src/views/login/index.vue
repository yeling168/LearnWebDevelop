<template>
  <div class="login">
     <div class="slideShadow" v-show="showSlide">
         <transition>
             <div class="slideSty animated bounce">
                 <div class="iconBtn">
                    <i class="el-icon-circle-close" @click="showSlide=false"></i>
                    <i class="el-icon-refresh" @click="refresh"></i>
                 </div>
             </div>
         <transition>
     </div>
  </div>
</template>

<script>
import SlideVerify from '@/components/SlideVerify'
export default {
  
}
</script>
<style scoped lang="scss">

</style>
<style>

</style>
