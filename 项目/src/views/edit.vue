<template>
  <div>
    <editor-bar :catchData="catchData" :content="editorContent"></editor-bar>
  </div>
</template>

<script>
import EditorBar from "../components/editoritem.vue";
export default {
  data() {
    return {};
  },
  methods: {
    // 监听富文本的输入
    catchData(e) {
      console.log("e=====?>", e);
    },
    //富文本中的内容
    editorContent(e) {
      console.log("e=====?>", e);
    },
  },
  created() {},
  mounted() {},
  components: {
    EditorBar,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
