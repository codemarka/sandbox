const state = {
  id: null,
  user: null,
  isAuthenticated: false
}


const mutations = { // equivalent of reducers in redux
  'SET_USER_DATA'(state, data ){
    state.user = data.user; 
    state.isAuthenticated = true;
  },
  'SET_USER_NOT_AUTHENICATED'(state){
    state.user =  null;
    state.isAuthenticated =  false
  }
}

const actions = { // erquivalent of action dispatchers, async actions can occur here
  setAuthenticatedUser({commit},user){
    commit('SET_USER_DATA',user)
  }
};


const getters  = { // equivalent to redux compose
  getUserData(state, getters,rootState){
    return state.user
  },
  authenticated(state){
    return state.isAuthenticated
  }
}


export default {
  getters,
  actions,
  state,
  mutations,
  namespaced: true,
}