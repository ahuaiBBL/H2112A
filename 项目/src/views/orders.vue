<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.restaurant_name }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="id"> </el-table-column>
      <el-table-column label="总价格" prop="total_amount"> </el-table-column>
      <el-table-column label="订单状态" prop="status_bar.title"> </el-table-column>
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
    axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined').then(res=>{
      console.log(res);
      this.tableData=res.data
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
