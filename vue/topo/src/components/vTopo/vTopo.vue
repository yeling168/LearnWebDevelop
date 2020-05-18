<template>
  <div class="topoComponent">
    <div class="svgHe" v-show="editable">
      <ul class="svgHeadItemLst">
        <li class="svgHeadItem" v-for="(ele,key) in svgToolbar" :key="ele.className" :class="{'active':ele.isActive}" @mousedown="selectToolbar(key)" :title="ele.name">
          <div class="svgHeadItemImg" :class="ele.className"></div>
        </li>
      </ul>
      <ul class="svgHeadItemLst">
        <li class="svgToolBarItem" @click="saveTopoJson" title="保存">
          <i class="fa fa-save svgToolBarIcon"></i>
          <span class="svgToolBarTxt hidden-xs-only"></span>
        </li>
      </ul>
    </div>
    <div class="svgMain">
      <v-shapebar @click="dragShapeNode" v-show="editable"></v-shapebar>
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
      svgToolbar: [],
      svgAttr: { width: 0, height: 0, isHand: false, viewX: 0, viewY: 0, minW: 0, minH: 0, isCrosshair: false }
    }
  },
  components: {
    vShapebar
  },
  methods: {
    saveTopoJson() {},
    dragShapeNode(nodeData, key, event) {
      let NODE = nodeData[key]
      console.log(NODE)
      let toolbarName = NODE.type
      let toolbarIcon = NODE.icon
      let topoEle = $(`#topoId${this.topoId}`)
      let svgOffsetLeft = topoEle.find('.topoSvg').offset().left
      let svgOffsetTop = topoEle.find('topoSvg').offset().top
      let svgWidth = topoEle.find('.topoSvg').width()
      let svgHeight = topoEle.find('.topoSvg').height()
    }
  }
}
</script>

<style>
</style>