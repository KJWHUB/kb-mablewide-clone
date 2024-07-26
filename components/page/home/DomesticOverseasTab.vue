<script setup lang="ts">
import type { CSSProperties } from "vue";

const tabs = [
  { id: "domestic", title: "국내" },
  { id: "overseas", title: "해외" },
];

const activeTabId = defineModel<string>({
  required: true,
});

const tabsWrapRef = ref<HTMLElement | null>(null);

const tabsContainerStyle: CSSProperties = reactive({
  height: 0,
});

onMounted(() => {
  if (tabsWrapRef.value) {
    tabsContainerStyle.height = `${tabsWrapRef.value.clientHeight}px`;
  }
});
</script>

<template>
  <div class="tabs-container" :style="tabsContainerStyle">
    <div ref="tabsWrapRef" class="tabs-wrap">
      <Tabs v-model="activeTabId" :tabs="tabs" style-id="boxed" style="width: 116px" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-container {
  position: relative;
}
.tabs-wrap {
  position: fixed;
  padding: 4rem 0 2.4rem;
  background: var(--bg_type16);
}
</style>
