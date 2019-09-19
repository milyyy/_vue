import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import "@/assets/style/reset.css";
import "@/assets/style/myStyle.styl";

const i18n = new VueI18n({
  locale: "zh-CN", // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    "zh-CN": require("./lang/zh"), // 中文语言包
    "en-US": require("./lang/en") // 英文语言包
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
