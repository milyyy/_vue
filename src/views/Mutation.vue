<!--
 * @Date: 2020-01-09 14:50:34
 * @LastEditTime : 2020-01-09 19:37:21
 * @FilePath: \_vue\src\views\Mutation.vue
 -->
<template>
  <div>
    <h3>This is Mutation</h3>
      {{ $store.state.count }}
      
    <p>
      <button @click="newIncrement()">
        store里的count --
      </button>
    </p>

    <p>
      <button @click="newAdd()">
        store里的num ++
      </button>
    </p>

  </div>
</template>

<script>
export default {
  methods: {
    // mutation 改变state中单一的count 
    newIncrement() {
      this.$store.commit('increment');
    },
    // store.commit 传入额外的参数
    newAdd() {
      this.$store.commit('add', 5);
    }
  }
}
</script>