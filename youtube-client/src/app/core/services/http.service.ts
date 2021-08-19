import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { setting } from 'src/app/settings/setting';
import { map, switchMap } from 'rxjs/operators';

import { ICardData } from 'src/app/youtube/models/card-data-interface';
import { IYoutubeVideoResponse } from '../models/youtube-video-response/youtube-answer-interface';
import { IYoutubeVideoResponseItem } from '../models/youtube-video-response/response-item';
import { IYoutubeSearchResponse } from '../models/youtube-search-response/youtube-response';
import { IYoutubeSearchResponseItem } from '../models/youtube-search-response/youtube-response-item';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  isFirst = true;

  private response: BehaviorSubject<ICardData[]> = new BehaviorSubject(<ICardData[]> []);

  public response$: Observable<ICardData[]> = this.response.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getCards(queryString: string) {
    if (queryString.length < setting.numberConstants.minSearchLength) {
      return;
    }

    const searchLink = HttpService.generateSearchLink(queryString);

    this.httpClient.get(searchLink)
      .pipe(
        map((data: any) => HttpService.filterGetSearchResponse(data)),
        switchMap((data: string) => this.httpClient.get(HttpService.generateVideoLink(data))),
        map((data: any) => HttpService.filterGetVideoResponse(data))
      )
      .subscribe((data: ICardData[]) => this.response.next(data));
  }

  private static generateSearchLink(queryString: string): string {
    return setting.urlConstants.baseSearchUrl + HttpService.generateQueryString([
      'type=video',
      `part=${setting.stringConstants.searchPart}`,
      `maxResults=${setting.numberConstants.maxResults}`,
      `q=${queryString}`
    ]);
  }

  private static generateVideoLink(ids: string): string {
    return setting.urlConstants.baseVideoUrl + HttpService.generateQueryString([
      `part=${setting.stringConstants.videoPart}`,
      `id=${ids}`,
    ]);
  }

  private static generateQueryString(queryParams: string[] = []) {
    return queryParams.length ? `?${queryParams.join('&')}`
      : '';
  }

  private static filterGetSearchResponse(data: IYoutubeSearchResponse): string {
    const videosId: string[] = [];

    data.items.forEach((item: IYoutubeSearchResponseItem) => {
      videosId.push(item.id.videoId);
    });

    return videosId.join(',')
  }

  private static filterGetVideoResponse(data: IYoutubeVideoResponse): ICardData[] {
    const cards: ICardData[] = [];

    data.items.forEach((item: IYoutubeVideoResponseItem) => {
      const cardData: ICardData = {
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        statistics: {
          likeCount: item.statistics.likeCount,
          dislikeCount: item.statistics.dislikeCount,
          viewCount: item.statistics.viewCount,
          commentCount: item.statistics.commentCount,
        },
        date: new Date(item.snippet.publishedAt),
      };

      cards.push(cardData);
    });

    return cards;
  }
}
