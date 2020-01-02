<template>
  <div class="doc w-100">
    <el-row class="h-100">
      <el-col :span="5">左</el-col>

      <el-col :span="14" class="px-3 h-100 bg-white">
        <markdown></markdown>
      </el-col>

      <el-col :span="5">右</el-col>
    </el-row>

    <div class>
      <button type="button" name="button" @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MarkdownEditor from "../components/MarkdownEditor";

export default {
  name: "Doc",
  components: {
    markdown: MarkdownEditor
  },
  data() {
    return {
      title: "无标题",
      content3: "",
      fileId: "",
      file: {}
    };
  },
  methods: {
    submit() {}
  },
  created() {}
};
</script>

<style scoped>
.doc {
  background-color: #e5e5e1;
  margin: 0 auto;
  min-height: 700px;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #000000;
}
</style>
