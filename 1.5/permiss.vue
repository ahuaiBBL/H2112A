<template>
  <div class="permiss">
    <el-button type="primary" :icon="EditPen" class="add" @click="dialogFormVisible = true">添加菜单</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="name" label="菜单名称"  />
      <el-table-column prop="code" label="权限标识"  />
      <el-table-column prop="description" label="描述" />
      <el-table-column fixed="right" label="操作" >
        <template #default>
          <el-button link type="primary" size="small">添加权限点</el-button>
          <el-button link type="primary" size="small">查看api权限</el-button>
          <el-button link type="primary" size="small">查看</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisible" title="编辑权限">
    <el-form :model="form">
      <el-form-item label="权限名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="权限标识" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="权限描述" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="菜单顺序" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="菜单icon" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { getCurrentInstance } from "vue"
import {EditPen} from '@element-plus/icons-vue'
const store = useStore()
const router = useRouter()
const route = useRoute()
const data = reactive({})
const tableData = [
  {
    id: "1",
    name: "SAAS企业管理",
    type: 1,
    code: "saas-clients",
    description: "",
    pid: "0",
    enVisible: "0"
  },
  {
    id: "1063315016368918528",
    name: "员工管理",
    type: 1,
    code: "employees",
    description: "用户管理菜单",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1063327833876729856",
    name: "组织架构",
    type: 1,
    code: "departments",
    description: "组织架构菜单",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1063328114689576960",
    name: "公司设置",
    type: 1,
    code: "settings",
    description: "公司设置菜单",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1064104257952813056",
    name: "权限管理",
    type: 1,
    code: "permissions",
    description: "权限菜单",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1146308691438043136",
    name: "社保",
    type: 1,
    code: "social_securitys",
    description: "社保菜单",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1151424682926747648",
    name: "考勤",
    type: 1,
    code: "attendances",
    description: "考勤",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1151747519034093568",
    name: "工资",
    type: 1,
    code: "salarys",
    description: "工资模块",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1156085524669272064",
    name: "员工自助",
    type: 1,
    code: "user12345",
    description: "员工自助",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1172702828368498688",
    name: "审批",
    type: 1,
    code: "approvals",
    description: "审批",
    pid: "0",
    enVisible: "1"
  },
  {
    id: "1610963136628785152",
    name: "123",
    type: 1,
    code: "123",
    description: "123",
    pid: "0",
    enVisible: "1"
  }
]
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '80px'

const form = reactive({
  name: '',
})
</script>

<style lang='scss'>
.add{
    margin-left: 90%;
}
</style>
