/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:39:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-05 10:52:26
 * @Description: ...
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
import 'normalize.css/normalize.css';
import App from './App.vue';
import router from './router';
/**
 * @description 导入加载进度条，防止首屏加载时间过长，用户等待
 * */
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
Nprogress.configure({ showSpinner: false, ease: 'ease', speed: 500 });
Nprogress.start();
// import 'uno.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

