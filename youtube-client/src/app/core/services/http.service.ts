import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { setting } from 'src/app/settings/setting';
import { map } from 'rxjs/operators';

import { ICardData } from 'src/app/youtube/models/card-data-interface';
import { IYoutubeAnswer } from '../../youtube/models/youtube-response/youtube-answer-interface';
import { IYoutubeResponseItem } from '../../youtube/models/youtube-response/response-item';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  isFirst = true;

  private response: BehaviorSubject<ICardData[]> = new BehaviorSubject(<ICardData[]> []);

  public response$: Observable<ICardData[]> = this.response.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getCards(queryString: string) {
    console.log(queryString);
    this.httpClient.get(setting.urlConstants.requestUrl)
      .pipe(
        map((data: any) => this.filterGetResponse(data)),
      )
      .subscribe((data: ICardData[]) => this.response.next(data));
  }

  private filterGetResponse(data: IYoutubeAnswer): ICardData[] {
    const cards: ICardData[] = [];

    data.items.forEach((item: IYoutubeResponseItem) => {
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
