import Home from './containers/Home.vue';
import Sandbox from './containers/Sandbox.vue';
import NotFound from './containers/NotFound.vue';

export const routes = [
  { path:'/', component: Home},
  { path:'/:sandbox_id', component: Sandbox},
  { path:'*', component: NotFound},
]