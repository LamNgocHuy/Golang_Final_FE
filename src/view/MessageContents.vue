<template>
    <div>
        <h1 class="content-title">List message contents</h1>
        <Table :data='messages' :headers="headers"/>
    </div>
</template>

<script>
import Table from '../components/Table.vue'
import SimulatorMixin from '../mixins/simulator'
export default {
    name: 'MessageContents',
    components: {
        Table
    },
    data() {
        return {
            headers: ['Message Title','Action', 'Status', 'Create At']
        }
    },
    mixins: [SimulatorMixin]
}
</script>

<style lang="scss" scoped>
.content-title {
    margin-top: 25px;
    margin-bottom: 25px;
}

.w-35 {
    width: 35%;
}

ul, li {
    display:inline
}
</style>