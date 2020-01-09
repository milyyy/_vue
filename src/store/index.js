import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  // Vuex 的状态存储是响应式的
  state: {
    author: 'mily',
    count: 0,
    num: 1
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})