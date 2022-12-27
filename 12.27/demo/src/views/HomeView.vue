<template>
    <div class=''>
      <button @click="age++">点击age++</button>
    </div>
    
</template>

<script>
import { ref, reactive, toRefs ,watch,watchEffect} from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';
 export default {
setup(props, ctx) {
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({
  name:'阿离',
  age:18,
  obj:{
    aa:666
  }
});
const text=ref('李白')
const msg=ref('韩信')

// watch监听某个属性的变化，一旦发生变化，就会触发对应的回调函数执行，在里面进行一些具体的操作，从而达到事件监听的效果。
// watch里面具有三个参数：

// 第一个参数是：选择要监听的属性。
// 第二个参数是：设置的回调函数。即监听到变化时应该执行的函数 。
// 第三个参数是：可以设置deep (深度监听) 其值为true和false。还可以设置immediate (是否以当前值执行回调函数) 其值为true和false。
// 监听ref定义数据
watch(text, (newValue, oldValue) => {
        console.log( newValue, oldValue)   
      }, {immediate: true}) 
// 监听多个ref监听的数据
watch([text,msg], (newValue, oldValue) => {
        console.log( newValue, oldValue)   
      }, {immediate: true})
   // 监听reactive定义的一个响应式数据(点击按钮获取无法正确的oldValue)
   watch(()=>data.age,(newValue,oldValue)=>{
        console.log(newValue,oldValue)
      },{immediate: true})
      // 监听reactive定义的一个响应式数据中的引用数据(需要自己开启deep)
      watch(()=>data.obj,(newValue,oldValue) => {
        console.log(newValue,oldValue)  
      },{deep:true},{immediate: true})
//       1.监听reactive定义的响应式数据，会强制开启深度监听（deep：true），无法获取正确的oldvalue（变化前的值）。
// 2. 监听reactive定义的响应式数据中的某个属性(对象形式)时，不会强制开启深度监听，需要自己手动设置（deep：true）才会有效果。
      watchEffect(()=> {
        const x1 = data.name
        const x2 = data.obj.aa
        const x3=text.value
        console.log(x1,x2,x3);
      })
return { ...toRefs(data),text };
 },
 };
</script>

<style lang='scss'>

</style>

