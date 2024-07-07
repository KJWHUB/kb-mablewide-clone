<script setup lang="ts">
type RecommendedSearch = {
  id: string;
  keyword: string;
};

const recommended = ref<RecommendedSearch[]>([]);

const fetchRecommended = () => {
  return [
    {
      id: "1",
      keyword: "국내 소수점 종목",
    },
    {
      id: "2",
      keyword: "해외 소수점 종목",
    },
    {
      id: "3",
      keyword: "미국 EPS 상위 종목 10",
    },
    {
      id: "4",
      keyword: "미국 신고가 돌파 종목",
    },
    {
      id: "5",
      keyword: "100만원이상주식",
    },
    {
      id: "6",
      keyword: "KB리서치추천 중소형주",
    },
  ];
};

recommended.value = fetchRecommended();
</script>

<template>
  <div class="recommended-search">
    <div class="header">
      <h4 class="title">이런 검색은 어떠세요?</h4>
    </div>
    <ul>
      <li v-for="item in recommended" :key="item.id">
        <span>{{ item.keyword }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.recommended-search {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2rem 0.8rem 2rem;
    h4.title {
      font-size: 1.3rem;
      color: var(--text-color);
    }
  }

  ul {
    li {
      padding: 0.8rem 2rem;
      cursor: pointer;

      &:hover {
        background: var(--hover);
      }

      span {
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: var(--text_type01);
      }
    }
  }
}
</style>
