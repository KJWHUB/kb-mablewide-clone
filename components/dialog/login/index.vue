<script setup lang="ts">
import CloudAuthentication from "./CloudAuthentication.vue";
import QRAuthentication from "./QRAuthentication.vue";

const visible = defineModel({
  type: Boolean,
  default: false,
  required: true,
});

const tabs = [
  {
    id: "CLOUD",
    title: "클라우드인증",
    content: CloudAuthentication,
  },
  {
    id: "QR",
    title: "QR인증",
    content: QRAuthentication,
  },
];

const activeTab = ref(tabs[0].id);
</script>

<template>
  <DialogBase v-model="visible" title="로그인" style="width: 44rem">
    <template #body>
      <Tabs v-model="activeTab" :options="tabs" :option-label="(option) => option.title" :option-value="(option) => option.id" />
      <component :is="tabs.find((el) => el.id === activeTab)?.content" />
    </template>
  </DialogBase>
</template>

<style scoped></style>
