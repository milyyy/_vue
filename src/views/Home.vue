<template>
  <div>
    <button @click="showAlert">测试alert</button>
  </div>
</template>

<script>
export default {
  methods: {
    // showAlert() {
    //   this.$alert("测试alert组件")
    //     .then(() => {
    //       console.log("点击了确定");
    //     })
    //     .catch(() => {
    //       console.log("点击了取消");
    //     });
    // }
    showAlert() {
      this.$alert({
        text: "描述",
        title: "标题",
        cancel: "不",
        comfirm: "好的"
      }).then(() => {
          console.log("点了好的");
      }).catch(() => {
          console.log("点了不");
      });
    },
  }
};
</script>