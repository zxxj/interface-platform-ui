<template>
  <div class="menu">
    <div class="title"></div>

    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      :items="items"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import { MailOutlined, CalendarOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedKeys = ref(['1']);
const openKeys = ref([]);
const items = ref([
  {
    key: '1',
    icon: () => h(MailOutlined),
    label: '接口文档管理',
    title: '接口文档管理',
    path: '/interfaceDoc',
  },
  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: '接入申请',
    title: '接入申请',
    path: '/apply',
  },
]);
const handleClick: MenuProps['onClick'] = (menuInfo) => {
  router.push(menuInfo.item.path as string);
};
</script>

<style scoped>
.title {
  height: 150px;
}

:where(.css-dev-only-do-not-override-1qb1s0s).ant-menu-light {
  background: transparent !important;
  color: #fff;
}

:where(.css-dev-only-do-not-override-1qb1s0s).ant-menu-light:not(
    .ant-menu-horizontal
  )
  .ant-menu-item:not(.ant-menu-item-selected):hover {
  background-color: #ba383a !important;
  color: #fff;
}

:where(.css-dev-only-do-not-override-1qb1s0s).ant-menu-light
  .ant-menu-item-selected {
  background-color: red !important;
  color: #fff;
}
</style>
