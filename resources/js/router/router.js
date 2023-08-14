import {createRouter, createWebHistory} from "vue-router";
import {cardModule} from "../store/cardModule";

const routes = [


    {
        path:'/kanban-board',
        component: () => import('../pages/Main'),
        name:'main'
    },

    {
        path:'/:id',
        component: () => import('../pages/Card'),
        name:'card',

    },

    {
        path:'/',
        component: () => import('../pages/Start-page'),
        name:'start-page'
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

