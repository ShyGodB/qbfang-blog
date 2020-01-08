<template>
    <el-row class="w-100">
        <el-col :span="4" class="py-2 pr-2" v-for="(doc, index) in docs" :key="index">
            <div @click="info(doc)" class="share-box">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{doc.title}}</span>
                    </div>
                    <div class="text item" v-html="doc.content">
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>


<script>
export default {
    name: 'TechnologyShare',
    data () {
        return {
            docs: []
        };
    },
    methods: {
        async listDoc () {
            const res = await this.$api.post('/doc/list', { userId: 1, pageIndex: 1, fileType: 'Doc' })
            this.docs = res.data.list
        },
        info (row) {
            if (row.fileType === 'Folder') this.$store.state.fileType = 'Folder'
            this.$store.state.fileId = row.fileId
            this.$store.state.isReadOnly = false
            this.$router.push({
                name: row.fileType,
                params: {
                    tab: row.fileId
                }
            })
        }
    },
    created () {
        this.listDoc()
    }
}
</script>


<style scoped>
.share-box {
    cursor: pointer;
}

.item {
    margin-bottom: 1rem;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 100%;
    height: 15rem;
    overflow: hidden;
}
li ul {
    display: inline-block;
    margin-left: 2rem !important;
}
</style>
