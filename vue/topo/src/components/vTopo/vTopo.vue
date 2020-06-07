<template>
  <div class="topoComponent">
    <div class="svgHead" v-show="editable">
      <ul class="svgHeadItemLst">
        <li class="svgHeadItem" v-for="(ele,key) in svgToolbar" :key="ele.className" :class="{'active':ele.isActive}" @mousedown="selectToolbar(key)" :title="ele.name">
          <div class="svgHeadItemImg" :class="ele.className"></div>
        </li>
      </ul>
      <ul class="svgHeadItemLst">
        <li class="svgToolBarItem" @click="saveTopoJson" title="保存">
          <i class="fa fa-save svgToolBarIcon"></i>
          <span class="svgToolBarTxt hidden-xs-only">保存</span>
        </li>
      </ul>
    </div>
    <div class="svgMain">
      <v-shapebar @click="dragShapeNode" v-show="editable"></v-shapebar>
      <div :id="'topoId'+topoId" class="topoWrap" ref="topoWrap">
        <svg class="topoSvg" :width="svgAttr.width" :height="svgAttr.height" @mousedown.stop="mousedownTopoSvg($event)" :viewBox="svgAttr.viewX+' '+svgAttr.viewY+' '+svgAttr.width+' '+svgAttr.height" :class="{'hand':svgAttr.isHand,'crosshair':svgAttr.isCrosshair}">
          <defs>
            <pattern id="Pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line :x1="ele.x1" :x2="ele.x2" :y1="ele.y1" :y2="ele.y2" :stroke="ele.color" :stroke-width="ele.strokeWidth" :opacity="ele.opacity" v-for="ele in gridData" :key="ele.id"></line>
            </pattern>
          </defs>
          <defs>
            <filter id="f1" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceGraphic" dx="4" dy="4"></feOffset>
              <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
              <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <rect fill="url(#Pattern)" :width="svgAttr.width" :height="svgAttr.height"></rect>
          <g>
            <g></g>
            <g></g>
            <g></g>
          </g>
          <line :class="{isMarkerShow:marker.isMarkerShow}" id="xmarker" class="marker" x1="0" :y1="marker.xmarkerY" :x2="marker.xmarkerX" :y2="marker.xmarkerY"></line>
          <line :class="{isMarkerShow:marker.isMarkerShow}" id="xmarker" class="marker" :x1="marker.ymarkerX" y1="0" :x2="marker.xmarkerX" :y2="marker.xmarkerY"></line>
          <rect></rect>
        </svg>
      </div>
    </div>
    <div v-if="shapebarMoveNode.isShow" class="moveNode nodeMoveCss" :style="{left:shapebarMoveNode.left+'px',top:shapebarMoveNode.top+'px'}">
      <div class="shapeIcon">
        <img class="shapeIconImg" :src="shapebarMoveNode.icon" />
      </div>
      <div class="shapeName">{{shapebarMoveNode.name}}</div>
    </div>
  </div>
</template>

