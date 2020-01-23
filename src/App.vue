<template>
  <div id="app">
    <router-link to="/home">Home</router-link> | 
    <router-link to="/cart">cart</router-link> | 
    <router-link to="/login">login</router-link>

    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'app',

  data(){
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
