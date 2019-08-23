<template>
    <div id="app">
        <v-home></v-home>
        <hr>
        <br>
        <!-- <v-news></v-news> -->
    </div>
</template>

<script>
     import Home from './components/Home';
     import News from './components/News';
     export default{
         data(){
             return {
                 msg:'你好vue'
             }
         },
         components:{
             /**前面的组件名称不能和html标签一致 */
            'v-home':Home,
            'v-news':News
         }
     }
</script>
<style lang="scss" scoped>

</style>