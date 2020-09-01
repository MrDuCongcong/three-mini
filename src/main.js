import Vue from 'vue';
import App from './app';
import router from './router';

import { Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Menu);

window._Vue = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});