import Vue from 'vue';
import Vuex from 'vuex'

import auth from './modules/auth.js'

import * as actions from './actions.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    auth,
  },
  actions,
  strict: debug,
})