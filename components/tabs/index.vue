<script setup lang="ts">
type Tab = {
  id: string;
  title: string;
  content?: string | Component;
};
type Tabs = Tab[];
type TabId = Tab["id"];

const activeTabId = defineModel<TabId>({
  required: true,
});

const props = defineProps({
  tabs: {
    type: Array as PropType<Tabs>,
    required: true,
  },
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
  <div class="tab">
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
    <div class="tab-content">
      <slot :name="activeTabId">
        <template v-if="isComponent(activeTab?.content)">
          <component :is="activeTab?.content" />
        </template>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
$default-color: #7d7e85;
$active-color: var(--main-color);

$--brd_type03: #303038;

.tab {
  ul.tab-header {
    display: flex;
    li {
      flex: 1;

      button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;

        width: 100%;
        padding: 1.2rem 0;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        color: $default-color;
        border-bottom: 0.1rem solid $--brd_type03;
        cursor: pointer;
      }

      &.active {
        button {
          color: $active-color;
          border-color: $active-color;
        }
      }
    }
  }
  .tab-content {
    margin-top: 1rem;
  }
}
</style>
