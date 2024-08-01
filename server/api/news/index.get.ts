import data from "@/db.json";

export interface Root {
  NEWS: News;
}

export interface News {
  HEADLINE: Headline;
  ECONOMY: Economy;
  POPULAR: Popular;
}

export interface Headline {
  ROWS: Rows[];
}

export interface Rows {
  date: string;
  display_title: string;
  order: number;
  news: News2[];
}

export interface News2 {
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
  rank: number;
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

export interface Economy {
  ROWS: Rows2[];
}

export interface Rows2 {
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
  stocks: unknown[];
  created_at: string;
  related_news: number;
}

export interface Popular {
  ROWS: Rows3[];
}

export interface Rows3 {
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
  stocks: Stock2[];
  created_at: string;
  related_news: number;
}

export interface Stock2 {
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

export default defineEventHandler(() => {
  const res = data.NEWS;

  return res;
});
