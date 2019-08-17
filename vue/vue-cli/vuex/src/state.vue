<template>
   <div id="app">

       <h1>Hello Vuex</h1>
       <p>{{$store.state.count}} -- {{count}}</p>
       <p>
           <button @click="$store.commit('jia')">+</button>
           <button @click="$store.commit('jian')">-</button>
       </p>
   </div>
</template>