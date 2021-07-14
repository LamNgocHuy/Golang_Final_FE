import Vuex from 'vuex'
import Vue from 'vue'
import simulator from './modules/simulator'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store ({
    modules: {
        simulator: simulator, //namespaced: file import
        loader: loader
    }
});