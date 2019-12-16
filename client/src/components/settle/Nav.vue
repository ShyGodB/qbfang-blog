<template>
    <el-row class="tac" id="Settle-nav">
        <el-col :span="24">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            :router="true"
            background-color="#ffffff"
            text-color="#000000"
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
                    name: '代理商结算',
                    route: { name: 'Settle', params: { tab: 'settlement' } }
                },
                {
                    name: '提现管理',
                    route: { name: 'Settle', params: { tab: 'cash' } }
                },
                {
                    name: '技师流水',
                    route: { name: 'Settle', params: { tab: 'techIncome' } }
                },
                {
                    name: '账户余额',
                    route: { name: 'Settle', params: { tab: 'account' } }
                },
                {
                    name: '退款管理',
                    route: { name: 'Settle', params: { tab: 'refund' } }
                },
                {
                    name: '充值管理',
                    route: { name: 'Settle', params: { tab: 'recharge' } }
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
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
