<template>
  <div>
    <a v-bind:href="url" class="nav-link">
      <!-- 如果没有包含一个 <slot> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃 -->
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["url"]
};
</script>

<style lang="stylus" scoped>

a
  color $mainRed
  font-size $font
</style>
