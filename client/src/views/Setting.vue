<template>
    <el-row class="w-100">
        <el-col :span="3">
            <setting-nav></setting-nav>
        </el-col>

        <el-col :span="21" v-if="tab==='userList'">
            <setting-userList></setting-userList>
        </el-col>

        <el-col :span="21" v-if="tab==='roleConfig'">
            <setting-roleConfig></setting-roleConfig>
        </el-col>

        <el-col :span="21" v-if="tab==='menuConfig'">
            <setting-menuConfig></setting-menuConfig>
        </el-col>

        <el-col :span="21" v-if="tab==='techMethod'">
            <setting-techMethod></setting-techMethod>
        </el-col>

        <el-col :span="21" v-if="tab==='agentLevel'">
            <setting-agentLevel></setting-agentLevel>
        </el-col>

        <el-col :span="21" v-if="tab==='timeManage'">
            <setting-timeManage></setting-timeManage>
        </el-col>

        <el-col :span="21" v-if="tab==='announcement'">
            <setting-announcement></setting-announcement>
        </el-col>

        <el-col :span="21" v-if="tab==='withdrawalTime'">
            <setting-withdrawalTime></setting-withdrawalTime>
        </el-col>

        <el-col :span="21" v-if="tab==='advertisePush'">
            <setting-advertisePush></setting-advertisePush>
        </el-col>

        <el-col :span="21" v-if="tab==='enterpriseManage'">
            <setting-enterpriseManage></setting-enterpriseManage>
        </el-col>
    </el-row>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'
import Nav from '../components/setting/Nav.vue'
import UserList from '../components/setting/UserList.vue'
import RoleConfig from '../components/setting/RoleConfig.vue'
import MenuConfig from '../components/setting/MenuConfig.vue'
import TechMethod from '../components/setting/TechMethod.vue'
import AgentLevel from '../components/setting/AgentLevel.vue'
import TimeManage from '../components/setting/TimeManage.vue'
import Announcement from '../components/setting/Announcement.vue'
import WithdrawalTime from '../components/setting/WithdrawalTime.vue'
import AdvertisePush from '../components/setting/AdvertisePush.vue'
import EnterpriseManage from '../components/setting/EnterpriseManage.vue'

export default {
    name: 'Setting',
    components: {
        "setting-nav": Nav,
        "setting-userList": UserList,
        "setting-roleConfig": RoleConfig,
        "setting-menuConfig": MenuConfig,
        "setting-techMethod": TechMethod,
        "setting-agentLevel": AgentLevel,
        "setting-timeManage": TimeManage,
        "setting-announcement": Announcement,
        "setting-withdrawalTime": WithdrawalTime,
        "setting-advertisePush": AdvertisePush,
        "setting-enterpriseManage": EnterpriseManage,
    },
    data() {
        return {
            tab: 'userList'
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
