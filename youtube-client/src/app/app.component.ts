import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  wordQuery: string = '';

  sortData?: Sort;

  headerQuery: string = '';

  setQuery(query: string) {
    this.wordQuery = query;
  }

  setSort(sortData: Sort) {
    this.sortData = sortData;
  }

  setHeaderQuery(query: string) {
    this.headerQuery = query;
  }
}
