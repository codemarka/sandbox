import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import VueAceEditor from './components/UI/@Editor/index';
import VueMeta from 'vue-meta';

import App from './App.vue'
import { routes } from './routes'
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAceEditor);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
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
