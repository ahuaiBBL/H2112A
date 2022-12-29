<template>
  <div class="">
    <h2>王者荣耀点名表</h2>
    <div class="header">
      <p>时间：</p>
      <div id="time"></div>
    </div>
    <div class="content">
      <ul id="ul">
        <li v-for="(item, index) in namelist" :key="index">{{ item.name }}</li>
      </ul>
      <div class="right">
        <div class="top">
          <h2>天选之人：</h2>
          <h1 class="h1"></h1>
        </div>
        <div class="btm">
          <div class="dot" @click="person">单人点名</div>
          <div class="dot" @click="persons">双人点名</div>
          <div class="dot" @click="boy">男生点名</div>
          <div class="dot" @click="girl">女生点名</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      namelist: [
        {
          id: 1,
          name: "李白",
          sex: 0,
          status: false,
        },
        {
          id: 2,
          name: "韩信",
          sex: 0,
          status: false,
        },
        {
          id: 3,
          name: "孙尚香",
          sex: 1,
          status: false,
        },
        {
          id: 4,
          name: "公孙离",
          sex: 1,
          status: false,
        },
        {
          id: 5,
          name: "孙悟空",
          sex: 0,
          status: false,
        },
        {
          id: 6,
          name: "猪八戒",
          sex: 0,
          status: false,
        },
        {
          id: 7,
          name: "元歌",
          sex: 0,
          status: false,
        },
        {
          id: 8,
          name: "千年之狐",
          sex: 0,
          status: false,
        },
        {
          id: 9,
          name: "逐梦之影",
          sex: 0,
          status: false,
        },
        {
          id: 10,
          name: "未来机甲",
          sex: 1,
          status: false,
        },
        {
          id: 11,
          name: "至尊宝",
          sex: 0,
          status: false,
        },
        {
          id: 12,
          name: "玉兔公主",
          sex: 1,
          status: false,
        },
        {
          id: 13,
          name: "末日机甲",
          sex: 1,
          status: false,
        },
        {
          id: 14,
          name: "全息碎影",
          sex: 0,
          status: false,
        },
        {
          id: 15,
          name: "街头霸王",
          sex: 0,
          status: false,
        },
        {
          id: 16,
          name: "电玩小子",
          sex: 0,
          status: false,
        },
        {
          id: 17,
          name: "橘右京",
          sex: 0,
          status: false,
        },
        {
          id: 18,
          name: "不知火舞",
          sex: 1,
          status: false,
        },
        {
          id: 19,
          name: "娜可露露",
          sex: 1,
          status: false,
        },
        {
          id: 20,
          name: "诸葛亮",
          sex: 0,
          status: false,
        },
      ],
    });
    // 随机一个人点名
    const person = () => {
      const index = Math.floor(Math.random() * namelist.length);
      const name = namelist[index];
      store.commit("random", name);
    };
    //男生点名
    const boy = () => {
      // console.log(namelist);
      let malelist = namelist.filter((item) => item.sex === 1);
      const index = Math.floor(Math.random() * malelist.length);
      const name = malelist[index];
      console.log(name);
      store.commit("random", name);
    };
    //女生点名
    const girl = () => {
      let femalelist = namelist.filter((item) => item.sex === 0);
      const index = Math.floor(Math.random() * femalelist.length);
      const name = femalelist[index];
      console.log(name);
      store.commit("random", name);
    };
    //随机两人点名
    const persons = () => {
      const index = Math.floor(Math.random() * namelist.length);
      const index2 = Math.floor(Math.random() * namelist.length);
      const name = namelist[index];
      const name2 = namelist[index2];
      store.commit("random", [name, name2]);
    };
    return { ...toRefs(data), person, boy, girl, persons };
  },
};
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.gif) no-repeat center;
  background-attachment: fixed;
  background-size: cover;
}
h2 {
  color: white;
  text-align: center;
  margin-top: 10px;
}
.header {
  color: white;
  display: flex;
  margin-left: 80%;
  font-size: 20px;
  width: 300px;
}
.content {
  width: 1300px;
  display: flex;
  /* background-color: aqua; */
  margin-left: 100px;
  margin-top: 50px;
  justify-content: space-between;
  color: white;
}
ul {
  width: 700px;
  height: 500px;
  /* background-color: yellowgreen; */
  display: flex;
  flex-wrap: wrap;
}
li {
  font-size: 20px;
  width: 160px;
  text-align: center;
  height: 100px;
  line-height: 100px;
  background-image: linear-gradient(to right, red, green, aqua, #67c23a);
  -webkit-background-clip: text;
  color: transparent;
}
.right {
  width: 500px;
  height: 500px;
  /* background-color: red; */
}
.top {
  display: flex;
  margin: 130px 0 0 50px;
}
.btm {
  display: flex;
  margin-left: 50px;
  margin-top: 260px;
}
.dot {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 25px;
  color: white;
  background-color: #67c23a;
  margin-right: 5px;
}
.h1 {
  background-image: linear-gradient(to right, red, green);
  -webkit-background-clip: text;
  color: transparent;
}
</style>

