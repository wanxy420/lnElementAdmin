<script lang="ts" setup>
import HeaderLeft from "./HeaderLeft.vue";
import HeaderRight from "./HeaderRight.vue";
import HeaderTags from "./HeaderTags.vue";
import useStore from "@/store";
import { useRoute } from "vue-router";

const route = useRoute();
const { home } = useStore();

const closeTagsData = (type: string) => {
  if (type === "left") {
    home.headerTabsList.splice(
      0,
      home.headerTabsList.findIndex((x) => x.path === route.path)
    );
  } else if (type === "right") {
    home.headerTabsList.splice(
      home.headerTabsList.findIndex((x) => x.path === route.path) + 1,
      home.headerTabsList.length
    );
  } else if (type === "other") {
    home.headerTabsList = [
      home.headerTabsList[
        home.headerTabsList.findIndex((x) => x.path === route.path)
      ],
    ];
  }
};
</script>
<template>
  <div class="header-content">
    <HeaderLeft />
    <div class="header-center">
      <HeaderTags />
    </div>
    <el-dropdown>
      <span
        style="
          width: 25px;
          height: 50px;
          border-radius: 4px;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;
        "
      >
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click.native="closeTagsData('left')">
            关闭左侧
          </el-dropdown-item>
          <el-dropdown-item @click.native="closeTagsData('right')">
            关闭右侧
          </el-dropdown-item>
          <el-dropdown-item @click.native="closeTagsData('other')">
            关闭其他
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <HeaderRight />
  </div>
</template>

<style lang="less" scoped>
.header-content {
  width: calc(100% - 6px);
  height: 100%;
  display: flex;
  align-items: center;
  .header-center {
    flex: 1;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 4px;
    overflow: auto;
    scroll-padding-left: 50%;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }

  .header-center::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
</style>
