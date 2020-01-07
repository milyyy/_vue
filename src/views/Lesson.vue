<template>
  <div>
    Lesson!!
    <div>
      <p>解耦前id: {{ $route.params.id }}</p>
      <p>解耦后id: {{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // 解耦必须加props
  props: ["id"],

  beforeRouteEnter(to, from, next) {
    // ...
    // console.log('before router enter')
    console.log(this, "enter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // console.log('before router update')
    console.log(this, "update");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    // console.log('before router leave')
    console.log(this, "leave");
    next();
  }
};
</script>

