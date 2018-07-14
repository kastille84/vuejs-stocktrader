import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes.js';
import store from './store/store';

  // allow vue to use VueRouter
Vue.use(VueRouter);
  //import and configure our routes to work with VueRouter & save in router var
const router = new VueRouter({
  mode: 'history',
  routes: routes
})



new Vue({
  el: '#app',
  router: router, // add router to Vue instance
  store: store, // add vuex store to Vue instace
  render: h => h(App)
})
