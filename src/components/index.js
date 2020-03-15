import Vue from "vue";
import alert from "./alert.vue";

// Vue.extend( options ) https://cn.vuejs.org/v2/api/#Vue-extend
const Alert = Vue.extend(alert);

export const alertFun = function (options) { // 接收配置
  let str_num = (typeof options === 'string' || typeof options === 'number')
  console.log('options',options);
  
  const Instance = new Alert({ // 实例化组件
    data: { // 给data的变量赋值
      title: (options && options.title) || '提示',
      text: str_num ? options : ((options && options.text) || ''),
      cancelText: (options && options.cancel) || '取消',
      confirmText: (options && options.confirm) || '确认'
    }
  })
  let vm = Instance.$mount() // 挂载
  document.body.appendChild(vm.$el) // 插入body
  return vm.init() // 执行初始化方法, 返回的是一个promise
}

export default {
  // install: (Vue) => { // 暴露install方法供Vue.use()调用
  // }
}
