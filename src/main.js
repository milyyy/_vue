import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('before each')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve',to,from)
  next()
})

router.afterEach((to, from) => {
  console.log('after each')
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
