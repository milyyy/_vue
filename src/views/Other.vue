<!--
 * @Date: 2020-03-19 10:48:43
 * @Description: 描述
 * @LastEditTime: 2020-03-20 11:10:45
 * @FilePath: \_vue\src\views\Other.vue
 -->
<template>
  <div>
    <fixed-thead :heads="heads" :tableData="tableData" name="mily"></fixed-thead>
  </div>
</template>

<script>
import FixedThead from "./Table/FixedThead";
export default {
  components: {
    FixedThead
  },
  data() {
    return {
      heads: ["a", "b", "c"], // 传入的prop数组
      tableData: [  //传入的对应表单数据
        // 表单数据
        {
          a: "aaaa",
          b: "bbbb",
          c: "cccc",
          d: "xxxx"
        }
      ]
    };
  }
};
</script>