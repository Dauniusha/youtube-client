import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { setting } from 'src/app/settings/setting';
import { CardData } from '../../main/models/card-data-interface';

import { map } from 'rxjs/operators';
import { YoutubeAnswer } from '../../main/models/youtube-response/youtube-answer-interface';
import { YoutubeResponseItem } from '../../main/models/youtube-response/response-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  isFirst = true;

  private response: BehaviorSubject<CardData[]> = new BehaviorSubject(<CardData[]> []);

  public response$: Observable<CardData[]> = this.response.asObservable();

  constructor(private httpClient: HttpClient) { }

  getCards(queryString: string) {
    this.httpClient.get(setting.urlConstants.requestUrl)
    .pipe(
      map((data: any) => this.filterGetResponse(data)),
    )
    .subscribe((data: CardData[]) => this.response.next(data));
  }

  private filterGetResponse(data: YoutubeAnswer): CardData[] {
    const cards: CardData[] = [];

    data.items.forEach((item: YoutubeResponseItem) => {
      let cardData: CardData = {
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
      }
      
      cards.push(cardData);
    });

    return cards;
  }
}
