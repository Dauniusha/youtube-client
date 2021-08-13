import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { SortingService } from 'src/app/shared/services/sorting.service';

@Component({
  selector: 'app-sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.scss'],
})
export class SortingBarComponent implements OnInit {
  @Output() onSortingByWord = new EventEmitter<string>();

  @Output() onChangeSort = new EventEmitter<Sort>();

  public queryString: string = '';

  constructor(public sortingService: SortingService) { }

  ngOnInit(): void {
  }

  wordSearching(event: Event) {
    this.queryString = (<HTMLInputElement> event.target).value;
    this.sortingService.setFilter(this.queryString);
  }
}
