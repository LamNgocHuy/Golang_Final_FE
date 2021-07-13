<template>
    <div id="simulator">
        <button @click="hideSimulator">Close</button>
    </div>
</template>

<script>
export default {
    name: 'Simulator',
    methods: {
        hideSimulator() {
            this.$store.dispatch('hideSimulator')
        }
    }
}
</script>

<style lang="scss" scoped>
#simulator {
    width: 20vw;
    height: 100%;
    background-color: #333;
    margin-left: 0;
}
</style>