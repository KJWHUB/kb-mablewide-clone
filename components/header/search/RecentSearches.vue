<script setup lang="ts">
import dayjs from "dayjs";

type RecentSearch = {
  id: string;
  date: Date;
  keyword: string;
};

const recent = ref<RecentSearch[]>([]);

const allClear = () => {
  recent.value = [];
};

const remove = (index: number) => {
  recent.value.splice(index, 1);
};

onMounted(() => {
  recent.value = [
    {
      id: "1",
      date: new Date(),
      keyword: "삼성전자",
    },
    {
      id: "2",
      date: new Date(),
      keyword: "카카오",
    },
    {
      id: "3",
      date: new Date(),
      keyword: "네이버",
    },
  ];
});
</script>

<template>
  <div class="recent">
    <div class="header">
      <h4 class="title">최근 검색어</h4>
      <button class="all-clear" @click="allClear">전체삭제</button>
    </div>
    <ul class="recent-list-wrap">
      <li v-for="(item, i) in recent" :key="item.id" class="recent-list-item">
        <div class="left">
          <!-- icon -->
          <div class="clock">
            <SvgoClock5 />
          </div>
          <!-- keyword -->
          <span class="keyword">{{ item.keyword }}</span>
        </div>
        <div class="right">
          <!-- date -->
          <span class="date">{{ dayjs(item.date).format("MM/DD") }}</span>
          <!-- remove -->
          <div class="remove" @click.stop="remove(i)">
            <SvgoClose />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.recent {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem 0.8rem 2rem;
    h4.title {
      font-size: 1.3rem;
      color: var(--text-color);
    }
    .all-clear {
      font-size: 1.3rem;
      line-height: 150%;
      color: var(--text_type02);
      cursor: pointer;
    }
  }
}
.recent-list-wrap {
  .recent-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95rem 2rem;
    font-size: 1.4rem;
    color: var(--text-color);

    .left {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .clock {
        width: 2rem;
        color: var(--text_type02);
        opacity: 0.8;
      }
      .keyword {
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: var(--text_type01);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 1.4rem;

      .date {
        font-size: 1.2rem;
        color: var(--text_type02);
      }
      .remove {
        width: 1.6rem;

        cursor: pointer;
      }
    }
  }
}
</style>
