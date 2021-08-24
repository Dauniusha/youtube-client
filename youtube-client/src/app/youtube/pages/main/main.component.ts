import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { SortingService } from 'src/app/core/services/sorting.service';
import { selectorCards } from 'src/app/redux/selectors/cards.selectors';
import { IAppState } from 'src/app/redux/state.models';
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

  public cards: Observable<ICardData[]> = this.store.select(selectorCards.youtube); // = this.httpService.response;

  constructor(
    public loadingService: LoadingService,
    private sortingService: SortingService,
    private store: Store<IAppState>
  ) { }

  public ngOnInit(): void {
    this.sortingService.sorting.subscribe((sortData) => this.sortData = sortData);
    this.sortingService.filter.subscribe((query) => this.sortingByWordQuery = query);
  }
}
