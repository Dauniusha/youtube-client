import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { setting } from 'src/app/settings/setting';
import { CardData } from '../models/card-data-interface';

import { map } from 'rxjs/operators';
import { YoutubeAnswer } from '../models/youtube-response/youtube-answer-interface';
import { YoutubeResponseItem } from '../models/youtube-response/response-item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<any> {
    return this.httpClient.get(setting.urlConstants.requestUrl).pipe(
      map((data: any) => this.filterGetResponse(data)),
    );
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
