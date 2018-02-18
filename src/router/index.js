import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      mode: 'history',
      path: '/home',
      component: Home
    },
    {
      mode: 'history',
      path: '/project',
      component: Project
    },
    {
      mode: 'history',
      path: '/dashboard',
      component: Dashboard
    },
    {
      mode: 'history',
      path: '/sign-up',
      component: Home
    },
    {
      mode: 'history',
      path: '/profile/edit',
      component: Dashboard
    }
  ]
})
