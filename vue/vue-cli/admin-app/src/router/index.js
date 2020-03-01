import Vue from 'vue';
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)
// https://juejin.im/post/5d69f6676fb9a06b0b1c8cd2
// 通用routers
import Layout from '@layout'
const currencyRoutes = [
    {
        path:'/login',
        name:'Login',
        component:()=>import('@/views/login'),
        meta:{
            title:'登录页'
        },
        hidden:true
    }
]

const creatRouter = () => {
    return new Router({
      routes: currencyRoutes,
      scrollBehavior() {
        return { x: 0, y: 0 }
      }
    })
  }
  
  const router = creatRouter()

  export default router