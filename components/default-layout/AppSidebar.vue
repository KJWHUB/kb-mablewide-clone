<script setup lang="ts">
const route = useRoute();
const main = [
  {
    id: "SvgoSidebarHome",
    tooltip: "홈",
    path: "/",
  },
  {
    id: "SvgoSidebarStar",
    tooltip: "찜한주식",
    path: "/liked-stocks",
  },
  {
    id: "SvgoSidebarHeartbeat",
    tooltip: "트레이딩",
    path: "/trading",
  },
  {
    id: "SvgoSidebarPrimeclub",
    tooltip: "PRIME CLUB",
    path: "/prime-club",
  },
  {
    id: "SvgoSidebarPiechart",
    tooltip: "내자산",
    path: "/my-assets",
  },
];

const isActive = (path: string) => route.path === path;
const checkActive = (path: string) => (isActive(path) ? "var(--text-color)" : undefined);
</script>

<template>
  <aside class="main-layout-sidebar">
    <!-- logo -->
    <div class="icon-list-wrap"><SvgoMLogo /></div>

    <!-- main -->
    <div class="icon-list-wrap main">
      <template v-for="item in main" :key="item.id">
        <RouterLink :to="item.path">
          <SidebarIconWrap :item="item">
            <component :is="item.id" :style="{ color: checkActive(item.path) }" />
          </SidebarIconWrap>
        </RouterLink>
      </template>
    </div>

    <!-- settings -->
    <div class="icon-list-wrap settings">
      <SidebarThemeController />
      <SidebarIconWrap :item="{ id: 'SvgoSidebarSetting', tooltip: '설정' }">
        <SvgoSidebarSetting @click="$modal.open('LOGIN')" />
      </SidebarIconWrap>
    </div>

    <!-- menu expand -->
    <div class="icon-list-wrap menu-expand">
      <SidebarMenuExpand />
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
