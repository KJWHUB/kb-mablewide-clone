import data from "@/db.json";

export interface Root {
  ETFTOP5: Etftop5[];
}

export interface Etftop5 {
  SORT_CD: string;
  ETF_AREA_NM: string;
  OUT2: Out2[];
}

export interface Out2 {
  shcode?: string;
  isNm: string;
  upDwnRP2?: string;
  isCd?: string;
  bdyCmprUpDwnRP2?: string;
  rnk?: string;
  acmlDlTwAmt?: string;
}

export type ETFTop5Response = Root["ETFTOP5"];

export default defineEventHandler((): ETFTop5Response => {
  const res = data.ETFTOP5;

  return res;
});
