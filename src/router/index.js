import VueRouter from 'vue-router';
import Vue from 'vue';
import chartLet from '@/pages/chartlet';

Vue.use(VueRouter);



const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: 'chartlet',
    }, {
        path: '/chartlet',
        name: 'chartlet',
        component: chartLet,
    }]
})


export default router;

