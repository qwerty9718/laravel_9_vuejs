import axios from "axios";

export const post_Module = {
    state: () => ({
       url:'http://95.130.227.47:81/api/',
        post:null,
        id: null

    }),
    getters: {
        getPost(state){
            return state.post;
        },

        getId(state){
            return state.id
        }

    },
    mutations: {
       setPost(state, post){
           state.post = post;
       },

        setId(state, id){
           state.id = id;
        }

    },
    actions: {
        async findPostById({state, commit},id){
            const response = await axios.get(state.url+'post/'+id);
            commit('setPost', response.data);
        },

    },


    namespaced: true
}
