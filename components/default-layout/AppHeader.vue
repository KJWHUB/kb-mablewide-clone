<script setup lang="ts"></script>

<template>
  <header class="header">
    <!-- search -->
    <HeaderSearch />
    <!-- Real-time popularity -->
    <HeaderRealTimePopular />
    <div style="display: flex; gap: 1.6rem">
      <!-- download -->
      <HeaderDownload />
      <!-- notice -->
      <HeaderNotice />

      <div class="right">
        <!-- login -->
        <HeaderLogin />
        <!-- app info -->
        <HeaderAppInfo />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1.6rem;
  background-color: var(--background-color);
}
.right {
  position: relative;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding-left: 0.9rem;

  &::before {
    content: "";
    display: block;
    width: 0.1rem;
    height: 2.4rem;
    background: var(--brd_type04);
    position: absolute;
    top: calc(50% - 1.2rem);
    left: 0;
  }
}
</style>
