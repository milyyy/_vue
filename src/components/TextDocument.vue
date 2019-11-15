<template>
  <div>
    <p>{{ title }}</p>
    <button @click="$emit('update:title', 'newTitle')">update</button>

    <section>
      由inject获得父组件中的:{{map}}
    </section>
  </div>
</template>

<script>
export default {
  props: ["title"],
  inject: ['map']
};
</script>
