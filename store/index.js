export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    }
}

export const actions = {
    login({commit}) {
        commit('setToken', 'truetoken')
    },
    logout({commit}) {
        commit('clearToken')
    }
}

export const getters = {
    hasToken: s => !!s.token
}