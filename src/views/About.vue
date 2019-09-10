<template>
  <div class="about">
    <h1>插槽内容</h1>
    <section>
      <h1>slot插槽,v2.6.0后新语法</h1>
      <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md">
        新语法的由来可查阅这份 RFC。
      </a>
    </section>

    <h1>插槽内容分发以及编译作用域</h1>
    <section>
      <!-- 通过prop及传递了属性,又通过slot进行内容分发 -->
      <NavigationLink url="/">
        <!-- slot的位置 可以插入任意内容-->
        <h1>first</h1>
        <h3>second</h3>
      </NavigationLink>

      <!-- 子组件的作用域只在子组件内部 -->
      <navigation-link url="/profile">
        Clicking here will send you to: {{ url }}
        <!--
        这里的 `url` 会是 undefined，因为 "/profile" 是
        _传递给_ <navigation-link> 的而不是
        在 <navigation-link> 组件*内部*定义的。
        -->
      </navigation-link>
    </section>

    <h1>多插槽使用 v2.6+ </h1>
    <BaseLayout>
      <template v-slot:header>
        header插槽显示的区域
      </template>

      <p>
        无命名，为默认区域，相当于v-slot:default
      </p>

      <template v-slot:footer>
        footer插槽显示的区域
      </template>
    </BaseLayout>

  </div>
</template>

<script>
import NavigationLink from "@/components/NavigationLink.vue";
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  components: {
    NavigationLink,
    BaseLayout
  }
};
</script>

<style lang="stylus">
a
  text-decoration none
  font-size 12px
</style>
