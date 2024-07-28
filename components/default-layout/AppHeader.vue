<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrap">
      <!-- search -->
      <HeaderSearch class="search" />
      <!-- Real-time popularity -->
      <HeaderRealTimePopular class="realtime" />
      <!-- utility -->
      <HeaderUtility class="utility" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrap {
  gap: 1.2rem;
  display: grid;
  grid-template-areas: "search realtime utility";
  grid-template-columns: 20rem 1fr auto;
  height: 5.2rem;
  padding: 1rem 1.6rem;
  position: relative;
  // background-color: var(--background-color);

  .search {
    grid-area: search;
  }

  .realtime {
    grid-area: realtime;
  }

  .utility {
    grid-area: utility;
  }
}
</style>
