import data from "@/data/data"

export default {
    state: {
        test: data.tests.length > 0 ? data.tests[0] : null,
        listTests: data.tests,
    },
    mutations: {
        setTest(state, payload) {
            state.test = payload
        },
    },
    actions: {
        setTest({ commit }, payload) {
            commit("setTest", payload)
        },
    },
    getters: {
        test(state) {
            return state.test
        },
        listTests(state) {
            return state.listTests
        },
    },
}
