<template>
    <div class="d-flex flex-column">
        <!-- Header -->
        <div class="header">

        </div>

        <div class="row">
            <!-- Sidebar -->
            <div class="col-2 border-end">
                <Sidebar/>
            </div>

            <!-- Content -->
            <div class="content col-7">

            </div>

            <!-- Simulator -->
            <div class="col-3 border-start">
                <Simulator/>
            </div>
        </div>        
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Simulator from '../components/Simulator.vue'
export default {
    name: 'ScheduleSend',
    components: {
        Sidebar,
        Simulator
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 10vh;
    border-bottom: 1px solid #333;
    background: #fff;
}

</style>