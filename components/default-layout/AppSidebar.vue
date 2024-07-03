<script setup lang="ts">
const main = [
  {
    id: "SvgoSidebarHome",
  },
  {
    id: "SvgoSidebarStar",
  },
  {
    id: "SvgoSidebarHeartbeat",
  },
  {
    id: "SvgoSidebarPrimeclub",
  },
  {
    id: "SvgoSidebarPiechart",
  },
];

const settings = [
  {
    id: "SvgoSidebarMoon",
  },
  {
    id: "SvgoSidebarSetting",
  },
];
</script>

<template>
  <aside class="main-layout-sidebar">
    <!-- logo -->
    <div class="icon-list-wrap"><SvgoMLogo /></div>

    <!-- main -->
    <div class="icon-list-wrap">
      <template v-for="item in main" :key="item.id">
        <component :is="item.id" />
      </template>
    </div>

    <!-- settings -->
    <div class="icon-list-wrap">
      <template v-for="item in settings" :key="item.id">
        <component :is="item.id" />
      </template>
    </div>

    <!-- menu expand -->
    <div class="icon-list-wrap">
      <SvgoSidebarRightArrow />
    </div>
  </aside>
</template>

<style scoped>
.main-layout-sidebar {
  display: flex;
  flex-direction: column;
  background: var(--bg_type16);
  padding: 1rem 0 4rem;
  height: 100%;
  width: 8rem;
  position: fixed;
}

.icon-list-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
}
</style>
