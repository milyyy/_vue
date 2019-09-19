<template>
  <div class="home">
    <section>
      <div>lange</div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          语言<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="en-US">中文</el-dropdown-item>
          <el-dropdown-item command="zh-CN">英语</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
        <!-- 默认语言包的内容 -->
        <span v-text="$t('msg.world')"></span>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      lang: ""
    };
  },
  methods: {
    /*
     * 切换语言
     */
    handleCommand(command) {
      // this.$message('click on item ' + command);
      console.log('lang', this.lang);
      if (command === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
      }
    }
  }
};
</script>
