import data from "@/db.json";

export interface Root {
  RANKING: Ranking[];
}

export interface Ranking {
  SATRT_F: string;
  ROWS: Row[];
}

export interface Row {
  SORT_CD: string;
  TITLE: string;
  OUT2: Out2[];
}

export interface Out2 {
  bdyCmpr: string;
  nowPrc: string;
  bdyCmprCcd: string;
  isNm: string;
  upDwnRP2: string;
  isCd: string;
  rnk: string;
}

export type RankResponse = Row[];

export default defineEventHandler((): RankResponse => {
  const RANKING = data.RANKING as Root["RANKING"];

  const ROWS = RANKING[1].ROWS;

  return ROWS;
});
