<template>
  <div>
    <p>{{ title }}</p>
    <button @click="$emit('update:title', 'newTitle')">update</button>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
