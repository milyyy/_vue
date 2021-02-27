<template>
  <div>
    <h1>Render渲染函数</h1>
    <TEST>这是用slot的</TEST>
    <TEST>
      这是默认的部分
      <template v-slot:header>
        这是头部
      </template>
      <template v-slot:footer>
        这是底部
      </template>
    </TEST>
  </div>
</template>

<script>
import { TEST } from "./_render";
export default {
  components: {
    TEST
  }
};
</script>
