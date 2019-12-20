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
    data() {
        return {
            tab: ''
        }
    }
}
</script>


<style scoped>
#mainnav {
    margin-bottom: 20px;
}
</style>
