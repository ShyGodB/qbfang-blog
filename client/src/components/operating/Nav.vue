<template>
    <el-row class="tac" id="operating-nav">
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
    name: 'operating-nav',
    data() {
        return {
            activeIndex: '1',
            menus: [
                {
                    name: '订单管理',
                    route: { name: 'Operating', params: { tab: 'order' } }
                },
                {
                    name: '用户管理',
                    route: { name: 'Operating', params: { tab: 'user' } }
                },
                {
                    name: '技师管理',
                    route: { name: 'Operating', params: { tab: 'tech' } }
                },
                {
                    name: '推广管理',
                    route: { name: 'Operating', params: { tab: 'promote' } }
                },
                {
                    name: '评论管理',
                    route: { name: 'Operating', params: { tab: 'comment' } }
                },
                {
                    name: '优惠卷',
                    route: { name: 'Operating', params: { tab: 'coupon' } }
                },
                {
                    name: '项目管理',
                    route: { name: 'Operating', params: { tab: 'project' } }
                },
                {
                    name: '投诉记录',
                    route: { name: 'Operating', params: { tab: 'complaint' } }
                },
                {
                    name: '资料审核',
                    route: { name: 'Operating', params: { tab: 'techApply' } }
                },
                {
                    name: '意见反馈',
                    route: { name: 'Operating', params: { tab: 'feedback' } }
                },
                {
                    name: '客户回访',
                    route: { name: 'Operating', params: { tab: 'review' } }
                },
                {
                    name: '技师时间',
                    route: { name: 'Operating', params: { tab: 'techTime' } }
                },
                {
                    name: '呼叫报警',
                    route: { name: 'Operating', params: { tab: 'alarm' } }
                },
                {
                    name: '应聘管理',
                    route: { name: 'Operating', params: { tab: 'apply' } }
                },
                {
                    name: '渠道管理',
                    route: { name: 'Operating', params: { tab: 'agent' } }
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {

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
