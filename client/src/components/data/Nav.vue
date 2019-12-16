<template>
    <el-row class="tac" id="Settle-nav">
        <el-col :span="24">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            background-color="#ffffff"
            text-color="#000000"
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
    name: 'Data-nav',
    data() {
        return {
            activeIndex: '1',
            menus: [
                {
                    name: '概况',
                    route: { name: 'Data', params: { tab: 'generalSituation' } }
                },
                {
                    name: '业绩分析',
                    route: { name: 'Data', params: { tab: 'performanceAnalysis' } }
                },
                {
                    name: '客户分析',
                    route: { name: 'Data', params: { tab: 'userAnalysis' } }
                },
                {
                    name: '订单分析',
                    route: { name: 'Data', params: { tab: 'orderAnalysis' } }
                },
                {
                    name: '技师分析',
                    route: { name: 'Data', params: { tab: 'techAnalysis' } }
                },
                {
                    name: '页面转化',
                    route: { name: 'Data', params: { tab: 'pageTransform' } }
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
