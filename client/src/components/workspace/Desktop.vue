<template>
    <el-row class="w-100 ml-3">
        <h2> 我的桌面 </h2>

        <div class="mt-3 h-100">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
              sortable
                prop="fileName"
                label="文件名">
              </el-table-column>
              <el-table-column
              sortable
                prop="creater"
                label="创建者"
                width="180">
              </el-table-column>
              <el-table-column
              sortable
                prop="updateTime"
                label="更新时间"
                width="180">
              </el-table-column>
            </el-table>
        </div>
    </el-row>
</template>

<script>

export default {
    name: 'Workbench',
    data() {
        return {
            tableData: [{
                fileName: '面试笔试题',
                creater: 'ShyGodB',
                updateTime: '2019-12-13'
              }, {
                fileName: '方奇兵-学习',
                creater: 'ShyGodB',
                updateTime: '2019-12-14'
              }, {
                fileName: '方奇兵-工作',
                creater: 'ShyGodB',
                updateTime: '2019-12-15'
              }, {
                fileName: '备用',
                creater: 'ShyGodB',
                updateTime: '2019-12-17'
              }]
        }
    }
}
</script>


<style scoped>

</style>
