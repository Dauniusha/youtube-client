import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { SortingService } from 'src/app/core/services/sorting.service';
import { ICardsState } from 'src/app/redux/state.models';
import { HttpService } from '../../../core/services/http.service';
import { ICardData } from '../../models/card-data-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public sortingByWordQuery: string = '';

  public sortData?: Sort;

  public cards: BehaviorSubject<ICardData[]> = this.httpService.response;

  constructor(
    public httpService: HttpService,
    public sortingService: SortingService,
    public loadingService: LoadingService,
    private store: Store<ICardsState>
  ) {
    store.select('youtubeCards').subscribe((data) => {
      console.log(data);
    });
    // this.cards = store.select('youtubeCards');
  }

  public ngOnInit(): void {
    this.sortingService.sorting.subscribe((sortData) => this.sortData = sortData);
    this.sortingService.filter.subscribe((query) => this.sortingByWordQuery = query);
  }
}
