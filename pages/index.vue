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
    <BannerMain v-if="bannerVisible" @close="bannerClose" />

    <!-- container -->
    <div
      class="container"
      :class="{
        'top-banner-active': bannerVisible,
      }"
    >
      <article class="inner">
        <!-- 국내/해외 탭영역 -->
        <PageHomeDomesticOverseasTab v-model="activeTabId" />
        <!-- 변경된 탭 컨텐츠 -->
        <div>
          <!-- 주요지수 -->
          <section>
            <PageHomeMajorIndices />
          </section>

          <!-- 뉴스 -->
          <section class="home-section">
            <PageHomeNews />
          </section>

          <!-- 실시간 랭킹 -->
          <section class="home-section">
            <PageHomeRealtimeRanking />
          </section>

          <!-- 내가 원하는 주식 찾기 -->
          <section class="home-section">
            <PageHomeStockSearch />
          </section>

          <!-- 테마 주 -->
          <section class="home-section">
            <PageHomeThemeStock />
          </section>

          <!-- 쉽게읽는 투자정보  -->
          <section class="home-section">
            <PageHomeCockPick />
          </section>

          <!-- ETF TOP5 -->
          <section class="home-section">
            <PageHomeEtfTop5 />
          </section>

          <!-- 국내 투자고수의 Pick -->
          <section class="home-section">
            <PageHomeCosuPick />
          </section>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-areas: "stock-content";
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 0;
  position: relative;
  max-width: 153.6rem;
  margin: 0 auto;
  margin-top: 0.4rem;

  article.inner {
    position: relative;
    display: block;
    grid-area: stock-content;
    width: 100%;
    min-height: 127.6rem;
    overflow: hidden;

    .home-section {
      margin-top: 6rem;
    }
  }

  &.top-banner-active {
    margin-top: 4.5rem;
  }
}
</style>
