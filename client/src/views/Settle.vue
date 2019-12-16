<template>
    <el-row class="w-100">
        <el-col :span="3">
            <settle-nav></settle-nav>
        </el-col>

        <el-col :span="21" v-if="tab==='settlement'">
            <settle-settlement></settle-settlement>
        </el-col>

        <el-col :span="21" v-if="tab==='cash'">
            <settle-cash></settle-cash>
        </el-col>

        <el-col :span="21" v-if="tab==='techIncome'">
            <settle-techIncome></settle-techIncome>
        </el-col>

        <el-col :span="21" v-if="tab==='account'">
            <settle-account></settle-account>
        </el-col>

        <el-col :span="21" v-if="tab==='refund'">
            <settle-refund></settle-refund>
        </el-col>

        <el-col :span="21" v-if="tab==='recharge'">
            <settle-recharge></settle-recharge>
        </el-col>
    </el-row>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'
import Nav from '../components/settle/Nav.vue'
import Account from '../components/settle/Account.vue'
import Cash from '../components/settle/Cash.vue'
import Recharge from '../components/settle/Recharge.vue'
import Refund from '../components/settle/Refund.vue'
import Settlement from '../components/settle/Settlement.vue'
import TechIncome from '../components/settle/TechIncome.vue'

export default {
    name: 'Settle',
    components: {
        "settle-nav": Nav,
        "settle-account": Account,
        "settle-cash": Cash,
        "settle-recharge": Recharge,
        "settle-refund": Refund,
        "settle-settlement": Settlement,
        "settle-techIncome": TechIncome,
    },
    data() {
        return {
            tab: 'settlement'
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
#god, #boss {
    margin-top: 21px;
}
.register {
    width: 60%;
    min-height: 500px;
    margin: 40px auto 0;
}
.register .register-body {
    margin-top: 40px;
}
</style>
