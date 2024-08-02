<script setup lang="ts" generic="TOption extends string | Record<string, unknown>, TValue = TOption">
interface Props {
  options: TOption[];
  optionLabel: (option: TOption) => string;
  optionValue: (option: TOption) => TValue;
  styleId?: "default" | "boxed" | "text-divider";
}

interface Emit {
  (event: "change", tabId: TValue): void;
}

const props = withDefaults(defineProps<Props>(), {
  styleId: "default",
});
const emit = defineEmits<Emit>();

const model = defineModel<TValue>({
  required: true,
});

function toKey(option: TOption): string {
  if (props.optionValue) {
    return JSON.stringify(props.optionValue(option));
  }

  return typeof option === "string" ? option : JSON.stringify(option);
}

function optionToValue(option: TOption) {
  if (props.optionValue) {
    return props.optionValue(option);
  }

  return option;
}

function onChange(tabId: TValue) {
  model.value = tabId;
  emit("change", tabId);
}

function isEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

function handleClickButton(option: TOption) {
  onChange(props.optionValue(option));
}
</script>

<template>
  <div :class="`tab-${props.styleId}`">
    <ul class="tab-header">
      <li
        v-for="option in props.options"
        :key="toKey(option)"
        :class="{
          active: isEqual(optionToValue(option), model),
        }"
      >
        <button @click="handleClickButton(option)">
          {{ props.optionLabel(option) }}
        </button>
      </li>
    </ul>
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
