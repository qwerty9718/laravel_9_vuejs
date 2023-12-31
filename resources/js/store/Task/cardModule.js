import axios from "axios";

export const cardModule = {
    state: () => ({
        url:'http://95.130.227.47:81/api/',
        id:null,
        task:{title: '', text:'',id:null, column_id:null ,images:[]},
        page404:null

    }),
    getters: {
        getId(state){
            return state.id;
        },

        getTask(state){
            return state.task;
        },
        getPage404(state){
            return state.page404;
        }
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
            try {
                state.page404 = null;
                const data = await axios.get(state.url+'task/'+id);
                commit('setTask',{title:data.data.title,text:data.data.text, id:data.data.id, column_id:data.data.column_id, images:data.data.images});
            }catch (e){
                state.page404 = true;
            }

        },
    },
    namespaced: true
}
