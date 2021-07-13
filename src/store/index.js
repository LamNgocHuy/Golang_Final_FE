import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    isSimulator: false,
}

const getters = {
    isSimulator() {
        return state.isSimulator
    }
}

const mutations = {
    showSimulator(state) {
        state.isSimulator = true
    },
    hideSimulator(state) {
        state.isSimulator = false
    }
}

const actions = {
    showSimulator({commit}) {
        commit('showSimulator')
    },
    hideSimulator({commit}) {
        commit('hideSimulator')
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});