<template>
  <div class="slide-verify" id="slideVerify" onselectstart="return false;">
    <canvas :width="w" :height="h" ref="canvas"></canvas>
    <div @click="refresh" class="slide-verify-refresh-icon"></div>
    <canvas
      :width="w"
      :height="h"
      ref="block"
      class="slide-verify-block"
    ></canvas>
    <!-- container -->
    <div
      class="slide-verify-slider"
      :class="{
        'container-active': containerActive,
        'container-success': containerSuccess,
        'container-fail': containerFail
      }"
    >
      <div class="slide-verify-slider-mask" :style="{ width: sliderMaskWidth }">
        <!-- slider -->
        <div
          @mousedown="sliderDown"
          @touchstart="touchStartEvent"
          @touchmove="touchMoveEvent"
          @touchend="touchEndEvent"
          class="slide-verify-slider-mask-item"
          :style="{ left: sliderLeft }"
        >
          <!-- <div class="slide-verify-slider-mask-item-icon"></div> -->
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <span class="slide-verify-slider-text">{{ sliderText }}</span>
    </div>
  </div>
</template>
<script>

</script>