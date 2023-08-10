import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import Dropzone from 'dropzone';

export const taskModule = {
    state: () => ({
        url: 'http://127.0.0.1:8000/api/',
        error: {title:null},
        task:{title: '', text:'',id:null},
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

        setDropzone(state,dropzone){
            state.dropzone = dropzone;
        }

    },
    actions: {

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

        // async createTask({state, commit,dispatch}) {
        //
        //     try {
        //         const data = {title: state.task.title, text: state.task.text, column_id: 1};
        //         const response = await axios.post(state.url+'task',data);
        //         commit('setTask','','');
        //         commit('setError','');
        //         dispatch('column/fetchColumns', {}, {root:true})
        //
        //     }catch (e){
        //         commit('setError',e.response.data.message)
        //     }
        //
        // },

        async deleteTask({state, commit,dispatch},id){
            const response = await axios.delete(state.url+'task/'+id);
            dispatch('column/fetchColumns', {}, {root:true});
        }

    },
    namespaced: true
}
