<template>
    <div id="mainnav">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-menu :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#ffffff"
                    text-color="#000000"
                    active-text-color="#ff0000"
                    :router="true"
                    @select="handleSelect">

                        <el-menu-item v-for="(menu, index) in menus" :index="(index + 1).toString()" :key="index" :route="menu.route">
                            <i class="el-icon-menu"></i>
                            {{ menu.name }}
                        </el-menu-item>


                        <el-menu-item index="6" class="f-right">
                            退出
                        </el-menu-item>

                        <el-submenu index="7" class="content-top-right" style="float:right;">
                            <template slot="title">
                                <img src="../../public/img/tt.png" style="width:44px;height:44px;">
                            </template>
                            <el-menu-item index="7-1">
                                <router-link to="/dash">Home</router-link>
                            </el-menu-item>

                            <el-menu-item index="7-2" @click="goToGithub()">
                                Github
                            </el-menu-item>

                            <el-menu-item id="logout" index="7-3" @click="logout">Log Out</el-menu-item>
                        </el-submenu>

                        <el-menu-item index="8" class="f-right">
                            管理员：测试F
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import check from '../../util/check'

export default {
    name: 'mainnav',
    data() {
        return {
            activeIndex: '1',
            menus: [
                {
                    name: '主页',
                    route: { name: 'Index', path: '/' }
                },
                {
                    name: '运营管理',
                    route: { name: 'Operating', params: { tab: 'order' } }
                },
                {
                    name: '结算中心',
                    route: { name: 'Settle', params: { tab: 'settlement' } },
                },
                {
                    name: '数据分析',
                    route: { name: 'Data', params: { tab: 'generalSituation' } }

                },
                {
                    name: '系统设置',
                    route: { name: 'Setting', params: { tab: 'userList' } }
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        goToGithub() {
            window.open("https://github.com/ShyGodB/admin.edtuina");
        },
        logout() {
            console.log(1111);
        }
    },
    created() {
        this.activeIndex = check.checkMainActiveIndex(this.$route.name);
    }
}
</script>


<style scoped>

</style>
