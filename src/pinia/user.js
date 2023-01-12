/*
 * @Author: lh@metgs.com
 * @Date: 2023-01-04 14:43:42
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-05 09:35:45
 * @Description: ...
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('user', () => {

  const userInfo = ref({
    id: '',
    name: '婺城气象',
  });



  return {
    userInfo,
  };
});
