import type { TableData } from "~/components/page/home/stock/list/index.vue";
import { getPriceDiffType } from "~/components/page/home/stock/list/Item.vue";
import type { Row as RankRow } from "~/server/api/rank/index.get";
import type { Row as WishRow } from "~/server/api/wish/index.get";

type Row = RankRow | WishRow;
type Rows = Row[];

function processData(rows: Rows): TableData[] {
  const processOuts = (outs: RankRow["OUT2"] | WishRow["OUT"]) => {
    return outs.map((item, index) => {
      const rank = item.rnk ? Number(item.rnk) : index + 1;
      const imgUrl = `https://cdn.kbsec.com/logo/KR_${item.isCd}.png`;
      const currentPrice = Number(item.nowPrc);
      const priceDiff = Number(item.bdyCmpr);
      const priceDiffRate = Number(item.upDwnRP2.trim());
      const priceDiffType = getPriceDiffType(priceDiffRate);
      return {
        id: item.isCd,
        rank,
        imgUrl,
        name: item.isNm,
        currentPrice,
        priceDiff,
        priceDiffRate,
        priceDiffType,
      };
    });
  };

  const isRankTable = (row: Row): row is RankRow => {
    return "OUT2" in row;
  };

  const getOuts = (row: Row) => {
    return isRankTable(row) ? row.OUT2 : row.OUT;
  };

  try {
    return rows.map((table) => ({
      id: table.SORT_CD,
      title: table.TITLE,
      data: processOuts(getOuts(table)),
    }));
  } catch (error) {
    console.error("[processData]: 가공에 실패했습니다 :", error);
    return [];
  }
}

export const useTableData = ({ data }: { data: Ref<Rows | null> }) => {
  const tableDataComputed = computed<TableData[]>(() => {
    if (!data.value) {
      return [];
    }

    return processData(data.value);
  });

  return {
    tableDataComputed,
  };
};
