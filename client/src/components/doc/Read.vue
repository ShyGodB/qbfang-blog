<template>
    <div id="DocRead">

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "DocRead",
    data () {
        return {
            doc: {}
        };
    },
    methods: {
        getFile (data) {
            axios({
                method: "GET",
                url: "/api/client/file/get",
                responseType: "json",
                params: data
            }).then(res => {
                if (res.data.success) {
                    this.doc = res.data.data;
                    document.getElementById('DocRead').innerHTML = this.doc.content
                } else {
                    this.$message.error('请求错误！')
                }

            });
        },
    },
    created () {
        this.getFile({ fileId: this.$store.state.fileId })
    }
};
</script>

<style scoped>
</style>
