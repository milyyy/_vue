<template>
  <div class="about">

    <section>
      <h1>slot插槽,v2.6.0后新语法</h1>
      <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md">
        新语法的由来可查阅这份 RFC。
      </a>
    </section>

    <section>
      <!-- 通过prop及传递了属性,又通过slot进行内容分发 -->
      <NavigationLink url="/">
        <!-- slot的位置 可以插入任意内容-->
        <h1>first</h1>
        <h3>second</h3>
      </NavigationLink>
    </section>

  </div>
</template>

<script>
import NavigationLink from "@/components/NavigationLink.vue";
export default {
  components: {
    NavigationLink
  }
};
</script>

<style lang="stylus">
a
  text-decoration none
  font-size 12px
</style>
