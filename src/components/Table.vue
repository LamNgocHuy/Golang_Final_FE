<template>
    <table class="table">
            <thead>
                <tr>
                    <th v-for="(value,index) in headers" :key="index">{{value}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value,index) in data" :key="index" >
                    <td style="width: 35%">{{value.title}}</td>
                    <td style="width: 25%" class="action">
                        <i class='bx bx-cast bx-tada-hover bx-border-circle' @click="toggleSimulator(index)"></i>
                        <i class='bx bxs-folder-open bx-tada-hover bx-border-circle'></i>
                        <i class='bx bxs-user bx-tada-hover bx-border-circle' ></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bxs-pencil bx-tada-hover bx-border-circle' ></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bx-mobile bx-tada-hover bx-border-circle' ></i>
                        <i v-if="value.status!=1 && value.status!=4" class='bx bx-trash bx-tada-hover bx-border-circle'></i>
                    </td>
                    <td style="width: 10%" >
                        <span v-if="value.status==4" class="badge badge-sent">Sent</span>
                        <span v-if="value.status==2" class="badge badge-wait">Wait to Sent</span>
                        <span v-if="value.status==1" class="badge badge-draft">Draft</span>
                        <span v-if="value.status==5" class="badge badge-fail">Failed</span>
                    </td>
                    <td style="width: 20%">{{value.createAt}}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
import SimulatorMixin from '../mixins/simulator'

export default {
    name: 'Table',
    props: {
        data: [],
        headers: []
    },
    mixins: [SimulatorMixin]
}
</script>

<style lang="scss" scoped>
.action > i {
    color: #B5B5C3;
    margin-right: 0.5rem;
    &:hover {
        color: #4A94E5;
        background: #F3F6F9;
    }
    cursor: pointer;
}

table {
    color: #3F4254;
    letter-spacing: 1px;
}

table td {
    padding: 10px 0;
}

.badge {
    font-size: 1.05rem;
}

.badge-sent {
    color: #1BC5BD;
    background-color: #C9F7F5;
}

.badge-wait {
    color: #3699FF;
    background-color: #E1F0FF;
}

.badge-draft {
    color: #B5B5C3 ;
    background-color: #F3F6F9;
}

.badge-fail {
    color: #F64E60;
    background-color: #FFE2E5;
}
</style>