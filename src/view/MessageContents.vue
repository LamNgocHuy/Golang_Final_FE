<template>
    <div class="d-flex flex-column container-fluid px-0">
        <!-- Header -->
        <div class="header">

        </div>

        <div class="row container-fluid px-0">
            <!-- Sidebar -->
            <div class="col-2 pe-0 border-end">
                <Sidebar :isMessage="true"/>
            </div>

            <!-- Content -->
            <div class="content col-10 d-flex flex-row">
                <div class="col content-body">
                    <h1 class="content-title">List message contents</h1>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th class="text-center">Action</th>
                                <th>Status</th>
                                <th>Create at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(info,i) in messages" :key="i" @click="toggleSimulator(i)">
                                <td class="w-35">{{info.title}}</td>
                                <td >
                                    <ul v-for="(icon,index) in info.icons" :key="index">
                                        <li>{{icon}}</li>
                                    </ul>
                                </td>
                                <td >{{info.status}}</td>
                                <td >{{info.createAt}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Simulator -->
                <div v-if="isSimulator">
                    <Simulator/>
                </div>
            </div>

            <!-- Simulator -->
        </div>        
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Simulator from '../components/Simulator.vue'
export default {
    name: 'MessageContents',
    components: {
        Sidebar,
        Simulator
    },
    data() {
        return {
            isHideSimulator: null,
            messages:[
                {
                    title:"test",
                    icons:["icon1","icon2"],
                    status:"Draft",
                    createAt:"06/12/2021 14:00"
                },
                {
                    title:"test",
                    icons:["icon1","icon2"],
                    status:"",
                   createAt:"06/12/2021 14:00"
                },
                {
                    title:"test",
                    icons:["icon1","icon2"],
                    status:"",
                   createAt:"06/12/2021 14:00"
                },
                {
                    title:"test",
                    icons:["icon1","icon2"],
                    status:"Draft",
                  createAt:"06/12/2021 14:00"
                },
                {
                    title:"test",
                    icons:["icon1","icon2"],
                    status:"",
                   createAt:"06/12/2021 14:00"
                },
            ],

        }
    },
    computed: {
        isSimulator() {
            return this.$store.getters.isSimulator
        }
    },
    methods: {
        async toggleSimulator(index) {
            if (this.isHideSimulator === index) {
                this.$store.dispatch('toggleSimulator')
            } else {
                this.$store.dispatch('hideSimulator')
                await new Promise(resolve => setTimeout(resolve, 200))
                this.$store.dispatch('showSimulator')
            }
            this.isHideSimulator = index
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

.content-body {
    height: 93vh;
    overflow-y: auto;
}

.header-title{
    margin-top:50px
}

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