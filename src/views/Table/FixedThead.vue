<!--
 * @Date: 2020-03-20 09:42:43
 * @Description: 固定表头
 * @LastEditTime: 2020-03-20 12:58:44
 * @FilePath: \_vue\src\views\Table\FixedThead.vue
 -->

<template>
  <div class="table">
    <el-table :key="key" :data="values" border fit stripe style="width: 100%">
      <el-table-column v-for="k in formThead" :key="k" :label="k">
        <template slot-scope="scope">{{ scope.row[k] }}</template>
      </el-table-column>
      <el-table-column v-if="isDisplayAction" label="操作">
        <template slot-scope="{row,$index}">
          <el-button @click="del(row,$index)" size="small">删除</el-button>
        </template>
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
    },
    isDisplayAction: Boolean
  },
  data() {
    return {
      key: 1, // table key
    };
  },
  computed: {
    formThead(){
      return this.heads
    },
    values() {
      return this.tableData
    }
  },
  methods: {
    del(row, index) {
      this.$notify({
        title: 'Success',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      // 可以依据后台逻辑删除
      this.tableData.splice(index, 1)
    }
  },
  watch: {
    heads(newVal) {
      // 每次thead改变后，得到一个过滤后的thead数组
      this.formThead = this.formThead.filter(
        i => newVal.indexOf(i) >= 0
      );
      console.log(this.formThead);
      // 保证table每次都会重新渲染
      this.key = this.key + 1;
    }
  }
};
</script>

<style scoped>
  .table >>> .el-table thead {
    color:#444;
    font-weight: bold;
  }
</style>