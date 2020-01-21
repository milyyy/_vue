import Vue from 'vue';
import Vuex from 'vuex';
import { SOME_MUTATION } from './mutation-types'
import moduleA from './module/a'
Vue.use(Vuex);

export default new Vuex.Store({
  // Vuex 的状态存储是响应式的
  state: {
    author: 'mily',
    count: 0,
    num: 1,
    mutation_type: 'type-A',
    todos: [
      { id: 1, text: 'text01', done: true },
      { id: 2, text: 'text02', done: false }
    ],

    obj: {}
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
  // mutation是同步的
  mutations: {
    // 接受 state 作为第一个参数
    increment (state) {
      state.count--
    },
    // 可以传入额外的参数,即mutation的载荷
    add (state, n) {
      state.num += n
    },
    // 在大多数情况下，载荷应该是一个对象
    getName (state, payload) {
      state.author  = payload.name;
    },

    // 常量代替type
    [SOME_MUTATION] (state, type) {
      state.mutation_type = type
    }
  },

  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。

  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象  (context相当于store)
  actions: {
    // 简单的 action
    /**
    * increment (context) {
    *   context.commit('increment')
    * },
    */

    // 解构赋值把context.commit赋值给变量commit
    // 相当于 let { commit } = context 
    addAsync ( {commit} ) {
      // 可以进行异步操作
      setTimeout(() => {
        commit('add')
      }, 1000)
   }
  },

  // 子模块引入
  modules: {
    a: moduleA
  }
})