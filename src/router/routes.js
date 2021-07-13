import ScheduleSend from '../view/ScheduleSend.vue'
import MessageContents from '../view/MessageContents.vue'
import SegmentList from '../view/SegmentList.vue'
import ChatBox from '../view/ChatBox.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "shedule-send",
        component: ScheduleSend
    },
    { 
        path: "/message-contents", 
        name: "message-contents", 
        component: MessageContents
    },
    { 
        path: "/segment-list", 
        name: "segment-list", 
        component: SegmentList
    },
    { 
        path: "/chat-box", 
        name: "chat-box", 
        component: ChatBox
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router