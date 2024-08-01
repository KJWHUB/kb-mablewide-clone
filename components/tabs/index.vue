<script setup lang="ts">
type Tab = {
  id: string;
  title: string;
  content?: string | Component;
};
type Tabs = Tab[];
type TabId = Tab["id"];

interface Props {
  tabs: Tabs;
  styleId?: "default" | "boxed" | "text-divider";
}

const activeTabId = defineModel<TabId>({
  required: true,
});

const props = withDefaults(defineProps<Props>(), {
  styleId: "default",
});

const activeTab = computed(() => props.tabs.find((tab) => tab.id === activeTabId.value));

const isActive = (tabId: TabId) => activeTabId.value === tabId;
const changeTab = (tabId: TabId) => {
  activeTabId.value = tabId;
};

const isVueComponent = (value: unknown): value is Component => {
  if (typeof value === "object" && value !== null) {
    return "render" in value || "setup" in value || "template" in value;
  }

  return false;
};

const isComponent = (value: Tab["content"]) => {
  if (isVueComponent(value)) {
    return true;
  }

  if (typeof value === "string") {
    return isVueComponent(resolveComponent(value));
  }
  return false;
};
</script>

<template>
  <div :class="`tab-${props.styleId}`">
    <ul class="tab-header">
      <li
        v-for="tab in props.tabs"
        :key="tab.id"
        :class="{
          active: isActive(tab.id),
        }"
      >
        <button @click="changeTab(tab.id)">{{ tab.title }}</button>
      </li>
    </ul>
    <slot :name="activeTabId">
      <template v-if="isComponent(activeTab?.content)">
        <div class="tab-content">
          <component :is="activeTab?.content" />
        </div>
      </template>
    </slot>
  </div>
</template>

<style scoped lang="scss">
@import "./default.module.scss";
@import "./boxed.module.scss";
@import "./text-divider.module.scss";

.tab-content {
  margin-top: 1rem;
}
</style>
