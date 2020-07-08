/*
 * @Date: 2020-03-10 14:11:01
 * @LastEditTime: 2020-03-11 10:03:00
 * @FilePath: \_vue\src\routes\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import dispatch from "@/views/dispatch.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dispatch",
      name: "dispatch",
      component: dispatch
    },
  ]
});
