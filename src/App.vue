<template>
  <div id="app">
    <router-link to="/state">State</router-link> | 
    <router-link to="/getter">Getter</router-link> | 
    <router-link to="/mutation">Mutation</router-link> | 
    <router-link to="/action">Action</router-link> | 
    <router-link to="/module">module</router-link> | 

    <p>
      <router-link to="/test/1">Test 1</router-link> | 
      <router-link to="/test/2">Test 2</router-link>
    </p>

    <router-view/>
    <router-view name="mily" />
    
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
