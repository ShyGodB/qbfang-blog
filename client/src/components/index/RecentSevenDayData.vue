<template>
    <el-row id="seven">
        <el-col :span="14" class="seven-recent-serven">
            <div ref="myChart" id="myChart"></div>
        </el-col>

        <el-col :span="10" class="seven-user-tech">
            <div class="seven-user">
                <el-row>
                    <el-col :span="12">
                        总用户
                    </el-col>

                    <el-col :span="12">
                        {{ data.userCount }}
                    </el-col>
                </el-row>
            </div>

            <div class="seven-tech">
                <el-row>
                    <el-col :span="12">
                        总技师
                    </el-col>

                    <el-col :span="12">
                        {{ data.techCount }}
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
</template>

<script>

export default {
    name: 'seven',
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    methods: {
        showEcharts(data) {
            var option = {
                color: ['#65a031', '#fc7c00'],
                title: {
                    text: '',
                    subtext: '交易额(项目费/交通费/优惠券)',
                    top: -25
                },
                grid: {
                    height: 310, top: 35
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['单量', '交易额'],
                    top: 6
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    },
                    right: 13,
                    top: 27,
                    orient: 'vertical',
                    itemGap: 15
                },
                xAxis: [
                    {
                        type: 'category',
                        data: data.day
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: ''
                    },
                    {
                        type: 'value',
                        name: '单量',
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [{
                    name: '单量',
                    type: 'line',
                    yAxisIndex: 1,
                    data: data.orders
                },
                    {
                        name: '交易额',
                        type: 'bar',
                        data: data.pay
                    }]
            };
            var myChart = this.$echarts.init(this.$refs.myChart);
            myChart.setOption(option);
        }
    },
    mounted() {
        this.showEcharts(this.data.seven);
    }
}
</script>


<style scoped>
#myChart {
    width: 100%;
    height: 400px;
}
.seven-user-tech {
    background-color: #ff0000;
}
.seven-user-tech {
    background-color: #ff0000;
}
</style>
