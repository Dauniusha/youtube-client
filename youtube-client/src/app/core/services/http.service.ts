import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { setting } from 'src/app/settings/setting';
import { map, switchMap, tap } from 'rxjs/operators';

import { ICardData } from 'src/app/youtube/models/card-data-interface';
import { ICardsState } from 'src/app/redux/state.models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cardsActionsMap } from 'src/app/redux/actions/cards.actions';
import { IYoutubeVideoResponse } from '../models/youtube-video-response/youtube-answer-interface';
import { IYoutubeVideoResponseItem } from '../models/youtube-video-response/response-item';
import { IYoutubeSearchResponse } from '../models/youtube-search-response/youtube-response';
import { IYoutubeSearchResponseItem } from '../models/youtube-search-response/youtube-response-item';

import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private httpClient: HttpClient,
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<ICardsState>,
  ) { }

  public getCards(queryString: string) {
    if (queryString.length < setting.numberConstants.minSearchLength || this.router.url !== '/') {
      return;
    }

    this.loadingService.loading();

    const searchLink = HttpService.generateSearchLink(queryString);

    this.httpClient.get(searchLink)
      .pipe(
        map((data: any) => HttpService.filterGetSearchResponse(data)),
        switchMap((data: string) => this.httpClient.get(HttpService.generateVideoLink(data))),
        map((data: any) => HttpService.filterGetVideoResponse(data)),
        tap(() => this.loadingService.loaded()),
      )
      .subscribe((data: ICardData[]) => this.store.dispatch(cardsActionsMap.loadYoutube({ cards: data })));
  }

  public getCardById(id: string): Observable<ICardData[]> {
    const videoLink = HttpService.generateVideoLink(id);

    return this.httpClient.get(videoLink)
      .pipe(
        map((data: any) => HttpService.filterGetVideoResponse(data)),
      );
  }

  private static generateSearchLink(queryString: string): string {
    return setting.urlConstants.baseSearchUrl + HttpService.generateQueryString([
      'type=video',
      `part=${setting.stringConstants.searchPart}`,
      `maxResults=${setting.numberConstants.maxResults}`,
      `q=${queryString}`,
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
    const idString = data.items.map((item: IYoutubeSearchResponseItem) => item.id.videoId);

    return idString.join(',');
  }

  private static filterGetVideoResponse(data: IYoutubeVideoResponse): ICardData[] {
    return data.items.map((item: IYoutubeVideoResponseItem) => ({
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
    }));
  }
}
