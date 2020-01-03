<template>
  <div id="app">
    <h2>购物车</h2>
    <hr>

    <div>
      <h3>添加课程</h3>
      <label for="name">课程名称：</label>
      <input v-model="course.name" type="text" id="name"><br>
      <label for="price">课程价格：</label>
      <input v-model="course.price" type="text" id="price">
      <p>
        
        <button @click="addCourseList()">添加课程到列表</button>
      </p>
    </div>

    <hr>

    <div>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
        </tr>
        <tr v-for="(item, index) in courseList" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="addCartList(index)"> + 购物车</button>
          </td>
        </tr>
      </table>
    </div>

    <hr>

    <div>
      <h3>购物车</h3>
      <cart :cartList="cartList" @removeItem="remove()"></cart>
    </div>

  </div>
</template>

<script>
import cart from "@/components/Cart"

export default {
  name: 'app',
  components: {
    cart
  },
  data(){
    return {
      // 课程列表
      course: {
        name: "",
        price: "",
      },
      courseList: [
        {
          id: 1,
          name: "前端",
          price: "1000"
        },
        {
          id: 2,
          name: "python",
          price: "3000"
        }
      ],
      // 购物车列表
      cartList: []
    }
  },
  methods: {
    // 添加到课程列表
    addCourseList() {
      this.courseList.push(this.course)
    },
    // 添加到购物车列表
    addCartList(i) {
      let course = this.courseList[i];
      let isHasCourse = this.cartList.find( x =>
        x.id == course.id
      )
      if (isHasCourse) {
        isHasCourse.num += 1; 
      } else {
        this.cartList.push({
          ...course,
          num: 1,
          isActive: true
        })
      }
    },
    // 移除item
    remove(i) {
      // 这里存在一个问题， i无法传过来，删除的始终是最上面一项
      this.cartList.splice(i, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
