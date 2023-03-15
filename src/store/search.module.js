export const searchModule = {
    namespaced: true,
    state: () => ({
        query: '',
        status: '',
        specie: ''
    }),
    mutations: {
        setStatus(state, status) {
            state.status = status
        },
        setSpecie(state, specie) {
            state.specie = specie
        },
        setQuery(state, query) {
            state.query = query
        }
    },
    getters: {
        getStatus(state) {
            return state.status
        },
        getSpecie(state) {
            return state.specie
        },
        getQuery(state) {
            return state.query
        }
    }
}