<template>
   <div class="slide-verify" id="slideVerify" onselectstart="return false">
       <canvas :width="w" :height="h" ref="canvas"></canvas>
       <div @click="refresh" class="slide-vertify-refresh-icon"></div>
       <canvas :width="w" :height="h" ref="block" class="slide-vertify-block"></canvas>
   </div>
</template>