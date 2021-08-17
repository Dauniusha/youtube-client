import { Component, Input, OnInit } from '@angular/core';
import { setting } from 'src/app/settings/setting';
import { ICardData } from '../../models/card-data-interface';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
  public videoLink: string = '';

  public previewLink: string = '';

  public date: Date = new Date();

  public data?: ICardData;

  @Input() set cardData(data: ICardData) {
    this.data = data;

    this.date = data.date;

    this.videoLink = setting.urlConstants.videoLink + data.id;
    this.previewLink = setting.urlConstants.previewLink + data.id + setting.urlConstants.previewQuality.medium;
  }

  constructor() { }

  public ngOnInit(): void {
  }

  public get cardData() {
    if (this.data) {
      return this.data;
    }
    throw Error('Data does not exist!');
  }
}
