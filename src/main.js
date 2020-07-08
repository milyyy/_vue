import Vue from "vue";
import App from "./App.vue";
import router from "./routes";

import store from "./store/";
import Element from "element-ui";
import Cookies from "js-cookie";
import "element-ui/lib/theme-chalk/index.css";

import "@/assets/style/reset.css";
import "@/assets/style/myStyle.styl";
import "./rem";

import i18n from "./lang";

Vue.use(Element, {
  size: Cookies.get("size") || "medium", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  data: {
    foo: 1
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
