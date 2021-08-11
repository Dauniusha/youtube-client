import { AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { CardData } from '../models/card-data-interface';
import { HttpService } from '../services/http.service';

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

  @Input() set headerQuery(query: string) {
    this.cards = this.httpService.getCards(query);
  }

  cards?: Observable<CardData[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }


}
