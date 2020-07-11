import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import customButton from '@/views/customButton'
import simpleTable from '@/views/simpleTable'
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
  }]
})
