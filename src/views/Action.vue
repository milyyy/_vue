<!--
 * @Date: 2020-01-09 14:50:51
 * @LastEditTime : 2020-01-10 19:16:04
 * @FilePath: \_vue\src\views\Action.vue
 -->
<template>
  <div>
    <h3>This is Action</h3>

    <h4>{{ number }}</h4>
    <button @click="changeNumber()">
      action异步改变number
    </button>

    
    
  </div>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.state.num;
    }
  },
  methods: {
    changeNumber() {
      // this.$store.commit('add', 10)
      // this.$store.dispatch('addAsync', 10)
    }
  }
}
</script>