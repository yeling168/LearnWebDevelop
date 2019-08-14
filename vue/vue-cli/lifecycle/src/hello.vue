<template>
    <div id="hello">
        <button>{{txt}}</button>
        <span>{{dddddddd}}</span>
    </div>
</template>
<script>
export default {
    name:'hello',
    props:['txt','dddddddd']
}
</script>

<style scoped>
#hello button{
    background-color: #ff6600;
    height: 35px;
    width: 200px;
    color:#fff
}
</style>