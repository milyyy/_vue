<!--
 * @Date: 2020-01-09 14:49:45
 * @LastEditTime : 2020-01-09 17:17:45
 * @FilePath: \_vue\src\views\Getters.vue
 -->
<template>
  <div>
    <h3>This is Getters</h3>
    
    <div>
      访问getter中的属性：
      <div>
        <!-- 单个getter属性获取 -->
        <!-- <ul>
          <li v-for="item in newArr" :key="item.id">
            {{ item.text }}
          </li>
        </ul> -->

        <!-- 多个getter属性获取 -->
        <ul>
          <li v-for="item in doneTodos" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
        <br>
        {{ $store.getters.doneTodosCount }} <br>

      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  // 在组件中使用getters
  /*
  * 单个属性获取
    computed: {
      newArr() {
        // 这里doneTodos在getters中已经过滤为一个新的数组 
        return this.$store.getters.doneTodos
      }
    },
  */
  //  mapGetters 辅助函数,多个属性获取
  computed: {
    ...mapGetters([
      'doneTodos', 'doneTodosCount'
    ]),
    // mapGetters({
    //   // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
    //   doneCount: 'doneTodosCount'
    // })
  }

}
</script>