import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require.ensure(
        ['../pages/home/index.vue'], () => resolve(require('../pages/home/index.vue'))
      ),
    }
  ]
})
