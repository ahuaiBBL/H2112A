<template>
  <div>
    <template>
      <el-table :data="list" style="width: 100%">
        <el-table-column label="#" type="index" width="80"> </el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户姓名"> </el-table-column>
        <el-table-column prop="city" label="注册地址"> </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      pagesize: 5,
      pagenum: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
    },
  },
  created() {
    axios.get("https://elm.cangdu.org/v1/users/list").then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
  mounted() {},
  components: {},
  computed: {
    list() {
      return  this.tableData.slice(
        this.pagesize * (this.pagenum - 1),
        this.pagesize * this.pagenum
      );
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
