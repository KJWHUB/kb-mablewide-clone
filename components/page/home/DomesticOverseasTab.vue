<script setup lang="ts">
const tabs = [
  { id: "domestic", title: "국내" },
  { id: "overseas", title: "해외" },
];

const activeTabId = defineModel<string>({
  required: true,
});
</script>

<template>
  <div class="tabs-wrap"><Tabs v-model="activeTabId" :tabs="tabs" style-id="boxed" /></div>
</template>

<style scoped>
.tabs-wrap {
  width: 116px;
}
</style>
