import ScheduleSend from '../view/ScheduleSend.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'shedule-send',
        component: ScheduleSend
    },
    // { 
    //     path: '/message-content', 
    //     name: 'message-content', 
    //     component: MessageContent
    // }
]
export default new VueRouter({
    routes
})