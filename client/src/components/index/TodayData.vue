<template>
    <el-container id="Today">

        <el-row class="w-100">
            <el-col :span="4" v-for="(item, index) in data" :key="index">
                <p> {{ item.name }} </p>
                <p> {{ item.value }} </p>
            </el-col>
        </el-row>

    </el-container>
</template>

<script>

export default {
    name: 'Today',
    props: {
        data: {
            type: Array,
            default: []
        }
    },
}
</script>


<style scoped>
#myChart {
    width: 100%;
    height: 400px;
}
</style>
