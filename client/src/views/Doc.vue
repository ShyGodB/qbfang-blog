<template>
    <div class="doc mx-5">
        <div class="">
            <h1>{{count}}</h1>
        </div>
        <!-- <doc-markdown :source="source"></doc-markdown> -->
    </div>
</template>


<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

export default {
    name: 'Doc',
    components: {
        'doc-markdown': VueMarkdown
    },
    data() {
        return {
            source: '',
            file: '',
            count: 0
        }
    },
    created() {
        axios({
            method: 'post',
            url: '/api/client/user/getFile',
            responseType: 'json',
            data: {
                fileId: fileId
            }.then(resp => {
                this.file = resp.data;
                this.source = resp.data.content || '';
            }).catch(err => {
                console.log(err);
            })
        })
    }
}
</script>


<style scoped>

</style>
