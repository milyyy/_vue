// main.js
import Vue from 'vue/dist/vue.esm' // vue的版本默认引入的是runtime,使用template不能编译
import test from './test.vue'

new Vue({
  el: '#app',
  template: `<test></test>`,
  components: {
    test
  }
})