import data from "@/db.json";

export interface Root {
  COSU_PICK: CosuPick[];
}

export interface CosuPick {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
}

export type CosuPickResponse = Root["COSU_PICK"];

export default defineEventHandler((): CosuPickResponse => {
  const res = data.COSU_PICK;

  return res;
});
