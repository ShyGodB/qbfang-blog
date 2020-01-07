<template>
    <el-row class="w-100 h-100">
        <el-col :span="24">
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect"
                background-color="#ffffff" text-color="#000" :router="true" active-text-color="#ff0000">

                <el-menu-item v-for="(menu, index) in menus" :index="(index + 1).toString()" :key="index"
                    :route="menu.route">
                    <i class="el-icon-menu"></i>
                    {{ menu.name }}
                </el-menu-item>

            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import Desktop from './Desktop'
import util from '../../../util'

export default {
    name: 'Settle-nav',
    data () {
        return {
            activeIndex: '1',
            menus: [
                {
                    name: '工作台',
                    route: { name: 'WorkSpace', params: { tab: 'workbench' } }
                },
                {
                    name: '我的桌面',
                    route: { name: 'WorkSpace', params: { tab: 'desktop' } }
                },
                {
                    name: '收件箱',
                    route: { name: 'WorkSpace', params: { tab: 'inbox' } }
                },
                {
                    name: '回收站',
                    route: { name: 'WorkSpace', params: { tab: 'trash' } }
                }
            ]
        }
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        },
    },
    created () {
        const activeIndex = util.checkSecondaryActiveIndex(this.$route.name, this.$route.params.tab);
        this.activeIndex = activeIndex;
    }
}
</script>


<style scoped>
</style>
