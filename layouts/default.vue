<script setup lang="ts"></script>

<template>
  <div class="main-layout">
    <!-- sidebar -->
    <DefaultLayoutAppSidebar class="sidebar" />
    <!-- header -->
    <DefaultLayoutAppHeader class="header" />
    <main class="content">
      <slot />
    </main>

    <!-- modal -->
    <ModalGlobal />
  </div>
</template>

<style scoped lang="scss">
$sidebar-width: 8rem;
$header-height: 5.6rem;

$border-color: #151419;

$content-border: 4px solid $border-color;

.main-layout {
  position: relative;
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: $header-height 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  height: auto;
  overflow: hidden;

  .sidebar {
    grid-area: sidebar;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: $sidebar-width;
    z-index: 100;
  }

  .header {
    grid-area: header;
    position: fixed;
    top: 0;
    left: $sidebar-width;
    right: 0;

    border-bottom: $content-border;

    z-index: 100;
  }

  .content {
    grid-area: content;
    overflow-y: auto;
    min-height: 100vh;

    background-color: var(--bg_type16);

    border-left: $content-border;
  }
}
</style>
