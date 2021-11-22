<!--
 * @Date: 2020-01-09 14:50:34
 * @LastEditTime : 2020-01-10 15:09:55
 * @FilePath: \_vue\src\views\Mutation.vue
 -->
<template>
  <div>
    <h3>This is Mutation</h3>
      {{ $store.state.count }}
      
    <p>
      <button @click="newIncrement()">
        store里的count --
      </button>
    </p>

    <p>
      {{ $store.state.num }}
      <button @click="newAdd()">
        store里的num ++
      </button>
    </p>

    <p>
      {{ $store.state.author }}
      <button @click="newGetName()">
        改变author
      </button>
    </p>

    <div>
      <h3>姓名:{{$store.state.obj.name}}</h3>
      <h3>年龄:{{$store.state.obj.age}}</h3>
      <button @click="setName()">
        增加对象新属性
      </button>
    </div>
    
    <div>
      <h3>使用常量代替mutation的模式:{{$store.state.mutation_type}}</h3>
      <button @click="changeType()">
        改变类型
      </button>
    </div>

    <div>
      <h3>使用mapMutations调用传参:{{$store.state.mutation_type}}</h3>
      <button @click="SOME_MUTATION('type-C')">
        改变类型2
      </button> &nbsp;
      <button @click="_some('type-C')">
        别名
      </button>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    // mutation 改变state中单一的count 
    newIncrement() {
      this.$store.commit('increment');
    },
    // store.commit 传入额外的参数
    newAdd() {
      this.$store.commit('add', 5);
    },
    
    // store.commit 传入对象
    newGetName() {
      this.$store.commit('getName', { name: 'milyyy' });
      // 或者使用对象风格提交，包含type属性的对象
      // this.$store.commit({
      //   type: 'getName',
      //   name: 'milyyy'
      // })
    },

    // 在对象上添加新属性时（响应式）
    setName() {
      // 1. 使用Vue.set(obj, 'newProp', 123)
      this.$set(this.$store.state.obj, 'name', 'hello');
      // 2. 以新对象替换老对象。例如，利用对象展开运算符
      this.$store.state.obj = { ...this.$store.state.obj, age: 18 };
    },
    /**
    如果是子模块，则这样提交，参考https://blog.csdn.net/qq_44979541/article/details/108144777
    this.$store.commit('other/SET_MODAL_STATUS', false);
    */
    changeType() {
      this.$store.commit('SOME_MUTATION', 'type-B');
    },
    // 这里type只需要在调用时传参
    ...mapMutations([
      'SOME_MUTATION'
    ]),
    // 这里给type取别名 需要使用对象的键值对形式 {key: mutation_type}
    ...mapMutations({
      _some: 'SOME_MUTATION'
    }),
    
  },
}
</script>
