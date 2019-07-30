<template>
    <div id="app">
        <h1>Hello Vue</h1>
        <p>{{$store.state.count}}  --{{countit}}--{{count}}</p>
        <p>
            <button @click='$store.commit("jia")'>+</button>
            <button @click='$store.commit("jian")'>-</button>
        </p>
    </div>
</template>

<script>
import {mapState} from 'vuex';
console.log("mapState",mapState);
export default {
    name:'app',
    data(){
        //这里的count是组件自己的，不能和computed里面的变量重名
        return {
            count:0
        }
    },
    /* //在组件加载之前计算值
    computed:{
        //这里的countit是组件自己的，不能和data里面的变量重名
        countit(){
            //this指的是main.js中id为app的实例化组件
            //$store指的是store.js的实例
            console.log(this);
            return this.$store.state.count+1
        }
    } */


    /* //简化computed
    computed:mapState({
       // countit:state=>state.count
       countit:function(state){
           console.log('state',state);
           return state.count;
       }
    }) */

    //更加简化computed
    //也不能和data中的count变量重复
   computed:mapState([
       'countit'
   ])

}
</script>
