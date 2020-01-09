import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  // Vuex 的状态存储是响应式的
  state: {
    author: 'mily',
    count: 0,
    num: 1,

    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },

  // Getter 可以认为是store的计算属性
  getters: {
    // 接受 state 作为其第一个参数：
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    // 也可以接受其他 getter 作为第二个参数:
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})