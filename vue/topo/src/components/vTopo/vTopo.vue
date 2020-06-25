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
            <g class="nodesG" v-for="(ele,key) in topoData.nodes" :class="{isSelect:ele.isSelect,hoverShowConnectorArror:editable}" :transform="'translate('+ele.x+','+ele.y+')'" :key="ele.id" @mouseover.stop="mouseoverNode(key,$event)" @mousedown.stop="dragSvgNode(key,$event)" @mouseout.stop="mouseoutLeftConnector(key)">
              <rect x="0" y="0" rx="2" ry="2" :width="ele.width" :height="ele.height" class="reactClass" />
              <text v-if="ele.classType=='T1'" class="nodeName" x="5" y="15">{{ele.name}}</text>
              <image class="nodeImg" v-if="ele.classType=='T1'" :xlink:href="ele.icon" :x="ele.width-18" :y="3" height="15px" width="15px" />
              <image class="nodeImg" v-if="ele.classType=='T2'" :xlink:href="ele.icon" :x="7" :y="7" height="36px" width="36px" />
              <text v-if="ele.classType=='T2'" class="nodeName" x="0" :y="ele.height+14">{{ele.name}}</text>
              <g class="connectorArror" :class="{'connector':ele.isLeftConnectShow}" :transform="'translate(0,'+ele.height/2+')'">
                <circle r="8" cx="0" cy="0" class="circleColor"></circle>
                <line x1="-3" y1="-5" x2="4" y2="0.5" stroke="#fff"></line>
                <line x1="4" y1="-0.5" x2="-3" y2="5" stroke="#fff"></line>
              </g>
              <g class="connectorArror" :class="{'connector':ele.isRightConnectShow}" :transform="'translate('+ele.width+','+ele.height/2+')'" @mousedown.stop="drawConnectLine(key,$event)">
                <circle r="8" cx="0" cy="0" class="circleColor"></circle>
                <line x1="-3" y1="-5" x2="4" y2="0.5" stroke="#fff"></line>
                <line x1="4" y1="-0.5" x2="-3" y2="5" stroke="#fff"></line>
              </g>
            </g>
            <!--node间关系连线样式-->
            <g class="connectorsG" :class="{active:ele.isSelect}" v-for="(ele,key) in topoData.connectors" v-if="ele.type == 'Line'" @mousedown.stop="selectConnectorLine(key)" :key="ele.id">
              <!--连线方式一共7种情况-->
              <!--自连-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id ===ele.targetNode.id" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)+
              'h'+connectorWSelf+
              'v'+(-(ele.sourceNode.height/2+connectorWSelf))+
              'h'+(-(ele.sourceNode.width+2*connectorWSelf))+
              'v'+(ele.sourceNode.height/2+connectorWSelf)+
              'H'+(ele.targetNode.x)">
              </path>
              <!--非自连:1.sourceNode的右侧箭头X <= targetNode的左侧箭头-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id !=ele.targetNode.id &&(ele.sourceNode.x+ele.sourceNode.width)<ele.targetNode.x" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)+
              'h'+(ele.targetNode.x-ele.sourceNode.x-ele.sourceNode.x)/2+
              'V'+(ele.targetNode.y+ele.targetNode.height/2)+
              'H'+ele.targetNode.x">
              </path>
              <!--2.sourceNode的右侧箭头x>=targetNode的左侧箭头X
              (1)且sourceNode的高度>targetNode的高度且高度未重叠-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id!=ele.targetNode.id&&(ele.sourceNode.x+ele.sourceNode.width)>=ele.targetNode.x&&
              (ele.sourceNode.y+ele.sourceNode.height)<ele.targetNode.y" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)+
              'h'+connectorWSelf+
              'v'+(ele.sourceNode.height/2+(ele.targetNode.y-ele.sourceNode.y-ele.sourceNode.height)/2)+
              'H'+(ele.targetNode.x-connectorWSelf)+
              'V'+(ele.targetNode.y+ele.targetNode.height/2)+
              'h'+connectorWSelf"></path>
              <!--2.sourceNode的右侧箭头X>=targetNode的左侧箭头X
              (2)且sourceNode的高度>target的高度且高度未重叠
              大写字母，表示采用绝对定位。另一种是用小写字母，表示采用相对定位-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id!=ele.targetNode.id &&(ele.sourceNode.x+ele.sourceNode.width)>ele.targetNode.x&&(ele.targetNode.y+ele.targetNode.height)<ele.sourceNode.y" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)
              +'h'+connectorWSelf+
              'V'+(ele.sourceNode.y-(ele.sourceNode.y-ele.targetNode.y-ele.targetNode.height)/2)+
              'H'+(ele.targetNode.x-connectorWSelf)+
              'V'+(ele.targetNode.y+ele.targetNode.height/2)+
              'H'+ele.targetNode.x">
              </path>
              <!--非自连
              2.sourceNode的右侧箭头>=targetNode的左侧箭头X
              (3)sourceNode的箭头y<=targetNode的箭头
              sourceNode的y<targetNode的y<=(sourceNode的y+sourceNode的height)或者sourceNode的y介于其间
              高度重叠-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id != ele.targetNode.id &&
                (ele.sourceNode.x + ele.sourceNode.width) >= ele.targetNode.x &&
                (ele.sourceNode.y + ele.sourceNode.height/2) <= (ele.targetNode.y + ele.targetNode.height / 2) &&
                ((ele.targetNode.y <= (ele.sourceNode.y + ele.sourceNode.height) && ele.targetNode.y >= ele.sourceNode.y) ||
                (ele.sourceNode.y <= (ele.targetNode.y + ele.targetNode.height) && ele.sourceNode.y >= ele.targetNode.y)
                )" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)+'h'+connectorWSelf+
                'V'+((ele.sourceNode.y-ele.targetNode.y)<=0?(ele.sourceNode.y-connectorWSelf):(ele.targetNode.y-connectorWSelf))+
                'H'+(ele.targetNode.x-connectorWSelf)+
                'V'+(ele.targetNode.y+ele.targetNode.height/2)+'H'+ele.targetNode.x"></path>
              <!--非自连:
                2.sourceNode的右侧箭头X>targetNode的左侧箭头x
                (3)且sourceNode的高度<targetNode的高度且sourceNode起点>targetNode的重点且高度重叠-->
              <path class="connectorLine" :class="{'defaultStrokeColor':!ele.color,'defaultStrokeW':!ele.strokeW}" :stroke="ele.color" :stroke-width="ele.strokeW" v-if="ele.sourceNode.id != ele.targetNode.id &&
                (ele.sourceNode.x + ele.sourceNode.width) >= ele.targetNode.x &&
                (ele.sourceNode.y + ele.sourceNode.height/2) > (ele.targetNode.y + ele.targetNode.height / 2) &&
                ((ele.targetNode.y <= (ele.sourceNode.y + ele.sourceNode.height) && ele.targetNode.y >= ele.sourceNode.y) ||
                (ele.sourceNode.y <= (ele.targetNode.y + ele.targetNode.height) && ele.sourceNode.y >= ele.targetNode.y)
                )" :d="'M'+(ele.sourceNode.x+ele.sourceNode.width)+','+(ele.sourceNode.y+ele.sourceNode.height/2)+'h'+connectorWSelf+
                'V'+ ((ele.sourceNode.y  + ele.sourceNode.height-ele.targetNode.y -ele.targetNode.height ) >= 0? (ele.sourceNode.y+ele.sourceNode.height + connectorWSelf) : (ele.targetNode.y+ele.targetNode.height +connectorWSelf)) +
                'H'+(ele.targetNode.x - connectorWSelf) +
                'V'+(ele.targetNode.y+ele.targetNode.height/2)+
                'H'+ele.targetNode.x"></path>
            </g>
            <!-- 动态绘制的连线 -->
            <g>
              <line :x1='connectingLine.x1' :y1="connectingLine.y1" :x2="connectingLine.x2" :y2="connectingLine.y2" v-show="connectingLine.isConnecting" stroke="#768699" stroke-width="2"></line>
            </g>
          </g>
          <line :class="{isMarkerShow:marker.isMarkerShow}" id="xmarker" class="marker" x1="0" :y1="marker.xmarkerY" :x2="marker.xmarkerX" :y2="marker.xmarkerY"></line>
          <line :class="{isMarkerShow:marker.isMarkerShow}" id="ymarker" class="marker" :x1="marker.ymarkerX" y1="0" :x2="marker.ymarkerX" :y2="marker.ymarkerY"></line>
          <rect :x="selectionBox.x" :y="selectionBox.y" :width="selectionBox.width" :height="selectionBox.height" stroke-dasharray="5,5" stroke-width="1" stroke="#222" fill="rgba(170,210,232,0.5)" v-show="selectionBox.isShow" />
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
  props: {
    editable: { type: Boolean, default: true },
    topoData: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  },
  data() {
    return {
      selectNodeData: {},
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
      svgTopo: { isMoveover: false },
      selectionBox: { x: 0, y: 0, width: 0, height: 0, isShow: false },
      connectorWSelf: 15, //自连连线的宽度
      connector: 15, //非自连连线宽度
      containTop: 30, //包含关系的子node距离父node
      containLeft: 22, //包含关系的左右距离
      classchoose: false,
      connectingLine: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        isConnecting: true,
        sourceNode: '',
        endNode: ''
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
    canConnectorTo(curNodeType, connectorToNodeType, connectorType) {
      let canConnector = true
      return canConnector
    },
    mouseoverNode() {},
    saveTopoJson() {},
    // 拖拽svg中的node
    dragSvgNode(key, event) {
      console.log('dragKey', key)
      console.log('dragEvent', event)
      if (!this.editable) return false // 非编辑状态，svgNode不可移动
      let mouseX0 = event.clientX + $(document).scrollLeft() //鼠标点击下的位置
      let mouseY0 = event.clientY + $(document).scrollTop()
      let CURNODE = this.topoData.nodes[key] // 点击的node对象
      let startX = CURNODE.x // 节点开始位置
      let startY = CURNODE.y
      let curNodeId = CURNODE.id // 当前节点id
      let nodeW = CURNODE.width //节点 宽高
      let nodeH = CURNODE.height
      let nodeStartPosArr = []
      let moveDis = false
      this.marker.isMarkerShow = true //显示标尺
      // 把选中的node信息放在数组最后一位
      this.topoData.nodes.splice(key, 1)
      this.topoData.nodes.push(CURNODE)
      /**优化 */
      this.putInnerNodeLast(CURNODE) //递归循环将嵌套节点依次放置，判断包含关系，如果内部有子node，则需要将子node放入数组最后的位置
      // 取消所有节点选中
      this.cancelAllNodesSelect()
      //取消所有连线选中
      this.cancelAllLinksSelect()
      //节点选中
      CURNODE.isSelect = true
      this.storeCurnodeStartPosition(CURNODE, nodeStartPosArr) // 将选择的node的子子节点初始位置保存进去
      //关联属性设置框
      this.topoData.nodes.forEach((node, key) => {
        if (node.id == CURNODE.id) {
          this.selectNodeData = node
        }
      })
      document.onmousemove = event => {
        let disX = event.clientX + $(document).scrollLeft() - mouseX0
        let disY = event.clientY + $(document).scrollTop() - mouseY0
        let endX = startX + disX //最终位置
        let endY = startY + disY
        let n1 = Math.floor(endX / 20) //grid宽高的整数倍
        let n2 = Math.floor(endY / 20)
        if (n1 < 0) n1 = 0
        if (n2 < 0) n2 = 0
        if (endX <= 0) {
          endX = 0
          disX = -startX
        }
        if (endY <= 0) {
          endY = 0
          disY = -startY
        }
        this.marker.isMarkerShow = true // 显示标尺
        this.marker.xmarkerY = n2 * 20 //标尺的移动位置，以每格20的距离移动
        this.marker.ymarkerX = n1 * 20
        this.moveContianNode(disX, disY, nodeStartPosArr) //根据保存的数组数据移动相关节点
        this.refreshConnectorsData() //及时更新连线数据
      }
      document.onmouseup = event => {
        document.onmousemove = null
        document.onmouseup = null
        this.marker.isMarkerShow = false // 隐藏标尺
        let NodeEndX = this.marker.ymarkerX //最终位置为标尺的位置 最终节点位置
        let NodeEndY = this.marker.xmarkerY
        let disX = nodeEndX-startX
        let disY=nodeEndY-startY
        let mouseDisX= event.clientX-mouseX0
        let mouseDisY=event.clientY-mouseY0
        this.moveContianNode(disX,disY,nodeStartPosArr) // 移动包含着的子节点
        this.drawContainLayout(CURNODE,NodeEndX,NodeEndY,true,nodeStartPosArr,mouseDisX,mouseDisY,startY)
        this.refreshConnectorsData() //最后刷新连线
      }
    },
    // 存入node及其子节点位置信息
    storeCurnodeStartPosition(CURNODE, startNodePosition) {
      let containNodes = CURNODE.containNodes
      startNodePosition.push({ id: CURNODE.id, x: CURNODE.x, y: CURNODE.y })
      if (containNodes.length) {
        containNodes.forEach((nodeId, key) => {
          this.topoData.nodes.forEach((ele, index) => {
            if (ele.id == nodeId) {
              this.storeCurnodeStartPosition(ele, startNodePosition)
            }
          })
        })
      }
    },
    moveContianNode(disX, disY, nodeStartPosArr) {
      nodeStartPosArr.forEach((ele, key) => {
        let storeInfoId = ele.id
        this.topoData.nodes.forEach((node, key) => {
          if (node.id == storeInfoId) {
            node.x = ele.x + disX
            node.y = ele.y + disY
          }
        })
      })
    },
    putInnerNodeLast(CURNODE) {
      let curNodeId = CURNODE.id
      this.topoData.connectors.forEach((ele, key) => {
        if (ele.type == 'Contain' && ele.targetNode.id == curNodeId) {
          let childNodeId = ele.sourceNode.id
          this.topoData.nodes.forEach((node, index) => {
            if (node.id == childNodeId) {
              let childNode = node
              this.topoData.nodes.splice(index, 1)
              this.topoData.nodes.push(childNode)
              this.putInnerNodeLast(childNode)
            }
          })
        }
      })
    },
    //刷新连线数据
    refreshConnectorsData() {
      this.topoData.connectors.forEach((item, index) => {
        // 更新connectors里的数据
        this.topoData.nodes.forEach((node, key) => {
          if (item.sourceNode.id == node.id) {
            item.sourceNode.width = node.width
            item.sourceNode.height = node.height
            item.sourceNode.x = node.x
            item.sourceNode.y = node.y
          }
          if (item.targetNode.id == node.id) {
            item.targetNode.width = node.width
            item.targetNode.height = node.height
            item.targetNode.x = node.x
            item.targetNode.y = node.y
          }
        })
      })
    },
    // 绘制contain布局及刷新连线数据
    drawContainLayout(CURNODE,NodeEndX,NodeEndY,isStop,nodeStartPosArr,mouseDisX,mouseDisY,startY){
      let TOPODATA = this.topoData
      let curNodeId = CURNODE.id
      let nodeW=CURNODE.width
      let nodeH = CURNODE.height
      let originTargetNodeId=''// 原先的targetNode
      let originTargetNode={}
      //预留++++判断是否能增加包含关系
      let NodePoint1=[NodeEndX,NodeEndY] // 初始当前节点四个角的位置
      let NodePoint2=[(NodeEndX+nodeW),NodeEndY]
      let NodePoint3=[(NodeEndX+nodeW),(NodeEndY+nodeH)]
      let NodePoint4=[NodeEndX,(NodeEndY+nodeH)]
      // 如果点击的node有contain关系，先记录下targetNode
      TOPODATA.connectors.forEach((ele,key)=>{
        if(ele.type=='Contain'&&ele.sourceNode.id==curNodeId){
          originTargetNodeId = ele.targetNode.id
        }
      })
      if(originTargetNodeId){
        TOPODATA.nodes.forEach((node,key)=>{
          if(node.id == originTargetNodeId)  originTargetNode =node
        })
      }
      // 情况一:移除后依然恢复原来的位置，前提:1.移除的距离在一定范围 2.点击的节点有父层包含关系
      let endNodeY = startY+mouseDisY
      if(originTargetNode&& Math.abs(mouseDisX)<=this.containLeft&&endNodeY<originTargetNode.y+originTargetNode.height&&endNodeY>originTargetNode.y-CURNODE.height){
        this.refreshRowAndOuterNode(originTargetNodeId)
        return false
      }
      // 清除当前node的包含关系
      this.deleteCurNodeContainConnector(CURNODE)
      //与NodeData对比，判断是否有值与其他Node重合的
      var isContainNode = false
      let overlapTargetNode={}
      for(let i =( TOPODATA.nodes.length - 1); i >= 0; i--) {
        
      }
    },
    mouseoutLeftConnector() {},
    mousedownTopoSvg() {},
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
          this.marker.ymarkerX = n1 * 20
        }
      }
      document.onmouseup = event => {
        document.onmousemove = null
        document.onmouseup = null
        // 判断鼠标在svg区域
        if (isContainSvgArea) {
          let TOPODATA = this.topoData
          console.log(TOPODATA)
          let type = NODE.type
          let name = NODE.type + '_' + NODE.num
          NODE.num++
          let id = GenNonDuplicateID(5)
          let nodeEndX = this.marker.ymarkerX
          let nodeEndY = this.marker.xmarkerY
          let svgNode = {
            name,
            type,
            id: id,
            x: nodeEndX,
            y: nodeEndY,
            icon: NODE.icon,
            width: NODE.width,
            height: NODE.height,
            initW: NODE.width,
            initH: NODE.height,
            classType: NODE.classType,
            isLeftConnectShow: false,
            isRightConnectShow: false,
            containNodes: [],
            attrs: []
          }
          this.marker.isMarkerShow = false //标尺取消显示
          this.topoData.nodes.push(svgNode) //创建一个svg Node
          // 计算是否与某个节点重叠
          console.log(TOPODATA === this.topoData)
          for (let i = TOPODATA.nodes.length - 1; i >= 0; i--) {
            let node = TOPODATA.nodes[i]
            if (node.x <= nodeEndX && nodeEndX <= node.x + node.width && nodeEndY >= node.y && node.y + node.height >= nodeEndY && node.id != id) {
              let canBeContain = this.canConnectorTo(NODE.type, node.type, 'Contain')
              if (canBeContain) {
                let connectorId = this.GenNonDuplicateID(3)
                let connector = {
                  id: connectorId,
                  type: 'Contain',
                  sourceNode: {
                    id: id
                  },
                  targetNode: {
                    id: node.id
                  },
                  isSelect: false
                }
                TOPODATA.containNodes.push(connector)
                node.containNodes.push(id) // 如果有嵌套关系，就在父节点放入子节点id
              }
            }
          }
        }
        // 重新初始toolbarMoveNode的值
        this.shapebarMoveNode.left = 0
        this.shapebarMoveNode.top = 0
        this.shapebarMoveNode.name = ''
        this.shapebarMoveNode.icon = ''
        this.shapebarMoveNode.isShow = false
      }
      // 生成唯一id值
      function GenNonDuplicateID(randomLength) {
        return Number(
          Math.random()
            .toString()
            .substr(3, randomLength) + Date.now()
        ).toString(36)
      }
    },
    // 动态绘制连线
    drawConnectLine(key, event) {
      console.log('key', key)
      console.log('event', event)
      if (!this.editable) return false //如果非编辑状态，不可连线
      let CONNECTLINE = this.connectingLine //绘制连线对象
      let CURNODE = this.topoData.nodes[key] // 当前点击node
      console.log('CURNODE', CURNODE)
      let nodeW = CURNODE.width // 当前node宽高
      let nodeH = CURNODE.height
      let sourceNodeX = CURNODE.x
      let sourceNodeY = CURNODE.y
      let mouseX0 = event.clientX
      let mouseY0 = event.clientY
      let topoEle = $(`#topoId${this.topoId}`)
      let x1 = event.clientX - topoEle.find('.topoSvg').offset().left - 2 + $(document).scrollLeft() + this.svgAttr.viewX // 连线开始的位置:鼠标点击的实际位置
      let y1 = event.clientY - topoEle.find('.topoSvg').offset().top + 4 + $(document).scrollTop() + this.svgAttr.viewY
      CONNECTLINE.isConnecting = true // 显示绘制连线
      CONNECTLINE.x1 = x1
      CONNECTLINE.y1 = y1
      CONNECTLINE.x2 = x1 //连线终点同样赋值为起点值
      CONNECTLINE.y2 = y1
      CONNECTLINE.sourceNode = CURNODE.id //将当前点击nodeid值赋给连线起点
      document.onmousemove = event => {
        let disX = event.clientX - mouseX0
        let disY = event.clientY - mouseY0
        let x2 = x1 + disX
        let y2 = y1 + disY
        CURNODE.isRightConnectShow = true
        CONNECTLINE.x2 = x2
        CONNECTLINE.y2 = y2
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        let hasConnected = false // 标记是否已经有过连线
        let CONNECTORS = this.topoData.connectors
        let sourceNodeW = nodeW
        let sourceNodeH = nodeH
        let targetNodeW = 0 // 目标节点相关信息
        let targetNodeH = 0
        let targetNodeX = 0
        let targetNodeY = 0
        let targetNodeType = ''
        let connectType = ''
        console.log('connectingLine', this.connectingLine)
        if (CONNECTLINE.endNode) {
          console.log('CONNECTLINE.endNode', 1)
          // 正确连线:添加连线信息在connectors中
          // 判断是否有已经有连线的情况
          CONNECTORS.forEach((item, index) => {
            if (item.sourceNode.id == CURNODE.id && item.targetNode.id == CONNECTLINE.endNode && item.type == 'Line') {
              hasConnected = true
            }
          })
          // 未连线情况下增加两者连线
          if (!hasConnected) {
            connectType = 'Line'
            // 获取目标节点的宽高
            this.topoData.nodes.forEach((item, index) => {
              if (item.id === CONNECTLINE.endNode) {
                targetNodeH = item.width
                targetNodeW = item.height
                targetNodeX = item.x
                targetNodeY = item.y
                targetNodeType = item.type
              }
            })
            let canLinkToTargetNode = this.canConnectorTo(CURNODE.type, targetNodeType, 'Link')
            if (!canLinkToTargetNode) {
              this.$message({
                showClose: true,
                message: CURNODE.type + '类型 不能连接' + targetNodeType + '类型',
                type: 'error'
              })
              CURNODE.isRightConnectShow = false // 连线失败：起点右侧箭头且设置为消失
              CONNECTORS.forEach((item, key) => {
                this.topoData.nodes.forEach((node, key) => {
                  if (node.id == item.sourceNode.id && item.type == 'Line') {
                    node.isRightConnectShow = true
                  }
                })
              })
            } else {
              // 类型:包含
              let connectorId = this.GenNonDuplicateID(3)
              let connector = {
                id: connectorId,
                type: connectType,
                strokeW: 3, //仅用于Line类型，默认3
                color: '#768699', //仅用于Line类型，默认颜色
                targetNode: {
                  x: targetNodeX,
                  y: targetNodeY,
                  id: CONNECTLINE.endNode,
                  width: targetNodeW,
                  height: targetNodeH
                },
                sourceNode: {
                  x: sourceNodeX,
                  y: sourceNodeY,
                  id: CURNODE.id,
                  width: sourceNodeW,
                  height: sourceNodeH
                }
              }
              CURNODE.isRightConnectShow = true
              this.topoData.nodes.forEach((item, key) => {
                if (item.id == CONNECTLINE.endNode) item.isLeftConnectShow = true
              })
              CONNECTORS.push(connector)
            }
          }
        } else {
          CURNODE.isRightConnectShow = false //连线失败：起点右侧箭头暂且设置为消失
          CONNECTORS.forEach((item, key) => {
            this.topoData.nodes.forEach((node, key) => {
              if (node.id == item.sourceNode.id && item.type == 'Line') node.isRightConnectShow = true
            })
          })
        }
        //绘制连线恢复初始值
        CONNECTLINE.x1 = 0
        CONNECTLINE.y1 = 0
        CONNECTLINE.x2 = 0
        CONNECTLINE.y2 = 0
        CONNECTLINE.isConnecting = false
        CONNECTLINE.sourceNode = ''
        CONNECTLINE.endNode = ''
      }
    },
    // 鼠标滑过node
    mouseoverNode(key, event) {
      this.marker.xmarkerY = this.topoData.nodes[key].y
      this.marker.ymarkerY = this.topoData.nodes[key].x
      this.getConnectLine(key)
    },
    //获取连线终点时的node的ID值
    getConnectLine(key) {
      this.connectingLine.endNode = this.topoData.nodes[key].id
    },
    //鼠标划出左侧箭头时，将connectingLine.endNode再次初始化
    mouseoutLeftConnector(key) {
      this.connectingLine.endNode = ''
    },
    //点击选中连线
    selectConnectorLine(key) {
      if (!this.editable) return false //如果非编辑状态 不可点击
      let connectors = this.topoData.connectors
      let nodes = this.topoData.nodes
      let selectLine = this.topoData.connectors[key]
      let lastIndex = connectors.length - 1
      connectors.splice(key, 1)
      connectors.push(selectLine)
      // 取消所有选中样式
      this.cancelAllNodesSelect()
      this.cancelAllLinksSelect()
      selectLine.isSelect = true
      this.$set(connectors, lastIndex, selectLine)
      this.selectNodeData = selectLine // 将点击的连线信息赋值给属性面板
    },
    // 取消所有节点选中
    cancelAllNodesSelect() {
      this.topoData.nodes.forEach((ele, key) => {
        ele.isSelect = false
        this.$set(this.topoData.nodes, key, ele)
      })
      this.selectNodeData = {}
    },
    // 取消所有连线选中
    cancelAllLinksSelect() {
      this.topoData.connectors.forEach((ele, key) => {
        ele.isSelect = false
        this.$set(this.topoData.connectors, key, ele)
      })
      this.selectNodeData = {}
    },
    // https://blog.csdn.net/zxmin1302/article/details/82911983?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase
    // 删除选中node的连线
    deleteSelectNodeLink(selectId) {
      let connectorObjArr = this.topoData.connectors
      let connectorsLen = connectorObjArr.length
      for (let i = 0; i < connectorsLen; i++) {
        let connectorObj = connectorObjArr[i]
        // 删除连线
        if (connectorObj.type === 'Line' && (connectorObj.sourceNode.id == selectId || connectorObj.targetNode.id === selectId)) {
          this.topoData.connectors.splice(i, 1)
          i--
          connectorsLen--
        }
      }
    },
    // 删除node节点及其关系
    deleteNodeAndConnetor() {
      document.onkeydown = event => {
        let keycode = event.which //键盘值
        if (keycode == 46 || keycode == 8) {
          // 单节点和多选删除节点
          for (let i = 0; i < this.topoData.nodes.length; i++) {
            let node = this.topoData.node[i]
            if (node.isSelect) {
              this.deleteSelectNodeLink(node.id)
              let targetNodeId = ''
              let targetNode = null
              this.topoData.connectors.forEach((ele, key) => {
                if (ele.sourceNode.id == node.id) targetNodeId = ele.targetNode.id
              })
              this.deleteCurNodeContainConnector(node)
              if (targetNodeId) {
                this.topoData.nodes.forEach((node, index) => {
                  if (node.id == targetNodeId) {
                    this.refreshRowAndOuterNode(node)
                  }
                })
              }
              this.topoData.nodes.splice(i, 1)
              // 删除包含关系 1.如果有父元素，恢复父元素的宽高位置
              this.deleteCurnodeAndChildnodes(node)
              this.refreshNodeArrows() //刷新节点的左右箭头展示
              i--
              if (this.topoData.nodes.length > 0) {
                this.selectNodeIndex = null
                this.selectNodeData = {}
              } else {
                this.selectNodeIndex = null
                this.selectNodeData = {}
                this.isTopoAttrShow = false
              }
            }
          }
          //单选删除连线功能
          this.topoData.connectors.forEach((ele, key) => {
            if (ele.isSelect) {
              this.topoData.connectors.splice(key, 1)
              this.refreshNodeArrows() //重新绘制node节点左右箭头
            }
          })
          this.refreshConnectorsData()
        }
      }
    },
    // 重新绘制node节点左右箭头
    refreshNodeArrows() {
      this.topoData.nodes.forEach((topoNode, index) => {
        topoNode.isLeftConnectShow = false
        topoNode.isRightConnectShow = false
      })
      this.topoData.connectors.forEach((ele, key) => {
        let sourceNodeId = ele.sourceNode.id
        let targetNodeId = ele.targetNode.id
        if (ele.type == 'Line') {
          this.topoData.nodes.forEach((topoNode, index) => {
            if (topoNode.id == targetNodeId) {
              topoNode.isLeftConnectShow = true
            }
            if (topoNode.id == sourceNodeId) {
              topoNode.isRightConnectShow = true
            }
          })
        }
      })
    },
    //保存topo的json数据
    saveTopoJson() {
      console.log(JSON.stringify(this.topoData))
    },
    saveTopoImage() {
      let maxW = 0
      let maxH = 0
      let intW = this.svgAttr.width
      let initH = this.svgAttr.height
      this.topoData.nodes.forEach((node, key) => {
        let nodeEndX = node.width + node.x
        let nodeEndY = node.height + node.y
        if (nodeEndX > maxW) maxW = nodeEndX
        if (nodeEndY > maxH) maxH = nodeEndY
      })
      this.svgAttr.width = maxW + 50
      this.svgAttr.height = maxH + 50
      saveSvgAsPng(document.getElementById('topoSvg'), 'topo.png')
      // 建议使用promise进行优化
      setTimeout(() => {
        this.svgAttr.width = initW
        this.svgAttr.height = initH
      }, 1000)
    },
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
    this.deleteNodeAndConnetor() //绑定删除Node事件
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
.svgSelectClass {
  filter: url(#f1);
}
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
.marker {
  stroke: #3d7ed5;
  stroke-width: 1;
  display: none;
  &.isMarkerShow {
    display: block;
  }
}
.nodesG {
  -webkit-user-select: none;
  user-select: none;
  -moz-select: none;
  -ms-select: none;
  -o-select: none;
  &.isSelect .reactClass {
    stroke-width: @stroke-select-width;
    .svgSelectClass;
  }
  &.isSelect .nodeName {
    font-weight: 500;
  }
  &.hoverShowConnectorArror:hover .connectorArror {
    display: block;
  }
  .nodeImg {
    -webkit-user-select: none;
    user-select: none;
    -moz-select: none;
    -ms-select: none;
    -o-select: none;
  }
  .nodeName {
    font-size: 12px;
    fill: @svg-common-color;
    -webkit-user-select: none;
    user-select: none;
  }
  .reactClass {
    stroke-width: @stroke-width;
    stroke: @svg-common-color;
    fill: #fff;
    cursor: default;
  }
  .connectorArror{display: none;
    &.connector{display: block;}
    .circleColor{fill:@svg-common-color}
  }
}
.connectorsG {
  .connectorLine {
    fill:none;
    &.defaultStrokeColor{stroke:@svg-common-color;}
    &.defaultStrokeW{stroke-width:@stroke-width;}
  }
  &.active .connectorLine{.svgSelectClass;}
}
</style>
<style>
.el-collapse-item__header {
  -webkit-user-select: none;
  user-select: none;
  -moz-select: none;
  -ms-select: none;
  -o-select: none;
}
</style>