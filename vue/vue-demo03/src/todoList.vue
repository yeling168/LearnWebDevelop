<template>
  <div id="app">
     <input type="text" v-model='todo'/>
     <button @click="doAdd()">+增加</button>
     <br>
     <hr/>
     <hr/>
     <ul v-for="(item,key) in list">
         <li>{{item}}</li>
         <button @click="removeData()">删除</button>
     </ul>
  </div>
</template>
<script>
   export default{
       data(){
           return {
               todo:'',
               list:[]
           }
       },
       methods:{
           doAdd(){
               //获取文本框输入的值
               //把文本框的值push到list
               this.list.push(this.todo);
               this.todo='';
           },
           removeData(key){
               this.list.splice(key,1);
           }
       }
   }
</script>