<!--
 * @Author: zjj@metgs.com
 * @Date: 2022-07-05 14:52:12
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-05 10:37:40
 * @Description: ... 右侧顶部
-->
<template>
  <div class="navbar">
    <!-- 导航栏 -->
    <Breadcrumb class="breadcrumb-container" />
    <!-- 登出功能等 -->
    <div class="right-menu flex-c">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span>
            {{ user.userInfo.name }}
          </span>
          <el-icon class="el-icon--right">
            <CaretBottom />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item divided @click="logout">
              <span style="display: block">
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { CaretBottom } from '@element-plus/icons-vue';
import Breadcrumb from './breadcrumb.vue';
import { useRouter } from 'vue-router';
// import { removeToken } from '@/util/auth.js';
import userStore from '@/pinia/user';
const router = useRouter();

const user = userStore();
const logout = () => {
  // removeToken();
  router.push({ name: 'Login' });
};
</script>

<style lang="less" scoped>
.navbar {
  height: @navbarHeight;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding-left: 10px;
  border-bottom: 1px solid #D6DBE3;

  .hamburger-container {
    // display: none;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-tap-highlight-color: transparent;
    i {
      line-height: 50px;
      font-size: 24px;
      transition: all 0.3s;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
    .el-icon-s-fold.active {
      transform: rotateY(180deg);
    }
  }

  .breadcrumb-container {
    float: left;
    :deep(.el-breadcrumb__inner){
      color: #303133;
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    :deep(.avatar-container) {
      margin-right: 30px;
      .avatar-wrapper {
        position: relative;
        cursor: pointer;
        .el-icon-caret-bottom {
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
