/*
 * @Date: 2020-03-10 14:11:01
 * @LastEditTime: 2020-03-11 10:03:00
 * @FilePath: \_vue\src\routes\index.js
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

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
      alias: "/guanyu", // 别名，地址栏名称不改变，路径依然是/about
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/other",
      // name: "other",
      component: () => import("@/views/Other.vue"),
      children: [
        {
          // 默认路由渲染
          path: "",
          component: () => import("@/views/other/route1.vue")
        },
        {
          path: "first",
          component: () => import("@/views/other/route1.vue")
        },
        {
          path: "second",
          component: () => import("@/views/other/route2.vue")
        }
      ]
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("@/views/User.vue"),
      props: true
    },
    {
      path: "/render",
      name: "render",
      component: () => import("@/views/render/index")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/Test.vue")
    },
    {
      path: "/i18n",
      name: "i18n",
      component: () => import("@/views/i18n-demo/Demo18n.vue")
    }
  ]
});
