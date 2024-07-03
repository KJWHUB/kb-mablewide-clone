<template>
  <div class="main-layout">
    <!-- sidebar -->
    <DefaultLayoutAppSidebar />
    <div style="margin-left: 8rem">
      <!-- header -->
      <DefaultLayoutAppHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
.main-layout {
  display: flex;
}
</style>
