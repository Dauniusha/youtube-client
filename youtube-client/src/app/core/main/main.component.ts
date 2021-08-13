import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ICardData } from '../../main/models/card-data-interface';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import { SortingService } from 'src/app/shared/services/sorting.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  sortingByWordQuery: string = '';

  sortData?: Sort;

  public cards: Observable<ICardData[]> = this.httpService.response$;

  constructor(
      public httpService: HttpService,
      public sortingService: SortingService
    ) { }

  ngOnInit(): void {
    this.sortingService.sorting$.subscribe((sortData) => this.sortData = sortData);
    this.sortingService.filter$.subscribe((query) => this.sortingByWordQuery = query);
  }
}
