import {Module} from "vuex";
import {SearchState} from '@vue/runtime-core';

declare module '@vue/runtime-core' {
    interface SearchState {
        query: string,
        status: string,
        specie: string
    }
}

export const searchModule: Module<SearchState, any> = {
    namespaced: true,
    state: () => ({
        query: '',
        status: '',
        specie: ''
    }),
    mutations: {
        setStatus(state: SearchState, status: string): void {
            state.status = status
        },
        setSpecie(state: SearchState, specie: string): void {
            state.specie = specie
        },
        setQuery(state: SearchState, query: string): void {
            state.query = query
        }
    },
    getters: {
        getStatus(state: SearchState): string {
            return state.status
        },
        getSpecie(state: SearchState): string {
            return state.specie
        },
        getQuery(state: SearchState): string {
            return state.query
        }
    }
}