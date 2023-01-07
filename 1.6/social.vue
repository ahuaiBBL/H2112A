<template>
  <div class="about">
    <el-card class="box-card">
      <div class="top">
        <div class="left">
          <el-alert title="本月：社保在缴 公积金在缴  增员  减员  入职  离职" type="info" show-icon :closable="false" />
        </div>
        <!-- <div class="right">
            <div>历史归档</div>
            <div>202001月报表</div>
          </div> -->
      </div>
      <div class="flex">
        <div class="dep">部门：</div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="总裁办" />
          <el-checkbox label="行政部" />
          <el-checkbox label="人事部" />
          <el-checkbox label="财务部" />
          <el-checkbox label="技术部" />
          <el-checkbox label="运营部" />
          <el-checkbox label="市场部" />
          <el-checkbox label="财务核算部" />
          <el-checkbox label="税务管理部" />
          <el-checkbox label="薪资管理部" />
          <el-checkbox label="Java研发部" />
          <el-checkbox label="Python研发部" />
          <el-checkbox label="Php研发部" />
          <el-checkbox label="北京事业部" />
          <el-checkbox label="上海事业部" />
          <el-checkbox label="测试部" />
        </el-checkbox-group>
      </div>
      <div class="flex">
        <span>社保城市：</span>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="北京" />
        </el-checkbox-group>
      </div>
      <div class="flex">
        <span>公积金城市：</span>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="北京" />
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="80px" />
        <el-table-column prop="username" label="姓名" sortable />
        <el-table-column prop="mobile" label="手机" sortable />
        <el-table-column prop="workNumber" label="工号" sortable />
        <el-table-column prop="departmentName" label="部门" sortable />
        <el-table-column prop="timeOfEntry" label="入职时间" sortable />
        <el-table-column label="离职时间" sortable>---</el-table-column>
        <el-table-column prop="participatingInTheCity" label="社保城市" />
        <el-table-column prop="providentFundCity" label="公积金城市" />
        <el-table-column prop="socialSecurityBase" label="社保基数" />
        <el-table-column prop="providentFundBase" label="公积金基数" />
      </el-table>
      <el-pagination
        :current-page="currentPage4"
        :page-size="pageSize"
        :page-sizes="[5, 10, 15, 20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
const store = useStore()
const router = useRouter()
const route = useRoute()
const checkList = ref()
const currentPage4 = ref(1)
const pageSize = ref(5)
const total = ref(0)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tableData = [
  {
    id: "1063705482939731968",
    username: "cgx",
    mobile: "13800000001",
    workNumber: "",
    departmentName: "",
    timeOfEntry: "2018-11-01",
    leaveTime: null,
    participatingInTheCityId: "1084825908823904256",
    participatingInTheCity: "北京",
    socialSecurityBase: 10000,
    providentFundCityId: "1084825908823904256",
    providentFundCity: "北京",
    providentFundBase: 10000
  },
  {
    id: "1063705989926227968",
    username: "天",
    mobile: "13800000002",
    workNumber: "9002",
    departmentName: "总裁办",
    timeOfEntry: "2018-11-02",
    leaveTime: null,
    participatingInTheCityId: "1084825908823904256",
    participatingInTheCity: "北京",
    socialSecurityBase: 10000,
    providentFundCityId: "1084825908823904256",
    providentFundCity: "北京",
    providentFundBase: 10000
  },
  {
    id: "1066370498633486336",
    username: "孙财11",
    mobile: "13800000003",
    workNumber: "111",
    departmentName: "市场部",
    timeOfEntry: "2018-11-04",
    leaveTime: null,
    participatingInTheCityId: "1084825908823904256",
    participatingInTheCity: "北京",
    socialSecurityBase: 3388,
    providentFundCityId: "1084825908823904256",
    providentFundCity: "北京",
    providentFundBase: 2277
  },
  {
    id: "1071632760222810112",
    username: "罗晓晓",
    mobile: "13800000004",
    workNumber: "1111",
    departmentName: "人事部",
    timeOfEntry: "2018-12-02",
    leaveTime: null,
    participatingInTheCityId: "1084825908823904256",
    participatingInTheCity: "北京",
    socialSecurityBase: 5000,
    providentFundCityId: "1084825908823904256",
    providentFundCity: "北京",
    providentFundBase: 5000
  },
  {
    id: "1074238801330704384",
    username: "文吉星666",
    mobile: "13400000001",
    workNumber: "1001",
    departmentName: "人事部",
    timeOfEntry: "2018-01-01",
    leaveTime: null,
    participatingInTheCityId: "1084825908823904256",
    participatingInTheCity: "北京",
    socialSecurityBase: 5900,
    providentFundCityId: "1084825908823904256",
    providentFundCity: "北京",
    providentFundBase: 5900
  },
  {
    id: "1074238801402007552",
    username: "巴思慧",
    mobile: "13400000002",
    workNumber: "1002",
    departmentName: "人事部",
    timeOfEntry: "2018-01-01",
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: "1075383133106425856",
    username: "乔海",
    mobile: "13500000001",
    workNumber: "2001",
    departmentName: "总裁办",
    timeOfEntry: "2018-01-01",
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: "1075383135371350016",
    username: "董昊空",
    mobile: "13500000002",
    workNumber: "2002",
    departmentName: "总裁办",
    timeOfEntry: "2018-01-01",
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: "1075383135459430400",
    username: "周乐天",
    mobile: "13500000003",
    workNumber: "2003",
    departmentName: "财务部",
    timeOfEntry: "2018-01-01",
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  },
  {
    id: "1235396724497268736",
    username: "吕勇锐",
    mobile: "13600000001",
    workNumber: "0001",
    departmentName: "总裁办",
    timeOfEntry: "1992-08-04",
    leaveTime: null,
    participatingInTheCityId: null,
    participatingInTheCity: null,
    socialSecurityBase: null,
    providentFundCityId: null,
    providentFundCity: null,
    providentFundBase: null
  }
]
</script>
  <style lang="scss" scoped>
.flex {
  display: flex;
}
.box-card {
  margin: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .right {
    display: flex;
    div {
      margin-left: 20px;
    }
  }
}
.dep {
  width: 80px;
}
.el-alert {
  background-color: #e6f7ff;
  border: 1px solid #a3dcff;
}
</style>