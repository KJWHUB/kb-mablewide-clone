<template>
  <div class="main-layout">
    <!-- sidebar -->
    <DefaultLayoutAppSidebar />
    <div style="margin-left: 8rem; flex: 1">
      <!-- header -->
      <DefaultLayoutAppHeader />
      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
$border-color: #151419;

$content-border: 4px solid $border-color;
.main-layout {
  display: flex;
  overflow: hidden;

  main.content {
    width: 100%;
    min-height: 100vh;
    border-left: $content-border;
    border-top: $content-border;
  }
}
</style>
