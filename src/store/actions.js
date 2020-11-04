import Vue from 'vue';
import * as API_URL from '../config/api_url';

export const verifyUser = function({commit}){

  Vue.http.post(API_URL.CODEMARKA_TOKEN_VERIFY,{kid: localStorage.getItem('user')})
  .then(data => data.json())
  .then(user => {
    commit('auth/SET_USER_DATA',{user: user.data})
  })
  .catch(error => {
    commit('auth/SET_USER_NOT_AUTHENICATED')
  })
}
