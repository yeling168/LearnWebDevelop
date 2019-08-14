<template>
    <div id="app">
        <p>Props使用方式</p>
        <p>
            <hello txt="HelloWorld" v-bind:dddddddd="btnText"></hello>
        </p>
        <p>
            <input type="text" v-model="btnText"></input>
        </p>
    </div>
</template>

<script>
import hello from './hello';
export default {
    name:'app',
    components:{hello},
    data(){
        return{
            btnText:'Hello World'
        }
    }
}
</script>