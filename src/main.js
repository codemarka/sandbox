import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';


import App from './App.vue'
import { routes } from './routes'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);


Vue.http.interceptors.push(function(request) {
  request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
});

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
