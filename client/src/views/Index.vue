<template>
    <div id="Index" class="w-100">
        <el-row class="index-today">
            <index-today :data="today"></index-today>
        </el-row>

        <el-row class="index-seven">
            <index-seven :data="{seven, today, yesterday}"></index-seven>
        </el-row>

        <el-row class="index-yesterday">
            <index-yesterday :data="yesterday"></index-yesterday>
        </el-row>

        <el-row class="index-yesterday">
            <index-client :data="client"></index-client>
        </el-row>
    </div>
</template>

<script>

import TodayData from '../components/index/TodayData.vue'
import RecentSevenDayData from '../components/index/RecentSevenDayData.vue'
import YesterdayData from '../components/index/YesterdayData.vue'
import ClientTotalData from '../components/index/ClientTotalData.vue'


export default {
    name: 'Index',
    components: {
        'index-today': TodayData,
        'index-seven': RecentSevenDayData,
        'index-yesterday': YesterdayData,
        'index-client': ClientTotalData,
    },
    data() {
        return {
            today: [],
            yesterday: [],
            seven: [],
            userCount: 0,
            techCount: 0,
            client: []
        }
    },
    created() {
        const homeData = {
            "week": [
                {
                    "time": "2019-11-24",
                    "turnover": 29768,
                    "totalOrder": 88,
                    "overTimeOrder": 0,
                    "cancelOrder": 16,
                    "transFee": 3599,
                    "couponFee": 98
                },
                {
                    "time": "2019-11-25",
                    "turnover": 24563,
                    "totalOrder": 76,
                    "overTimeOrder": 0,
                    "cancelOrder": 17,
                    "transFee": 2423,
                    "couponFee": 82
                },
                {
                    "time": "2019-11-26",
                    "turnover": 32860,
                    "totalOrder": 96,
                    "overTimeOrder": 0,
                    "cancelOrder": 25,
                    "transFee": 3343,
                    "couponFee": 180
                },
                {
                    "time": "2019-11-27",
                    "turnover": 29413,
                    "totalOrder": 98,
                    "overTimeOrder": 0,
                    "cancelOrder": 17,
                    "transFee": 2592,
                    "couponFee": 120
                },
                {
                    "time": "2019-11-28",
                    "turnover": 27134.5,
                    "totalOrder": 85,
                    "overTimeOrder": 1,
                    "cancelOrder": 14,
                    "transFee": 2973,
                    "couponFee": 60
                },
                {
                    "time": "2019-11-29",
                    "turnover": 26749,
                    "totalOrder": 83,
                    "overTimeOrder": 2,
                    "cancelOrder": 18,
                    "transFee": 2811,
                    "couponFee": 180
                },
                {
                    "time": "2019-11-30",
                    "turnover": 15485,
                    "transFee": 1337,
                    "couponFee": 68,
                    "cancelOrder": 12,
                    "overTimeOrder": 0,
                    "totalOrder": 57
                }
            ],
            "total": {
                "turnover": "2370.16万",
                "benefit": "424.09万",
                "transFee": "262.57万",
                "couponFee": "13.41万",
                "allOrder": "10.59万",
                "successOrder": "7.39万",
                "overTimeOrder": 833,
                "cancelOrder": "1.24万"
            },
            "today": {
                "time": "2019-11-30",
                "turnover": 15485,
                "transFee": 1337,
                "couponFee": 68,
                "cancelOrder": 12,
                "overTimeOrder": 0,
                "totalOrder": 57
            },
            "yesterday": {
                "time": "2019-11-29",
                "turnover": 26749,
                "totalOrder": 83,
                "overTimeOrder": 2,
                "cancelOrder": 18,
                "transFee": 2811,
                "couponFee": 180
            },
            "techCount": 325,
            "userCount": 32301,
            "roleId": 174,
            "menuId": 212
        }
        const tmpToday = homeData.today;
        const tmpYesterday = homeData.yesterday;
        const tmpSeven = homeData.week;
        const tmpClient = homeData.total;
        this.today = [
            {
                name: '交易额',
                value: tmpToday.turnover
            },
            {
                name: '总单量',
                value: tmpToday.totalOrder
            },
            {
                name: '超时单',
                value: tmpToday.overTimeOrder
            },
            {
                name: '用户取消',
                value: tmpToday.cancelOrder
            },
            {
                name: '交通费',
                value: tmpToday.transFee
            },
            {
                name: '优惠卷',
                value: tmpToday.couponFee
            },
        ]
        this.seven = {
            day: tmpSeven.map(item => item.time),
            orders: tmpSeven.map(item => item.totalOrder),
            pay: tmpSeven.map(item => item.turnover),
        }
        this.yesterday = [
            {
                name: '交易额',
                value: tmpYesterday.turnover
            },
            {
                name: '总单量',
                value: tmpYesterday.totalOrder
            },
            {
                name: '超时单',
                value: tmpYesterday.overTimeOrder
            },
            {
                name: '用户取消',
                value: tmpYesterday.cancelOrder
            },
            {
                name: '交通费',
                value: tmpYesterday.transFee
            },
            {
                name: '优惠卷',
                value: tmpYesterday.couponFee
            },
        ]
        this.userCount = homeData.userCount;
        this.techCount = homeData.techCount;
        this.client = [
            {
                name: '总交易额',
                value: tmpClient.turnover
            },
            {
                name: '总盈利额',
                value: tmpClient.benefit
            },
            {
                name: '总单量',
                value: tmpClient.allOrder
            },
            {
                name: '总成功单',
                value: tmpClient.successOrder
            },
            {
                name: '总取消单',
                value: tmpClient.cancelOrder
            },
            {
                name: '总超时单',
                value: tmpClient.overTimeOrder
            },
            {
                name: '交通费',
                value: tmpClient.transFee
            },
            {
                name: '优惠卷',
                value: tmpClient.couponFee
            }
        ]
    }
}
</script>


<style scoped>
#myChart {
    width: 100%;
    height: 400px;
}
</style>
