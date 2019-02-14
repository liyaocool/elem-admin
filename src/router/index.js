import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      redirect:'overview',
      component: () => import('@/views/home'),
      children: [{
          path: 'overview',
          name: 'overview',
          component: () => import('@/views/overview')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/views/setting')
        }
      ]
    },

  ]
})