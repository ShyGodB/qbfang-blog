<template>
  <el-row class="w-100 ml-3">
    <h2>我的桌面</h2>

    <div class="mt-3 h-100">
      <el-table :data="files" style="width: 100%">
        <el-table-column sortable prop="title" label="文件名"></el-table-column>
        <el-table-column sortable prop="userId" label="创建者" width="180"></el-table-column>
        <el-table-column sortable prop="updateAt" label="更新时间" width="180"></el-table-column>
      </el-table>
    </div>
  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Workbench",
  data() {
    return {
      files: [
        {
          fileName: "面试笔试题",
          creater: "ShyGodB",
          updateTime: "2019-12-13"
        },
        {
          fileName: "方奇兵-学习",
          creater: "ShyGodB",
          updateTime: "2019-12-14"
        },
        {
          fileName: "方奇兵-工作",
          creater: "ShyGodB",
          updateTime: "2019-12-15"
        },
        {
          fileName: "备用",
          creater: "ShyGodB",
          updateTime: "2019-12-17"
        }
      ]
    };
  },
  methods: {
    listFile(data) {
      axios({
        method: "GET",
        url: "/api/client/user/listFile",
        responseType: "JSON",
        params: data
      }).then(res => {
        console.log(res);
        this.files = res.data.list;
      });
    }
  },
  created() {
    this.listFile({ userId: 1 });
  }
};
</script>


<style scoped>
</style>
