<!--
 * @Date: 2020-03-19 10:48:43
 * @Description: 描述
 * @LastEditTime: 2020-03-20 12:53:45
 * @FilePath: \_vue\src\views\Other.vue
 -->
<template>
  <div>
    <fixed-thead
      :heads="heads"
      :tableData="tableData"
      :isDisplayAction="isDisplayAction"
    ></fixed-thead>
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
      isDisplayAction: true, // 是否展示操作列
      heads: ["a", "b", "c"], // 传入的prop数组
      tableData: [
        //传入的对应表单数据
        // 表单数据
        {
          a: "aaaa",
          b: "bbbb",
          c: "cccc",
          d: "xxxx"
        },
        {
          a: "aa",
          b: "bb",
          c: "cc",
          d: "xx"
        }
      ]
    };
  }
};
</script>