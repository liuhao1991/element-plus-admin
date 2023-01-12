<!--
 * @Author: lh@metgs.com
 * @Date: 2021-11-08 18:12:28
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-12 14:05:15
 * @Description: ...左侧导航
-->
<template>
  <div>
    <Logo />
    <div class="sidebar-navbar">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="menu-wrapper">
          <el-menu
            :default-active="activeMenu"
            :collapse="collapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="variables.menuActiveText"
            :unique-opened="false"
            :collapse-transition="false"
            mode="vertical"
          >
            <SidebarItem
              v-for="(route, index) in routes"
              :key="index"
              :item="route"
              :base-path="route.path"
            />
          </el-menu>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import Logo from './logo.vue';
import SidebarItem from './sidebarItem.vue';
// // css module启用，文件名需为.module.格式。
import variables from '@/style/variables.module.less';
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const routes = computed(() => router.options.routes.filter(i => !i.meta.hidden));

const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const collapse = ref(false);
</script>

<style lang="less" scoped>
.sidebar-navbar {
  height: calc(100vh - 56px);
  .menu-wrapper {
    padding: 8px;
  }
}
</style>
