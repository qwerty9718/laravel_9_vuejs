import {createRouter, createWebHistory} from "vue-router";

const routes = [

    {
        path:'/',
        component: () => import('../pages/Main'),
        name:'main'
    },



    // {
    //
    //     path: '/:catchAll(.*)',
    //     component: () => import('../components/Page404'),
    //     name:'error'
    // },

]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})


export default router;

