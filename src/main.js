import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';


import App from './App.vue'
import { routes } from './routes'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);


Vue.http.interceptors.push(function(request) {
  request.headers.set('Authorization', `Bearer ${localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraWQiOiJSSlVkcVcwallGRDVWN1NDdXN3SGhBQk1OUVRUWXc2YnBDaTE5UXg4IiwiZGlzcGxheU5hbWUiOiJjb2RlbW9uIiwidHlwZSI6InJlZ3VsYXIiLCJ0b2tlbiI6IiIsImlhdCI6MTYwMjg3NTM4NCwiZXhwIjoxNjAzNzM5Mzg0fQ.axdk-IHIOqtaazjDM2hcVsY8Po3LkIFHrxcb46Kd8Ts' }`);
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
