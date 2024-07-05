<script setup lang="ts">
enum ThemeColor {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

const colorMode = useColorMode();

const icon = computed(() => {
  return colorMode.value === ThemeColor.DARK ? "SvgoSidebarSun" : "SvgoSidebarMoon";
});
const tooltip = computed(() => {
  return colorMode.value === ThemeColor.DARK ? "라이트모드" : "다크모드";
});

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK;
};
</script>

<template>
  <ClientOnly>
    <SidebarIconWrap :item="{ tooltip: tooltip }" @click="toggleColorMode">
      <component :is="icon" />
    </SidebarIconWrap>
  </ClientOnly>
</template>

<style scoped></style>
