<!--
import func from './vue-temp/vue-editor-bridge';
 * @Date: 2019-12-26 17:59:05
 * @LastEditTime : 2019-12-27 11:19:38
 * @FilePath: \hello-world\src\components\Cart.vue
 -->
<template>
  <div id="cart">
    <table>
      <tr>
        <th>勾选</th>
        <th>名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(item, index) in cartList" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.isActive">
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="minus(index)">-</button>
          {{ item.num }}
          <button @click="add(index)">+</button>
        </td>
        <td>{{ item.num * item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: [
    'cartList'
  ],
  methods: {
    minus(i) {
      let num = this.cartList[i].num;
      if (num > 1) {
        this.cartList[i].num -= 1;
      } else {
        if(window.confirm("确认删除吗？")){
          // 告诉父组件来删除
          this.$emit('removeItem', i)
        }
      }
    },
    add(i) {
      this.cartList[i].num += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>