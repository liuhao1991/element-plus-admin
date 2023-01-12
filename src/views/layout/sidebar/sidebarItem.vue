<!--
 * @Author: lh@metgs.com
 * @Date: 2021-05-25 10:02:04
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-12 14:09:02
 * @Description: ...
-->
<template>
  <div>
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="pathHandler(onlyOneChild.path)">
        <el-menu-item
          :class="{ 'submenu-title-noDropdown': !isNest }"
          :index="pathHandler(onlyOneChild.path)"
        >
          <el-icon v-if="item.meta">
            <component :is="icons[item.meta.icon]">
            </component>
          </el-icon>
          <template #title>
            <div class="title flex-jcsb-c">
              <div class="title-text">
                {{ onlyOneChild.meta.title }}
              </div>
            </div>
          </template>
        </el-menu-item>
      </app-link>
    </template>
    <template v-else>
      <el-sub-menu ref="subMenu" popper-append-to-body :index="basePath">
        <template #title>
          <el-icon v-if="item.meta && item.meta.icon">
            <component :is="icons[item.meta.icon]">
            </component>
          </el-icon>
          <span v-if="item.meta">
            {{ item.meta.title }}
          </span>
        </template>

        <sidebar-item
          v-for="(child, index) in item.children"
          :key="index"
          :is-nest="true"
          :item="child"
          :base-path="pathHandler(`${child.path}`)"
          class="nest-menu"
        />
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import AppLink from './link.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { List, UserFilled } from '@element-plus/icons-vue';

const icons = {
  List,
  UserFilled,
};

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: '',
  },
});
const onlyOneChild = ref(null);
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    if (item.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });
  // console.log(onlyOneChild.value);
  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    // onlyOneChild.value = showingChildren[0];
    return true;
  }
  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
    return true;
  }
  return false;
};

const pathHandler = (routePath) => {
  if (routePath === '') {
    return props.basePath;
  }
  if (props.basePath === '/') {
    return props.basePath + routePath;
  }
  return props.basePath + '/' + routePath;
};
// 当前路由
const route = useRoute();
const activeMenu = ref('');
activeMenu.value = route.path;

watch(
  () => route.path,
  () => {
    activeMenu.value = route.path;
  }
);
</script>

<style lang="less" scoped>
:deep(.el-menu-item) {
  height: 40px;
  line-height: 40px;
  border-radius: 3px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  padding-right: 8px;
  .el-icon {
    color: #fff;
  }
  .title {
    flex: 1;
    .title-text {
      font-size: 14px;
      font-weight: 400;
      // color: #fff;
    }
  }
}
</style>

