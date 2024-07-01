<template>
  <div class="main-layout">
    <!-- sidebar -->
    <DefaultLayoutAppSidebar />
    <!-- header -->
    <DefaultLayoutAppHeader />

    <slot />
  </div>
</template>

<style>
.main-layout {
  display: flex;
}
</style>
