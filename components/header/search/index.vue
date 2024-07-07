<script setup lang="ts">
const placeholder = "주식, 메뉴, 종목코드 검색";

const searchRef = ref<HTMLElement | null>(null);
const searchValue = ref("");
const isEmpty = computed(() => searchValue.value === "");

const active = ref(false);

const search = () => {
  console.log("search");
};

const clearSearch = () => {
  searchValue.value = "";
};

const handleClickOutside = (event: MouseEvent): void => {
  if (searchRef.value && !searchRef.value.contains(event.target as Node)) {
    active.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    ref="searchRef"
    class="search"
    :class="{
      active: active,
    }"
  >
    <input v-model="searchValue" type="text" :placeholder="placeholder" autocomplete="off" @click="active = true" />

    <div class="search-suffix">
      <!-- reset -->
      <button v-show="!isEmpty" class="search-button remove" @click="clearSearch">
        <SvgoDelete />
      </button>
      <button class="search-button" @click="search">
        <SvgoSearch />
      </button>
    </div>

    <div class="search-result">
      <!-- isEmpty -->
      <div v-if="isEmpty">
        <!-- 최근 검색어 -->
        <HeaderSearchRecentSearches />
        <!-- 이런 검색은 어떠세요? -->
        <h4>이런 검색은 어떠세요?</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$--input_type04_bg_default: #1f1d24;
$--input_type03_brd_default: #50505b;

$--bg_type16: #1f1d24;
$--brd_type02: #50505b;

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  height: 3.2rem;

  background-color: var(--input_type05_bg_default);
  border-radius: 0.4rem;
  padding: 0 1rem;
  position: relative;
  border: solid 0.1rem var(--input_type03_brd_default);
  input {
    background: none;
    border: none;

    width: 15.2rem;

    color: var(--text-color);
    &:focus {
      outline: none;
    }
  }

  .search-suffix {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .search-result {
    position: absolute;
    top: 3.7rem;
    left: -1px;
    width: 100%;
    padding: 1.2rem 0;
    background: var(--bg_type16);
    border: 0.1rem solid var(--brd_type02);
    border-radius: 0.4rem;
    display: none;
  }

  &.active {
    width: 36rem;
    background-color: var(--input_type05_bg_default);
    border: 0.1rem solid var(--input_brand_brd_focus);
    .search-result {
      display: block;
    }
  }
}

.search-button {
  padding: 0;
  border: 0;
  background: none;

  width: 2.4rem;
  color: var(--search-color);
  cursor: pointer;

  aspect-ratio: 1 / 1;

  &.remove {
    width: 2rem;
  }
}
</style>
