<template>
  <div class="home">
    <!-- 这里直接穿了一个msg对象给子组件 -->
    <div :style="{fontSize: postFontSize + 'em'}">

      <!-- 1. 直接改变postFontSize属性值 -->
      <!-- <HelloWorld
        v-for="post in posts"
        :key="post.id"
        :msg="post"
        v-on:enlarge-text="postFontSize += $event" /> -->

      <!-- 2. 通过方法改变属性值 -->
      <HelloWorld
        v-for="post in posts"
        :key="post.id"
        :msg="post"
        v-on:enlarge-text="onEnlargeText" />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
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
  methods: {
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
};
</script>
