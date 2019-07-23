<template>
    <div>
        <v-header></v-header>
        <h2>这是一个新闻组件</h2>
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>
    </div>
</template>

<script>
import Header from './Header';
export default{
    data(){
        return {
            msg:'我是一个新闻组件'
        }
    },
    components:{
        'v-header':Header
    }
}
</script>
<style lang="scss" scoped>

</style>