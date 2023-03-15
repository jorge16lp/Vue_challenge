export const charactersModule = {
    namespaced: true,
    state: () => ({
        characters: []
    }),
    actions: {
        async fetchCharacters({ commit, rootGetters }) {
            let url = 'https://rickandmortyapi.com/api/character/?';
            fetch(url + 'name=' + rootGetters['search/getQuery']
                + '&status=' + rootGetters['search/getStatus']
                + '&species=' + rootGetters['search/getSpecie'])
                .then(response => response.json())
                .then(data => {
                    commit('setCharacters', data.results);
                });
        }
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters
        }
    },
    getters: {
        getCharacters(state) {
            return state.characters
        }
    }
}