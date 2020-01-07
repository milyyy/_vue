import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('before each')
  // ...
  // 如果没有登录的情况下,用户点击购物车我们则让其1s后跳转至登录页登录
  if (to.path === '/cart') {
    setTimeout(() => {
      next('/login')
    }, 1000)
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve')
  next()
})

router.afterEach((to, from) => {
  console.log('after each')
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
