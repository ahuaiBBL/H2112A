<template>
  <div>
    <h3>管理员信息</h3>
    <div class="box">
      <p><span>姓名：</span></p>
      <p><span>注册时间：</span></p>
      <p><span>管理员权限：</span></p>
      <p><span>管理员：</span></p>
      <p>
        <span>更换头像：</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
         dialogImageUrl: '',
        dialogVisible: false
    };
  },
  methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 600px;
  height: 430px;
  background-color: #f9fafc;
  margin: 10px auto;
  padding: 15px;
  box-sizing: border-box;
  p {
    margin: 30px 0;
  }
}
h3 {
  text-align: center;
}
</style>
