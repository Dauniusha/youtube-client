import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-btn',
  templateUrl: './setting-btn.component.html',
  styleUrls: ['./setting-btn.component.scss'],
  host: {
    'class': 'header-btn',
    '(click)': 'changeOpenedState()',
    '[class.active-btn]': 'isOpened',
  },
})
export class SettingBtnComponent implements OnInit {
  isOpened: boolean = false;

  @Output() onOpened = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  changeOpenedState() {
    this.isOpened = !this.isOpened;
    this.onOpened.emit(this.isOpened);
  }
}
