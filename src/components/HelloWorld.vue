<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <section class="section">
      <h3>{{ msg.title }}</h3>
      <h6>{{ msg.content }}</h6>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
