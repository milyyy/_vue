<template>
  <div id="app">
    <div id="nav">
      <!-- <demo></demo> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/other">other</router-link> | 
      <router-link to="/i18n">i18n</router-link> | 
      <router-link to="/test">test</router-link> | 

      <!-- path路径跳转 -->
      <!-- <router-link :to="{path:`/user/2`}">user</router-link>  -->
      
      <!-- name命名跳转 -->
      <router-link :to="{ name: 'user', params: { id: 123, name:'mily' }}">user</router-link> | 
      <router-link to="/render">render实践</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import demo from "@/components/i18n-demo/Demo18n.vue";
export default {
  components: {
    // demo
  }
}
</script>

<style lang="stylus">
#app
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
