<template>
    <!-- Content -->
    <div>
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
                                    <input type="datetime-local" class="form-control me-2">
                                    <span class="fs-2">~</span>
                                    <input type="datetime-local" class="form-control ms-2">
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
        <Table :data='messages' :headers='headers'/>
    </div>
</template>

<script>
import Table from '../components/Table.vue'
import SimulatorMixin from '../mixins/simulator'
export default {
    name: 'ScheduleSend',
    components: {
        Table,
    },
    data() {
        return {
            headers: ['Schedule Title','Action', 'Status', 'Send Time'],
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

</style>