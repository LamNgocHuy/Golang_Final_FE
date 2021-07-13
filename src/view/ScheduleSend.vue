<template>
    <div class="d-flex flex-column container-fluid px-0">
        <!-- Header -->
        <div class="header">

        </div>

        <div class="row container-fluid px-0">
            <!-- Sidebar -->
            <div class="col-2 pe-0 border-end">
                <Sidebar :isSchedule="true"/>
            </div>

            <!-- Content -->
            <div class="content col-10 d-flex flex-row">
                <div class="col content-body">
                    <h1 class="content-title">Schedule send message</h1>
                    <div class="accordion w-100" id="accordionSection">
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Search Schedule</button>
                            </h2>
                            <div class="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionSection">
                                <form>
                                    <div class="accordion-body row">
                                        <div class="col-10">
                                            <div class="row mb-3">
                                                <label class="col-sm-3 text-lg-right">Title</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div><!-- /.row -->
                                            <!-- .row -->
                                            <div class="row mb-3">
                                                <label class="col-sm-3 text-lg-right">Message Type</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div><!-- /.row -->
                                            <!-- .row -->
                                            <div class="row mb-3">
                                                <label class="col-sm-3 text-lg-right">Status</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div><!-- /.row -->
                                            <!-- .row -->
                                            <div class="row mb-3">
                                            <label class="col-sm-3 text-lg-right">Time</label>
                                            <div class="col-sm-8 d-flex flex-row">
                                                <input type="text" class="form-control me-2">
                                                <span class="fs-2">~</span>
                                                <input type="text" class="form-control ms-2">
                                            </div>
                                            </div><!-- /.row -->
                                        </div>
                                        <div class="col-2">
                                            <input type="submit" class="btn btn-primary" value="Search">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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
    name: 'ScheduleSend',
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
}

.content-title {
    margin-top: 25px;
    margin-bottom: 25px;
}

.content-body {
    height: 93vh;
    overflow-y: auto;
}

.title {
    letter-spacing: 1.4px;
    font-size: 2.7rem;
}
</style>