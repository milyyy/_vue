<!--
 * @Date: 2020-03-19 10:48:35
 * @Description: keep-alive应用
 * @LastEditTime: 2020-03-19 11:07:23
 * @FilePath: \_vue\src\views\About.vue
 -->
<template>
  <div class="about">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <tabs></tabs>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabs from "@/components/tabs";
export default {
  components: {
    tabs
  },
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
  .about >>> .el-tabs__nav-scroll {
    width: 500px;
    margin: 0 auto;
  }
  .about >>> .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
</style>