# _vue
### 组件传值
小结：
#### 1.prop传值（在父组件中通过v-bind绑定定义在data中的数据，可以传递一个对象）

父组件

```html
<div :style="{fontSize: postFontSize + 'em'}">
  <HelloWorld
    v-for="post in posts"
    :key="post.id"
    :msg="post" />
</div>
```
```js
...
components: {
  HelloWorld
},
data() {
  return {
    posts: [
      { id: 1, title: "My journey with Vue", content: "content01" },
      { id: 2, title: "Blogging with Vue", content: "content02" },
      { id: 3, title: "Why Vue is so fun", content: "content03" }
    ],
    postFontSize: 1
  };
},
```

子组件：

```html
<section class="section">
  <h3>{{ msg.title }}</h3>
  <div v-html="msg.content"></div>
</section>
```
```js
export default {
  // ...
  // props接收定义在父组件中的属性
  props: {
    msg: Object
  }
};
```

#### 2.$emit监听事件（在父组件中通过v-on绑定定义在methods中的自定义方法，子组件通过$emit监听/接收函数）

父组件

```html
<HelloWorld
  v-for="post in posts"
  :key="post.id"
  :msg="post"
  v-on:enlarge-text="onEnlargeText" />
```
```js
methods: {
  onEnlargeText: function(enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

子组件

```html
<!-- $emit接收（调用）定义在父组件中的事件enlarge-text,并传参-->
<button v-on:click="$emit('enlarge-text', 0.1)">enlarge text</button>
```

#### 3.prop单向数据流如何进行双向绑定    

>注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。 详见[.sync修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)     

父组件
```html
<!-- prop属性的双向绑定 -->
<text-document
  v-on:update:title="doc.title = $event"
  v-bind:title="doc.title"
/>
<!-- 简写， sync对一个 prop 进行“双向绑定” -->
<text-document v-bind:title.sync="doc.title"></text-document>
```
```js
data() {
  return {
    // ...
    doc: {
      title: "this is a old title"
    }
  }
}
```

子组件

```html
<template>
  <div>
    <p>
      {{ title }}
    </p>
    <button @click="$emit('update:title', 'newTitle')">update</button>
  </div>
</template>
```
```js
export default {
  props: ["title"]
};
```
vue Devtools对比：  
更新前：title: "this is a old title"    
更新后：title: "newTitle"

#### 4.插槽
##### 插槽内容  
```html
<!-- 父组件 --About.vue -->

<!-- 通过prop及传递了属性,又通过slot进行内容分发 -->
<NavigationLink url="/">
  <!-- slot的位置 可以插入任意内容-->
  <h1>first</h1>
  <h3>second</h3>
</NavigationLink>
``` 
```html
<!-- 子组件NavigationLink.vue -->

<a v-bind:href="url" class="nav-link">
  <!-- 如果没有包含一个 <slot> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃 -->
  <slot></slot>
</a>
```
```js
export default {
  props: ["url"]
};
```  
##### 编译作用域
```html
<!-- 父级about.vue -->

<!-- 子组件的作用域只在子组件内部 -->
<navigation-link url="/profile">
  Clicking here will send you to: {{ url }}
  <!--
  这里的 `url` 会是 undefined，因为 "/profile" 是
  _传递给_ <navigation-link> 的而不是
  在 <navigation-link> 组件*内部*定义的。
  -->
</navigation-link>
```
上面第一遍看也许不能够理解，那么我们可以参考官方文档最为重要的一句话：  
> **父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的**。 详见：[编译作用域](https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F)