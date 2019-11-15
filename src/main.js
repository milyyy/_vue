import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

import "@/assets/style/reset.css";
import "@/assets/style/myStyle.styl";

Vue.config.productionTip = false;

new Vue({
  data: {
    foo: 1
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
