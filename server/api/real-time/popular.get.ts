import data from "@/db.json";

export default defineEventHandler(() => {
  const res = data.REALPOPULAR;

  return res;
});
