import { YoutubeResponseItem } from "./response-item";

export interface YoutubeAnswer {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeResponseItem[];
}