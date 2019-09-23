import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**通用routers */
export const currencyRoutes=[];

const creatRouter=()=>{
    return new Router({
        routes:currencyRoutes,
        scrollBehavior(){
            return {
                x:0,
                y:0
            }
        }
    })
}