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
    // beforeEnter: (to, from, next) => {
    //   // 路由独享守卫
    //   console.log('这是进入路由前');
    //   setTimeout(() => {
    //     next()
    //   }, 1000);
    // }
  },
  {
    path: '/lesson/:id',
    props: true, 
    component: () => import ('@/views/Lesson.vue') 
  },
  {
    path: '/test/:id',
    component: () => import ('@/views/Test.vue') 
  },
  {
    path: '/hello',
    // component: () => import ('@/views/Hello.vue') 
    components: {
      default: () => import ('@/views/Hello.vue'),
      mily: () => import('@/views/World.vue')
    }
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]

export default new Router({
  mode: 'hash',
  routes
})