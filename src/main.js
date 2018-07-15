import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes.js';
import store from './store/store';

  // give vue, http functionality
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-3b776.firebaseio.com/';

  // allow vue to use VueRouter
Vue.use(VueRouter);
  //import and configure our routes to work with VueRouter & save in router var
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.filter('currency', (value) =>{
  return '$'+value.toLocaleString();
})

new Vue({
  el: '#app',
  router: router, // add router to Vue instance
  store: store, // add vuex store to Vue instace
  render: h => h(App)
})
