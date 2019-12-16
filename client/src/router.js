import Vue from 'vue'
import Router from 'vue-router'

// 原始组件 ---- 一级
import Index from './views/Index.vue'
import Operating from './views/Operating.vue'
import Settle from './views/Settle.vue'
import Data from './views/Data.vue'
import Setting from './views/Setting.vue'
import NotFount from './views/404.vue'
import Login from './views/Login.vue';

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
            path: '/operating/:tab',
            name: 'Operating',
            component: Operating
        },
        {
            path: '/settle/:tab',
            name: 'Settle',
            component: Settle
        },
        {
            path: '/data:tab',
            name: 'Data',
            component: Data
        },
        {
            path: '/setting/:tab',
            name: 'Setting',
            component: Setting
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
    ]
})
