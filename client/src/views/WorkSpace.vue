<template>
    <el-row class="w-100">
        <el-col :span="3">
            <workspace-nav></workspace-nav>
        </el-col>

        <el-col :span="15" v-if="tab==='desktop'">
            <workspace-desktop></workspace-desktop>
        </el-col>

        <el-col :span="6">
            <el-dropdown class="ml-5 mt-5">
                <el-button type="primary" size="small">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="create('doc')">文档</el-dropdown-item>
                <el-dropdown-item @click.native="create('table')">表格</el-dropdown-item>
                <el-dropdown-item @click.native="create('slide')">幻灯片</el-dropdown-item>
                <el-dropdown-item @click.native="create('mindmap')">思维导图</el-dropdown-item>
                <el-dropdown-item @click.native="create('whiteboard')">白板</el-dropdown-item>
                <el-dropdown-item @click.native="create('form')">表单</el-dropdown-item>
                <el-dropdown-item @click.native="create('folder')">文件夹</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import Nav from '../components/workspace/Nav'
import Desktop from '../components/workspace/Desktop'
import { randomString } from '../../util/method'

export default {
    name: 'WorkSpace',
    components: {
      'workspace-nav': Nav,
      'workspace-desktop': Desktop
    },
    data() {
        return {
            tab: 'desktop'
        };
    },
    methods: {
        createFile(name, type) {
            axios({
                method: 'post',
                url: '/api/admin/order/list',
                responseType: 'json',
                data: {
                    name: name,
                    type: type
                }
            }).then(res => {
                console.log(res);
            })
        },
        changeRoute() {
            const tab = this.$route.params.tab;
            this.tab = tab;
        },
        create(type) {
            switch(type) {
                case 'doc':
                    this.$router.push({
                        name: 'Doc',
                        params: {
                            tab: 'aaa'
                        }
                    })
                    break;
                case 'table':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                case 'slide':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                case 'mindmap':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                case 'whiteboard':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                case 'form':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                case 'folder':
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
                default:
                    this.$message({
                        message: '此功能尚未完善，敬请期待！',
                        type: 'warning'
                    });
                    break;
            }
        }
    },
    watch: {
        "$route": "changeRoute",
    },
    created() {
        this.tab = this.$route.params.tab;
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
