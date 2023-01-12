/*
 * @Author: lh@metgs.com
 * @Date: 2020-08-24 09:19:04
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-04 15:30:40
 * @Description: axios封装
 */
import axios from 'axios';
import useUserStore from '@/pinia/user';
import { ElMessage } from 'element-plus';
import router from '@/router/index';


const service = axios.create({
  // baseURL: process.env.VITE_APP_API_BASE,
  baseURL: import.meta.env.VITE_APP_API_BASE,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 40000, // request timeout
});

service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization': userStore.token,
      ...config.headers,
    };
    return config;
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const userStore = useUserStore();
    if (response.data.code === 0) {
      return response.data;
    } else {
      ElMessage({
        showClose: true,
        message: response.data.msg,
        type: 'error',
      });
      if (response.data.code === 404) {
        userStore.token = '';
        localStorage.clear();
        router.push({ name: 'Login', replace: true });
      }
      return response.data;
    }
  },
  (error) => {
    ElMessage({
      showClose: true,
      message: '网络请求失败' || error.message,
      type: 'error',
      duration: 4 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
