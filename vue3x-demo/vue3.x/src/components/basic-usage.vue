<template>
  <h1>VUE3.X</h1>
  {{year}}年
  <!-- 不使用toRefs -->
  <!-- {{user.name}} {{user.age}}岁 -->
  
  <!-- 使用toRefs -->
  {{name}} {{age}}岁
</template>

<script>
import { defineComponent, reactive, ref, toRefs, watch, watchEffect } from "vue";

export default defineComponent({
  beforeCreate() {
    console.log('--beforeCreate--');
  },
  /**
   * setup 
   * 功能： 组件内使用 Composition API的入口。
   * 执行时机：是在 beforeCreate 之前执行
   * 它接受两个参数：（props、context）
   * props接受属性、
   * context 提供 attrs, slot, emit。。
   * 
   * 如果直接解构user对象，那么属性jiang不是响应式；
   * 解决办法：toRefs 用于将一个 reactive 对象转化为属性全部为 ref 对象的普通对象
   */
  setup(props, context) {
    console.log('--setup--');
    const year = ref(0);
    const user = reactive({name: 'ating', age: 18, gender: "女"});
    const dog = reactive({
      name: '牛牛', 
      features: {weight: '0.5kg', tall: '30cm'}
    });
    setInterval(() => {
      year.value++;
      user.age++;
    }, 1000);

    /**
     * 侦听 reactive 定义的数据，以匿名函数返回属性
     */
    watch( // 修改age值时会触发 watch的回调
      () => user.age,
      (newV, oldV) => {
        // console.log('newV', newV, 'oldV', oldV);
      },
      { deep: true } // 默认watch惰性，才进行深度监听；
    );
    /**
     * 侦听单个ref定义的数据
     */
    watch(year, (newV, oldV) => {
      // console.log('newV2', newV, 'oldV2', oldV);
    });

    /**
     * @watch 侦听多个数据
     * 我们在组件中创建的watch监听，会在组件被销毁时自动停止。
     * 如果在组件销毁之前我们想要停止掉某个监听， 可以调用watch()函数的返回值，
     */
    const stopWatchReturn = watch([() => user.age, year], ([newAge, newYear], [oldAge, oldYear])=> {
      // console.log('newAge', newAge, 'oldAge', oldAge);
      // console.log('newYear', newYear, 'oldYear', oldYear);
    });

    /**
     * @watchEffect 不需要手动传入依赖
     * @watchEffect 会先执行一次,用来自动收集依赖
     * @watchEffect 无法获取旧值，只能获取新值
     */
    watchEffect(() => {
    //   console.log(year.value);
    //   console.log(user.age);
    })

    setTimeout(() => {
      // stopWatchReturn(); // watch函数的返回值，调用即销毁，停止监听；
    }, 3000);

    return {
      year,
      // user
      ...toRefs(user)
    }

  },
  created() {
    console.log('--created--');
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
