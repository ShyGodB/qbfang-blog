<template>
    <el-row class="tac" id="Settle-nav">
        <el-col :span="24">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#ffffff"
            text-color="#000"
            :router="true"
            active-text-color="#ff0000">

                <el-menu-item v-for="(menu, index) in menus" :index="(index + 1).toString()" :key="index" :route="menu.route">
                    <i class="el-icon-menu"></i>
                    {{ menu.name }}
                </el-menu-item>

            </el-menu>
        </el-col>
    </el-row>
</template>


<script>
import check from '../../../util/check'

export default {
    name: 'Settle-nav',
    data() {
        return {
            activeIndex: '1',
            menus: [
                {
                    name: '用户列表',
                    route: { name: 'Setting', params: { tab: 'userList' } }
                },
                {
                    name: '角色配置',
                    route: { name: 'Setting', params: { tab: 'roleConfig' } }
                },
                {
                    name: '权限配置',
                    route: { name: 'Setting', params: { tab: 'menuConfig' } }
                },
                {
                    name: '技师手法设置',
                    route: { name: 'Setting', params: { tab: 'techMethod' } }
                },
                {
                    name: '代理商分级',
                    route: { name: 'Setting', params: { tab: 'agentLevel' } }
                },
                {
                    name: '时间管理',
                    route: { name: 'Setting', params: { tab: 'timeManage' } }
                },
                {
                    name: '公告发布',
                    route: { name: 'Setting', params: { tab: 'announcement' } }
                },
                {
                    name: '提现时间',
                    route: { name: 'Setting', params: { tab: 'withdrawalTime' } }
                },
                {
                    name: '广告推送',
                    route: { name: 'Setting', params: { tab: 'advertisePush' } }
                },
                {
                    name: '企业账号管理',
                    route: { name: 'Setting', params: { tab: 'enterpriseManage' } }
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    created() {
        const activeIndex = check.checkSecondaryActiveIndex(this.$route.name, this.$route.params.tab);
        this.activeIndex = activeIndex;
    }
}
</script>


<style scoped>
</style>
