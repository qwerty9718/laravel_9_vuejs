import {createRouter, createWebHistory} from "vue-router";
import {cardModule} from "../store/Task/cardModule";

const routes = [
    {
        path:'/',
        component: () => import('../pages/Start-page'),
        name:'start-page'
    },

    {
        path:'/kanban-board',
        component: () => import('../pages/Task/Main'),
        name:'main'
    },

    {
        path:'/:id',
        component: () => import('../pages/Task/Card'),
        name:'card',

    },



    {
        path:'/posts',
        component: () => import('../pages/Post/Posts'),
        name:'all-posts'
    },


    {
        path:'/posts/:id',
        component: () => import('../pages/Post/SinglePost'),
        name:'single-post'
    },



    {

        path: '/:pathMatch(.*)*',
        component: () => import('../pages/Page404'),
        name:'error'
    },

]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})


export default router;

