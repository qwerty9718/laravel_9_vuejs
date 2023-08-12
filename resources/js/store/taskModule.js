import axios from "axios";



export const taskModule = {
    state: () => ({
        url: 'http://127.0.0.1:8000/api/',
        error: {title:null},
        task:{title: '', text:'',id:null, column_id:null ,images:[]},
        dropzone: null,
    }),
    getters: {
        getError(state){
            return state.error
        },
        getTask(state){
            return state.task;
        },

        getDropzone(state){
            return state.dropzone;
        },


    },
    mutations: {
        setError(state, error){
            state.error.title = error;
        },

        setTask(state,{title,text,id,column_id,images}){
            state.task.title = title;
            state.task.text = text;
            state.task.id = id;
            state.task.column_id = column_id;
            state.task.images = images;
        },

        setDropzone(state,dropzone){
            state.dropzone = dropzone;
        },

    },
    actions: {


        async updateTaskMethod({state, commit,dispatch},id){

            try {
                const data = new FormData();
                const files = state.dropzone.getAcceptedFiles();
                files.forEach(file => {
                    data.append('images[]', file);
                })

                data.append('title', state.task.title);
                data.append('text', state.task.text);
                data.append('column_id', state.task.column_id);
                data.append('_method', 'PATCH');

                const response = await axios.post(state.url+'task/'+id,data);


                if(response.data === 'Задача обновлена'){
                    commit('setTask','','');
                    commit('setError','');
                    files.forEach(file => {
                        state.dropzone.removeFile(file);
                    })
                    dispatch('column/fetchColumns', {}, {root:true})
                }

            }catch (e){commit('setError',e.response.data.message)}
        },

        async createTask({state, commit,dispatch}) {

            try {
                const data = new FormData();

                const files = state.dropzone.getAcceptedFiles();
                files.forEach(file => {
                    data.append('images[]', file);
                })

                data.append('title', state.task.title);
                data.append('text', state.task.text);
                data.append('column_id', 1);

                const response = await axios.post(state.url+'task',data);

                if(response.data === 'Задача создана'){
                    commit('setTask','','');
                    commit('setError','');
                    files.forEach(file => {
                        state.dropzone.removeFile(file);
                    })
                    dispatch('column/fetchColumns', {}, {root:true})
                }

            }catch (e){commit('setError',e.response.data.message)}

        },

        async deleteTask({state, commit,dispatch},id){
            const response = await axios.delete(state.url+'task/'+id);
            dispatch('column/fetchColumns', {}, {root:true});
        },

        async updateStatus({state, commit,dispatch},{id,column_id}){
            const response = await axios.patch(state.url+'task/status/'+id);
            dispatch('column/fetchColumns', {}, {root:true});
        },

        defaultTask({state, commit,dispatch}){
            commit('setTask',{title:'',text:'', id:null, column_id:1, images:[]})
        },

        async getUpdateTask({state, commit,dispatch},id){
            const task = await axios.get(state.url+'task/'+id);
            commit('setTask',{title:task.data.title,text:task.data.text, id:task.data.id, column_id:task.data.column_id, images:task.data.images});
        },

    },
    namespaced: true
}
