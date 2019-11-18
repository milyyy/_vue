<template>
  <div>
    <el-card class="box-card" style="margin-top:40px;">
      <div>
        <el-radio-group v-model="lang" size="small">
          <el-radio label="zh" border>
            简体中文
          </el-radio>
          <el-radio label="en" border>
            English
          </el-radio>
        </el-radio-group>
        <el-tag style="margin-top:15px;display:block;" type="info">
          <!-- 来自zh.js语言包中的 -->
          <h4>i18n:{{ $t('navbar.dashboard') }}</h4>
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
// local.js为本页面的翻译，全局依然是src/lang
// import local from './local'
// const viewName = 'i18nView'

export default {
  name: 'I18n',
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language
      },
      set(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
      }
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 600px;
  max-width: 100%;
  margin: 20px auto;
}
.item-btn{
  margin-bottom: 15px;
  margin-left: 0px;
}
.block {
  padding: 25px;
}
</style>
