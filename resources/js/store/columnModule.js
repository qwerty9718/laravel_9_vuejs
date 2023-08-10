import axios from "axios";

export const columnModule = {
    state: () => ({
        url:'http://127.0.0.1:8000/api/',
        columns: []
    }),
    getters: {
        getColumns(state){
            return state.columns;
        }
    },
    mutations: {
        setColumns(state, columns) {
            state.columns = columns
        },
    },
    actions: {
        async fetchColumns({state, commit}){
            const response = await axios.get(state.url+'columns');
            commit('setColumns',response.data);
        }
    },
    namespaced: true
}
