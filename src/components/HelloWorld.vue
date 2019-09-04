<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <section class="section">
      <h3>{{ msg.title }}</h3>
      <div v-html="msg.content"></div>

      <!-- $emit接收（调用）定义在父组件中的事件enlarge-text,并传参-->
      <button v-on:click="$emit('enlarge-text', 0.1)">enlarge text</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props接收定义在父组件中的属性
  props: {
    msg: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.section
  background #f1f1f1
  margin-bottom 10px
</style>
