<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="./home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu
            v-for="(item, index) in list"
            :key="index"
            :index="index + ''"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="ele.path"
                v-for="(ele, index) in item.childen"
                :key="index"
                @click="addbread(item.title, ele.title)"
                >{{ ele.title }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-breadcrumb separator="/" class="bread">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadlist" :key="index"
              ><a href="/">{{ item }}</a></el-breadcrumb-item
            >
          </el-breadcrumb>
          <el-dropdown>
            <img src="1.jpg" alt="" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="$router.push('/home')">首页</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "数据管理",
          icon: "el-icon-document",
          childen: [
            {
              title: "用户列表",
              path: "users",
            },
            {
              title: "商家列表",
              path: "cities",
            },
            {
              title: "食品列表",
              path: "foods",
            },
            {
              title: "订单管理",
              path: "orders",
            },
            {
              title: "管理员列表",
              path: "all",
            },
          ],
        },
        {
          title: "添加数据",
          icon: "el-icon-circle-plus",
          childen: [
            {
              title: "添加商铺",
              path: "shop",
            },
            {
              title: "添加商品",
              path: "shoping",
            },
          ],
        },
        {
          title: "图表",
          icon: "el-icon-star-off",
          childen: [
            {
              title: "用户分布",
              path: "echart",
            },
          ],
        },
        {
          title: "编辑",
          icon: "el-icon-edit",
          childen: [
            {
              title: "文本编辑",
              path: "edit",
            },
          ],
        },
        {
          title: "设置",
          icon: "el-icon-s-tools",
          childen: [
            {
              title: "管理员设置",
              path: "admin",
            },
          ],
        },
        {
          title: "说明",
          icon: "el-icon-warning",
          childen: [
            {
              title: "说明",
              path: "explain",
            },
          ],
        },
      ],
      breadlist: [],
    };
  },
  methods: {
    addbread(val1, val2) {
      this.breadlist = [val1, val2];
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
.el-menu-vertical-demo {
  height: 100vh;
}

.header {
  width: 100%;
  height: 50px;
  background-color: #eff2f7;
  display: flex;
  justify-content: space-between;
  .bread {
    margin-top: 20px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 10px;
  }
}
</style>
