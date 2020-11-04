import Vue from 'vue';

const state = {
  id: null,
  data: null,
  isCreating: false,
  created:false
}


const mutations = { // equivalent of reducers in redux
  'CREATE_SANDBOX_START'(state){
    state.isCreating = true; 
  },
  'CREATED_SANDBOX'(state){
    state.isCreating = false;
    state.created = true; 
  },
  'CREATING_SANDBOX_FAILED'(state){
    state.isCreating = false;
    state.created = false;
  }
}

const actions = { // erquivalent of action dispatchers
  creatingSandboxInit({commit,state}){
    commit('CREATE_SANDBOX_START')
  },
  creatingSandboxDone({commit},{created}){
    created ? commit('CREATED_SANDBOX') : commit('CREATING_SANDBOX_FAILED')
  }
}



const getters  = { // equivalent to redux compose
  getSandboxInfo(state, getters){
    return state.data
  },
  isCreatingSandbox(state){
    return state.isCreating
  }
}


export default {
  getters,
  actions,
  state,
  mutations,
  namespaced: true,

}