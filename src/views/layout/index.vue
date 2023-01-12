<!--
 * @Author: xzz@metgs.com
 * @Date: 2022-09-20 14:58:35
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-09 18:01:45
 * @Description: ...
-->
<template>
  <div class="openSidebar app-wrapper">
    <div class="wrapper-main flex">
      <Sidebar class="sidebar-container" />
      <div class="main-container">
        <el-affix :offset="1" ref="affixRef">
          <Navbar />
        </el-affix>
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './navbar/index.vue';
import Sidebar from './sidebar/index.vue';
import AppMain from './appMain.vue';
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
:deep(.el-affix) {
  height: @navbarHeight !important;
  width: 100% !important;
  .el-affix--fixed {
    top: 0px !important;
  }
}
</style>
