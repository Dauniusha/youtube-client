import { IYoutubeResponseItem } from './response-item';

export interface IYoutubeAnswer {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeResponseItem[];
}
