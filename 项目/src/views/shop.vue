<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch
          v-model="ruleForm.delivery"
          inactive-text="品牌保证"
        ></el-switch>
        <el-switch
          v-model="ruleForm.delivery1"
          inactive-text="蜂鸟专送"
        ></el-switch>
        <el-switch
          v-model="ruleForm.delivery2"
          inactive-text="新开店铺"
        ></el-switch>
        <el-switch
          v-model="ruleForm.delivery3"
          inactive-text="外卖保"
        ></el-switch>
        <el-switch
          v-model="ruleForm.delivery4"
          inactive-text="准时达"
        ></el-switch>
        <el-switch
          v-model="ruleForm.delivery5"
          inactive-text="开发票"
        ></el-switch>
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number v-model="ruleForm.num"></el-input-number>
      </el-form-item>
      <el-form-item label="起送费">
        <el-input-number v-model="ruleForm.num1"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="起始时间"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="结束时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label='上传店铺头像'>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label='上传营业执照'>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label='上传餐饮服务许可证'>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="ruleForm.imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
       <el-form-item label="优惠活动">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
       <el-table :data="tableList" style="width: 100%">
          <el-table-column prop="specs_name" label="活动标题"> </el-table-column>
          <el-table-column prop="packing_fee" label="活动名称"> </el-table-column>
          <el-table-column prop="price" label="活动详情"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item> </el-form
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableList:[],
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.demo-ruleForm{
    width: 500px;
    margin-left:200px
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
