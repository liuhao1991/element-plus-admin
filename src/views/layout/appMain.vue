<!--
 * @Author: lh@metgs.com
 * @Date: 2021-11-08 18:12:28
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-12 14:23:42
 * @Description: ...
-->
<template>
  <section class="app-main">
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </div>

  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped lang="less">
.app-main {
  height: calc(100vh - @navbarHeight);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f0f2f5;
  padding: 20px;
}

.content {
  background-color: #fff;
  padding: 18px;
  height: 100%;
}

</style>
