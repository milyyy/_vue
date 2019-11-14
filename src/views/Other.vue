<template>
  <div id="other">
    <p>导航</p>
    <router-link to="/other/first">route1</router-link>&nbsp;&nbsp;
    <router-link to="/other/second">route2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
#other
  font-size 20px
</style>