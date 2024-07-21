<script setup lang="ts"></script>

<template>
  <RouterLink :to="'#'">
    <div class="notice-wrap hover">
      <SvgoSpeaker class="icon" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.notice-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;

  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
