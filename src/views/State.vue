<!--
 * @Date: 2020-01-07 09:45:42
 * @LastEditTime : 2020-01-09 14:52:09
 * @FilePath: \_vue\src\views\State.vue
 -->
<template>
  <div>
    <h3>This is State</h3>
    <div>
      单个计算属性访问的：{{ count }}
    </div>
    <div>
      mapState访问的：{{ num }}
    </div>
    <div>
      <!-- state与局部变量结合：{{ countPlusLocalState }} -->
    </div>
    
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data() {
    return {
      localCount: 10,
      name: 'mily'
    }
  },
  // 计算属性访问单个状态 
  /*
  * computed: {
  *   count() {
  *     return this.$store.state.count
  *   },
  * },
  */

  /* 
  * 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余
  * 我们可以使用 mapState 辅助函数帮助我们生成计算属性
  */

  /*
    computed: mapState({
      count: state => state.count,
      num: state => state.num,

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.num + this.localCount
      }
    }),
  */
  // ...对象展开运算符混入（state与局部this中的变量混入）
  computed: {
    myName() {
      return this.name + 'song';
    },
    ...mapState([
      // 以数组参数形式映射 this.count 为 store.state.count, 
      'count', 'num'
    ])
  }
}
</script>