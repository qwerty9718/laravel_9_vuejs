import {createRouter, createWebHistory} from "vue-router";

const routes = [

    {
        path:'/',
        component: () => import('../pages/Main'),
        name:'main'
    },



    {
        path:'/:id',
        component: () => import('../pages/Card'),
        name:'card'
    },

    {
        path:'/test',
        component: () => import('../pages/Test'),
        name:'test'
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

