<!--
 * @Date: 2020-03-20 09:42:43
 * @Description: 固定表头
 * @LastEditTime: 2020-03-20 11:10:02
 * @FilePath: \_vue\src\views\Table\FixedThead.vue
 -->

<template>
  <div>
    <el-table :key="key" :data="tableData" border fit stripe style="width: 100%">
      <el-table-column v-for="k in formThead" :key="k" :label="k">
        <template slot-scope="scope">{{ scope.row[k] }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    heads: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      key: 1, // table key
    };
  },
  computed: {
    headOtions(){
      return this.heads
    },
    checkboxVal(){
      return this.heads
    },
    formThead(){
      return this.heads
    }
  },
  watch: {
    checkboxVal(newVal) {
      // 每次thead改变后，得到一个过滤后的thead数组
      this.formThead = this.headOtions.filter(
        i => newVal.indexOf(i) >= 0
      );
      console.log(this.formThead);
      // 为了保证table 每次都会重渲 
      this.key = this.key + 1;
    }
  }
};
</script>