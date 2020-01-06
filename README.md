
## vue-router

## 路由基础
### 路由出口
```html
<template>
  <div id="app">
    ...
    <!-- 没有视口则路由区域无法显示 -->
    <router-view/>

  </div>
</template>
```

### 命名视图/多路由加载
```html
<template>
  <div id="app">
    <router-link to="/hello">Hello</router-link>

    <router-view/>
    <router-view name="mily" />
    
  </div>
</template>
```
这里不再显示单一的组件，而是components, default表示未命名的router-view视口，mily表示名为‘mily’的router-view视口。
```js
// router.js
  ...
  {
    path: '/hello',
    // component: () => import ('@/views/Hello.vue') 
    components: {
      default: () => import ('@/views/Hello.vue'),
      mily: () => import('@/views/World.vue')
    }
```

### 路由重定向  
路径a重定向到b，最后路径显示b; '/' => '/home'
```js
// router.js
const routes = [
  {
    path: '/',
    redirect: "home",
  },
  ...
]
```  
## 路由进阶
### 路由懒加载
> 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
```js
// router.js
const routes = [
  ...

  {
    path: "/home",
    component: () => import('@/views/Home.vue')
  },

  ...
]
```
### [路由解耦](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F)
> 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。解耦后你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

详细见官方文档，这里只做简单演示。
```js
// router.js
  ...
  {
    path: '/lesson/:id',
    props: true, 
    component: () => import ('@/views/Lesson.vue') 
  },
```  
```html
<!-- Lesson.vue -->
<p> 解耦前id: {{ $route.params.id }} </p>
<p> 解耦后id: {{ id }} </p>
```
```js
export default {
  // 解耦必须加props
  props: ['id']
}
```  
### 导航守卫
> vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
*参数或查询的改变并不会触发进入/离开的导航守卫*   

简单来说，就是路由发生变化的过程中所触发的一些列钩子函数。当然，这些钩子函数可以分为全局钩子，组件内钩子，路由独享钩子。 下面我们来具体了解一下这些钩子

