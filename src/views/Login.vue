<template>
  <div>
    <form class="form">
      <div class="item">
        <label for="name">姓名：</label>
        <input id="name" type="text" placeholder="请输入用户名">
      </div>
      <div class="item">
        <label for="pwd">密码：</label>
        <input id="pwd" type="text" placeholder="请输入密码">
      </div>
      <div>
        <button class="btn" type="submit" @click="login">登陆</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login(e) {
      e.preventDefault();
    }
  }
}
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


