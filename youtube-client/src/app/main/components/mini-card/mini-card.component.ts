import { Component, OnInit } from '@angular/core';
import { CardData } from '../../models/card-data-interface';
import { CardStatistics } from '../../models/card-statistics-interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  private id: string;

  private title: string;

  private statistics: CardStatistics;

  private color: string = '';

  constructor(data: CardData) {
    this.id = data.id;
    this.title = data.title;
    this.statistics = data.statistics;
  }

  ngOnInit(): void {
  }
}
