<template>
  <transition name="fade">
    <div class="dialong">
      <div class="wrapper" v-show="show">
        <transition name="fade">
          <div class="alert-main" v-show="show">
            <!-- title -->
            <div class="header">
              <span class="title">{{title}}</span>
              <span class="close" @click="destroyVm">x</span>
            </div>
            <!-- container -->
            <div class="alert-text">{{text}}</div>
            <!-- footer -->
            <div class="footer">
              <button @click="handelCancel">{{cancelText}}</button>
              <button @click="handelConfirm">{{confirmText}}</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      title: "",
      text: "",
      promise: null, // 为了暂存一个promise对象
      cancelText: "",
      confirmText: ""
    };
  },
  methods: {
    init() {
      // 初始化, 返回一个promise
      this.show = true;
      return new Promise((resolve, reject) => {
        this.promise = { resolve, reject };
      });
    },
    handelCancel() {
      // 取消
      this.promise.reject();
      this.destroyVm();
    },
    handelConfirm() {
      // 确定
      this.promise.resolve();
      this.destroyVm();
    },
    destroyVm() {
      // 销毁
      this.show = false;
      // setTimeout(() => {
      // 动画完成后完全销毁实例
      this.$destroy(true);
      this.$el && this.$el.parentNode.removeChild(this.$el);
      // }, 500);
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.dialong {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.dialong::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.wrapper {
  display: inline-block;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
}
.header {
  position: relative;
  padding: 15px 15px 10px;
}
.alert-text {
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}
.footer {
  padding: 5px 15px 0;
  text-align: right;
}
</style>