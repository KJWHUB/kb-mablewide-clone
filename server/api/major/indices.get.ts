import data from "@/db.json";

export interface IdxData {
  isCd: string;
  isCdNm: string;
  clsPrcP2: string;
  bdyCmprCcd?: string;
  bdyCmprP2?: string;
  bdyCmprRP2: string;
  bdyCmpr?: string;
}

export interface ChartData {
  OUT2: Out2[];
}

export interface Out2 {
  dt: string;
  clsPrcP4: string;
  lwPrcP4: string;
  opnPrcP4: string;
  tm: string;
  vlmP4: string;
  hghPrcP4: string;
}

export interface MainIndex {
  IDX_DATA: IdxData;
  MARKET: string;
  CHART_DATA: ChartData;
}

export type MajorIndicesResponse = MainIndex[];

interface Data {
  MAIN_INDEX: MainIndex[];
}

export default defineEventHandler((): MajorIndicesResponse => {
  const res: MajorIndicesResponse = (data as Data).MAIN_INDEX;

  return res;
});
