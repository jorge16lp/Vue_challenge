import {Module} from "vuex";
import {CharactersState} from '@vue/runtime-core';

declare module '@vue/runtime-core' {
    interface CharactersState {
        characters: []
    }
}

export const charactersModule: Module<CharactersState, any> = {
    namespaced: true,
    actions: {
        async fetchCharacters({ commit, rootGetters }) {
            let url: string = 'https://rickandmortyapi.com/api/character/?';
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
        setCharacters(state: CharactersState, characters: any): void {
            state.characters = characters
        }
    },
    getters: {
        getCharacters(state: CharactersState): any {
            return state.characters
        }
    }
}