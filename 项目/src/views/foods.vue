<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="食品 ID">
              <span>{{ props.row.item_id }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="食品评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="月销量">
              <span>{{ props.row.month_sales }}</span>
            </el-form-item>
            <el-form-item label="餐馆名称">
              <span>{{ props.row.pinyin_name }}</span>
            </el-form-item>
            <el-form-item label="餐馆 ID">
              <span>{{ props.row.restaurant_id }}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{ props.row.addreess }}</span>
            </el-form-item>
            <el-form-item label="食品分类">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="name"> </el-table-column>
      <el-table-column label="食品介绍" prop="description"> </el-table-column>
      <el-table-column label="评分" prop="rating"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row, scope.$index)">编辑</el-button>
          <el-button type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    <!-- 修改框 -->
    <el-dialog title="修改食品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="食品名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品介绍" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="食品分类" :label-width="formLabelWidth">
          <el-select v-model="form.desc" placeholder="请选择活动区域">
          </el-select>
        </el-form-item>
      </el-form>
      <template>
        <el-table :data="tableList" style="width: 100%">
          <el-table-column prop="specs_name" label="规格"> </el-table-column>
          <el-table-column prop="packing_fee" label="包装费"> </el-table-column>
          <el-table-column prop="price" label="价格"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-button type="primary" class="btn" @click="edit1">添加规格</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加规格" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="规格" :label-width="formLabelWidth">
          <el-input v-model="form1.specs_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装费" :label-width="formLabelWidth">
          <el-input-number
            v-model="form1.packing_fee"
            :min="0"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input-number
            v-model="form1.price"
            :min="0"
          ></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="add1"
          >确 定</el-button
        >
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
      tableList: [],
      pagesize: 5,
      pagenum: 1,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        description: "",
        desc: "",
      },
      form1: {
        specs_name: "",
        packing_fee: "",
        price: "",
      },
      id: -1,
      formLabelWidth: "120px",
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
    del(index) {
      this.tableData.splice(index, 1);
    },
    edit(row, index) {
      this.dialogFormVisible = true;
      this.id = index;
      this.form.name = row.name;
      this.form.description = row.description;
      this.form.desc = row.desc;
      this.tableList = row.specfoods;
      console.log(this.tableList);
    },
    add() {
      this.tableData[this.id].name = this.form.name;
      this.tableData[this.id].description = this.form.description;
      this.tableData[this.id].desc = this.form.desc;
      this.dialogFormVisible = false;
    },
    edit1() {
      this.dialogFormVisible1 = true;
      this.tableList.forEach((i) => {
        this.form1.specs_name = i.specs_name;
        this.form1.packing_fee = i.packing_fee;
        this.form1.price = i.price;
      });
    },
    add1(){
      this.dialogFormVisible1 = false
      this.tableList.push({specs_name:this.form1.specs_name,packing_fee:this.form1.packing_fee,price:this.form1.price})
    }
  },
  created() {
    axios.get("https://elm.cangdu.org/shopping/v2/foods").then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
  mounted() {},
  components: {},
  computed: {
    list() {
      return this.tableData.slice(
        this.pagesize * (this.pagenum - 1),
        this.pagesize * this.pagenum
      );
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.btn {
  margin-left: 200px;
}
</style>
