import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import customButton from '@/views/customButton'
import simpleTable from '@/views/simpleTable'
import customconfirm from '@/views/customconfirm'
import customCalender from '@/views/customCalender'
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
  }]
})
