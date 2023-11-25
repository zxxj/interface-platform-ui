<script setup lang="ts">
import Menu from '../../components/menu.vue';
import Header from '../../components/header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <a-layout>
    <a-layout-sider>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.ant-layout-sider {
  height: 100vh;
  background-color: #a53133;
}

.ant-layout-header {
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  border-bottom: 5px solid red;
}

.ant-layout-content {
  height: calc(100vh - 100px);
  background-color: #fff;
}
</style>
