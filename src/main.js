import Vue from "vue";
import App from "./App.vue";
import router from "./routes";

import store from "./store/";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/assets/style/reset.css";
// import "@/assets/style/myStyle.styl";


import {alertFun} from "@/components/index";


Vue.config.productionTip = false;

Vue.prototype.$alert = alertFun // 挂到Vue的原型上使用


new Vue({
  data: {
    foo: 1
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
