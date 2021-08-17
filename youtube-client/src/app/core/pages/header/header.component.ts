import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public sortingBarIsOpened: boolean = false;

  constructor() { }

  public ngOnInit(): void { }

  public toogleSortingBarState() {
    this.sortingBarIsOpened = !this.sortingBarIsOpened;
  }
}
