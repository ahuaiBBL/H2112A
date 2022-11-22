<template>
  <div>
    <template>
      <el-table :data="list" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
             <div class="conent">
                <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
             </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"> </el-table-column>
        <el-table-column label="店铺地址" prop="address"> </el-table-column>
        <el-table-column label="店铺介绍" prop="description"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row,scope.$index)">编辑</el-button>
            <el-button @click="$router.push('/shoping')">添加食品</el-button>
            <el-button type="danger" @click="del(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!-- 分页 -->
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
    <!-- 对话框 -->
    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="店铺名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="店铺介绍" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.category" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="商铺图片" :label-width="formLabelWidth">
      <template slot-scope="scope">
       <img :src="scope.row.img" alt="">
      </template>
    </el-form-item> -->
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
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
        dialogFormVisible: false,
        form: {
          name: '',
          address:'',
          description:'',
          phone:'',
          category:'',
          img:'',
        },
        ID:-1,
        formLabelWidth: '120px'
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
    del(id){
      this.tableData.splice(id,1)
    },
    edit(row,index){
      this.dialogFormVisible=true
      this.ID=index
      this.form.name=row.name
      this.form.address=row.address
      this.form.description=row.description
      this.form.phone=row.phone
      this.form.category=row.category
      this.form.img=row.image_path
    },
    add(){
      this.tableData[this.ID].name=this.form.name
      this.tableData[this.ID].address=this.form.address
      this.tableData[this.ID].description=this.form.description
      this.tableData[this.ID].phone=this.form.phone
      this.tableData[this.ID].category=this.form.category
      this.dialogFormVisible = false
    }
  },
  created() {
    axios
      .get(
        "https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20"
      )
      .then((res) => {
        console.log(res);
        this.tableData=res.data
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
.conent{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
