<template>
    <div id="Account">
        <div class="account-search">
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

        <div class="account-table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>

                <el-table-column prop="name" label="姓名" width="180"></el-table-column>

                <el-table-column prop="address" label="地址"></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Account',
    data() {
        return {
            tableData: [{
                date: 'Account',
                name: 'Account',
                address: 'Account'
            }],
            ruleForm: {
                techName: '',
                techPhone: '',
                userName: '',
                userPhone: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
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
        }
    }
}
</script>


<style scoped>

</style>
