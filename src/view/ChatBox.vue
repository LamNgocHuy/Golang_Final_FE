<template>
    <div class="d-flex flex-column container-fluid px-0">
        <!-- Header -->
        <div class="header">

        </div>

        <div class="row container-fluid px-0">
            <!-- Sidebar -->
            <div class="col-2 pe-0 border-end">
                <Sidebar :isChat="true"/>
            </div>

            <!-- Content -->
            <div class="content col-7">
                Chat Box
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
    name: 'ChatBox',
    components: {
        Sidebar,
        Simulator
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 7vh;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    z-index: 4;
}

.content {
    background: #fff;
}

</style>