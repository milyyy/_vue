<template>
  <div>
    Lesson!!
    <div>
      <p> 解耦前id: {{ $route.params.id }} </p>
      <p> 解耦后id: {{ id }} </p>
      
    </div>
  </div>
</template>

<script>
export default {
  // 解耦必须加props
  props: ['id']
}
</script>

