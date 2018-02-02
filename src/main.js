import Vue from 'vue'

import router from './router'
import store from './store'

import VueFilter from 'vue-filter'
Vue.use(VueFilter)

import App from './App'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
