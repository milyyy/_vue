// console.log('hello world');
// import Vue from "vue";
import Vue from "vue/dist/vue.runtime.esm.js";
import App from "./App.vue";

new Vue({
  render: h => h(App),
}).$mount("#app")


// window.onload = function () {
  // new Vue({
  //   render: h => h(App),
  // }).$mount("#app");
  // console.log('执行了');
// }

// window.addEventListener('load', function () {
//   new Vue({
//     render: h => h(App),
//   }).$mount("#app")
// })