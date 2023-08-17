import axios from "axios";

export const post_ListModule = {
    state: () => ({
        url:'http://127.0.0.1:8000/api/',
        posts:[],
        page: 1,
        totalPages:null,
        limit: 10
    }),


    getters: {
        getPosts(state){
            return state.posts;
        },
        getPage(state){
            return state.page
        },
        getTotalPages(state){
            return state.totalPages
        }
    },


    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },

        setPage(state, page){
            state.page = page;
        },

        setTotalPages(state,totalPages){
            state.totalPages = totalPages;
        }
    },


    actions: {
        async findAllPosts({state, commit}){
            const response = await axios.get(state.url+'post/all?page='+state.page);
            commit('setTotalPages',response.data.last_page);
            commit('setPosts', response.data.data);
        },


        async loadMore({state, commit}){

            if (state.page < state.totalPages){
                commit('setPage',state.page+=1);
                const response = await axios.get(state.url+'post/all?page='+state.page);
                commit('setPosts',[...state.posts, ...response.data.data]);
            }

        },

        minusPage({state, commit}){
            commit('setPage',state.page-=1);
        }
    },


    namespaced: true
}
