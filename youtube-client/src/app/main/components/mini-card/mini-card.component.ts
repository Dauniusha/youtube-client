import { Component, OnInit } from '@angular/core';
import { CardStatistics } from '../../models/card-statistics-interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  private id: string = '';

  private title: string = '';

  private statistics: CardStatistics = {
    likeCount: 0,
    viewCount: 0,
    dislikeCount: 0,
    commentCount: 0,
  };

  private color: string = '';

  constructor(/* data: CardData */) {
    // this.id = data.id;
    // this.title = data.title;
    // this.statistics = data.statistics;
  }

  ngOnInit(): void {
  }
}
