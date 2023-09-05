import axios from "axios";
import {computed} from "vue";
const defaultPost = {title: '', text:'',id:null,images:[]}
export const dropzone_Module = {
    state: () => ({
        url:'http://95.130.227.47:81/api/',
        dropzone: null,
        post:{title: '', text:'',id:null,images:[]},
        error: {title:null},

    }),
    getters: {
        getDropzone(state){
            return state.dropzone;
        },

        getPost(state){
            return state.post;
        },
        getError(state){
            return state.error
        },

    },
    mutations: {
        setDropzone(state,dropzone){
            state.dropzone = dropzone;
        },

        setPost(state,post){
            state.post.title = post.title;
            state.post.text = post.text;
            state.post.id = post.id;
            state.post.images = post.images;
        },
        setError(state, error){
            state.error.title = error;
        },
    },
    actions: {


        defaultPost({state, commit,dispatch}){
            commit('setPost',defaultPost);
        },

        async getUpdatePost({state, commit,dispatch},id){
            const post = await axios.get(state.url+'post/'+id);
            const upPost = {title: post.data.title, text: post.data.text,id:post.data.id,images:post.data.images};
            commit('setPost',upPost);
        },


        async updatePost({state, commit,dispatch},id){

            try {
                const data = new FormData();
                const files = state.dropzone.getAcceptedFiles();
                files.forEach(file => {
                    data.append('images[]', file);
                })

                data.append('title', state.post.title);
                data.append('text', state.post.text);
                data.append('_method', 'PATCH');

                const response = await axios.post(state.url+'post/'+id,data);


                if(response.data === 'Пост обновлен'){
                    commit('setTask',defaultPost);
                    commit('setError','');
                    files.forEach(file => {
                        state.dropzone.removeFile(file);
                    })
                    dispatch('postList/minusPage', {}, {root:true})
                    dispatch('postList/findAllPosts', {}, {root:true})
                }

            }catch (e){commit('setError',e.response.data.message)}
        },

        async createPost({state, commit,dispatch}) {

            try {
                const data = new FormData();

                const files = state.dropzone.getAcceptedFiles();
                files.forEach(file => {
                    data.append('images[]', file);
                })

                data.append('title', state.post.title);
                data.append('text', state.post.text);

                const response = await axios.post(state.url+'post',data);

                if(response.data === 'Пост создан'){
                    commit('setPost',defaultPost);
                    commit('setError','');
                    files.forEach(file => {
                        state.dropzone.removeFile(file);
                    })
                    dispatch('postList/findAllPosts', {}, {root:true})
                }

            }catch (e){commit('setError',e.response.data.message)}

        },


        async deletePost({state, commit,dispatch},id){
            const response = await axios.delete(state.url+'post/'+id);
            dispatch('postList/findAllPosts', {}, {root:true})
        },

    },


    namespaced: true
}
