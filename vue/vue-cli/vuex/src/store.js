import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:4
}

export default new Vuex.Store({state})