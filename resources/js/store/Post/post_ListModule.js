import axios from "axios";

export const post_ListModule = {
    state: () => ({
        url:'http://127.0.0.1:8000/api/',
        posts:[],

    }),
    getters: {
        getPosts(state){
            return state.posts;
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        }
    },
    actions: {
        async findAllPosts({state, commit}){
            const response = await axios.get(state.url+'post/all');
            commit('setPosts', response.data);
        }
    },


    namespaced: true
}
