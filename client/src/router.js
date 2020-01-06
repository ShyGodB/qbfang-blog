import Vue from 'vue'
import Router from 'vue-router'

// 原始组件 ---- 一级
import Index from './views/Index.vue'
import TechnologyShare from './views/TechnologyShare.vue'
import Life from './views/Life.vue'
import Found from './views/Found.vue'
import WorkSpace from './views/WorkSpace.vue'
import NotFount from './views/404.vue'
import Login from './views/Login.vue'
import Doc from './views/Doc.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/technologyShare/',
      name: 'TechnologyShare',
      component: TechnologyShare
    },
    {
      path: '/life/',
      name: 'Life',
      component: Life
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/workSpace/:tab',
      name: 'WorkSpace',
      component: WorkSpace
    },
    {
      path: '/404',
      name: '404',
      component: NotFount
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/doc/:tab',
      name: 'Doc',
      component: Doc
    },
    {
      path: '/folder/:tab',
      name: 'Folder',
      component: WorkSpace
    }
  ]
})
