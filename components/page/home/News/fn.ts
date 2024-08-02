import type { Rows } from "~/server/api/news/index.get";

export type NewsData = Record<
  number,
  {
    data?: Rows;
    title: string;
    companyName: string;
    date: string;
    imgUrl: string;
  }[]
>;

export const tempNews: NewsData = {
  0: [
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
  ],
  1: [
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
  ],
  2: [
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
    {
      title: "이 시각 뉴스",
      companyName: "이데일리",
      date: "2021.10.01",
      imgUrl: "https://via.placeholder.com/50",
    },
  ],
};

export function processNewsData(data: Rows[]): NewsData {
  const result: NewsData = {};
  data.reduce((acc, row, i) => {
    const key = Math.floor(i / 2);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({
      data: row,
      title: row.title,
      companyName: row.publisher,
      date: row.date,
      imgUrl: row.publisher_image,
    });
    return acc;
  }, result);
  return result;
}
