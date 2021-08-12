import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ICardData } from '../models/card-data-interface';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    HttpService,
  ],
})
export class MainComponent implements OnInit {
  @Input() sortingByWordQuery: string = '';

  @Input() sortData?: Sort;

  public cards: ICardData[] = [];

  constructor(public httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getCards('');
    this.httpService.response$.subscribe((cards) => this.cards = cards);
  }
}
