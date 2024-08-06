import data from "@/db.json";

export interface Root {
  THEME: Theme[];
}

export interface Theme {
  thmCd: string;
  thmNm: string;
  bdyCmprUpDwnRP2: string;
  OUT2: Out2[];
}

export interface Out2 {
  isCd: string;
  isNm: string;
  upDwnRP2: string;
  bdyCmprCcd: string;
}

export type ThemeResponse = Root["THEME"];

export default defineEventHandler((): ThemeResponse => {
  const res = data.THEME;

  return res;
});
