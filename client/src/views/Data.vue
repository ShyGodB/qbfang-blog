<template>
    <el-row class="w-100">
        <el-col :span="3">
            <data-nav></data-nav>
        </el-col>

        <el-col :span="21" v-if="tab==='generalSituation'">
            <data-generalSituation></data-generalSituation>
        </el-col>

        <el-col :span="21" v-if="tab==='performanceAnalysis'">
            <data-performanceAnalysis></data-performanceAnalysis>
        </el-col>

        <el-col :span="21" v-if="tab==='userAnalysis'">
            <data-userAnalysis></data-userAnalysis>
        </el-col>

        <el-col :span="21" v-if="tab==='orderAnalysis'">
            <data-orderAnalysis></data-orderAnalysis>
        </el-col>

        <el-col :span="21" v-if="tab==='techAnalysis'">
            <data-techAnalysis></data-techAnalysis>
        </el-col>

        <el-col :span="21" v-if="tab==='pageTransform'">
            <data-pageTransform></data-pageTransform>
        </el-col>
    </el-row>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'
import Nav from '../components/data/Nav.vue'
import GeneralSituation from '../components/data/GeneralSituation.vue'
import PerformanceAnalysis from '../components/data/PerformanceAnalysis.vue'
import UserAnalysis from '../components/data/UserAnalysis.vue'
import OrderAnalysis from '../components/data/OrderAnalysis.vue'
import TechAnalysis from '../components/data/TechAnalysis.vue'
import PageTransform from '../components/data/PageTransform.vue'

export default {
    name: 'Setting',
    components: {
        "data-nav": Nav,
        "data-generalSituation": GeneralSituation,
        "data-performanceAnalysis": PerformanceAnalysis,
        "data-userAnalysis": UserAnalysis,
        "data-orderAnalysis": OrderAnalysis,
        "data-techAnalysis": TechAnalysis,
        "data-pageTransform": PageTransform,
    },
    data() {
        return {
            tab: 'generalSituation'
        };
    },
    methods: {
        changeRoute() {
            const tab = this.$route.params.tab;
            this.tab = tab;
        }
    },
    watch: {
        "$route": "changeRoute",
    },
    created() {
        this.tab = this.$route.params.tab;
    }
}
</script>


<style scoped>

</style>
