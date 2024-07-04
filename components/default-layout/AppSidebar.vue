<script setup lang="ts">
const main = [
  {
    id: "SvgoSidebarHome",
    tooltip: "홈",
  },
  {
    id: "SvgoSidebarStar",
    tooltip: "찜한주식",
  },
  {
    id: "SvgoSidebarHeartbeat",
    tooltip: "트레이딩",
  },
  {
    id: "SvgoSidebarPrimeclub",
    tooltip: "PRIME CLUB",
  },
  {
    id: "SvgoSidebarPiechart",
    tooltip: "내자산",
  },
];

const settings = [
  {
    id: "SvgoSidebarMoon",
    tooltip: "다크모드",
  },
  {
    id: "SvgoSidebarSetting",
    tooltip: "설정",
  },
];
</script>

<template>
  <aside class="main-layout-sidebar">
    <!-- logo -->
    <div class="icon-list-wrap"><SvgoMLogo /></div>

    <!-- main -->
    <div class="icon-list-wrap main">
      <template v-for="item in main" :key="item.id">
        <SidebarIconWrap :item="item" />
      </template>
    </div>

    <!-- settings -->
    <div class="icon-list-wrap settings">
      <template v-for="item in settings" :key="item.id">
        <SidebarIconWrap :item="item" />
      </template>
    </div>

    <!-- menu expand -->
    <div class="icon-list-wrap menu-expand">
      <SidebarIconWrap
        :item="{
          id: 'SvgoSidebarRightArrow',
          tooltip: '메뉴펼치기',
        }"
      />
    </div>
  </aside>
</template>

<style scoped>
.main-layout-sidebar {
  display: flex;
  flex-direction: column;
  padding: 1rem 0 4rem;
  height: 100%;
  width: 8rem;
  position: fixed;
  z-index: 100;
}

.icon-list-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.45rem;
  padding: 0 1.6rem;
}

.main {
  flex: 1;
  margin-top: 3rem;
}

.settings {
  flex: 0.25;
}

.menu-expand {
  position: fixed;
  width: 4.8rem;
  bottom: 3.2rem;

  z-index: 101;
}
</style>
