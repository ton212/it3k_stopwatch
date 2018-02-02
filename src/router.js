import Vue from 'vue'
import VueRouter from 'vue-router'

import Stopwatch from './components/Stopwatch'
import Controller from './components/Controller'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Stopwatch',
      component: Stopwatch,
      meta: {
        title: 'IT3K Stopwatch'
      }
    },
    {
      path: '/controller',
      name: 'Controller',
      component: Controller,
      meta: {
        title: 'IT3K Stopwatch Controller'
      }
    }
  ]
})
