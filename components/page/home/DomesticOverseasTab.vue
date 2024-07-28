<script setup lang="ts">
import type { CSSProperties } from "vue";

const tabs = [
  { id: "domestic", title: "국내" },
  { id: "overseas", title: "해외" },
];

const activeTabId = defineModel<string>({
  required: true,
});

const tabsContainerRef = ref<HTMLElement | null>(null);
const tabsWrapRef = ref<HTMLElement | null>(null);

const tabsContainerStyle: CSSProperties = reactive({
  height: 0,
});
const tabsWrapStyle: CSSProperties = reactive({
  width: 0,
});

onMounted(() => {
  if (tabsWrapRef.value) {
    tabsContainerStyle.height = `${tabsWrapRef.value.clientHeight}px`;
  }

  if (tabsContainerRef.value) {
    console.log("asdasd", tabsContainerRef.value.clientWidth);
    tabsWrapStyle.width = `${tabsContainerRef.value.clientWidth}px`;
  }
});
</script>

<template>
  <div ref="tabsContainerRef" class="tabs-container" :style="tabsContainerStyle">
    <div ref="tabsWrapRef" class="tabs-wrap" :style="tabsWrapStyle">
      <Tabs v-model="activeTabId" :tabs="tabs" style-id="boxed" style="width: 116px" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-container {
  position: relative;
  width: 100%;
  z-index: 10;
}
.tabs-wrap {
  position: fixed;
  padding: 4rem 0 2.4rem;
  background: var(--bg_type16);
}
</style>
