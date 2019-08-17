import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//require('./state')//访问状态对象

//同步请求
var xmlhttp,state;

xmlhttp=new XMLHttpRequest();

xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4&&xmlhttp.status==200){
        state=eval('('+xmlhttp.responseText+')')
    }else{
        state={
            serverIp:0
        }
    }
}

xmlhttp.open("GET",'http://192.168.1.10/json/users.php')
xmlhttp.send();

console.log(state)

export default new Vuex.Store({
    state
})