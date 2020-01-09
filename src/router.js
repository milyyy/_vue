/*
 * @Date: 2020-01-07 09:45:42
 * @LastEditTime : 2020-01-09 11:25:23
 * @FilePath: \_vue\src\router.js
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: "home",
  },
  {
    path: "/home",
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/test/:id',
    component: () => import ('@/views/Test.vue') 
  },
]

export default new Router({
  mode: 'hash',
  routes
})