import data from "@/db.json";

export interface Root {
  NEWS: News;
}

export interface News {
  HEADLINE: Headline;
  ECONOMY: Economy;
  POPULAR: Popular;
}
export type NewsKeyType = keyof News;

export interface Headline {
  ROWS: { date: string; display_title: string; order: number; news: Rows[] }[];
}

export interface Economy {
  ROWS: Rows[];
}

export interface Popular {
  ROWS: Rows[];
}

export interface Rows {
  id: string;
  title: string;
  date: string;
  publisher: string;
  publisher_code: string;
  info_type: string;
  likes: number;
  views: number;
  tags: string[];
  keywords: string[];
  key_sentences: string[];
  country_code: string;
  publisher_image: string;
  image: string;
  stocks: Stock[];
  created_at: string;
  rank?: number;
  related_news: number;
}

export interface Stock {
  code: string;
  name: string;
  exchange_code: string;
  fluctuation_rate: number;
  market_type: string;
  country_code: string;
  image: string;
  image_path: string;
  description: string;
}

export type NewsResponse = Rows[];

const NEWS_TYPE = {
  HEADLINE: "HEADLINE",
  ECONOMY: "ECONOMY",
  POPULAR: "POPULAR",
} as const;

export default defineEventHandler((event): NewsResponse => {
  const query = getQuery(event);

  const newsType = query.newsType as NewsKeyType | undefined;

  // 뉴스 타입 누락 시 에러 처리
  if (!newsType) {
    throw createError({
      statusCode: 400,
      statusMessage: "뉴스 타입이 누락되었습니다.",
    });
  }

  // 뉴스 타입에 해당하는 데이터가 없을 시 에러 처리
  if (!NEWS_TYPE[newsType]) {
    throw createError({
      statusCode: 404,
      statusMessage: "잘못된 뉴스 타입입니다.",
    });
  }

  const newsData = data.NEWS;

  if (newsType === "HEADLINE") {
    return newsData.HEADLINE.ROWS[0].news;
  }

  return newsData[newsType].ROWS;
});