<script>
import vShapebar from './components/vShapebar'
export default {
  data() {
    return {
      editable: true,
      topoId: '',
      svgToolbar: [
        { name: '默认模式', className: 'toolbar-default', isActive: true },
        { name: '框选模式', className: 'toolbar-rectangle_selection', isActive: false }
      ],
      shapebarMoveNode: {
        left: 0,
        top: 0,
        name: '',
        icon: '',
        isShow: false
      },
      svgAttr: { width: 0, height: 0, isHand: false, viewX: 0, viewY: 0, minW: 0, minH: 0, isCrosshair: false },
      marker: {
        xmarkerY: 0,
        xmarkerX: 0,
        ymarkerX: 0,
        ymarkerY: 0,
        isMarkerShow: false
      },
      gridData: [
        { x1: 0, x2: 100, y1: 20, y2: 20, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 1 },
        { x1: 0, x2: 100, y1: 40, y2: 40, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 2 },
        { x1: 0, x2: 100, y1: 60, y2: 60, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 3 },
        { x1: 0, x2: 100, y1: 80, y2: 80, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 4 },
        { x1: 20, x2: 20, y1: 0, y2: 100, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 5 },
        { x1: 40, x2: 40, y1: 0, y2: 100, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 6 },
        { x1: 60, x2: 60, y1: 0, y2: 100, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 7 },
        { x1: 80, x2: 80, y1: 0, y2: 100, color: '#c0c0c0', strokeWidth: 1, opacity: 0.3, id: 8 },
        { x1: 100, x2: 100, y1: 0, y2: 100, color: '#c0c0c0', strokeWidth: 2, opacity: 0.6, id: 9 },
        { x1: 0, x2: 100, y1: 100, y2: 100, color: '#c0c0c0', strokeWidth: 2, opacity: 0.6, id: 10 }
      ]
    }
  },
  components: {
    vShapebar
  },
  methods: {
    GenNonDuplicateID(randomLength) {
      return Number(
        Math.random()
          .toString()
          .substr(3, randomLength) + Date.now()
      ).toString(36)
    },
    saveTopoJson() {},
    dragShapeNode(nodeData, key, event) {
      let NODE = nodeData[key]
      console.log(NODE)
      let toolbarName = NODE.type
      let toolbarIcon = NODE.icon
      let topoEle = $(`#topoId${this.topoId}`)
      let svgOffsetLeft = topoEle.find('.topoSvg').offset().left //251
      let svgOffsetTop = topoEle.find('.topoSvg').offset().top // 36
      let svgWidth = topoEle.find('.topoSvg').width() //1097
      let svgHeight = topoEle.find('.topoSvg').height() //758
      let isContainSvgArea = false
      document.onmousemove = event => {
        console.log('scrollLeft', $(document).scrollLeft())
        console.log('scrollTop', $(document).scrollTop())
        let mouseX = event.clientX // 当前鼠标位置
        console.log('clientX', mouseX)
        let mouseY = event.clientY
        console.log('clientY', mouseY)
        let nodeX = event.clientX - svgOffsetLeft + $(document).scrollLeft() + this.svgAttr.viewX //svg最终位置
        let nodeY = event.clientY - svgOffsetTop + $(document).scrollTop() + this.svgAttr.viewY
        isContainSvgArea = false
        this.shapebarMoveNode.left = mouseX + 4 + $(document).scrollLeft() //鼠标位置+文档滚动的距离
        this.shapebarMoveNode.top = mouseY + 4 + $(document).scrollTop()
        this.shapebarMoveNode.name = toolbarName
        this.shapebarMoveNode.icon = toolbarIcon
        this.shapebarMoveNode.isShow = true
        //console.log('---', this.shapebarMoveNode)
        this.marker.isMarkerShow = false
        // 鼠标滑入svg区域内显示标尺并显示标尺正确位置
        if (mouseX >= svgOffsetLeft && mouseX <= svgOffsetLeft + svgWidth && mouseY >= svgOffsetTop - $(document).scrollTop() && mouseY <= svgOffsetTop + svgHeight - $(document).scrollTop()) {
          this.marker.isMarkerShow = true
          isContainSvgArea = true
          let n1 = Math.floor(nodeX / 20) // grid宽高的整数倍
          let n2 = Math.floor(nodeY / 20)
          this.marker.xmarkerY = n2 * 20
          this.marker.ymarkerY = n1 * 20
        }
      }
      document.onmouseup = event => {
        document.onmousemove = null
        document.onmouseup = null
        // 重新初始toolbarMoveNode的值
        this.shapebarMoveNode.left = 0
        this.shapebarMoveNode.top = 0
        this.shapebarMoveNode.name = ''
        this.shapebarMoveNode.icon = ''
        this.shapebarMoveNode.isShow = false
      }
    },
    mousedownTopoSvg() {},
    initTopoWH() {
      this.$nextTick(() => {
        let ele = `#topoId${this.topoId}`
        let topoW = $(ele).width()
        let topoH = $(ele).height()
        this.marker.xmarkerX = topoW
        this.marker.ymarkerY = topoH
        this.svgAttr.width = topoW
        this.svgAttr.height = topoH
        this.svgAttr.minW = topoW
        this.svgAttr.minH = topoH
      })
    }
  },
  mounted() {
    this.topoId = this.GenNonDuplicateID(5)
    this.initTopoWH() // 初始化topo组件宽高
  }
}
</script>

<style scoped lang="less">
@svg-common-color: #768699;
@stroke-width: 2;
@stroke-select-width: 3;
@stroke-select-color: red;
@border-color: #aaaaaa;
@storke-dasharray: 5, 5;
/*svgMain*/
.svgMain {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex: 1;
}
.moveNode {
  position: absolute;
  border: 1px solid @svg-common-color;
  box-sizing: border-box;
  &.nodeMoveCss {
    width: 57px;
    height: 57px;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    box-sizing: border-box;
    padding: 5px;
  }
}
.topoComponent {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.svgHead {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: @theme-color;
  border: solid @border-color;
  border-width: 1px 1px 0;
  box-shadow: inset 0 1px 0 0 #fff;
  .svgHeadItemLst {
    display: flex;
    .svgHeadItem {
      padding: 5px 10px;
      border: 1px solid @border-color;
      cursor: pointer;
      list-style: none;
      border-left-width: 0;
      &:hover {
        background-color: #ebebeb;
      }
      &:first-child {
        border-left-width: 1px;
      }
      &.active {
        background-color: #ebebeb;
        box-shadow: 2px 2px 1px #ccc inset;
      }
      .svgHeadItemImg {
        background: url('../../assets/topo/icons.png');
        width: 16px;
        height: 16px;
        background-size: 479px 16px;
        &.toolbar-default {
          background-position: -16px 0px;
        }
        &.toolbar-rectangle_selection {
          background-position: -294px 0px;
        }
        &.toolbar-zoomin {
          background-position: -425px 0px;
        }
        &.toolbar-zoomout {
          background-position: -444px 0px;
        }
        &.toolbar-zoomreset {
          background-position: -462px 0px;
        }
      }
    }
  }
}
.topoWrap {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid @border-color;
  overflow: hidden;
  position: relative;
  background: #fff;
  .topoSvg {
    box-sizing: border-box;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    -moz-select: none;
    -ms-select: none;
    -o-select: none;
    &.hand {
      cursor: pointer;
    }
    &.crosshair {
      cursor: crosshair;
    }
  }
}
</style>