import Vue from 'vue';

export const verifyUser = function({commit}){
  Vue.http.post('https://api.secure.codemarka.dev/api/v1/auth/user/token/verify')
  .then(data => data.json())
  .then(user => {
    console.log(user)
  })
}