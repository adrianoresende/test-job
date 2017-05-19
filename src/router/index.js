import Vue from 'vue'
import Router from 'vue-router'

import Setup from '@/components/Setup'
import Contents from '@/components/Contents'
import Tasks from '@/components/Tasks'
import MyTeam from '@/components/MyTeam'
import Tab1 from '@/components/Tab1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/setup'
    },
    {
      path: '/setup',
      component: Setup,
      children: [
        {
          path: '',
          redirect: 'my-team'
        },
        {
          path: 'my-team',
          component: MyTeam
        },
        {
          path: 'tab1',
          component: Tab1
        }
      ]
    },
    {
      path: '/contents',
      component: Contents
    },
    {
      path: '/tasks',
      component: Tasks
    }
  ],
  linkActiveClass: 'active'
})
