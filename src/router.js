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
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/lesson/:id',
    props: true, 
    component: () => import ('@/views/Lesson.vue') 
  },
  {
    path: '/hello',
    // component: () => import ('@/views/Hello.vue') 
    components: {
      default: () => import ('@/views/Hello.vue'),
      mily: () => import('@/views/World.vue')
    }
  },
]

export default new Router({
  mode: 'history',
  routes
})