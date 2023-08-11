import axios from "axios";

export const cardModule = {
    state: () => ({
        url:'http://127.0.0.1:8000/api/',
        id:null,
        task:{title: '', text:'',id:null, column_id:null ,images:[]},

    }),
    getters: {
        getId(state){
            return state.id;
        },

        getTask(state){
            return state.task;
        },
    },
    mutations: {
        setId(state, id){
            state.id = id
        },

        setTask(state,{title,text,id,column_id,images}){
            state.task.title = title;
            state.task.text = text;
            state.task.id = id;
            state.task.column_id = column_id;
            state.task.images = images;
        },

    },
    actions: {
        async getTaskById({state, commit,dispatch},id){
            const data = await axios.get(state.url+'task/'+id);
            commit('setTask',{title:data.data.title,text:data.data.text, id:data.data.id, column_id:data.data.column_id, images:data.data.images});
        },
    },
    namespaced: true
}
