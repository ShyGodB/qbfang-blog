<template>
    <el-row class="w-100">
        <el-col :span="3">
            <workspace-nav></workspace-nav>
        </el-col>

        <el-col :span="15">
            <workspace-desktop v-if="tab==='desktop' || routeName==='Folder'"></workspace-desktop>
            <div v-if="tab!=='desktop' && routeName!=='Folder'">占位符</div>
        </el-col>

        <el-col :span="6">
            <el-dropdown class="ml-5 mt-5">
                <el-button type="primary" size="small">
                    更多菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="create('Doc')">文档</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Table')">表格</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Slide')">幻灯片</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Mindmap')">思维导图</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Whiteboard')">白板</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Form')">表单</el-dropdown-item>
                    <el-dropdown-item @click.native="create('Folder')">文件夹</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
import Nav from '../components/workspace/Nav'
import Desktop from '../components/workspace/Desktop'

export default {
    name: 'WorkSpace',
    inject: ['reload'],
    components: {
        'workspace-nav': Nav,
        'workspace-desktop': Desktop
    },
    data () {
        return {
            tab: 'desktop',
            routeName: ''
        }
    },
    methods: {
        createFolder () {
            this.$prompt('新文件夹', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPlaceholder: '请输入文件夹的名称',
            }).then(({ value }) => {
                axios({
                    method: 'POST',
                    url: '/api/client/file/create',
                    responseType: 'JSON',
                    data: {
                        fileType: 'Folder',
                        fileName: value,
                        parentFileId: this.$route.name === 'Folder' ? this.$route.params.tab : 'Desktop',
                        parentFileType: this.$route.name === 'Folder' ? 'Folder' : 'Desktop'
                    }
                }).then(res => {
                    if (res.data.success) {
                        this.$store.state.fileType = 'Folder'
                        this.$message.success('创建成功！')
                        this.reload()
                    } else {
                        this.$message.error('请求错误！')
                    }
                }).catch(err => {
                    this.$message.error('请求错误！')
                    throw err
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                })
            })
        },
        createFile (fileType) {
            axios({
                method: 'POST',
                url: '/api/client/file/create',
                responseType: 'JSON',
                data: {
                    fileType: fileType,
                    parentFileId: this.$store.state.fileType === 'Folder' ? this.$store.state.fileId : 'Desktop',
                    parentFileType: this.$store.state.fileType === 'Folder' ? 'Folder' : 'Desktop'
                }
            }).then(res => {
                if (res.data.success) {
                    this.$store.state.fileId = res.data.fileId
                    this.$store.state.fileType = fileType
                    this.$router.push({
                        name: fileType,
                        params: {
                            tab: res.data.fileId
                        }
                    })
                } else {
                    this.$message.error('请求错误！')
                }
            }).catch(err => {
                this.$message.error('请求错误！')
                throw err
            })
        },
        changeRoute () {
            const tab = this.$route.params.tab
            this.tab = tab
        },
        create (fileType) {
            // const { parentFileId, parentFileType } = checkFileParams(this.$route, this.$store.state)
            if (fileType === 'Folder') {
                this.createFolder()
            } else {
                this.createFile(fileType)
            }
        }
    },
    watch: {
        $route: 'changeRoute'
    },
    created () {
        this.tab = this.$route.params.tab
        this.routeName = this.$route.name
    }
}
</script>

<style scoped>
.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>
