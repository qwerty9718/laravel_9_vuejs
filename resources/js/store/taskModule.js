import axios from "axios";



export const taskModule = {
    state: () => ({
        url: 'http://127.0.0.1:8000/api/',
        error: {title:null},
        task:{title: '', text:'',id:null},
        updateTask:{title: '', text:'',id:null, column_id:null ,images:[]},
        dropzone: null,
        secondDropZone:null
    }),
    getters: {
        getError(state){
            return state.error
        },
        getTask(state){
            return state.task;
        },

        getUpdateTask(state){
            return state.updateTask;
        },

        getDropzone(state){
            return state.dropzone;
        },

        getSecondDropZone(state){
            return state.secondDropZone;
        }

    },
    mutations: {
        setError(state, error){
            state.error.title = error;
        },
        setTask(state,title,text){
            state.task.title = title;
            state.task.text = text;
        },

        setUpTask(state,{title,text,id,column_id,images}){
            state.updateTask.title = title;
            state.updateTask.text = text;
            state.updateTask.id = id;
            state.updateTask.column_id = column_id;
            state.updateTask.images = images;
        },

        setDropzone(state,dropzone){
            state.dropzone = dropzone;
        },

        setSecondDropZone(state,secondDropZone){
            state.secondDropZone = secondDropZone;
        }

    },
    actions: {


        async updateTaskMethod({state, commit,dispatch},id){

            try {

                const data = {title: state.updateTask.title, text: state.updateTask.text};
                const response = await axios.patch(state.url+'task/'+id, data);
                dispatch('column/fetchColumns', {}, {root:true})
            }catch (e){
                commit('setError',e.response.data.message)
            }

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

            }catch (e){
                commit('setError',e.response.data.message)
            }

        },


        async getUpdateTask({state, commit,dispatch},id){
            const task = await axios.get(state.url+'task/'+id);
            commit('setUpTask',{title:task.data.title,text:task.data.text, id:task.data.id, column_id:task.data.column_id, images:task.data.images});
        },



        async deleteTask({state, commit,dispatch},id){
            const response = await axios.delete(state.url+'task/'+id);
            dispatch('column/fetchColumns', {}, {root:true});
        },

        async updateStatus({state, commit,dispatch},{id,column_id}){
            const response = await axios.patch(state.url+'task/status/'+id);
            dispatch('column/fetchColumns', {}, {root:true});
        }

    },
    namespaced: true
}
