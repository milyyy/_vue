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