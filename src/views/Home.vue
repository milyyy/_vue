<template>
  <div class="home">
    {{ $root.foo }}
    <button @click="changeRoot">改变根元素的foo</button>
    <!-- 这里直接穿了一个msg对象给子组件 -->
    <div :style="{ fontSize: postFontSize + 'em' }">
      <!-- 1. 直接改变postFontSize属性值 -->
      <!-- <HelloWorld
        v-for="post in posts"
        :key="post.id"
        :msg="post"
      v-on:enlarge-text="postFontSize += $event" />-->

      <!-- 2. 通过方法改变属性值 -->
      <HelloWorld
        v-for="post in posts"
        :key="post.id"
        :msg="post"
        v-on:enlarge-text="onEnlargeText"
      />

      <!-- prop属性的双向绑定 -->
      <text-document
        v-on:update:title="doc.title = $event"
        v-bind:title="doc.title"
      />
      <!-- 简写， sync对一个 prop 进行“双向绑定” -->
      <text-document v-bind:title.sync="doc.title"></text-document>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TextDocument from "@/components/TextDocument.vue";

export default {
  name: "home",
  provide: function(){
    return {
      map: '这是由父组件provide提供得到的'
    }
  },
  components: {
    HelloWorld,
    TextDocument
  },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "content01" },
        { id: 2, title: "Blogging with Vue", content: "content02" },
        { id: 3, title: "Why Vue is so fun", content: "content03" }
      ],
      postFontSize: 1.2,
      doc: {
        title: "this is a old title"
      }
    };
  },
  methods: {
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
    changeRoot() {
      this.$root.foo=3
    }
  }
};
</script>
