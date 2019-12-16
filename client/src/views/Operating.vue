<template>
    <el-row class="w-100" id="operating">
        <el-col :span="3">
            <operating-nav></operating-nav>
        </el-col>

        <el-col :span="21" v-if="tab==='order'">
            <operating-order></operating-order>
        </el-col>

        <el-col :span="21" v-if="tab==='user'">
            <operating-user></operating-user>
        </el-col>

        <el-col :span="21" v-if="tab==='tech'">
            <operating-tech></operating-tech>
        </el-col>

        <el-col :span="21" v-if="tab==='promote'">
            <operating-promote></operating-promote>
        </el-col>

        <el-col :span="21" v-if="tab==='comment'">
            <operating-comment></operating-comment>
        </el-col>

        <el-col :span="21" v-if="tab==='coupon'">
            <operating-coupon></operating-coupon>
        </el-col>

        <el-col :span="21" v-if="tab==='project'">
            <operating-project></operating-project>
        </el-col>

        <el-col :span="21" v-if="tab==='complaint'">
            <operating-complaint></operating-complaint>
        </el-col>

        <el-col :span="21" v-if="tab==='techApply'">
            <operating-techApply></operating-techApply>
        </el-col>

        <el-col :span="21" v-if="tab==='feedback'">
            <operating-feedback></operating-feedback>
        </el-col>

        <el-col :span="21" v-if="tab==='review'">
            <operating-review></operating-review>
        </el-col>

        <el-col :span="21" v-if="tab==='techTime'">
            <operating-techTime></operating-techTime>
        </el-col>

        <el-col :span="21" v-if="tab==='alarm'">
            <operating-alarm></operating-alarm>
        </el-col>

        <el-col :span="21" v-if="tab==='apply'">
            <operating-apply></operating-apply>
        </el-col>

        <el-col :span="21" v-if="tab==='agent'">
            <operating-agent></operating-agent>
        </el-col>
    </el-row>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'
import Nav from '../components/operating/Nav.vue'
import Order from '../components/operating/order/List.vue'
import User from '../components/operating/user/List.vue'
import Tech from '../components/operating/tech/List.vue'
import Promote from '../components/operating/promote/List.vue'
import Comment from '../components/operating/Comment.vue'
import Coupon from '../components/operating/Coupon.vue'
import Project from '../components/operating/Project.vue'
import Complaint from '../components/operating/Complaint.vue'
import TechApply from '../components/operating/TechApply.vue'
import Feedback from '../components/operating/Feedback.vue'
import Review from '../components/operating/Review.vue'
import TechTime from '../components/operating/TechTime.vue'
import Alarm from '../components/operating/Alarm.vue'
import Apply from '../components/operating/Apply.vue'
import Agent from '../components/operating/Agent.vue'

export default {
    name: 'Operating',
    components: {
        "operating-nav": Nav,
        "operating-agent": Agent,
        "operating-alarm": Alarm,
        "operating-apply": Apply,
        "operating-comment": Comment,
        "operating-complaint": Complaint,
        "operating-coupon": Coupon,
        "operating-feedback": Feedback,
        "operating-order": Order,
        "operating-project": Project,
        "operating-promote": Promote,
        "operating-review": Review,
        "operating-order": Order,
        "operating-tech": Tech,
        "operating-techApply": TechApply,
        "operating-techTime": TechTime,
        "operating-user": User
    },
    data() {
        return {
            tab: 'order'
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
