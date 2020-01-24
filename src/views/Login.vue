<template>
  <div>
    <form class="form">
      <div class="item">
        <label for="name">姓名：</label>
        <input id="name" v-model="info.uname" type="text" placeholder="请输入用户名">
      </div>
      <div class="item">
        <label for="pwd">密码：</label>
        <input id="pwd" v-model="info.upwd" type="text" placeholder="请输入密码">
      </div>
      <div>
        <button class="btn" type="submit" @click="login">登陆</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        uname: "",
        upwd: ""
      }
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$store
        .dispatch("login", this.info)
        .then(code => {
          if (code) {
            const path = this.$route.query.redirect || "/";
            this.$router.push(path);
          }
        })
        .catch(error => {
          // 有错误发生或者登录失败
          const toast = this.$createToast({
            time: 2000,
            txt: error.message || error.response.data.message || "登录失败",
            type: "error"
          });
          toast.show();
        });
    }
  }
};
</script>

<style scoped>
.item {
  margin: 10px;
}
.item input {
  outline: none;
  background: #f1f1f1;
  padding: 4px;
}
.btn {
  width: 50px;
  height: 30px;
}
</style>


