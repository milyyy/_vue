<template>
  <div class="test">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello Vue'
    }
  }
}
</script> 

<style lang="scss" scoped>
.test {
  color: red;
}
</style>