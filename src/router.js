import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart'),
    meta: {
      auth: true, // 需要验证用户是否登陆
    }
  },

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const token = localStorage.getItem('token');
    // 如果已经存储了token则下一步，否则跳转到登陆页，登陆成功则重新跳转至之前想要去的页面
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  } else {
    next()
  }
})
export default router;