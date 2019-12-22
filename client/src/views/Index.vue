<template>
    <div id="Index" class="w-100">
        <h1> Webcome to qbfang's blog! </h1>
    </div>
</template>

<script>

export default {
    name: 'Index',
    components: {

    },
    data() {
        return {
            // count: this.$store.state.count
        }
    },
    methods: {
        add() {
            // this.$store.dispatch('a')
            // this.count = this.$store.state.count
        },
        subtract() {
            // this.$store.dispatch('s')
            // this.count = this.$store.state.count
        }
    },
    created() {
        // this.count = this.$store.state.count
    }
}
</script>


<style scoped>
#myChart {
    width: 100%;
    height: 400px;
}
</style>
