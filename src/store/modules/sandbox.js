const state = {
  id: null,
  data: null
}


const mutations = { // equivalent of reducers in redux
  'SET_SANDBOX_DATA'(state, { id }){
    state.id = id; 
  }
}

const actions = { // erquivalent of action dispatchers
  sellStock({commit},order){
    commit('SELL_STOCK',order)
  }
};



const getters  = { // equivalent to redux compose
  getSandboxInfo(state, getters){
    return state.data
  },
}


export default {
  getters,
  actions,
  state,
  mutations
}