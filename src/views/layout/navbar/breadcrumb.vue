<!--
 * @Author: lh@metgs.com
 * @Date: 2021-11-08 18:12:28
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-04 18:14:46
 * @Description: ...
-->
<template>
  <el-breadcrumb class="app-breadcrumb" :separator-icon="ArrowRight">
    <div class="location-text">
      当前位置：
    </div>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import * as pathToRegexp from 'path-to-regexp';
import { ref, watch, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';

const levelList = ref(null);
const route = useRoute();
const router = useRouter();
const getBreadcrumb = () => {
  levelList.value = route.matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
};
const { fullPath } = toRefs(route);
watch(fullPath, () => {
  getBreadcrumb();
});
const pathCompile = (path) => {
  const { params } = route;
  const toPath = pathToRegexp.compile(path);
  return toPath(params);
};
const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(pathCompile(path));
};
getBreadcrumb();

</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: flex;
  font-size: 14px;
  line-height: 50px;
  margin-left: 5px;

  .no-redirect {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
  }
  .location-text {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
  }
  :deep(.el-breadcrumb__inner) {
    a {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
    }

  }
}
</style>
