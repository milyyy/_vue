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
      { id: 1, text: 'text01', done: true },
      { id: 2, text: 'text02', done: false }
    ]
  },

  // Getter 可以认为是store的计算属性(依赖state)
  // 1.在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
  getters: {
    // 接受 state 作为其第一个参数：
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    // 也可以接受其他 getter 作为第二个参数:
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // 也可以通过让 getter 返回一个函数，来实现给 getter 传参
    getTodoById: (state) => (id) => {
      return state.todos.filter(todo => todo.id === id)
    }
  },
  // 引用：
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  // mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  // 这个选项更像是事件注册

  // 简单地说：mutations里面的方法就相当于事件名，也是mutation的type,
  // 我们在组件中调用就要传入对应的type(也就是事件名，如'increment')
  mutations: {
    // 接受 state 作为第一个参数
    increment (state) {
      state.count--
    },
    // 可以传入额外的参数,即mutation的载荷
    add (state, n) {
      state.num += n
    }
  }
})