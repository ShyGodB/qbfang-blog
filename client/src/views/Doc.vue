<template>
    <div class="doc w-100">
        <el-row class="h-100">
            <el-col :span="5">左</el-col>

            <el-col :span="14" class="px-3 h-100 bg-white">
                <doc-read v-if="isReadOnly" />
                <doc-edit v-if="!isReadOnly" />
            </el-col>

            <el-col :span="5">右</el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "axios";
import DocRead from "../components/doc/Read.vue";
import DocEdit from "../components/doc/Edit.vue";

export default {
    name: "Doc",
    components: {
        'doc-read': DocRead,
        'doc-edit': DocEdit,
    },
    data () {
        return {
            isReadOnly: this.$store.state.isReadOnly
        }
    }
};
</script>

<style scoped>
.doc {
    background-color: #e5e5e1;
    margin: 0 auto;
    min-height: 700px;
}
.line {
    width: 100%;
    height: 1px;
    background-color: #000000;
}
</style>
