import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  private sorting: BehaviorSubject<Sort> = new BehaviorSubject(<Sort> {});

  public sorting$: Observable<Sort> = this.sorting.asObservable();

  private filter: BehaviorSubject<string> = new BehaviorSubject('');

  public filter$: Observable<string> = this.filter.asObservable();

  constructor() { }

  setSort(sortData: Sort) {
    this.sorting.next(sortData);
  }

  setFilter(query: string) {
    this.filter.next(query);
  }
}
