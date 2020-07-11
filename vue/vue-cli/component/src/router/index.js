import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import customButton from '@/views/customButton'
import simpleTable from '@/views/simpleTable'
import customconfirm from '@/views/customconfirm'
import customCalender from '@/views/customCalender'
//拖动
// https://www.cnblogs.com/whaleAlice/p/12488998.html
import simpledrag1 from '@/views/dragable/simpledrag1'
// https://www.jianshu.com/p/e8ff1e1cafb1
import simpledrag2 from '@/views/dragable/simpledrag2'
// https://www.jianshu.com/p/382ac5f9d6ff
import simpledrag3 from '@/views/dragable/simpledrag3'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/customButton',
    name: 'customButton',
    component: customButton
  }, {
    path: '/simpleTable',
    name: 'simpleTable',
    component: simpleTable
  }, {
    path: '/customconfirm',
    name: 'customconfirm',
    component: customconfirm
  }, {
    path: '/customCalender',
    name: 'customCalender',
    component: customCalender
  }, {
    path: '/simpledrag1',
    name: 'simpledrag1',
    component: simpledrag1
  }, {
    path: '/simpledrag2',
    name: 'simpledrag2',
    component: simpledrag2
  }, {
    path: '/simpledrag3',
    name: 'simpledrag3',
    component: simpledrag3
  }]
})
