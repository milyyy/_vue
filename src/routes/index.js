/*
 * @Date: 2020-03-10 14:11:01
 * @LastEditTime: 2020-03-19 10:53:24
 * @FilePath: \_vue\src\routes\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Other from "@/views/Other.vue";

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
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/other",
      name: "ohter",
      component: Other
    },
  ]
});
