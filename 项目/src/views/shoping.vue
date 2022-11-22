<template>
  <div>
    <h3>选择食品分类</h3>
    <el-form ref="form" :model="form" label-width="80px" class="box">
  <el-form-item label="食品种类">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="食品种类">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="种类描述">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">提交</el-button>
  </el-form-item>
</el-form>
<h3>添加食品</h3>
<el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="食品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="食品活动">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="食品详情">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
       <el-form-item label='上传食品图片'>
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
      <el-form-item label="食品特点" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="食品规格" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="单规格"></el-radio>
      <el-radio label="多规格"></el-radio>
    </el-radio-group>
  </el-form-item>
      <el-form-item label="包装费">
        <el-input-number v-model="ruleForm.num"></el-input-number>
      </el-form-item>
      <el-form-item label="价格">
        <el-input-number v-model="ruleForm.num1"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          >确认添加食品</el-button
        >
      </el-form-item> </el-form
    >'
 </div>
</template>

<script>
export default {
  data () {
    return {
        form: {
          name: '',
        },
        ruleForm:{
          name:''
        },
         rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],}
    }
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
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
.demo-ruleForm{
    width: 500px;
    margin-left:200px
}
h3{
  text-align: center;
}
.box{
  width: 400px;
  margin-left: 200px;
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
