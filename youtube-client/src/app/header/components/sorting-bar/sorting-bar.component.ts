import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.scss'],
})
export class SortingBarComponent implements OnInit {
  @Output() onSortingByWord = new EventEmitter<string>();

  @Output() onChangeSort = new EventEmitter<Sort>();

  public queryString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  wordSearching(event: Event) {
    this.queryString = (<HTMLInputElement> event.target).value;
    this.onSortingByWord.emit(this.queryString);
  }

  emitSearchingQuery() {
    this.onSortingByWord.emit(this.queryString);
  }

  changeSort(event: Sort) {
    this.onChangeSort.emit(event);
  }
}
