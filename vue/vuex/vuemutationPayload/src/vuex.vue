<template>
    <div id="app">
        <h1>Hello</h1>
        <p>{{$store.state.count}}</p>
        <p>
            <button @click="$store.commit('jia',10)">+</button>
            <button @click="$store.commit('jian')">-</button>
        </p>
    </div>
</template>
