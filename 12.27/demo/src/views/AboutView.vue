<template>
    <div class=''>
    <div>我是一个自定义的hook</div>
    <h3>{{ point }}</h3>
    <button @click="proxyData">点击</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
 import usePoint from '@/hooks/usePoint';
 export default {
setup(props, ctx) {
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
const point=usePoint()
console.log(point,'point');
return { ...toRefs(data) ,point,proxyData};
 },
 };
 const data = ["a", "b", "c"];

const proxyData = new Proxy(data, { // data对象被Proxy处理后就成了一个Proxy对象
    get(target, key, receiver) {
        console.log("Reflect get", Reflect.ownKeys(target));
        console.log("get", key); // 监听
        const result = Reflect.get(target, key, receiver);
        return result; // 返回执行的方法
    },
    set(target, key, val, receiver) {
        const result = Reflect.set(target, key, val, receiver);
        console.log("set", key, val);
        return result; // 是否设置成功，为一个布尔值
    },
    deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key);
        console.log("delete property", key);
        return result; // 是否删除成功，为一个布尔值
    },
});
</script>

<style lang='scss'>

</style>

