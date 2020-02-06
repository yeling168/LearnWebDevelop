import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state ={
    count:4
}

const mutations = {
    jia(state,n) {
        state.count+=n.a
    },
    jian(state,n) {
        state.count-=n;
    }
}

export default new Vuex.Store({state,mutations})