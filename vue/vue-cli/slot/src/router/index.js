import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slot1 from '@/components/demo1/Slot1'
import Slot2 from '@/components/demo2/Slot2'
import Slot3 from '@/components/demo3/Slot3'
import Slot4 from '@/components/demo4/Slot4'
import Slot5 from '@/components/demo5/Slot5'
import Slot6 from '@/components/demo6/Slot6'
import Slot7 from '@/components/demo7/Slot7'
import Slot8 from '@/components/demo8/Slot8'
import Slot9 from '@/components/demo9/Slot9'
import Slot10 from '@/components/demo10/Slot10'
import Slot11 from '@/components/demo11/Slot11'
import Slot12 from '@/components/demo12/Slot12'
import Slot13 from '@/components/demo13/Slot13'
import Slot14 from '@/components/demo14/Slot14'
import Slot15 from '@/components/demo15/Slot15'
import Slot16 from '@/components/demo16/Slot16'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/slot1',
      name: 'Slot1',
      component: Slot1
    },
   {
      path: '/slot2',
      name: 'Slot2',
      component: Slot2
    },{
      path: '/slot3',
      name: 'Slot3',
      component: Slot3
    },{
      path: '/slot4',
      name: 'Slot4',
      component: Slot4
    },
    {
      path: '/slot5',
      name: 'Slot5',
      component: Slot5
    },
    {
      path: '/slot6',
      name: 'Slot6',
      component: Slot6
    },
    {
      path: '/slot7',
      name: 'Slot7',
      component: Slot7
    },
    {
      path: '/slot8',
      name: 'Slot8',
      component: Slot8
    },
    {
      path: '/Slot9',
      name: 'Slot9',
      component: Slot9
    },
    {
      path: '/Slot10',
      name: 'Slot10',
      component: Slot10
    },
    {
      path: '/Slot11',
      name: 'Slot11',
      component: Slot11
    },
    {
      path: '/Slot12',
      name: 'Slot12',
      component: Slot12
    },
    {
      path: '/Slot13',
      name: 'Slot13',
      component: Slot13
    },
    {
      path: '/Slot14',
      name: 'Slot14',
      component: Slot14
    },
    {
      path: '/Slot15',
      name: 'Slot15',
      component: Slot15
    },
    {
      path: '/Slot16',
      name: 'Slot16',
      component: Slot16
    }
  ]
})
