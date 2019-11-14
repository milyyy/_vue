<template>
  <div>
    <p>使用$route未解耦前的id获取:{{ $route.params.id }}</p>
    <p>使用props解耦后直接获取的：{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>