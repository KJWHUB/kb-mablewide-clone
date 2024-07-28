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
    <h1 class="logo sidebar-row-padding">
      <SvgoMLogo />
    </h1>

    <nav class="main-nav icon-list-wrap">
      <template v-for="item in main" :key="item.id">
        <RouterLink :to="item.path">
          <SidebarIconWrap :item="item">
            <component :is="item.id" :style="{ color: checkActive(item.path) }" />
          </SidebarIconWrap>
        </RouterLink>
      </template>
    </nav>

    <!-- settings -->
    <div class="settings icon-list-wrap">
      <SidebarThemeController />
      <SidebarIconWrap :item="{ id: 'SvgoSidebarSetting', tooltip: '설정' }">
        <SvgoSidebarSetting @click="$modal.open('LOGIN')" />
      </SidebarIconWrap>
    </div>

    <!-- menu expand -->
    <div class="menu-expand">
      <SidebarMenuExpand />
    </div>
  </aside>
</template>

<style scoped lang="scss">
$sidebar-padding-x: 1.6rem;

.main-layout-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 4rem;

  background: var(--bg_type16);

  .sidebar-row-padding {
    padding: 0 $sidebar-padding-x;
  }

  .logo {
    width: 100%;
  }

  .main-nav {
    flex: 1;
    position: relative;
    margin-top: 3rem;
  }

  .settings {
    flex: 0.25;
    width: 100%;
  }

  .menu-expand {
    position: fixed;
    width: 4.8rem;
    bottom: 3.2rem;

    z-index: 101;
  }
}

.icon-list-wrap {
  display: flex;
  flex-direction: column;
  padding: 0 $sidebar-padding-x;
  width: 100%;
  gap: 1.45rem;
}
</style>
