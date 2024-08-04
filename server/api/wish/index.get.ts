import data from "@/db.json";

export interface Root {
  WISH: Wish[];
}

export interface Wish {
  SATRT_F: string;
  ROWS: Row[];
}

export interface Row {
  SORT_CD: string;
  TITLE: string;
  OUT: Out[];
}

export interface Out {
  bdyCmpr: string;
  nowPrc: string;
  bdyCmprCcd: string;
  isNm: string;
  upDwnRP2: string;
  isCd: string;
  rnk?: string;
}

export type WishResponse = Row[];

export default defineEventHandler((): WishResponse => {
  const WISH = data.WISH as Root["WISH"];

  const ROWS = WISH[1].ROWS;

  return ROWS;
});
