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
            <div class="content col-10">
                <div class="d-flex flex-column">
                    <h1>List message contents</h1>
                            <table class="table table-hover">
                                <tbody>
                                    <tr  v-for="(info,i) in messages" :key="i">
                                        <td class="w-50">{{info.title}}</td>
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
                
                <div>
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
.header-title{
    margin-top:50px
}
ul, li {
    display:inline
}
</style>