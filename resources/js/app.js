require('./bootstrap');
import { createApp } from 'vue';


import Index from './Index';

import router from "./router/router";
import store from "./store/index";


createApp({
    components: {Index}
})
    .use(store)
    .use(router)
    .mount('#app');
