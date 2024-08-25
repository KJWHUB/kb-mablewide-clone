import data from "@/db.json";

export interface Root {
  COCK_PICK: CockPick[];
}

export interface CockPick {
  output3: string;
  output4: string;
  output1: string;
  output2: string;
  output7: string;
  output8: string;
  output5: string;
  output6: string;
  output9: string;
  rltKeywordC: string;
  output15: string;
  output12: string;
  prcdExpsrImgPathNmC: string;
  output10: string;
  nxtKey: string;
  cntnts_smry_info1: string;
  cntnts_smry_info2: string;
  cntntsTitleC: string;
  prcdExpsrF: string;
  chrgng_un_fee_clsf: string;
  rcmnKeywordC: string;
  inqCnt: string;
  rgst_dy_tm: string;
  ctns_mng_tcd: string;
  ctns_url: string;
}

export type CockPickResponse = Root["COCK_PICK"];

export default defineEventHandler((): CockPickResponse => {
  const res = data.COCK_PICK;
  return res;
});
