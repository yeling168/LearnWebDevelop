import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**通用routers */
export const currencyRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: '登录页' },
    hidden: true
  }
];

const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    }
  });
};

const router = creatRouter();

export default router
