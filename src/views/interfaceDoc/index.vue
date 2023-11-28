<template>
  <div class="apply">
    <div class="content">
      <div class="resource-left">
        <div class="title">
          <img src="../../assets/category.png" />
          <div class="text">资源列表</div>
        </div>
        <div class="search">
          <a-input
            v-model:value="resource"
            placeholder="请输入资源名称"
            allowClear
          >
            <template #suffix>
              <img
                src="../../assets/search.png"
                @click="handleResource"
                style="cursor: pointer"
              />
            </template>
          </a-input>
        </div>

        <div class="resourceList">
          <div
            class="option"
            :class="index === selectedOption ? 'active' : 'option'"
            v-for="(item, index) in resourceOptions"
            :key="item.id"
            @click="handleClick(item, index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="resource-right">
        <div class="top">
          <div class="text">
            <img src="../../assets/file.png" />
            <div class="title">{{ selectedTitle }}</div>
          </div>
          <div class="search">
            <a-input
              v-model:value="doc"
              placeholder="请输入接口文档名称"
              allowClear
            >
              <template #suffix>
                <img
                  src="../../assets/search.png"
                  @click="handleDocSearch"
                  style="cursor: pointer"
                />
              </template>
            </a-input>
          </div>
        </div>

        <div class="list">
          <div class="item" v-for="item in list" :key="item">
            <div class="left">
              <img src="../../assets/href.png" />
              <a class="name">{{ item.name }}</a>
            </div>
            <div class="version">当前版本：{{ item.version }}</div>
          </div>
          <div v-if="!list" style="text-align: center">暂无数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  listResource,
  listDocById,
  listResourceByName,
  listDocByName,
} from '../../service/modules/interfaceDoc';

onMounted(async () => {
  const res = await listResource();
  resourceOptions.value = res.data.data;
  initId.value = res.data.data[0].id;
  selectedTitle.value = res.data.data[0].name;
  const res2 = await listDocById(initId.value as number);
  list.value = res2.data.data.content;
});

const resource = ref();
const doc = ref();
const initId = ref<number>();
const list: any = ref([]);
const selectedOption = ref<number>(0);
const resourceOptions: any = ref([]);
const selectedTitle = ref();
const handleClick = async (item: any, index: number) => {
  resource.value = '';
  doc.value = '';
  selectedOption.value = index;
  selectedTitle.value = item.name;
  initId.value = item.id;
  const res = await listDocById(initId.value as number);
  list.value = res.data.data.content;
};

const handleResource = async () => {
  const res = await listResourceByName(resource.value);
  resourceOptions.value = res.data.data;
};

const handleDocSearch = async () => {
  const res = await listDocByName(initId.value as number, doc.value);
  list.value = res.data.data.content;
};
</script>

<style lang="scss" scoped>
.active {
  background: #ffe1dd !important;
  color: #8c0200;
  transition: all 0.5s;
  &::before {
    content: '';
    margin: 0 15px 0 24px;
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #8c0200 !important;
    border-radius: 4px;
  }
}
.apply {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/back.png') no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;

  .content {
    position: relative;
    top: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 650px;
    box-shadow: 0px 8px 15px 1px rgba(67, 0, 0, 0.7);
    border-radius: 20px;
    background: #8c0200;

    .resource-left {
      padding: 0 19px 0 34px;
      margin-left: 18px;
      width: 275px;
      opacity: 0.95;
      border-radius: 10px;
      height: 95%;
      background-color: #faf5f5;
      .title {
        display: flex;
        align-items: center;
        margin-top: 32px;
        img {
          width: 21px;
          height: 21px;
          vertical-align: middle;
        }
        .text {
          margin-left: 11px;
          font-size: 22px;
          color: #8c0200;
          font-family: Alibaba PuHuiTi 2;
        }
      }
      .search {
        margin-top: 15px;
      }

      .resourceList {
        margin-top: 13px;
        height: 80%;
        overflow-y: auto;
        .option {
          width: 200px;
          height: 45px;
          line-height: 45px;
          background: #faf5f5;
          border-radius: 6px;
          cursor: pointer;
          &::before {
            content: '';
            margin: 0 15px 0 24px;
            display: inline-block;
            width: 8px;
            height: 8px;
            background: gray;
            border-radius: 4px;
          }
        }
      }
    }

    .resource-right {
      padding: 24px 37px;
      margin-right: 18px;
      width: 870px;
      height: 95%;
      background: #faf5f5;
      opacity: 0.96;
      border-radius: 10px;

      .top {
        display: flex;
        justify-content: space-between;
        .text {
          width: 400px;
          display: flex;
          align-items: center;
          .title {
            margin-left: 16px;
            color: #8c0200;
            font-size: 22px;
          }
        }
      }

      .list {
        height: 500px;
        overflow-y: auto;
        margin-top: 17px;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 82px;
          background-color: #fff;
          padding: 0 54px 0 19px;
          border-radius: 10px;
          margin-bottom: 25px;
          .left {
            display: flex;
            .name {
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
}

:where(.css-dev-only-do-not-override-1qb1s0s).ant-input-affix-wrapper {
  border-color: #e3a69e;
}

:where(.css-dev-only-do-not-override-1qb1s0s).ant-input-affix-wrapper:not(
    .ant-input-affix-wrapper-disabled
  ):hover {
  border-color: #e3a69e;
}
</style>
