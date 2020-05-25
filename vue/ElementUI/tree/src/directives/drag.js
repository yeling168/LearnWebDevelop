import Vue from 'vue'

Vue.directive('dialogDrag', {
  bind(el, blinding) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    console.log(dialogHeaderEl)
    const dragDom = el.querySelector('.el-dialog');

    // dialogHeaderEl.style.cusor = 'move'
    dialogHeaderEl.style.cssText += ';cursor:move'
    dragDom.style.cssText += ';top:0px'

    dialogHeaderEl.onmousedown = (e) => {
      //鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      const screenWidth = document.body.clientWidth; //body当前宽度
      const screenHeight = document.documentElement.clientWidth; // 可见区域高度(应为body高度，可某些环境下无法获取) 
    }
  }
})
