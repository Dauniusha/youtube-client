import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  query: string = '';

  sortData?: Sort;

  setQuery(query: any) {
    this.query = query;
  }

  setSort(sortData: Sort) {
    this.sortData = sortData;
  }
}
