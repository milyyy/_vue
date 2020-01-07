
## vue-router

## 路由基础

本篇demo源码，点击[这里](https://github.com/milyyy/_vue/tree/vue-router)
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
> 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

简单滴说，就是解耦后你便可以在任何地方使用该组件，使得该组件更易于重用和测试，而不再依赖于this.$route来获取参数。
详细见官方文档，这里只做简单演示。
```js
// router.js
  ...
  {
    path: '/lesson/:id',
    props: true,    // 解耦
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
  props: ['id']  // 接收
}
```  
### 导航守卫
> vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
*参数或查询的改变并不会触发进入/离开的导航守卫*   

简单来说，就是路由发生变化的过程中所触发的一些列钩子函数。当然，这些钩子函数可以分为全局钩子，组件内钩子，路由独享钩子。 下面我们来具体了解一下这些钩子

#### 全局守卫
每个守卫方法接受三个参数：
* to: Route 到哪儿去
* from: Route 从哪儿来
* next: Function
  - next() : 进行管道中的下一个钩子。
  - next(false) : 中断当前导航。
  - next('/') 或者 next({ path: '/login' })跳转到一个不同的地址。
  - next(error) ：如果传入的事一个Error实例，导航会被终止且该错误会被传递给 router.onError() 注册过的回调。



##### 全局前置守卫

  beforeEach路由跳转前执行，next同意跳转。每次路由跳转，都会被触发,
  这里通常可以写一些逻辑判断  

  (routers.beforeEach 由route => routers则为所有路由调用)

  ```js
  // main.js
  router.beforeEach((to, from, next) => {
    console.log('before each')
    // ...
    // 假设用户没有登录的情况下,点击购物车我们则让1s后其跳转至登录页登录
    if (to.path === '/cart') {
      setTimeout(() => {
        next('/login')
      }, 1000)
    } else {
      next()
    }
  })
  ```
##### 全局解析守卫
> 在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。  

注意：这里也说明了一点，在解析守卫被调用之前，先执行的是组件内的守卫。
  ```js
  router.beforeResolve((to, from, next) => {
    // ...
  })
  ```
##### 全局后置钩子
  ```js
  // 离开时触发钩子
  router.afterEach((to, from, next) => {
    // ...
  })
  ```
#### 路由独享
<b>写在路由配置内</b>
```js
// route.js
{
  path: "/home",
  component: () => import('@/views/Home.vue'),
  beforeEnter: (to, from, next) => {
    // 路由独享守卫
    console.log('这是进入路由前');
    setTimeout(() => {
      next()
    }, 1000);
  }
},
```    
这里可用看到控制台先输出'这是进入路由前'，1s后才进行页面渲染。

#### 组件内守卫
```js
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
},
``` 

作为小白的我初识导航守卫时，按照官方文档这样ctrl+c上去，以为能一鼓作气流畅优美的写完这篇速览，然而，眉头一皱，发现事情并没这么简单... <br>
<b>注意踩坑</b>：next()的重要性！

- 进入目标路由时，没有next()则无法进行路由的页面渲染！
  ```js
  // Test.vue
  
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
- 写完之后你就会看到这样的情况：<b>跳转生效了，但是地址栏路径没有改变</b>. <br>
  <img alt="..">
  为此，这个问题我至少自闭了半个多小时呢:sob: 所以，记得加上next();

  
- 离开当前路由时，没有next()则无法进行下一个页面的跳转。
  ```js
  // Test.vue

  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  ```  
  这里无法跳转的效果我就不演示了，大家感兴趣自己可以尝试一下。

- 同一组件内，根据参数的不同需要渲染不同的数据, 没有next()页面则无法更新。<br>
  这时我们就需要了解一下beforeRouteUpdate
  ```js
  // Test.vue

  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  ```   

简言之:star:：就是少了next() 无法进入、无法更新、无法跳转   

### 写在最后
  菜鸟一枚，文中如果错误请多指正哦。<br>
  如果本文对您有用的话，请不吝赐赞呀:wink: <br>
  你的鼓励，就是我最大的动力。
