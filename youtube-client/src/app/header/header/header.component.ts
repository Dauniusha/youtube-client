import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onSortingByWord = new EventEmitter<string>();

  @Output() onChangeSort = new EventEmitter<Sort>();

  @Output() onHeaderChanged = new EventEmitter<string>();

  public sortingBarIsOpened: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toogleSortingBarState() {
    this.sortingBarIsOpened = !this.sortingBarIsOpened;
  }

  emitSortingQuery(query: string) {
    this.onSortingByWord.emit(query);
  }

  emitSortChanging(event: Sort) {
    this.onChangeSort.emit(event);
  }
}
