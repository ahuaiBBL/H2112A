<template>
  <div class="">
    <div>{{ name }}</div>
    <p>{{age}}</p>
    <button @click="handleChange()">点击</button>
    <button @click="age++">点击++</button>
    <br>
    <h1>{{text}}</h1>
    <h1>{{age1}}</h1>
    <button @click="change()">点击reactive按钮</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    console.log("setup");
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      text: "李白",
      age1:19
    });

    const change=()=>{
      data.text='韩信'
      data.age1=21
    }
    // ref用法
    const age = ref(18);
    const name = ref('frank')
    const handleChange = () => {
      name.value = "mike";
      age.value = 20;
      console.log(age);
    };
    return { ...toRefs(data),handleChange,age,name,change };
  },
};
</script>

<style lang='scss'>
</style>
