<template>
    <el-container>
        <router-view v-if="isRouterAlive" :key="$route.fullPath"></router-view>
    </el-container>
</template>


<script>
export default {
    name: "Content",
    provide () {
        return {
            reload: this.reload
        };
    },
    data () {
        return {
            isRouterAlive: true
        };
    },
    methods: {
        reload () {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true;
                console.log("reload");
            });
        }
    }
};
</script>


<style scoped>
#Content {
    margin: 0;
}
</style>
