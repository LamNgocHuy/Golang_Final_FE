<template>
    <div class="d-flex flex-column container-fluid px-0">
        <!-- Header -->
        <div class="header">

        </div>

        <div class="row container-fluid px-0">
            <!-- Sidebar -->
            <div class="col-2 pe-0 border-end">
                <Sidebar :isSegment="true"/>
            </div>

            <!-- Content -->
            <div class="content col-10 d-flex flex-row">
                <div class="col">
                    <h1 class="page-title">Segment List</h1>
                </div>
                <!-- Simulator -->
                <div v-if="isSimulator" class="d-flex">
                    <Simulator/>
                </div>
            </div>

        </div>  

    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Simulator from '../components/Simulator.vue'
export default {
    name: 'SegmentList',
    components: {
        Sidebar,
        Simulator
    },
    computed: {
        isSimulator() {
            return this.$store.getters.isSimulator
        }
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
    padding-left: 20px;
    overflow-y: auto;
}

.page-title {
    margin-top: 25px;
    margin-bottom: 25px;
}

.title {
    letter-spacing: 1.4px;
    font-size: 2.7rem;
}
</style>