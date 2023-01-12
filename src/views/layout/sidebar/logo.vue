<!--
 * @Author: lh@metgs.com
 * @Date: 2022-09-08 16:58:06
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2023-01-12 14:44:06
 * @Description: ...
-->
<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link
        key="expand"
        class="sidebar-logo-link"
        to="/"
      >
        <div class="logo flex-c">
          <!-- <img src="@/assets/images/logo.png" class="logo-img"/> -->
          <div class="logo-text flex-c">
            {{ title }}
          </div>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script setup>
const title = import.meta.env.VITE_APP_TITLE;
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;
  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    .logo {
      width: 100%;
      height: 56px;
      flex-direction: column;
      justify-content: center;
      .logo-img {
        display: block;
        width: 48px;
        height: 48px;
        margin-bottom: 8px;
      }
    }
    .logo-text {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
