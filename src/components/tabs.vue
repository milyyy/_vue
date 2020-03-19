<!--
 * @Date: 2020-03-19 11:05:10
 * @Description: 测试keep-alive的公用组件
 * @LastEditTime: 2020-03-19 11:11:06
 * @FilePath: \_vue\src\components\tabs.vue
 -->
<template>
  <div class="tabs">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="A">测试缓存A</el-tab-pane>
      <el-tab-pane label="B">test..B</el-tab-pane>
      <el-tab-pane label="C">test++C</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>

<style scoped>
  .tabs >>> .el-tabs__content {
    text-align: left;
  }
</style>