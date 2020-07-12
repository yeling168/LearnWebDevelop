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
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag4 from '@/views/dragable/simpledrag4'
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag5 from '@/views/dragable/simpledrag5'
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag6 from '@/views/dragable/simpledrag6'
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag7 from '@/views/dragable/simpledrag7'
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag8 from '@/views/dragable/simpledrag8'
// http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html
import simpledrag9 from '@/views/dragable/simpledrag9'
// https://sortablejs.github.io/Vue.Draggable/#/simple
import simple from '@/views/flexdrag/simple'
import twoLists from '@/views/flexdrag/two-lists'
import clone from '@/views/flexdrag/clone'
import table from '@/views/flexdrag/table'
import tableColumn from '@/views/flexdrag/table-column'
import footerslot from '@/views/flexdrag/footerslot'
import headerslot from '@/views/flexdrag/headerslot'
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
    },
    {
      path: '/simpledrag4',
      name: 'simpledrag4',
      component: simpledrag4
    },
    {
      path: '/simpledrag5',
      name: 'simpledrag5',
      component: simpledrag5
    },
    {
      path: '/simpledrag6',
      name: 'simpledrag6',
      component: simpledrag6
    },
    {
      path: '/simpledrag7',
      name: 'simpledrag7',
      component: simpledrag7
    },
    {
      path: '/simpledrag8',
      name: 'simpledrag8',
      component: simpledrag8
    },
    {
      path: '/simpledrag9',
      name: 'simpledrag9',
      component: simpledrag9
    }, {
      path: '/simple',
      name: 'simple',
      component: simple
    },
    {
      path: '/twoLists',
      name: 'twoLists',
      component: twoLists
    },
    {
      path: '/clone',
      name: 'clone',
      component: clone
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/tableColumn',
      name: 'tableColumn',
      component: tableColumn
    }, {
      path: '/footerslot',
      name: 'footerslot',
      component: footerslot
    },
    {
      path: '/headerslot',
      name: 'headerslot',
      component: headerslot
    }
  ]
})
