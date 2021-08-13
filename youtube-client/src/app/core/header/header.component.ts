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
  public sortingBarIsOpened: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toogleSortingBarState() {
    this.sortingBarIsOpened = !this.sortingBarIsOpened;
  }
}
