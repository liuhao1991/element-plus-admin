/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:42:41
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-12 14:21:32
 * @Description: ...
 */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import Layout from '@/views/layout/index.vue';
// import useUserStore from '@/pinia/user';

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { sidebar: true, icon: 'List', title: '消息管理' },
    redirect () {
      return { name: 'MessageList' };
    },
    children: [
      {
        path: 'list',
        name: 'MessageList',
        component: () => import('@/views/message/list/index.vue'),
        meta: { title: '消息列表' },
      },
      {
        path: 'statistic',
        name: 'MessageStatistic',
        component: () => import('@/views/message/statistic/index.vue'),
        meta: { title: '消息统计' },
      },
    ],
  },
  {
    path: '/member',
    component: Layout,
    meta: { sidebar: true, icon: 'UserFilled' },
    children: [
      {
        path: '',
        name: 'Member',
        component: () => import('@/views/member/index.vue'),
        meta: { title: '联系人管理' },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = import.meta.env.VITE_APP_TITLE + ' - ' + to.meta.title;
  // const user = useUserStore();
  // const token = getToken();
  // if (token) {
  //   if (user.name) {
  //     next();
  //   } else {
  //     try {
  //       await user.handleGetUserInfo({ token });
  //       if (!user.isAdmin) {
  //         ElMessage({
  //           type: 'error',
  //           message: '没有权限',
  //         });
  //         removeToken();
  //         gotoLogin();
  //         // window.location.href = '/grid-monitor/';
  //       } else {
  //         next();
  //       }
  //     } catch (error) {
  //       ElMessage({
  //         type: 'error',
  //         message: error.msg,
  //       });
  //       removeToken();
  //       gotoLogin();
  //     }
  //   }
  // } else {
  //   gotoLogin();
  // }
  next();
  // 返回 false 以取消导航

});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

router.onError(() => {
  // 路由发生错误后销毁进度条
  NProgress.remove();
});

export default router;
