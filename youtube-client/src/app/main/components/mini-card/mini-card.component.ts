import { Component, Input, OnInit } from '@angular/core';
import { setting } from 'src/app/settings/setting';
import { CardData } from '../../models/card-data-interface';
import { CardStatistics } from '../../models/card-statistics-interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  videoLink: string = '';

  previewLink: string = '';

  date: Date = new Date();

  data?: CardData;

  @Input() set cardData(data: CardData) {
    this.data = data;

    this.date = data.date;

    this.videoLink = setting.urlConstants.videoLink + data.id;
    this.previewLink = setting.urlConstants.previewLink + data.id + setting.urlConstants.previewQuality.medium;
  };

  constructor() { }

  ngOnInit(): void {
  }

  get cardData() {
    if (this.data) {
      return this.data;
    }
    throw Error('Data does not exist!');
  }
}
