<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu"></a>
# vue2.0拓扑组件
## demo演示地址
https://mirror198829.github.io/vue-topo/dist/index.html
## 序
2016年9月接到html5替换flash的拓扑图任务，历时3月整，使用jquery+SVG技术完成第一款拓扑图组件，涵盖拖拽、缩放、删除、选中区域、连线、导入、保存图片、多种布局显示等功能，但当node数高达百位时，因dom的操作，出现了非常可怕的性能问题。<br/>
2017年10月20日，因新公司项目需要，果断决定结合当下流行的VUE2.0框架 + SVG技术 重写拓扑组件，并将此开源，希望大家多提意见
## 技术选型
* VUE2.0
* SVG
* Element-UI
## 功能分析及技术点
| 功能 | 技术点  |
|-------------|-----|
|toolbar拖拽|记录鼠标位置；<br/>拖拽物体的显示隐藏；|
|连接关系：创建连线|绘制时：使用svg的 `<line>`，需正确获取起始和终止点；<br/> 结束绘制：使用`<path>`路径绘制连线形态，根据两者节点位置不同，共计4种连线形态展示；|
|包含关系：单层嵌套|依据最终的位置判断是否为包含关系（这里的算法有待优化）;<br/>重新计算父节点宽高： 父结点宽高为子节点宽高+边距<br/>重新计算子节点的位置信息：父节点位置信息 - 边距|
|包含关系：多层嵌套|通过递归的方式完成嵌套布局|
|包含关系：并列嵌套|父节点宽高：内部子节点宽度之和 +  边距，父节点高度：最高子节点高度 + 边距；<br/> 每个子节点位置：当前节点位置 = 前一个节点位置 + 前一个节点宽度 + 间隔边距|
|删除：单结点|删除节点同时删除关联连线（source&target|
|删除：包含关系|删除包含关系同时恢复父节点的宽高同时刷新并列节点位置|
|删除：连线|刷新原本有连线的连接点样式|
|删除：多节点|使用for循环，注意i--|
|框选|使用`<reat>`,根据鼠标移动位移的正负数，选择不同的x和y值|
|svg的viewbox的移动功能 |记录鼠标移动的位移，修改viewbox的视图位置|

## Usage
#### NPM
``` 
npm i vue-topo -save 
```
``` 
import vTopo from 'vue-topo'
import 'vue-topo/dist/vue-topo.min.css'
Vue.use(vTopo)
```
#### github源码使用
```
npm install
```
```
npm run dev  //启动服务
```
#### 引入组件
``` 
// xxx.vue
 <v-topo 
  :editable="true"
  :topo-data="topoData1">
 </v-topo>
```
#### Attributes  
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 必填 |
| --- | --- | --- | --- | --- | --- |
| editable | 是否可编辑 | boolean | true/false | true | — |
| topo-data | topo初始值 | object | — | {nodes:[],connectors:[]} | 是 |
## 说明
代码开源，欢迎码农们提出宝贵意见，bug请提issues，本人将及时修改。最后著作权归一步工程师，请大家注明代码来源：https://github.com/Mirror198829/vue-topo
