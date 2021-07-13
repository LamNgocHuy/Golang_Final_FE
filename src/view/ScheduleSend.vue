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
                <div class="col">
                    <h1>Schedule send message</h1>
                    <div class="accordion w-50" id="accordionSection">
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Search Schedule</button>
                            </h2>
                            <div class="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionSection">
                                    <form>
                                        <div class="accordion-body row">
                                            <div class="col-10">
                                                <div class="row mb-3">
                                                <label for="maskUsphone" class="col-lg-3 text-lg-right">Title</label>
                                                <div class="col-lg-8 col-xl-6">
                                                    <input type="text" id="maskUsphone" name="maskUsphone" class="form-control" autocomplete="off" data-mask="usphone" >
                                                </div>
                                                </div><!-- /.row -->
                                                <!-- .row -->
                                                <div class="row mb-3">
                                                <label for="maskUsphonecode" class="col-lg-3 text-lg-right">Message Type</label>
                                                <div class="col-lg-8 col-xl-6">
                                                    <input type="text" id="maskUsphonecode" name="maskUsphonecode" class="form-control" autocomplete="off" data-mask="usphonecode">
                                                </div>
                                                </div><!-- /.row -->
                                                <!-- .row -->
                                                <div class="row mb-3">
                                                <label for="maskDate" class="col-lg-3 text-lg-right">Status</label>
                                                <div class="col-lg-8 col-xl-6">
                                                    <input type="text" id="maskDate" name="maskDate" class="form-control" autocomplete="off" data-mask="date">
                                                </div>
                                                </div><!-- /.row -->
                                                <!-- .row -->
                                                <div class="row mb-3">
                                                <label for="maskDateAuto" class="col-lg-3 text-lg-right">Time</label>
                                                <div class="col-lg-8 col-xl-6">
                                                    <input type="text" id="maskDateAuto" name="maskDateAuto" class="form-control" autocomplete="off" data-mask="date" data-auto-correct-date="mm/dd/yyyy">
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
                <div v-if="false" class="d-flex">
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
    padding: 30px 20px;
}

.title {
    letter-spacing: 1.4px;
    font-size: 2.7rem;
}
</style>