import axios from "axios";

export const postModule = {
    state: () => ({

        like: 1

    }),
    getters: {

        getLike(state) {
            return state.like;
        }

    },
    mutations: {
        setLike(state, like) {
            state.like = like
        },

    },
    actions: {

        addLike({state, commit}) {
            commit('setLike', state.like += 1);
        },

        addDisLike({state, commit}) {
            if (state.like > 0){
                commit('setLike', state.like -= 1);
            }
        }
    },
    namespaced: true
}
