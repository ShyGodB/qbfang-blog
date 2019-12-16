<template>
    <div id="Order">
        <div class="order-search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="技师i姓名" prop="techName">
                            <el-input v-model="ruleForm.techName"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="技师手机" prop="techPhone">
                            <el-input v-model="ruleForm.techPhone"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="用户姓名" prop="userName">
                            <el-input v-model="ruleForm.userName"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="用户手机" prop="userPhone">
                            <el-input v-model="ruleForm.userPhone"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="order-table">
            <el-table :data="orders" style="width: 100%">
                <el-table-column prop="techName" label="技师姓名" width="60"></el-table-column>

                <el-table-column prop="userName" label="用户姓名" width="120"></el-table-column>

                <el-table-column prop="userDanger" label="危险" width="60"></el-table-column>

                <el-table-column prop="userPhone" label="用户手机" width="120"></el-table-column>

                <el-table-column prop="projectsName" label="项目名称" width="160"></el-table-column>

                <el-table-column prop="source" label="来源" width="60"></el-table-column>

                <el-table-column prop="payService" label="服务费" width="80"></el-table-column>

                <el-table-column prop="payTrans" label="交通费" width="80"></el-table-column>

                <el-table-column prop="payCoupon" label="优惠卷" width="80"></el-table-column>

                <el-table-column prop="payPrice" label="实际支付" width="80"></el-table-column>

                <el-table-column prop="addTime" label="下单时间" width="180"></el-table-column>

                <el-table-column prop="state" label="状态" width="60"></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" type="info" @click="info(scope.$index, scope.row)" round>详情</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div class="pagination">
                <el-pagination ref="fenye" background @size-change="sizeChange" @current-change="change" layout="prev, pager, next" :hide-on-single-page="true" :page-count="pageNum"></el-pagination>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Order',
    data() {
        return {
            orders: [],
            allOrder: [],
            pageNum: 1,
            ruleForm: {
                techName: '',
                techPhone: '',
                userName: '',
                userPhone: '',
                pageNum: 1
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            },
            loading: true
        };
    },
    methods: {
        info(index, row) {
            this.$message({
                message: '暂未完成',
                type: 'success'
            });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        change(pageNum) {
            this.listOrder(pageNum)
        },
        sizeChange(num) {
            // console.log('funtion: sizeChange', num);
        },
        listOrder(pageIndex) {
            axios({
                method: 'post',
                url: '/api/admin/order/list',
                responseType: 'json',
                data: {
                    pageIndex: pageIndex,
                    pageSize: 10
                }
            }).then(res => {
                this.orders = res.data.data.list || [];
                this.pageNum = Math.floor((res.data.data.count || 0) / 10);
                if (res.data.data.count % 10 !== 0) {
                    this.pageNum += 1;
                }
            })
        }
    },
    created() {
        this.listOrder(1);
    }
}
</script>


<style scoped>
</style>
