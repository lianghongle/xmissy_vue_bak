import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'Login', component: Login},
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},

    {path: '/test', name: 'Test', component: Test},
    {path: '/admin', name: 'Admin', component: Admin},
  ]
})
