<!--
 * @Author: lh@metgs.com
 * @Date: 2021-11-08 18:12:28
 * @LastEditors: zjj@metgs.com
 * @LastEditTime: 2022-07-05 14:52:24
 * @Description: ...
-->
<template>
  <div v-if="pathExternal">
    <a :href="to.path">
      <slot />
    </a>
  </div>
  <div v-else>
    <router-link :to="to">
      <slot />
    </router-link>
  </div>
</template>

<script>
import { toRefs, computed } from 'vue';
export default {
  props: {
    to: {
      type: [String],
      required: true,
    },
  },
  setup (props) {
    const { to } = toRefs(props);
    const isExternal = (path) => {
      return /^(https?:|mailto:|tel:)/.test(path);
    };
    const pathExternal = computed(() => {
      return isExternal(to.value);
    });
    return { pathExternal };
  },
};
</script>

<style lang="less" scoped></style>
