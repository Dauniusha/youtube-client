import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.scss']
})
export class SortingBarComponent implements OnInit {

  @Output() onSortingByWord = new EventEmitter<string>();

  @Output() onChangeSort = new EventEmitter<Sort>();

  queryString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  wordSearching(event: Event) {
    this.queryString = (<HTMLInputElement> event.target).value;
  }

  emitSearchingQuery() {
    this.onSortingByWord.emit(this.queryString);
  }

  changeSort(event: Sort) {
    this.onChangeSort.emit(event);
  }

  submitChecking(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.queryString.length) {
      this.emitSearchingQuery();
    }
  }
}
