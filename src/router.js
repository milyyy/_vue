import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: "/state",
  },
  {
    path: "/state",
    component: () => import('@/views/State.vue'),
  },
  {
    path: "/getter",
    component: () => import('@/views/Getter.vue'),
  },
  {
    path: "/mutation",
    component: () => import('@/views/Mutation.vue'),
  },
  {
    path: "/action",
    component: () => import('@/views/Action.vue'),
  },
  {
    path: "/module",
    component: () => import('@/views/Module.vue'),
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