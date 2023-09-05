import axios from "axios";

export const columnModule = {
    state: () => ({
       url:'http://95.130.227.47:81/api/',
        columns: [],
        showTable: false,
        tasksArray: []
    }),
    getters: {
        getColumns(state){
            return state.columns;
        },
        getShowTable(state){
            return state.showTable;
        },
        getTasksArray(state){
            return state.tasksArray;
        }
    },
    mutations: {
        setColumns(state, columns) {
            state.columns = columns
        },
    },
    actions: {
        async fetchColumns({state, commit}){
            state.tasksArray =[];
            const response = await axios.get(state.url+'columns');
            commit('setColumns',response.data);
            await response.data.forEach(file => {
                file.tasks.forEach(task => {
                    state.tasksArray.push(task);
                })
            })
        },
    },
    namespaced: true
}
