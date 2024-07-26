<script setup lang="ts">
const bannerVisible = ref<boolean>(true);
const bannerClose = () => {
  bannerVisible.value = false;
};

const activeTabId = ref<string>("domestic");
</script>

<template>
  <div>
    <!-- banner -->
    <div v-if="bannerVisible" style="height: 4.5rem">
      <BannerMain @close="bannerClose" />
    </div>

    <!-- container -->
    <div class="container">
      <!-- 국내/해외 탭영역 -->
      <PageHomeDomesticOverseasTab v-model="activeTabId" />
      <!-- 변경된 탭 컨텐츠 -->
      <div>
        <!-- 주요지수 -->
        <PageHomeMajorIndices />

        <!-- 뉴스 -->

        <!-- 실시간 랭킹 -->

        <!-- 내가 원하는 주식 찾기 -->

        <!-- 요즘 돈이 몰리는 국내 테마 -->

        <!-- 쉽게읽는 투자정보  -->

        <!-- ETF TOP5 -->

        <!-- 국내 투자고수의 Pick -->
      </div>
    </div>
  </div>
</template>

<style>
.container {
  padding: 0 2.4rem;
}
</style>
