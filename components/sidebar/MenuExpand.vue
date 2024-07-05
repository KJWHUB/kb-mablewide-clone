<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <SidebarIconWrap :item="{ id: 'SvgoSidebarRightArrow', tooltip: '메뉴펼치기' }">
      <SvgoSidebarRightArrow style="color: var(--text-color)" />
    </SidebarIconWrap>
  </ClientOnly>
</template>

<style scoped></style>
