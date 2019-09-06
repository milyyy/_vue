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