<template>
    <el-row class="w-100 ml-3">
        <h2>我的桌面</h2>

        <div class="mt-3 h-100">
            <el-table :data="files" @row-click="open" style="width: 100%">
                <el-table-column sortable prop="title" label="文件名">
                    <template slot-scope="scope">
                        <i :class="icons[scope.row.fileType]"></i>
                        <span class="pl-3">{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="userId" label="创建者" width="180"></el-table-column>
                <el-table-column sortable prop="updateAt" label="更新时间" width="180"></el-table-column>
            </el-table>
        </div>
    </el-row>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Workbench',
    data () {
        return {
            files: [],
            tab: '',
            icons: {
                Folder: 'el-icon-folder',
                Doc: 'el-icon-document'
            },
            timer: null
        }
    },
    methods: {
        open (row, column, event) {
            if (row.fileType === 'Folder') this.$store.state.fileType = 'Folder'
            this.$store.state.fileId = row.fileId
            this.$store.state.isReadOnly = false
            this.$router.push({
                name: row.fileType,
                params: {
                    tab: row.fileId
                }
            })
        },
        clearTime () {
            let time = this.timer
            if (time) {
                window.clearTimeout(time)
                this.timer = null
            }
        },
        c1 () {
            this.clearTime()
            this.timer = window.setTimeout(() => {
                this.al(123)
            }, 300)
        },
        c2 () {
            this.clearTime()
            this.al(8798798)
        },
        al (a) {
            alert(a)
        },
        listFile (params) {
            axios({
                method: 'GET',
                url: '/api/client/file/list',
                responseType: 'JSON',
                params: params
            }).then(res => {
                this.files = res.data.list
            })
        }
    },
    created () {
        const filter = {
            userId: this.$store.state.userId || 1,
            fileId: this.$route.name === 'Folder' ? this.$route.params.tab : 0,
            fileType: this.$route.name === 'Folder' ? 'Folder' : 'Desktop'
        }
        this.listFile(filter)
    }
}
</script>

<style scoped>
.el-table--enable-row-hover .el-table__body tr:hover {
    background: rgba(0, 0, 0, 1);
    border: 1px solid #313463;
    box-shadow: 0 0 1px 1px #313463, inset 0 0 10px 5px rgba(49, 52, 99, 0.2);
}
</style>
