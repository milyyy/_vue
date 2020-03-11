 <template>
  <div>
    <el-select v-model="value" class="select" placeholder="请选择">
      <el-option label="选项1" value="1" />
      <el-option label="选项2" value="2" />
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.el-select.select {
  background: green;
  /deep/ .el-input__inner {
    background: red;
  }
}
</style>