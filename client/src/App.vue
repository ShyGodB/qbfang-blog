<template>
    <el-container style="padding: 0;">
        <el-header>
            <mainnav></mainnav>
        </el-header>

        <el-main class="h-100">
            <mainbox></mainbox>
        </el-main>

        <el-footer>
            <!-- <mainfoo></mainfoo> -->
        </el-footer>
    </el-container>
</template>


<script>
import Mainnav from './components/Mainnav.vue'
import Foo from './components/Footer.vue'
import Content from './components/Content.vue'


export default {
    name: 'app',
    components: {
        'mainnav': Mainnav,
        'mainfoo': Foo,
        'mainbox': Content
    },
    data () {
        return {
            tab: ''
        }
    },
    created () {
        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem("store")) {
            this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
        }

        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload", () => {
            sessionStorage.setItem("store", JSON.stringify(this.$store.state))
        })
    }
}
</script>


<style scoped>
#mainnav {
    margin-bottom: 20px;
}
</style>
