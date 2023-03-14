import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        query: '',
        characters: [],
        status: '',
        specie: ''
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters
        },
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
        getCharacters(state) {
            return state.characters
        },
        getStatus(state) {
            return state.status
        },
        getSpecie(state) {
            return state.specie
        }
    },
    actions: {
        async fetchCharacters({commit, state}) {
            let url = 'https://rickandmortyapi.com/api/character/?';
            fetch(url + 'name=' + state.query
                + '&status=' + state.status
                + '&species=' + state.specie)
                .then(response => response.json())
                .then(data => {
                    commit('setCharacters', data.results);
                });
        }
    }
})

createApp(App).use(store).mount('#app')
