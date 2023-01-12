<!--
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:39:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-05 10:58:04
 * @Description: ...
-->
<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus';

onMounted(() => {
  ElNotification({
    duration: 0,
    title: '降水实况通报',
    message: '您好，婺城区气象台于11月08日15时59分发布大风实况通报，请及时短信查看，收到请按1。',
    position: 'bottom-right',
    type: 'warning',
  });
});
</script>

<style lang="less">
#app {
  // background: #eee;
  min-height: 100vh;
  overflow-x: hidden;
  // font-weight: 400 !important;
}
</style>
