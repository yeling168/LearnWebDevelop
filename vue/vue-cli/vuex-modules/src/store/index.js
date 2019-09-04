import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions';

export default new Vuex.Store({
    actions
})