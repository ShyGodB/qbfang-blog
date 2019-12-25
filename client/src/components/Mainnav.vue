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

                        <el-menu-item v-for="(menu, index) in menus" :index="(index + 1).toString()"
                            :key="index" :route="menu.route"
                            :class="menu.name === '工作空间' ? 'f-right' : ''">
                            <i class="el-icon-menu"></i>
                            {{ menu.name }}
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

                            <el-menu-item id="logout" index="7-3" @click="logout">
                                Log Out
                            </el-menu-item>
                        </el-submenu>
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
                    name: '技术分享',
                    route: { name: 'TechnologyShare', params: {} }
                },
                {
                    name: '生活',
                    route: { name: 'Life', params: {} },
                },
                {
                    name: '发现',
                    route: { name: 'Found', params: {} }

                },
                {
                    name: '工作空间',
                    route: { name: 'WorkSpace', params: { tab: 'desktop' } }
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        goToGithub() {
            window.open("https://github.com/ShyGodB/qbfang-blog");
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
