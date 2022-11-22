<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="user_name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="create_time" label="注册日期" width="180"> </el-table-column>
      <el-table-column prop="city" label="地址"> </el-table-column>
      <el-table-column prop="admin" label="权限"> </el-table-column>
    </el-table>
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
import axios from 'axios'
export default {
  data() {
    return {
      tableData:[],
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
    axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then(res=>{
      console.log(res);
      this.tableData=res.data.data
    })
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
